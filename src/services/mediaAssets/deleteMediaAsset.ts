import createHttpError from "http-errors";
import { isValidObjectId } from "mongoose";
import { MediaAssetModel } from "src/models";

/**
 * Delete a media asset.
 * @param id - Media asset id
 * @returns True if media asset is deleted
 * @throws 400 error if id is invalid
 * @throws 404 error if media asset is not found
 */
export const deleteMediaAsset = async (id: string) => {
  if (!isValidObjectId(id)) throw createHttpError.BadRequest("Invalid media asset id");

  const mediaAsset = await MediaAssetModel.findByIdAndDelete(id);
  if (!mediaAsset) throw createHttpError.NotFound("Media asset not found");

  return true;
};
