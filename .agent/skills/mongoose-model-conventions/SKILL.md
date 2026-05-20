---
name: mongoose-model-conventions
description: Enforces Mongoose model structure conventions for portfolio-backend. Use when creating or modifying MongoDB models, adding indexes, or integrating audit trail plugins.
---

# Mongoose Model Conventions

This skill defines the required patterns for all Mongoose models in this project.

## When to Use This Skill

- Creating a new Mongoose model
- Adding fields to an existing model
- Adding or modifying indexes
- Integrating the audit trail plugin
- Adding validation hooks

## Model Structure Requirements

### 1. File Location & Naming

- Models live in `src/models/{domain}/{ModelName}.ts`
- Use PascalCase for model titles: `Project.ts`, `AnalyticsEntry.ts`
- Export as `{ModelName}Model`: `export const ProjectModel = model<ProjectDocument>(...)`

### 2. Required Fields for Multi-Tenancy

Every model that stores tenant data MUST include:

```typescript
profileId: {
  type: Schema.Types.ObjectId,
  ref: Collections.Profiles,
  required: true,  // ALWAYS required unless model is org-agnostic
},
projectId: {
  type: Schema.Types.ObjectId,
  ref: Collections.Facilities,
  // Required depends on domain - projects models often require this
},
```

**Decision Rule:**

- If data is profile-wide (roles, employees): `projectId` is optional
- If data is project-specific (contactLeads, inventory): `projectId` is required

### 3. Soft Delete Pattern

Use `deletedAt` instead of hard deletes:

```typescript
deletedAt: {
  type: Date,
  default: null,
},
```

All queries must filter: `{ deletedAt: null }` unless explicitly including deleted records.

### 4. Timestamps

Always enable timestamps:

```typescript
const schema = new Schema<DocumentType>(
  {
    /* fields */
  },
  { timestamps: true }
);
```

### 5. Collection Reference via Enum

Never hardtitle collection titles. Use the `Collections` enum:

```typescript
import { Collections } from "src/common/enums";

ref: Collections.Projects; // NOT "projects"
```

### 6. Required Indexes

Always add indexes for:

```typescript
// Multi-tenant scoping (CRITICAL for query performance)
schema.index({ profileId: 1, projectId: 1 });

// Any field used in WHERE clauses
schema.index({ status: 1 }, { sparse: true });

// Unique constraints with org/project scope
schema.index({ profileId: 1, projectId: 1, title: 1 }, { unique: true });
```

### 7. Audit Trail Integration

For entities requiring audit tracking:

```typescript
import { AuditEntityType } from "src/common/interfaces/auditTrail";
import { auditTrailPlugin } from "src/models/auditTrail/plugin";

// After schema definition
schema.plugin(auditTrailPlugin, { entityType: AuditEntityType.YOUR_ENTITY });
```

**Prerequisite:** Add entity to `AuditEntityType` enum and configure in `auditTrailConfig.ts`.

### 8. Validation Hooks

For complex validation, use pre-save hooks:

```typescript
schema.pre("save", async function (next) {
  // Validation logic
  if (invalidCondition) {
    return next(new Error("Descriptive error message"));
  }
  next();
});

// Also validate on updates
schema.pre("findOneAndUpdate", async function (next) {
  const update = this.getUpdate();
  // Validation logic for updates
  next();
});
```

### 9. Interface Definition

Define document interface in `src/common/interfaces/{domain}/index.ts`:

```typescript
export interface ProjectDocument extends Document {
  profileId: Types.ObjectId;
  projectId?: Types.ObjectId;
  title: string;
  // ... all fields
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
```

## Anti-Patterns to Avoid

| ❌ Don't                                              | ✅ Do                                  |
| ----------------------------------------------------- | -------------------------------------- |
| Hardtitle collection titles                             | Use `Collections` enum                 |
| Skip `profileId` on tenant data                  | Always include for scoping             |
| Use `Boolean` with `default: undefined`               | Use `default: false` explicitly        |
| Add indexes without `sparse: true` on optional fields | Use sparse for nullable indexed fields |
| Mix `required: true` with `default: null`             | Pick one pattern consistently          |

## Example: Complete Model

```typescript
import { Schema, model } from "mongoose";
import { Collections } from "src/common/enums";
import { MyEntityDocument } from "src/common/interfaces/myEntity";
import { AuditEntityType } from "src/common/interfaces/auditTrail";
import { auditTrailPlugin } from "src/models/auditTrail/plugin";

const myEntitySchema = new Schema<MyEntityDocument>(
  {
    profileId: {
      type: Schema.Types.ObjectId,
      ref: Collections.Profiles,
      required: true,
    },
    projectId: {
      type: Schema.Types.ObjectId,
      ref: Collections.Facilities,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

// Indexes
myEntitySchema.index({ profileId: 1, projectId: 1 });
myEntitySchema.index(
  { profileId: 1, projectId: 1, title: 1 },
  { unique: true }
);
myEntitySchema.index({ status: 1 }, { sparse: true });

// Audit trail
myEntitySchema.plugin(auditTrailPlugin, {
  entityType: AuditEntityType.MY_ENTITY,
});

export const MyEntityModel = model<MyEntityDocument>(
  Collections.MyEntities,
  myEntitySchema
);
```
