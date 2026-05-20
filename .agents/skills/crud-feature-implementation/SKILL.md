---
name: crud-feature-implementation
description: A master workflow for building end-to-end CRUD features. Follow this checklist to implement TypeDefs, Models, Services, Permissions, Resolvers, and Shield rules consistently.
---

# End-to-End CRUD Feature Implementation

This skill provides a step-by-step workflow for adding new features (Entities, Queries, Mutations) to the backend. It aggregates best practices from all other specialized skills.

## Workflow Checklist

### Phase 1: Schema & Types

#### 1. Define GraphQL Schema

Create or update `src/graphql/{module}/typeDefs.ts`.

- [ ] Define **Entity Type** (Output).
- [ ] Define **Inputs** (`CreateXInput`, `UpdateXInput`, `GetXFilters`).
- [ ] Define **Queries/Mutations** following naming conventions.
- [ ] **Reference**: [graphql-typedefs-conventions](../graphql-typedefs-conventions/SKILL.md)

#### 2. Generate TypeScript Types

Run the titlegen to create TypeScript interfaces for your new schema.

- [ ] Command: `yarn titlegen`
- [ ] Verify types exist in `src/common/interfaces/graphql.ts` (e.g. `MutationCreateXArgs`).

### Phase 2: Data & Core Logic

#### 3. Create Mongoose Model

Create `src/models/{module}/{Entity}.ts`.

- [ ] Define Schema with `profileId` (and `projectId` if needed).
- [ ] Add `deletedAt` for soft deletes.
- [ ] Add **Audit Trail** plugin.
- [ ] Export `Model` and `Document` interface.
- [ ] **Reference**: [mongoose-model-conventions](../mongoose-model-conventions/SKILL.md)

#### 4. Register Model (CRITICAL)

Add the new model to the central map for Shield integration.

- [ ] Open `src/graphql/shield/permission/modelMap.ts`.
- [ ] Import your Model.
- [ ] Add it to the `modelMap` export.
- [ ] _Failure to do this will cause Shield errors._

#### 5. Implement Service Layer

Create functions in `src/services/{module}/`.

- [ ] **Create**: Validate refs, check business rules, use transactions if needed.
- [ ] **Get**: Use `lean()`, handle filters, throw 404 if not found.
- [ ] **Update**: Fetch first, validate state changes, update.
- [ ] **Reference**: [service-layer-patterns](../service-layer-patterns/SKILL.md)

### Phase 3: Access Control & API

#### 6. Define Permissions

Add entries to `src/services/roles/permissions/permissionTree/{module}.ts`.

- [ ] Add `entity.read`, `entity.create`, `entity.update`, `entity.delete`.
- [ ] Use `flattenPermissions` in index if adding a new file.
- [ ] **Reference**: [permission-management](../permission-management/SKILL.md)

#### 7. Implement Resolvers

Create or update `src/graphql/{module}/resolvers.ts`.

- [ ] **Resolvers must be thin**: Call Service functions immediately.
- [ ] Use generated `GQLTypes.MutationXArgs` for type safety.
- [ ] Use `getId()` helper for ID fields.
- [ ] **Reference**: [graphql-resolver-patterns](../graphql-resolver-patterns/SKILL.md)

#### 8. Configure Shield (Security)

Update `src/graphql/shield/{module}.ts`.

- [ ] Use `requirePermission` for every field.
- [ ] **CRITICAL**: Use Generic Type Safety for mutations with arguments.

```typescript
requirePermission<MutationUpdateEntityArgs>("entity.update", {
  entityName: "Entity",
  idPath: "data.id",
});
```

- [ ] **Reference**: [shield-conventions](../shield-conventions/SKILL.md)

#### 9. Wiring It All Up

Ensure everything is exported and merged.

- [ ] `src/graphql/index.ts`: Import and merge your new TypeDefs/Resolvers.
- [ ] `src/graphql/shield/index.ts`: Import and merge your Shield rules.

## Example: The "Happy Path"

If you are building a new feature "Project":

1.  **TypeDefs**: `type Project`, `input CreateProjectInput`, `createProject(data: CreateProjectInput!): Project!`.
2.  **Types**: `yarn titlegen`.
3.  **Model**: `ProjectModel` with `auditTrailPlugin`.
4.  **ModelMap**: Add `Project: ProjectModel` to `modelMap.ts`.
5.  **Service**: `createProject(input)` validates input and calls `ProjectModel.create`.
6.  **Permissions**: Add `projects.create` to `permissionTree/projects.ts`.
7.  **Resolvers**: `createProject: (_, args) => Service.createProject(args.data)`.
8.  **Shield**: `createProject: requirePermission("projects.create")`.
9.  **Build**: `yarn build` to verify type safety.

## Anti-Patterns to Avoid

| ❌ Don't                                    | ✅ Do                                                    |
| ------------------------------------------- | -------------------------------------------------------- |
| Skipping `modelMap` update                  | Always register new models                               |
| Writing business logic in resolvers         | Always delegate to Service layer                         |
| Using string IDs in Shield without Generics | Use `requirePermission<Args>` to ensure `idPath` matches |
| Forgetting Audit Trail                      | Always add plugin to important entities                  |
