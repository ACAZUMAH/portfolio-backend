import { authAdmin } from "src/services";

const login = (_: any, args: any) => {
  return authAdmin({ ...args.data });
};
export const authResolvers = {
  Mutation: {
    login,
  },
};
