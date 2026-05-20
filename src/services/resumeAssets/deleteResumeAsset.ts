import createHttpError from "http-errors";
import { isValidObjectId } from "mongoose";
import { ResumeAssetModel } from "src/models";

/**
 * Delete a resume asset.
 * @param id - Resume asset id
 * @returns True if resume asset is deleted
 * @throws 400 error if id is invalid
 * @throws 404 error if resume asset is not found
 */
export const deleteResumeAsset = async (id: string) => {
  if (!isValidObjectId(id)) throw createHttpError.BadRequest("Invalid resume asset id");

  const resumeAsset = await ResumeAssetModel.findByIdAndDelete(id);
  if (!resumeAsset) throw createHttpError.NotFound("Resume asset not found");

  return true;
};
