import { isAuthenticated } from "./general";

export const MediaAssetShield = {
  Query: {
    adminMediaAssets: isAuthenticated,
  },

  Mutation: {
    createMediaAsset: isAuthenticated,
    updateMediaAsset: isAuthenticated,
  },
};
