import { allow } from "graphql-shield";

export const PortfolioShield = {
  Query: {
    portfolio: allow,
  },
};
