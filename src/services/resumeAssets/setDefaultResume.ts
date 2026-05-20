import createHttpError from "http-errors";
import { isValidObjectId } from "mongoose";
import { ResumeAssetModel } from "src/models";

/**
 * Set default resume asset.
 * @param id - Resume asset id
 * @returns Updated resume asset
 * @throws 400 error if id is invalid
 * @throws 404 error if resume asset is not found
 */
export const setDefaultResume = async (id: string) => {
  if (!isValidObjectId(id)) throw createHttpError.BadRequest("Invalid resume asset id");

  const resumeAsset = await ResumeAssetModel.findById(id);
  if (!resumeAsset) throw createHttpError.NotFound("Resume asset not found");

  await ResumeAssetModel.updateMany({}, { isDefault: false });
  resumeAsset.isDefault = true;
  await resumeAsset.save();

  return resumeAsset;
};
