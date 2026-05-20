---
name: project-directory-structure
description: Defines the high-level directory structure, bounded contexts, and where specific file types (models, services, GraphQL, interfaces) should be placed in the portfolio-backend project.
---

# Project Directory Structure

This skill defines the high-level architecture and directory profile of the backend. It serves as a master guide for where files belong.

## Core Architectural Principle: Component Co-Location

The project organizes title by **Bounded Context (Domain)** rather than by file type. While top-level folders represent technical layers (`src/models`, `src/services`, `src/graphql`), inside them, everything is structured by domain (`projects`, `selling`, `procurement`, `projects`).

## High-Level Directory Map

```text
src/
├── app.ts                  # Express application setup
├── main.ts                 # Entry point & server start
│
├── common/                 # Shared types, enums, & non-business helpers
│   ├── enums/             # Enums (e.g., Collections, ResumeAssetStatus)
│   ├── helpers/           # Generic utilities (e.g., math, formatting)
│   └── interfaces/        # TypeScript interfaces & types
│       ├── graphql/       # Auto-generated GraphQL types (DO NOT EDIT)
│       ├── {domain}/      # Domain-specific Mongoose Document interfaces
│       └── auditTrail/    # Audit trail interfaces
│
├── cron/                   # Scheduled background jobs (node-cron)
│
├── dataloaders/            # GraphQL DataLoaders for N+1 query prevention
│   └── {domain}/          # Loaders grouped by domain
│
├── graphql/                # API Layer (Schema & Resolvers)
│   ├── index.ts           # Master schema compiler
│   ├── shield/            # GraphQL Shield permission rules
│   └── {domain}/          # Domain-specific API definitions
│       ├── typeDefs.ts    # GraphQL type definitions and operations
│       └── resolvers.ts   # Resolvers delegating to the Service layer
│
├── middlewares/            # Express/Custom middlewares (auth, rollbar)
│
├── models/                 # Database Layer (Mongoose Schemas)
│   └── {domain}/          # Mongoose schemas by domain
│       ├── index.ts       # Model exports
│       └── {Entity}.ts    # Mongoose Schema and Model definitions
│
├── routes/                 # REST API routes (for webhooks/legacy endpoints)
│
└── services/               # Business Logic Layer (The Core)
    ├── scripts/           # One-off scripts and data migrations
    └── {domain}/          # Business logic grouped by domain
        ├── index.ts       # Public API of the domain
        ├── create*.ts     # Granular action files
        └── helpers/       # Internal domain-specific helpers
```

## Where Does Everything Go?

Follow these rules when adding a new feature (e.g., "ContactLeads"):

### 1. Types & Interfaces → `src/common/interfaces/`

Any TypeScript type or interface `ContactLeadDocument` representing the shape of the data goes here.
_Path: `src/common/interfaces/projects/contactLeads/index.ts`_

### 2. Enums → `src/common/enums/`

Any enum like `ContactLeadStatus` or `ContactLeadCategory` goes here.
_Path: `src/common/enums/projects/contactLeads.ts`_

### 3. Database Schema → `src/models/`

The Mongoose schema definition, indexing rules, and `Model` export go here.
_All database models MUST adhere to the `mongoose-model-conventions` skill._
_Path: `src/models/projects/contactLeads/contactLead.ts`_

### 4. Business Logic → `src/services/`

All business logic goes into granular files in the services directory. **Never put business logic in resolvers or routes.**
_All services MUST adhere to the `service-layer-patterns` skill._
_Path:_

- `src/services/projects/contactLeads/createContactLead.ts`
- `src/services/projects/contactLeads/approveContactLead.ts`
- `src/services/projects/contactLeads/index.ts`

### 5. GraphQL API Definitions → `src/graphql/{domain}/`

The schema definition (`typeDefs.ts`) and the connection to the service layer (`resolvers.ts`).
_All resolvers MUST adhere to the `graphql-resolver-patterns` skill._
_Path:_

- `src/graphql/projects/contactLeads/typeDefs.ts`
- `src/graphql/projects/contactLeads/resolvers.ts`

### 6. N+1 Data Fetching → `src/dataloaders/`

If you need to batch fetch records (e.g., fetching the ContactLead for an ContactLeadLineItem), create a DataLoader.
_Path: `src/dataloaders/projects/contactLead.ts`_

### 7. Permissions & Authorization → `src/graphql/shield/`

Any rule specifying "who" can execute a GraphQL operation goes here. Do not inside resolvers.
_All permissions MUST adhere to the `shield-conventions` skill._
_Path: `src/graphql/shield/contactLeads.ts`_

## Key Domains (The Bounded Contexts)

When picking a `{domain}` folder, use one of the established bounded contexts:

- **`projects`**: Chart of Projects, Analytics Entries, Taxes, Currencies, Payment Methods.
- **`selling`**: Quotes, ContactLeads, ResumeAssets, POS, ContactLeads.
- **`procurement`**: Purchase Orders, Bills, Testimonial Payments, Testimonials.
- **`projects`**: Project Projects, Master Catalog, Categories.
- **`manageInventory`**: Stock Batches, Adjustments, Transfers.
- **`users`**: Authentication, Roles, Permissions, Employees.
- **`portfolio`**: Facilities, Profiles, Settings.

## Anti-Patterns to Avoid

| ❌ Don't                                  | ✅ Do                                      |
| ----------------------------------------- | ------------------------------------------ |
| Put business logic in `src/graphql/`      | Put business logic in `src/services/`      |
| Define Mongoose types in `src/models/`    | Define them in `src/common/interfaces/`    |
| Hardtitle permission logic in resolvers    | Use `src/graphql/shield/`                  |
| Put massive >1000 line service files      | Split into single-action files             |
| Mix domains (e.g., selling logic in orgs) | Import the required service across domains |
