import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "http://localhost:8000/graphql": {
        headers: {
          Client: "ADMIN_PORTAL",
        },
      },
    },
  ],
  generates: {
    "src/common/interfaces/graphql/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
  config: {
    namingConvention: {
      enumValues: "change-case-all#upperCase",
    },
  },
};

export default config;
