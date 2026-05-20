---
name: migration-script-patterns
description: Defines patterns for writing safe database migration scripts in portfolio-backend. Use when creating data migrations, schema changes, or permission updates.
---

# Migration Script Patterns

This skill defines how to write safe, idempotent migration scripts.

## When to Use This Skill

- Migrating data between schema versions
- Cleaning up legacy data
- Bulk updating permissions or roles
- Transforming data structures
- Backfilling new required fields

## Migration Location

Migrations live in `src/services/scripts/migrations/`:

```
migrations/
├── index.ts                          # Exports all migrations
├── migrations.ts                     # Migration registry and runner
├── migrateRolePermissions.ts         # Example: permission migration
├── cleanupOrphanedRoleIds.ts         # Example: cleanup migration
└── migrateProfileIdToModels.ts  # Example: backfill migration
```

## Migration Structure

### Basic Pattern

```typescript
export const migrateSomething = async () => {
  console.log("Starting migration: migrateSomething...");

  let processedCount = 0;
  let errorCount = 0;

  // Fetch records in batches
  const cursor = SomeModel.find({}).cursor();

  for await (const doc of cursor) {
    try {
      // Transform logic
      doc.newField = transformOldField(doc.oldField);
      await doc.save();
      processedCount++;
    } catch (error) {
      console.error(`Error processing ${doc._id}: ${error}`);
      errorCount++;
    }
  }

  console.log(
    `Migration complete. Processed: ${processedCount}, Errors: ${errorCount}`
  );
};
```

## Core Principles

### 1. Idempotency

Migrations MUST be safe to run multiple times:

```typescript
// ✅ CORRECT: Check before modifying
for (const role of roles) {
  // Skip if already migrated
  if (role.permissions.includes("projects.*")) {
    continue;
  }

  role.permissions.push("projects.*");
  await role.save();
}

// ❌ WRONG: Blindly adds duplicates
for (const role of roles) {
  role.permissions.push("projects.*"); // Duplicates on re-run
  await role.save();
}
```

### 2. Batch Processing

Never load all documents into memory:

```typescript
// ✅ CORRECT: Use cursor for streaming
const cursor = Model.find({}).cursor();
for await (const doc of cursor) {
  await processDoc(doc);
}

// ✅ ALSO CORRECT: Batch with skip/limit
const BATCH_SIZE = 100;
let skip = 0;
let batch;

do {
  batch = await Model.find({}).skip(skip).limit(BATCH_SIZE);
  for (const doc of batch) {
    await processDoc(doc);
  }
  skip += BATCH_SIZE;
} while (batch.length === BATCH_SIZE);

// ❌ WRONG: Loads everything
const allDocs = await Model.find({}); // OOM on large collections
```

### 3. Error Resilience

Continue on individual failures, log for retry:

```typescript
const failedIds: string[] = [];

for await (const doc of cursor) {
  try {
    await migrateDoc(doc);
  } catch (error) {
    console.error(`Failed to migrate ${doc._id}: ${error.message}`);
    failedIds.push(doc._id.toString());
  }
}

if (failedIds.length > 0) {
  console.log(`Failed IDs for retry: ${JSON.stringify(failedIds)}`);
}
```

### 4. Validation Before Write

Validate transformed data before saving:

```typescript
// Validate against permission tree
const validPermissions = Array.from(newPermissions).filter(p => {
  const isValid = permissionMap.has(p);
  if (!isValid) {
    console.warn(`Removing invalid permission: ${p}`);
  }
  return isValid;
});

role.permissions = validPermissions;
await role.save();
```

### 5. Dry Run Support

Add optional dry-run mode:

```typescript
export const migrateX = async (dryRun: boolean = false) => {
  for await (const doc of cursor) {
    const newValue = computeNewValue(doc);

    if (dryRun) {
      console.log(`Would update ${doc._id}: ${JSON.stringify(newValue)}`);
    } else {
      doc.field = newValue;
      await doc.save();
    }
  }
};
```

## Specific Migration Patterns

### Permission Migration

```typescript
import { permissionMapping } from "src/services/roles/permissions/permissionMapping";
import { permissionMap } from "src/services/roles/permissions/permissionTree";

export const migrateRolePermissions = async () => {
  const roles = await RoleModel.find({});

  for (const role of roles) {
    const newPermissions = new Set<string>();

    for (const oldPerm of role.permissions) {
      // Check if legacy enum
      if (Object.values(Permissions).includes(oldPerm as Permissions)) {
        const mapped = permissionMapping[oldPerm as Permissions];
        if (mapped) {
          mapped.forEach(p => newPermissions.add(p));
        } else {
          console.warn(`Skipping unmapped: ${oldPerm}`);
        }
      } else {
        newPermissions.add(oldPerm);
      }
    }

    // Validate against tree
    const valid = Array.from(newPermissions).filter(p => permissionMap.has(p));

    role.permissions = flattenPermissions(valid);
    await role.save();
  }
};
```

### Orphan Cleanup

```typescript
export const cleanupOrphanedRoleIds = async () => {
  // Get valid role IDs
  const validRoleIds = new Set(
    (await RoleModel.find({}, "_id").lean()).map(r => r._id.toString())
  );

  // Clean from users
  const users = await UserModel.find({
    platformRoles: { $exists: true, $ne: [] },
  });

  for (const user of users) {
    const validRoles = user.platformRoles.filter(r =>
      validRoleIds.has(r.toString())
    );

    if (validRoles.length !== user.platformRoles.length) {
      user.platformRoles = validRoles;
      await user.save();
    }
  }
};
```

### Backfill Required Field

```typescript
export const migrateProfileId = async () => {
  // Find records missing profileId
  const cursor = Model.find({ profileId: { $exists: false } }).cursor();

  for await (const doc of cursor) {
    // Derive from project
    const project = await ProjectModel.findById(doc.projectId);
    if (project?.profileId) {
      doc.profileId = project.profileId;
      await doc.save();
    } else {
      console.warn(`Cannot determine org for ${doc._id}`);
    }
  }
};
```

## Registration and Execution

### Register in migrations.ts

```typescript
export const migrations = {
  migrateRolePermissions,
  cleanupOrphanedRoleIds,
  migrateProfileIdToModels,
  // Add new migrations here
};

export const runMigration = async (title: string) => {
  const migration = migrations[title];
  if (!migration) {
    throw new Error(`Unknown migration: ${title}`);
  }

  console.log(`Running migration: ${title}`);
  await migration();
  console.log(`Completed migration: ${title}`);
};
```

## Anti-Patterns to Avoid

| ❌ Don't                                 | ✅ Do                             |
| ---------------------------------------- | --------------------------------- |
| Load all documents at once               | Use cursor or batching            |
| Stop on first error                      | Log and continue, report failures |
| Skip validation                          | Validate before writing           |
| Run in projection without testing        | Test on staging first             |
| Forget idempotency                       | Make re-runnable                  |
| Modify schema and data in same migration | Separate schema changes           |
