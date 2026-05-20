---
name: graphql-typedefs-conventions
description: Defines GraphQL schema naming conventions and structure for portfolio-backend. Use when creating or modifying GraphQL type definitions, queries, mutations, or input types.
---

# GraphQL TypeDefs Conventions

This skill defines the naming conventions and structure for GraphQL type definitions.

## When to Use This Skill

- Creating new GraphQL types
- Adding queries or mutations
- Defining input types
- Structuring filter and connection types

## Query Naming Conventions

### Pattern: `get{Entity}` for Single, `get{Entities}` for List

```graphql
# ✅ CORRECT: Verb prefix, singular for one, plural for many
type Query {
  getProject(id: ID!): Project!
  getAdminProjects(filters: GetProjectFilters!): ProjectConnection!

  getUser(id: ID!): User
  getUsers(filters: UserFilters!): UserConnection!

  getAnalyticsEntry(id: ID!): AnalyticsEntry!
  getAnalyticsEntries(filters: GetAnalyticsEntryFilters!): AnalyticsEntryConnection!
}

# ❌ WRONG: Missing verb, inconsistent naming
type Query {
  project(id: ID!): Project!           # Missing "get"
  projectList(filters: ...): ...       # Use plural, not "List"
  fetchProjects(filters: ...): ...     # Use "get", not "fetch"
}
```

### Single Entity Queries

```graphql
# Argument: Single ID parameter directly
getProject(id: ID!): Project!
getContactLead(id: ID!): ContactLead!
getEmployee(id: ID!): Employee

# Return nullable if entity might not exist
getEmployee(id: ID!): Employee         # Can return null
getProject(id: ID!): Project!          # Throws if not found
```

### List/Filter Queries

```graphql
# Argument: `filters` input type
getAdminProjects(filters: GetProjectFilters!): ProjectConnection!
getContactLeads(filters: GetContactLeadsFilters!): ContactLeadConnection!
getEmployees(filters: EmployeeFilters!): EmployeeConnection!
```

## Mutation Naming Conventions

### Pattern: `{action}{Entity}`

```graphql
# ✅ CORRECT: Action verb + entity title
type Mutation {
  createProject(data: CreateProjectInput!): Project!
  updateProject(data: UpdateProjectInput!): Project!
  deleteProject(id: ID!): Boolean!

  postAnalyticsEntry(id: ID!): AnalyticsEntry!
  reverseAnalyticsEntry(data: ReverseEntryInput!): AnalyticsEntry!
}

# ❌ WRONG: Inconsistent patterns
type Mutation {
  addProject(input: ...): ...      # Use "create", not "add"
  modifyProject(input: ...): ...   # Use "update", not "modify"
  removeProject(id: ...): ...      # Use "delete", not "remove"
  project_create(data: ...): ...   # Wrong order
}
```

### Standard CRUD Actions

| Action    | Usage              | Example               |
| --------- | ------------------ | --------------------- |
| `create`  | New entity         | `createProject`       |
| `update`  | Modify existing    | `updateProject`       |
| `delete`  | Remove (soft/hard) | `deleteProject`       |
| `post`    | Finalize/publish   | `postAnalyticsEntry`    |
| `void`    | Cancel/invalidate  | `voidContactLead`            |
| `reverse` | Create opposite    | `reverseAnalyticsEntry` |

## Input Type Conventions

### Mutation Inputs: Use `data` Parameter

```graphql
# ✅ CORRECT: Always use "data" for mutation inputs
createProject(data: CreateProjectInput!): Project!
updateProject(data: UpdateProjectInput!): Project!
createContactLead(data: CreateContactLeadInput!): ContactLead!

# ❌ WRONG: Other parameter titles
createProject(input: CreateProjectInput!): ...   # Use "data", not "input"
createProject(project: CreateProjectInput!): ... # Use "data", not entity title
```

### Query Filters: Use `filters` Parameter

```graphql
# ✅ CORRECT: Use "filters" for list queries
getAdminProjects(filters: GetProjectFilters!): ProjectConnection!
getContactLeads(filters: GetContactLeadsFilters!): ContactLeadConnection!

# ❌ WRONG: Other parameter titles
getAdminProjects(query: ...): ...    # Use "filters", not "query"
getAdminProjects(params: ...): ...   # Use "filters", not "params"
getAdminProjects(where: ...): ...    # Use "filters", not "where"
```

### Single ID: Direct Parameter

```graphql
# ✅ CORRECT: Single ID is a direct parameter, not wrapped
getProject(id: ID!): Project!
deleteProject(id: ID!): Boolean!
postAnalyticsEntry(id: ID!): AnalyticsEntry!

# ❌ WRONG: Wrapping single ID in input type
getProject(data: GetProjectInput!): ...  # Just use id: ID!
```

## Input Type Naming

### Pattern: `{Action}{Entity}Input`

```graphql
# Create inputs
input CreateProjectInput {
  title: String!
  title: String!
  # ...
}

# Update inputs (ID required, fields optional)
input UpdateProjectInput {
  id: ID! # Required: which entity to update
  title: String # Optional: only update if provided
  title: String
}

# Filter inputs
input GetProjectFilters {
  profileId: ID! # Tenant scoping
  projectId: ID
  page: Int
  limit: Int
  search: String
  type: ProjectStatus
}

# Specialized action inputs
input CreateReversingEntryInput {
  originalEntryId: ID!
  reason: String!
  createdByUserId: ID!
}
```

## Connection Type Pattern

For paginated lists:

```graphql
type ProjectConnection {
  edges: [Project!]!
  pageInfo: PageInfo!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  totalCount: Int!
}
```

### Naming: `{Entity}Connection`

```graphql
# ✅ CORRECT
type ContactLeadConnection { ... }
type EmployeeConnection { ... }
type AnalyticsEntryConnection { ... }

# ❌ WRONG
type ContactLeadsResult { ... }     # Use "Connection"
type ProjectList { ... }     # Use "Connection"
type ProjectsPage { ... }    # Use "Connection"
```

## Enum Naming

```graphql
# PascalCase for enum title, SCREAMING_SNAKE_CASE for values
enum ProjectStatus {
  ASSET
  LIABILITY
  EQUITY
  REVENUE
  EXPENSE
}

enum ContactLeadPaymentStatus {
  PAID
  FAILED
  PENDING
}
```

## Type Structure

### Entity Types

```graphql
type Project {
  # ID first
  id: ID!

  # Core fields
  title: String!
  title: String!

  # Enums/status
  type: ProjectStatus!
  active: Boolean!

  # Timestamps
  createdAt: DateTime!
  updatedAt: DateTime!

  # Relationships (at end)
  profile: Profile!
  project: Project
  auditTrails: [AuditTrail!]!
}
```

## File Structure

```typescript
// Export as template literal with #graphql tag
export const projectsTypeDefs = `#graphql
  enum ProjectStatus { ... }
  
  type Project { ... }
  
  type ProjectConnection { ... }
  
  input GetProjectFilters { ... }
  
  input CreateProjectInput { ... }
  
  input UpdateProjectInput { ... }
  
  extend type Query {
    getProject(id: ID!): Project!
    getAdminProjects(filters: GetProjectFilters!): ProjectConnection!
  }
  
  extend type Mutation {
    createProject(data: CreateProjectInput!): Project!
    updateProject(data: UpdateProjectInput!): Project!
    deleteProject(id: ID!): Boolean!
  }
`;
```

## Quick Reference

| Operation | Query/Mutation              | Argument  | Input Type Name       |
| --------- | --------------------------- | --------- | --------------------- |
| Get one   | `getEntity(id: ID!)`        | `id`      | none                  |
| Get many  | `getEntities(filters: ...)` | `filters` | `GetEntityFilters`    |
| Create    | `createEntity(data: ...)`   | `data`    | `CreateEntityInput`   |
| Update    | `updateEntity(data: ...)`   | `data`    | `UpdateEntityInput`   |
| Delete    | `deleteEntity(id: ID!)`     | `id`      | none                  |
| Action    | `{action}Entity(data: ...)` | `data`    | `{Action}EntityInput` |

## Anti-Patterns to Avoid

| ❌ Don't                    | ✅ Do                       |
| --------------------------- | --------------------------- |
| `project(id: ID!)`          | `getProject(id: ID!)`       |
| `projects(...)`             | `getAdminProjects(filters: ...)` |
| `createProject(input: ...)` | `createProject(data: ...)`  |
| `getAdminProjects(params: ...)`  | `getAdminProjects(filters: ...)` |
| `addProject(data: ...)`     | `createProject(data: ...)`  |
| `ProjectsList`              | `ProjectConnection`         |
| `CreateProjectData`         | `CreateProjectInput`        |
