---
name: dataloader-patterns
description: Defines DataLoader creation and usage patterns for N+1 query prevention in portfolio-backend. Use when creating new loaders, adding DataLoader support to types, or optimizing GraphQL queries.
---

# DataLoader Patterns

This skill defines how to create and use DataLoaders for efficient data fetching.

## When to Use This Skill

- Creating a new entity type that needs relationship resolution
- Adding DataLoader support to existing resolvers
- Optimizing N+1 query patterns
- Creating composite key loaders

## DataLoader Location

```
src/dataloaders/
├── index.ts                    # Aggregates all loaders into context
├── projects/                 # Domain-specific loaders
│   ├── index.ts
│   ├── projectLoader.ts
│   └── analyticsEntryLoader.ts
├── hr/
│   ├── employeeLoader.ts
│   └── projectAssignmentLoader.ts
└── {domain}/
    └── {entity}Loader.ts
```

## Basic Loader Pattern

### Simple ID-Based Loader

```typescript
import DataLoader from "dataloader";
import { ProjectModel } from "src/models/projects";

export const createProjectLoader = () =>
  new DataLoader<string, ProjectDocument | null>(async ids => {
    const projects = await ProjectModel.find({
      _id: { $in: ids },
      deletedAt: null,
    }).lean();

    // Map results back to input order
    const projectMap = new Map(projects.map(a => [a._id.toString(), a]));

    return ids.map(id => projectMap.get(id) || null);
  });
```

### Key Requirements

1. **Return array matches input array length and order**
2. **Handle missing records with null**
3. **Use `.lean()` for read-only data**
4. **Filter `deletedAt: null` unless explicitly including deleted**

## Composite Key Loader

For lookups by multiple fields:

```typescript
interface ProjectAssignmentKey {
  employeeId: string;
  projectId: string;
}

export const createProjectAssignmentLoader = () =>
  new DataLoader<ProjectAssignmentKey, ProjectAssignmentDocument | null>(
    async keys => {
      const assignments = await ProjectAssignmentModel.find({
        $or: keys.map(k => ({
          employeeId: k.employeeId,
          projectId: k.projectId,
          isActive: true,
        })),
      }).lean();

      // Build lookup map
      const assignmentMap = new Map(
        assignments.map(a => [`${a.employeeId}-${a.projectId}`, a])
      );

      return keys.map(
        k => assignmentMap.get(`${k.employeeId}-${k.projectId}`) || null
      );
    },
    {
      // Custom cache key for objects
      cacheKeyFn: key => `${key.employeeId}-${key.projectId}`,
    }
  );
```

## One-to-Many Loader

For loading arrays of related records:

```typescript
export const createProjectAssignmentsByEmployeeIdLoader = () =>
  new DataLoader<string, ProjectAssignmentDocument[]>(async employeeIds => {
    const assignments = await ProjectAssignmentModel.find({
      employeeId: { $in: employeeIds },
      isActive: true,
    }).lean();

    // Group by employeeId
    const assignmentsByEmployee = new Map<
      string,
      ProjectAssignmentDocument[]
    >();

    for (const assignment of assignments) {
      const key = assignment.employeeId.toString();
      if (!assignmentsByEmployee.has(key)) {
        assignmentsByEmployee.set(key, []);
      }
      assignmentsByEmployee.get(key)!.push(assignment);
    }

    return employeeIds.map(id => assignmentsByEmployee.get(id) || []);
  });
```

## Context Integration

### Define in Context Type

```typescript
// src/common/interfaces/graphql/context.ts
export interface GraphqlContext {
  projectLoader: DataLoader<string, ProjectDocument | null>;
  analyticsEntryLoader: DataLoader<string, AnalyticsEntryDocument | null>;
  projectLoader: DataLoader<string, ProjectDocument | null>;
  profileLoader: DataLoader<string, ProfileDocument | null>;
  userLoader: DataLoader<string, UserDocument | null>;
  // Add new loaders here
}
```

### Create in Context Factory

```typescript
// src/dataloaders/index.ts
export const createLoaders = (): GraphqlContext => ({
  projectLoader: createProjectLoader(),
  analyticsEntryLoader: createAnalyticsEntryLoader(),
  projectLoader: createProjectLoader(),
  profileLoader: createProfileLoader(),
  userLoader: createUserLoader(),
  // Add new loaders here
});
```

### Use in Apollo Server

```typescript
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    ...createLoaders(),
    user: req.user,
  }),
});
```

## Resolver Usage

### Field Resolver Pattern

```typescript
const profile = async (
  parent: ProjectDocument,
  _: any,
  { profileLoader }: GraphqlContext
) => {
  // Always convert ObjectId to string
  return profileLoader.load(parent.profileId.toString());
};

const project = async (
  parent: ProjectDocument,
  _: any,
  { projectLoader }: GraphqlContext
) => {
  // Handle optional references
  if (!parent.projectId) return null;
  return projectLoader.load(parent.projectId.toString());
};
```

### Array Field Resolver

```typescript
const projectAssignments = async (
  parent: EmployeeDocument,
  _: any,
  { projectAssignmentsByEmployeeIdLoader }: GraphqlContext
) => {
  return projectAssignmentsByEmployeeIdLoader.load(parent._id.toString());
};
```

## Naming Conventions

| Loader Type             | Naming Pattern                    | Example                                 |
| ----------------------- | --------------------------------- | --------------------------------------- |
| Single by ID            | `{entity}Loader`                  | `projectLoader`                         |
| Multiple by foreign key | `{entity}sBy{Field}Loader`        | `projectAssignmentsByEmployeeIdLoader` |
| By composite key        | `{entity}By{Key1}And{Key2}Loader` | `assignmentByEmployeeAndProjectLoader` |

## Anti-Patterns to Avoid

| ❌ Don't                            | ✅ Do                                  |
| ----------------------------------- | -------------------------------------- |
| Create loaders inside resolvers     | Create once per request in context     |
| Pass ObjectId directly to loader    | Always `.toString()`                   |
| Return wrong array length           | Map results to preserve input order    |
| Forget null checks on optional refs | Check `if (!parent.field) return null` |
| Skip `.lean()` on loaders           | Use `.lean()` for performance          |
| Query inside loops in resolvers     | Use loader.load() or loader.loadMany() |

## Testing Loaders

```typescript
describe("projectLoader", () => {
  it("should batch multiple loads", async () => {
    const loader = createProjectLoader();

    const [project1, project2] = await Promise.all([
      loader.load(id1),
      loader.load(id2),
    ]);

    // Only one database query should have been made
    expect(project1).toBeDefined();
    expect(project2).toBeDefined();
  });

  it("should return null for missing records", async () => {
    const loader = createProjectLoader();
    const result = await loader.load("nonexistent-id");
    expect(result).toBeNull();
  });
});
```
