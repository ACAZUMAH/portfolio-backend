import createHttpError from "http-errors";
import { Types, isValidObjectId } from "mongoose";
import { ResumeAssetModel } from "src/models";

/**
 * Get resume asset by id.
 * @param id - Resume asset id
 * @returns Resume asset
 * @throws 400 error if id is invalid
 * @throws 404 error if resume asset is not found
 */
export const getResumeAssetById = async (
  id: string | Types.ObjectId,
) => {
  if (!isValidObjectId(id)) throw createHttpError.BadRequest("Invalid resume asset id");

  const resumeAsset = await ResumeAssetModel.findById(id);
  if (!resumeAsset) throw createHttpError.NotFound("Resume asset not found");

  return resumeAsset;
};
