import { ResumeAssetModel } from "src/models";

/**
 * Get default resume asset.
 * @returns Default resume asset
 */
export const getDefaultResumeAsset = async () => {
  return ResumeAssetModel.findOne({ isDefault: true });
};
