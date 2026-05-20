---
name: graphql-resolver-patterns
description: Defines GraphQL resolver structure, DataLoader usage, and service delegation patterns for portfolio-backend. Use when creating or modifying GraphQL resolvers, type definitions, or field resolvers.
---

# GraphQL Resolver Patterns

This skill defines how to structure GraphQL resolvers in this project.

## When to Use This Skill

- Creating new GraphQL queries or mutations
- Adding field resolvers to existing types
- Integrating DataLoaders for relationship resolution
- Connecting resolvers to service layer

## Directory Structure

```
src/graphql/{domain}/
├── index.ts           # Re-exports typeDefs and resolvers
├── typeDefs.ts        # GraphQL schema definitions
├── resolvers.ts       # Resolver implementations
└── {subdomain}/       # Optional nested structure for complex domains
    ├── typeDefs.ts
    └── resolvers.ts
```

## Resolver Structure Requirements

### 1. Service Layer Delegation

Resolvers MUST delegate business logic to services. Never put business logic in resolvers.

```typescript
// ✅ CORRECT: Delegate to service
const createProject = async (
  _: any,
  args: GQLTypes.MutationCreateProjectArgs
) => {
  return ProjectService.createProject(args.data);
};

// ❌ WRONG: Business logic in resolver
const createProject = async (
  _: any,
  args: GQLTypes.MutationCreateProjectArgs
) => {
  const project = new ProjectModel(args.data);
  await project.save(); // Don't do this
  return project;
};
```

### 2. Typed Arguments

Always use generated GraphQL types for arguments:

```typescript
import * as GQLTypes from "src/common/interfaces/graphql";

const getProject = async (_: any, args: GQLTypes.QueryGetProjectArgs) => {
  return ProjectService.getProjectById(args.id);
};
```

### 3. DataLoader Usage for Relationships

Use DataLoaders from context for N+1 prevention:

```typescript
import { GraphqlContext } from "src/common/interfaces";

// Field resolver with DataLoader
const profile = async (
  parent: ProjectDocument,
  _: any,
  { profileLoader }: GraphqlContext
) => {
  return profileLoader.load(parent.profileId.toString());
};

// Handle optional relationships
const project = async (
  parent: ProjectDocument,
  _: any,
  { projectLoader }: GraphqlContext
) => {
  if (!parent.projectId) return null; // ALWAYS check for null
  return projectLoader.load(parent.projectId.toString());
};
```

### 4. Standard Resolver Export Structure

```typescript
export const entityResolvers = {
  Query: {
    getEntity,
    getEntities,
  },
  Mutation: {
    createEntity,
    updateEntity,
    deleteEntity,
  },
  Entity: {
    ...getId(), // Convert _id to id
    profile,
    project,
    createdByUser,
    // Other field resolvers
  },
};
```

### 5. ID Conversion

Always use the `getId()` helper to expose `id` instead of `_id`:

```typescript
import { getId } from "src/graphql/general";

Entity: {
  ...getId(),
  // other resolvers
}
```

### 6. Audit Trail Field Resolver

For entities with audit trails:

```typescript
const auditTrails = async (
  parent: EntityDocument,
  _: any,
  { auditTrailsLoaderByEntityIdAndType }: GraphqlContext
) => {
  return auditTrailsLoaderByEntityIdAndType.load({
    entityId: parent._id.toString(),
    entityType: AuditEntityType.ENTITY_NAME,
  });
};
```

### 7. JSDoc Comments

Document resolvers with JSDoc:

```typescript
/**
 * Get an project by id
 * @param _ - The parent object (unused)
 * @param args - The query arguments
 * @returns The project or null
 */
const getProject = async (_: any, args: GQLTypes.QueryGetProjectArgs) => {
  return ProjectService.getProjectById(args.id);
};
```

## TypeDefs Structure

### 1. Input Types for Mutations

```graphql
input CreateProjectInput {
  profileId: ID!
  projectId: ID
  title: String!
  title: String!
}

input UpdateProjectInput {
  id: ID!
  title: String
  title: String
}
```

### 2. Filter Types for Queries

```graphql
input ProjectFilters {
  profileId: ID!
  projectId: ID
  type: ProjectStatus
  active: Boolean
}
```

### 3. Pagination Pattern

```graphql
type ProjectConnection {
  nodes: [Project!]!
  totalCount: Int!
  hasNextPage: Boolean!
}
```

## Anti-Patterns to Avoid

| ❌ Don't                                 | ✅ Do                                    |
| ---------------------------------------- | ---------------------------------------- |
| Query database in resolvers              | Delegate to service layer                |
| Use raw string IDs in loader calls       | Always `.toString()` ObjectIds           |
| Forget null checks on optional refs      | Check `if (!parent.fieldId) return null` |
| Create new loader instances in resolvers | Use loaders from context                 |
| Skip type imports for args               | Use `GQLTypes.QueryXxxArgs`              |

## Example: Complete Resolver File

```typescript
import { GraphqlContext } from "src/common/interfaces";
import { ProjectDocument } from "src/common/interfaces/projects";
import { AuditEntityType } from "src/common/interfaces/auditTrail";
import * as GQLTypes from "src/common/interfaces/graphql";
import { getId } from "src/graphql/general";
import * as ProjectService from "src/services/projects";

const getProject = async (_: any, args: GQLTypes.QueryGetProjectArgs) => {
  return ProjectService.getProjectById(args.id);
};

const getAdminProjects = async (_: any, args: GQLTypes.QueryGetProjectsArgs) => {
  return ProjectService.getAdminProjects(args.filters);
};

const createProject = async (
  _: any,
  args: GQLTypes.MutationCreateProjectArgs
) => {
  return ProjectService.createProject(args.data);
};

const profile = async (
  parent: ProjectDocument,
  _: any,
  { profileLoader }: GraphqlContext
) => {
  return profileLoader.load(parent.profileId.toString());
};

const project = async (
  parent: ProjectDocument,
  _: any,
  { projectLoader }: GraphqlContext
) => {
  if (!parent.projectId) return null;
  return projectLoader.load(parent.projectId.toString());
};

const auditTrails = async (
  parent: ProjectDocument,
  _: any,
  { auditTrailsLoaderByEntityIdAndType }: GraphqlContext
) => {
  return auditTrailsLoaderByEntityIdAndType.load({
    entityId: parent._id.toString(),
    entityType: AuditEntityType.ACCOUNT,
  });
};

export const projectResolvers = {
  Query: {
    getProject,
    getAdminProjects,
  },
  Mutation: {
    createProject,
  },
  Project: {
    ...getId(),
    profile,
    project,
    auditTrails,
  },
};
```
