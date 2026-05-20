import { allow } from "graphql-shield";
import { isAuthenticated } from "./general";

export const LeadShield = {
  Query: {
    getAdminLeads: isAuthenticated,
  },

  Mutation: {
    createContactLead: allow,
    updateContactLead: isAuthenticated,
  },
};
