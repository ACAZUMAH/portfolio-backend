import { UpdateResumeAssetInput } from "src/common/interfaces/graphql";
import { ResumeAssetModel } from "src/models";
import { getResumeAssetById } from "./getResumeAssetById";

/**
 * Update a resume asset.
 * @param data.id - Resume asset id
 * @param data - Resume asset update data
 * @returns Updated resume asset
 * @throws 400 error if id is invalid
 * @throws 404 error if resume asset is not found
 */
export const updateResumeAsset = async (data: UpdateResumeAssetInput) => {
  const resumeAsset = await getResumeAssetById(data.id);

  const update: Record<string, any> = {};

  if (data.title) update.title = data.title;
  if (data.url) update.url = data.url;
  if (data.focus) update.focus = data.focus;
  if (data.isDefault) update.isDefault = data.isDefault;

  if (data.isDefault) {
    await ResumeAssetModel.updateMany(
      { _id: { $ne: resumeAsset._id } },
      { isDefault: false },
    );
  }

  return await ResumeAssetModel.findByIdAndUpdate(
    resumeAsset._id,
    { $set: update },
    {
      new: true,
    },
  );
};
