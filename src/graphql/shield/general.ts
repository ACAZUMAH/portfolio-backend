import { allow, rule } from "graphql-shield";
import { GraphqlContext } from "src/common/interfaces";

export const isAuthenticated = rule()((_, __, ctx: GraphqlContext) => {
  return !!ctx.admin;
});

export const GeneralShield = {
  Query: {
    _empty: allow,
    hello: allow,
    healthCheck: allow,
  },
  Mutation: {
    _empty: allow,
  },
};
