import { allow } from "graphql-shield";
import { isAuthenticated } from "./general";

export const AvailabilityShield = {
  Query: {
    getAvailabilityStatusById: isAuthenticated,
    getLatestAvailabilityStatus: allow,
  },

  Mutation: {
    createAvailabilityStatus: isAuthenticated,
    updateAvailabilityStatus: isAuthenticated,
  },
};
