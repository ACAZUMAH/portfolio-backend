import { CreateResumeAssetInput } from "src/common/interfaces/graphql";
import { ResumeAssetModel } from "src/models";

/**
 * Create a resume asset.
 * @param data - Resume asset data
 * @returns Created resume asset
 */
export const createResumeAsset = async (data: CreateResumeAssetInput) => {
  if (data.isDefault) await ResumeAssetModel.updateMany({}, { isDefault: false });
  return ResumeAssetModel.create(data);
};
