import createHttpError from "http-errors";
import { Types, isValidObjectId } from "mongoose";
import { MediaAssetModel } from "src/models";

/**
 * Get media asset by id.
 * @param id - Media asset id
 * @returns Media asset
 * @throws 400 error if id is invalid
 * @throws 404 error if media asset is not found
 */
export const getMediaAssetById = async (
  id: string | Types.ObjectId,
) => {
  if (!isValidObjectId(id)) throw createHttpError.BadRequest("Invalid media asset id");

  const mediaAsset = await MediaAssetModel.findById(id);
  if (!mediaAsset) throw createHttpError.NotFound("Media asset not found");

  return mediaAsset;
};
