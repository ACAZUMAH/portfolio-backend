import { allow } from "graphql-shield";
import { isAuthenticated } from "./general";

export const ProfileShield = {
  Query: {
    getProfileById: allow,
    getAdminProfile: isAuthenticated,
  },

  Mutation: {
    updateProfile: isAuthenticated,
  },
};
