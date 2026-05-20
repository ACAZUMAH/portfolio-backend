import * as GqlTypes from "src/common/interfaces/graphql";
import * as profileServices from "src/services/profiles";
import { getId } from "../general";

const getProfileById = (_: any, args: GqlTypes.QueryGetProfileByIdArgs) => {
  return profileServices.getProfileById(args.id);
};

const getAdminProfile = (_: any, __: any) => {
  return profileServices.getProfile();
};

const updateProfile = (_: any, args: GqlTypes.MutationUpdateProfileArgs) => {
  return profileServices.updateProfile(args.data);
};

export const resolvers = {
  Query: {
    getProfileById,
    getAdminProfile,
  },
  Mutation: {
    updateProfile,
  },
  Profile: {
    ...getId(),
  },
};
