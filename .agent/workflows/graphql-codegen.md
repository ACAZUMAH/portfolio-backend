---
description: How to add new GraphQL types and generate TypeScript interfaces
---

# Adding New GraphQL Types & Running Codegen

// turbo-all

## Prerequisites

- The dev server must be running (codegen introspects `http://localhost:4000/graphql`)

## Steps

1. Define your GraphQL types in `src/graphql/{module}/typeDefs.ts`
   - Follow conventions in `.agent/skills/graphql-typedefs-conventions/SKILL.md`

2. Wire the typeDefs into the module aggregator (e.g. `src/graphql/selling/typeDefs.ts`)

3. Start the dev server (if not already running):

```bash
yarn dev
```

4. Wait for the server to start, then run codegen to generate TypeScript types:

```bash
yarn generate
```

5. Verify the types exist in `src/common/interfaces/graphql/graphql.ts`
   - Look for your new types like `QueryGet{Entity}Args`, `Mutation{Action}{Entity}Args`, etc.

6. Now create your resolvers using the generated types:

```typescript
import * as GQLTypes from "src/common/interfaces/graphql";

const getEntity = async (_: any, args: GQLTypes.QueryGetEntityArgs) => {
  return EntityService.getEntityById(args.id);
};
```

## Important Notes

- **Always define typeDefs and run codegen BEFORE writing resolvers** that reference generated types
- The codegen config is in `codegen.ts` — it introspects the running server
- Generated types go to `src/common/interfaces/graphql/graphql.ts`
- If you get "has no exported member" errors, it means codegen hasn't been run yet
