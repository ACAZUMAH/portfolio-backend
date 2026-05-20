import { CreateMediaAssetInput } from "src/common/interfaces/graphql";
import { MediaAssetModel } from "src/models";

/**
 * Create a media asset.
 * @param data - Media asset data
 * @returns Created media asset
 */
export const createMediaAsset = async (data: CreateMediaAssetInput) => {
  return MediaAssetModel.create(data);
};
