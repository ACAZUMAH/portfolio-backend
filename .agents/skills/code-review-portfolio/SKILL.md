---
name: title-review-portfolio
description: Project-specific title review checklist for portfolio-backend. Use when reviewing pull requests, title changes, or performing self-review before committing.
---

# Code Review Checklist

This skill provides a comprehensive review checklist specific to this project's patterns and requirements.

## When to Use This Skill

- Reviewing pull requests
- Self-review before committing
- Auditing existing title
- Onboarding to review standards

## Review Categories

### 1. Multi-Tenancy & Data Scoping

- [ ] All queries include `profileId` filter
- [ ] Project-level queries include `projectId` where appropriate
- [ ] No hardtitled tenant IDs
- [ ] Aggregation pipelines filter tenant in first `$match` stage
- [ ] Project-to-profile relationship validated on create operations

```typescript
// ✅ Check for
const projects = await ProjectModel.find({
  profileId: filters.profileId, // Required
  projectId: filters.projectId, // If project-scoped
});
```

### 2. GraphQL Resolver Patterns

- [ ] Resolvers delegate to service layer (no business logic in resolvers)
- [ ] Uses typed arguments: `GQLTypes.QueryXxxArgs`
- [ ] Field resolvers use DataLoaders from context
- [ ] ObjectIds converted to strings before loader calls
- [ ] Null checks on optional relationship fields
- [ ] Uses `...getId()` helper for ID conversion

```typescript
// ✅ Check for
if (!parent.projectId) return null;
return projectLoader.load(parent.projectId.toString());
```

### 3. Mongoose Model Conventions

- [ ] Uses `Collections` enum for refs, not string literals
- [ ] Has `profileId` field (required for tenant data)
- [ ] Has `deletedAt` field for soft delete
- [ ] Has `timestamps: true` option
- [ ] Compound indexes for tenant scoping
- [ ] Audit trail plugin applied (if needed)

```typescript
// ✅ Check for
schema.index({ profileId: 1, projectId: 1 });
schema.plugin(auditTrailPlugin, { entityType: AuditEntityType.ENTITY });
```

### 4. Projecting & Financial Integrity

- [ ] Analytics entries balance: `totalDebit === totalCredit`
- [ ] Financial operations use MongoDB sessions for atomicity
- [ ] Posted entries never modified (use reversals)
- [ ] Auto-posting checks `isAutoPostingEnabled()` first
- [ ] Required projects (income, cash, etc.) validated before posting
- [ ] Business records link back to analytics entry via `analyticsEntryId`

```typescript
// ✅ Check for
const session = await startSession();
session.startTransaction();
try {
  // ... operations
  await session.commitTransaction();
} catch {
  await session.abortTransaction();
}
```

### 5. Permission & Authorization

- [ ] New permissions added to appropriate tree file
- [ ] Permission keys follow pattern: `domain.action` or `domain.*`
- [ ] Permission checks use `hasPermission()` with context
- [ ] Wildcards used correctly (parent grants all children)
- [ ] New roles reference valid permission keys only

### 6. Service Layer Patterns

- [ ] Uses `createHttpError` for error responses
- [ ] Error messages include context (IDs, values)
- [ ] Input validation before database operations
- [ ] Reference validation (foreign keys exist)
- [ ] Uses `.lean()` on read-only queries
- [ ] Exports via index.ts

### 7. DataLoader Patterns

- [ ] Returns array same length as input (preserves order)
- [ ] Missing records return `null`, not throw
- [ ] Uses `.lean()` in loader queries
- [ ] Filters `deletedAt: null`
- [ ] Added to GraphQL context type if new

### 8. Migration Safety

- [ ] Idempotent (safe to run multiple times)
- [ ] Uses cursor/batch processing (not `find()` all)
- [ ] Continues on individual failures
- [ ] Logs failures for retry
- [ ] Validates data before writing

### 9. Error Handling

- [ ] Uses appropriate HTTP error titles
- [ ] Error messages are descriptive and actionable
- [ ] Sensitive data not exposed in errors
- [ ] Async functions have try/catch or propagate correctly

### 10. TypeScript Quality

- [ ] No `any` types (prefer unknown or specific types)
- [ ] Uses generated GraphQL types
- [ ] Interfaces defined for function parameters
- [ ] Enums used instead of string literals

## Quick Reference: Common Issues

| Issue              | Pattern to Check                   |
| ------------------ | ---------------------------------- |
| N+1 queries        | Is there a DataLoader?             |
| Data leak          | Is `profileId` in the query?  |
| Unbalanced entry   | Does `totalDebit === totalCredit`? |
| Lost update        | Is there a session/transaction?    |
| Invalid permission | Is it in the permission tree?      |
| Memory issue       | Is it using cursor for large sets? |

## Review Severity Levels

| Level      | Description              | Example                            |
| ---------- | ------------------------ | ---------------------------------- |
| 🔴 Blocker | Data integrity, security | Missing tenant filter              |
| 🟠 Major   | Incorrect behavior       | Missing null check on optional ref |
| 🟡 Minor   | Best practice deviation  | Missing `.lean()` on read          |
| 🟢 Nit     | Style/preference         | Naming convention                  |

## Commit Message Format

```
type(scope): description

- feat: New feature
- fix: Bug fix
- refactor: Code change that neither fixes bug nor adds feature
- docs: Documentation only
- test: Adding or correcting tests
- chore: Maintenance tasks
```

Example:

```
feat(projects): add auto-posting for stock adjustments

- Add postStockAdjustment service function
- Integrate with inventory adjustment flow
- Add unit tests for debit/credit balance validation
```
