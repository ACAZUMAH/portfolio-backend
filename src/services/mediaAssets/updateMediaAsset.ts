import createHttpError from "http-errors";
import { isValidObjectId } from "mongoose";

import { UpdateMediaAssetInput } from "src/common/interfaces/graphql";
import { MediaAssetModel } from "src/models";
import { getMediaAssetById } from "./getMediaAssetById";

/**
 * Update a media asset.
 * @param data.id - Media asset id
 * @param data - Media asset update data
 * @returns Updated media asset
 * @throws 400 error if id is invalid
 * @throws 404 error if media asset is not found
 */
export const updateMediaAsset = async (data: UpdateMediaAssetInput) => {
  const mediaAsset = await getMediaAssetById(data.id);

  const update: Record<string, any> = {};

  if (data.title) update.title = data.title;
  if (data.type) update.type = data.type;
  if (data.alt) update.alt = data.alt;
  if (data.url) update.url = data.url;
  if (data.projectId && isValidObjectId(data.projectId))
    update.projectId = data.projectId;

  return await MediaAssetModel.findByIdAndUpdate(
    mediaAsset._id,
    { $set: update },
    { new: true },
  );
};
