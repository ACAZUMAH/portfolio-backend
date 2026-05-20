import * as GqlTypes from "src/common/interfaces/graphql";
import * as resumeAssetsServices from "src/services/resumeAssets";
import { getId } from "../general";

const adminResumes = (_: any, args: GqlTypes.QueryAdminResumesArgs) => {
  return resumeAssetsServices.getAdminResumes(args.filters);
};

const createResumeAsset = (
  _: any,
  args: GqlTypes.MutationCreateResumeAssetArgs,
) => {
  return resumeAssetsServices.createResumeAsset(args.data);
};

const updateResumeAsset = (
  _: any,
  args: GqlTypes.MutationUpdateResumeAssetArgs,
) => {
  return resumeAssetsServices.updateResumeAsset(args.data);
};

const setDefaultResume = (
  _: any,
  args: GqlTypes.MutationSetDefaultResumeArgs,
) => {
  return resumeAssetsServices.setDefaultResume(args.id);
};

export const resumeAssetsResolvers = {
  Query: {
    adminResumes,
  },
  Mutation: {
    createResumeAsset,
    updateResumeAsset,
    setDefaultResume,
  },
  ResumeAsset: {
    ...getId(),
  },
};
