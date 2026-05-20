---
name: service-layer-patterns
description: Defines service layer structure, validation, and error handling patterns for portfolio-backend. Use when creating new services or understanding the separation between resolvers and business logic.
---

# Service Layer Patterns

This skill defines how to structure service layer title.

## When to Use This Skill

- Creating new service functions
- Adding business logic
- Implementing validation
- Handling errors
- Structuring service directories

## Directory Structure

```
src/services/{domain}/
├── index.ts              # Re-exports public functions
├── create{Entity}.ts     # Create operations
├── update{Entity}.ts     # Update operations
├── delete{Entity}.ts     # Delete operations
├── get{Entity}ById.ts    # Single fetch
├── get{Entities}.ts      # List/filter fetch
├── helpers/              # Internal utilities
└── {subdomain}/          # Nested domains
```

## Service Function Pattern

### Standard CRUD Functions

```typescript
// get{Entity}ById.ts
import createHttpError from "http-errors";
import { isValidObjectId, QueryOptions, Types } from "mongoose";

/**
 * Get an entity by id
 * @param id - The entity id
 * @returns The entity
 * @throws 400 error if id is invalid
 * @throws 404 error if not found
 */
export const getProjectById = async (
  id: string | Types.ObjectId,
  options: QueryOptions = { lean: true }
) => {
  if (!isValidObjectId(id)) {
    throw createHttpError.BadRequest("Invalid project id");
  }

  const project = await ProjectModel.findOne(
    { _id: id, deletedAt: null },
    null,
    options
  );

  if (!project) throw createHttpError.NotFound("Project not found");

  return project;
};
```

```typescript
// get{Entities}.ts
import { FilterQuery, QueryOptions } from "mongoose";
import * as Helpers from "src/common/helpers";
import * as GQLTypes from "src/common/interfaces/graphql";

/**
 * Get entities with optional filters
 * @param filters - The filters to apply
 * @returns Connection with edges and pageInfo
 */
export const getAdminProjects = async (filters: GQLTypes.GetProjectFilters) => {
  const query: FilterQuery<typeof ProjectModel> = {
    deletedAt: null,
  };

  // Build query conditionally with optional filters
  if (filters.projectId) {
    query.projectId = filters.projectId;
  } else if (filters.profileId) {
    query.profileId = filters.profileId;
    query.projectId = { $exists: false };
  }

  if (filters.search) {
    query.$or = [
      { title: { $regex: filters.search, $options: "i" } },
      { title: { $regex: filters.search, $options: "i" } },
    ];
  }

  if (filters.type) {
    query.type = filters.type;
  }

  // Pagination
  const page = Helpers.getSanitizePage(filters.page);
  const limit = Helpers.getSanitizeLimit(filters.limit);
  const skip = Helpers.getSanitizeOffset(page, limit);

  const options: QueryOptions = {
    skip,
    lean: true,
    limit: limit + 1, // Fetch one extra to determine hasNextPage
    sort: { createdAt: -1 },
  };

  const projects = await ProjectModel.find(query, null, options);

  return Helpers.getPageConnection(projects, page, limit);
};
```

```typescript
// update{Entity}.ts
import createHttpError from "http-errors";
import * as GQLTypes from "src/common/interfaces/graphql";

/**
 * Update an entity
 * @param data - Update input with id and fields to update
 * @returns Updated entity
 * @throws 404 error if not found
 */
export const updateProject = async (data: GQLTypes.UpdateProjectInput) => {
  // 1. Fetch entity first to validate existence and get current state
  const project = await getProjectById(data.id);

  // 2. Business rule validation using current state
  if (data.parentId !== undefined && data.parentId !== null) {
    const parentProject = await getProjectById(data.parentId);

    if (!parentProject.active) {
      throw createHttpError.BadRequest(
        "Cannot set parent to an inactive project"
      );
    }

    if (project.type !== parentProject.type) {
      throw createHttpError.BadRequest(
        `Child project type (${project.type}) must match parent type (${parentProject.type})`
      );
    }
  }

  // 3. Uniqueness check (excluding current entity)
  if (data.title || data.title) {
    const existing = await ProjectModel.findOne({
      projectId: project.projectId,
      _id: { $ne: data.id },
      $or: [
        ...(data.title ? [{ title: data.title }] : []),
        ...(data.title ? [{ title: data.title }] : []),
      ],
    });

    if (existing) {
      throw createHttpError.Conflict(
        "Project with this title or title already exists"
      );
    }
  }

  // 4. Perform update
  return ProjectModel.findOneAndUpdate(
    { _id: data.id },
    { $set: { ...data } },
    { new: true }
  );
};
```

````typescript
// delete{Entity}.ts (soft delete)
export const deleteProject = async (id: string) => {
  const project = await getProjectById(id);

  // Business rule: check if deletion is allowed
  const hasChildren = await ProjectModel.exists({ parentId: id, deletedAt: null });
  if (hasChildren) {
    throw createHttpError.BadRequest("Cannot delete project with child projects");
  }

  return ProjectModel.findOneAndUpdate(
    { _id: project._id },
    { $set: { deletedAt: new Date() } },
    { new: true }
  );
};

## Validation Pattern

### Entity Reference Validation

**Always fetch referenced entities to validate existence.** Never just check if an ID is provided—verify the entity exists.

```typescript
import createHttpError from "http-errors";
import { getProjectById } from "src/services/portfolio";
import { getPortfolio } from "src/services/portfolio";
import { getMediaAssetById } from "src/services/projects/currencies";

export const createProject = async (input: CreateProjectInput) => {
  // Fetch referenced entities - validates existence and gets data for use
  const project = await getProjectById(input.projectId);
  const profile = await getPortfolio(input.profileId);
  const mediaAsset = await getMediaAssetById(input.mediaAssetId);

  // Validate entity state
  if (!mediaAsset.active) {
    throw createHttpError.BadRequest("Cannot use an inactive mediaAsset");
  }

  // Create with validated references
  return ProjectModel.create({
    ...input,
    profileId: profile._id,
    projectId: project._id,
    mediaAssetId: mediaAsset._id,
  });
};
````

### Required vs Optional Reference Fields

**Required reference:** Fetch directly, getXxxById throws if not found.

```typescript
// Required: projectId is mandatory
const project = await getProjectById(input.projectId);
// If project doesn't exist, getProjectById throws 404
```

**Optional reference:** Check before fetching.

```typescript
// Optional: parentId may or may not be provided
let parentProject: ProjectDocument | null = null;
if (input.parentId) {
  parentProject = await getProjectById(input.parentId);

  // Validate parent properties
  if (!parentProject.active) {
    throw createHttpError.BadRequest(
      "Cannot set parent to an inactive project"
    );
  }
}

return ProjectModel.create({
  ...input,
  parentId: parentProject?._id,
});
```

### Deriving profileId from Project

Common pattern: derive `profileId` from the project instead of requiring both:

```typescript
export const createContactLead = async (input: CreateContactLeadInput) => {
  // Fetch project - also gives us profileId
  const project = await getProjectById(input.projectId);

  return ContactLeadModel.create({
    ...input,
    projectId: project._id,
    profileId: project.profileId, // Derived from project
  });
};
```

### Parallel Entity Fetching

Fetch multiple independent entities in parallel:

```typescript
export const createContactLead = async (input: CreateContactLeadInput) => {
  // Fetch independent entities in parallel
  const [createdBy, project, paymentMethod] = await Promise.all([
    getUserById(input.createdBy),
    getProjectById(input.projectId),
    getPaymentMethodById(input.paymentMethodId),
  ]);

  // Use fetched entities
  return ContactLeadModel.create({
    createdBy: createdBy._id,
    projectId: project._id,
    profileId: project.profileId,
    paymentMethodId: paymentMethod._id,
    // ...
  });
};
```

### Conditional Entity Fetching

For optional related entities:

```typescript
export const createContactLead = async (input: CreateContactLeadInput) => {
  const project = await getProjectById(input.projectId);

  // Optional: order
  let order = null;
  if (input.orderId) {
    order = await getOrderById(input.orderId);
  }

  // Optional: contactLead
  let contactLead = null;
  if (input.contactLead) {
    contactLead = await upsertContactLead({
      projectId: project._id,
      ...input.contactLead,
    });
  }

  return ContactLeadModel.create({
    projectId: project._id,
    ...(order && { orderId: order._id }),
    ...(contactLead && { contactLeadId: contactLead._id }),
  });
};
```

### Business Rule Validation

Validate business rules after fetching entities:

```typescript
export const createProject = async (input: CreateProjectInput) => {
  const profile = await getPortfolio(input.profileId);
  const policies = profile?.projectsSettings;

  // Policy enforcement
  if (input.projectId && policies?.allowStandaloneProjects === false) {
    if (!input.parentId) {
      throw createHttpError.BadRequest(
        "Profile policy requires all project projects to be sub-projects"
      );
    }
  }

  // Type consistency validation
  if (input.parentId) {
    const parentProject = await getProjectById(input.parentId);

    if (input.type !== parentProject.type) {
      throw createHttpError.BadRequest(
        `Child project type (${input.type}) must match parent type (${parentProject.type})`
      );
    }
  }

  return ProjectModel.create(input);
};
```

### Bulk Reference Validation

For arrays of references:

```typescript
export const createAnalyticsEntry = async (input: CreateAnalyticsEntryInput) => {
  // Validate all project references exist
  const projectIds = input.lines.map(l => l.projectId);
  const projects = await ProjectModel.find({
    _id: { $in: projectIds },
    deletedAt: null,
  });

  if (projects.length !== projectIds.length) {
    const foundIds = new Set(projects.map(a => a._id.toString()));
    const missing = projectIds.filter(id => !foundIds.has(id));
    throw createHttpError.NotFound(`Projects not found: ${missing.join(", ")}`);
  }

  // Validate projects belong to same org
  const orgs = new Set(projects.map(a => a.profileId.toString()));
  if (orgs.size > 1) {
    throw createHttpError.BadRequest(
      "All projects must belong to same profile"
    );
  }

  return AnalyticsEntryModel.create(input);
};
```

## Error Handling

### Use http-errors for HTTP-Appropriate Errors

```typescript
import createHttpError from "http-errors";

// 400 Bad Request - Invalid input
throw createHttpError.BadRequest("Invalid project title format");

// 404 Not Found - Resource doesn't exist
throw createHttpError.NotFound("Project not found");

// 409 Conflict - Duplicate/constraint violation
throw createHttpError.Conflict("Project title already exists");

// 403 Forbidden - Authorization failure
throw createHttpError.Forbidden("Insufficient permissions");

// 422 Unprocessable Entity - Valid syntax but can't process
throw createHttpError.UnprocessableEntity(
  "Cannot delete project with transactions"
);
```

### Error Context

```typescript
throw createHttpError.BadRequest(
  `Project title ${input.title} is out of range for type ${input.type}. ` +
    `Allowed: ${ranges.min}-${ranges.max}`
);
```

## Transaction Pattern

For operations that must be atomic, use `session.withTransaction()`:

```typescript
import mongoose from "mongoose";

export const createContactLead = async (data: CreateContactLeadInput) => {
  const session = await mongoose.startSession();
  let createdContactLead: ContactLeadDocument | null = null;

  try {
    createdContactLead = await session.withTransaction(async () => {
      // Fetch entities
      const [createdBy, project] = await Promise.all([
        getUserById(data.createdBy),
        getProjectById(data.projectId),
      ]);

      // Optional entities
      let order = null;
      if (data.orderId) {
        order = await getOrderById(data.orderId);
      }

      // Create within transaction
      const [contactLead] = await ContactLeadModel.create(
        [
          {
            createdBy: createdBy._id,
            projectId: project._id,
            profileId: project.profileId,
            ...(order && { orderId: order._id }),
          },
        ],
        { session }
      );

      // Related operations within same transaction
      await updateMultipleInventory({ items, session });

      // Auto-post to projects
      await postContactLeadToProjecting(contactLead, session);

      return contactLead;
    });
  } catch (error) {
    logger.error("ContactLead creation failed", { error: error?.message });
    throw error;
  } finally {
    await session.endSession();
  }

  return createdContactLead;
};
```

### Key Points

1. **Use `session.withTransaction()`** - handles commit/abort automatically
2. **Pass `{ session }` to all write operations** - `create`, `save`, `update`
3. **Array syntax for create** - `Model.create([data], { session })` returns array
4. **Return value from callback** - becomes the transaction result
5. **Finally block for cleanup** - always call `session.endSession()`

````

## Index File Pattern

```typescript
// services/projects/index.ts
export { createProject } from "./createProject";
export { updateProject } from "./updateProject";
export { deleteProject } from "./deleteProject";
export { getProjectById } from "./getProjectById";
export { getAdminProjects } from "./getAdminProjects";
````

## Resolver to Service Pattern

Services should be self-contained; resolvers only wire inputs:

```typescript
// Resolver (thin)
const createProject = async (
  _: any,
  args: GQLTypes.MutationCreateProjectArgs
) => {
  return ProjectService.createProject(args.data);
};

// Service (contains logic)
export const createProject = async (input: CreateProjectInput) => {
  // Validation
  // Business logic
  // Database operation
  return ProjectModel.create(input);
};
```

## Helpers Pattern

Internal utilities go in `helpers/`:

```typescript
// services/projects/helpers/validateProjectCode.ts
export const validateProjectCode = (
  title: string,
  type: ProjectStatus
): boolean => {
  const ranges = ACCOUNT_CODE_RANGES[type];
  const num = parseInt(title, 10);
  return num >= ranges.min && num <= ranges.max;
};

// Used internally
import { validateProjectCode } from "./helpers/validateProjectCode";
```

## Anti-Patterns to Avoid

| ❌ Don't                                     | ✅ Do                            |
| -------------------------------------------- | -------------------------------- |
| Put business logic in resolvers              | Delegate to services             |
| Return raw error messages                    | Use createHttpError with context |
| Mix multiple document writes without session | Use transactions for atomicity   |
| Query without tenant scoping                 | Always include profileId    |
| Skip `.lean()` on read operations            | Use `.lean()` for performance    |
| Hardtitle strings                             | Use constants/enums              |

## Testing Services

```typescript
describe("createProject", () => {
  it("should create project with valid input", async () => {
    const result = await createProject(validInput);
    expect(result.title).toBe(validInput.title);
  });

  it("should throw on duplicate title", async () => {
    await createProject(validInput);
    await expect(createProject(validInput)).rejects.toThrow("already exists");
  });

  it("should throw on invalid title range", async () => {
    await expect(
      createProject({ ...validInput, title: "9999" })
    ).rejects.toThrow("out of range");
  });
});
```
