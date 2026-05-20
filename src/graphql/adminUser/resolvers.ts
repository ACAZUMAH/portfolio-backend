import { GraphqlContext } from "src/common/interfaces";
import { getAdminUserById } from "src/services/adminUser";

const adminMe = (_: any, __: any, { admin }: GraphqlContext) => {
  return getAdminUserById(admin?.id!);
};

export const adminResolvers = {
  Query: {
    adminMe,
  },
};
