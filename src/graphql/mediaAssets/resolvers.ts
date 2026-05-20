import * as GqlTypes from "src/common/interfaces/graphql";
import * as mediaAssetsServices from "src/services/mediaAssets";
import { getId } from "../general";

const adminMediaAssets = (_: any, args: GqlTypes.QueryAdminMediaAssetsArgs) => {
  return mediaAssetsServices.getAdminMediaAssets(args.filters);
};

const createMediaAsset = (
  _: any,
  args: GqlTypes.MutationCreateMediaAssetArgs,
) => {
  return mediaAssetsServices.createMediaAsset(args.data);
};

const updateMediaAsset = (
  _: any,
  args: GqlTypes.MutationUpdateMediaAssetArgs,
) => {
  return mediaAssetsServices.updateMediaAsset(args.data);
};

export const mediaAssetsResolvers = {
  Query: {
    adminMediaAssets,
  },
  Mutation: {
    createMediaAsset,
    updateMediaAsset,
  },
  MediaAsset: {
    ...getId(),
  },
};
