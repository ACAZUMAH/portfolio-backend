import { isAuthenticated } from "./general";

export const AdminUserShield = {
  Query: {
    adminMe: isAuthenticated,
  },
};
