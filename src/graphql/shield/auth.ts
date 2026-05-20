import { allow } from "graphql-shield";

export const AuthShield = {
  Mutation: {
    login: allow,
  },
};
