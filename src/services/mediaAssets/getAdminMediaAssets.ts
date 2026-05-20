import { FilterQuery, QueryOptions } from "mongoose";
import {
  getPageConnection,
  getSanitizeLimit,
  getSanitizeOffset,
  getSanitizePage,
} from "src/common/helpers";
import { MediaAssetDocument } from "src/common/interfaces";
import { GetMediaAssetFilters } from "src/common/interfaces/graphql";
import { MediaAssetModel } from "src/models";

/**
 * Get admin media assets.
 * @param filters - Media asset filters
 * @returns Media assets connection
 */
export const getAdminMediaAssets = async (
  filters: GetMediaAssetFilters = {},
) => {
  const query: FilterQuery<MediaAssetDocument> = {
    ...(filters.type && { type: filters.type }),
    ...(filters.projectId && { projectId: filters.projectId }),
    ...(filters.search && {
      $or: [
        { title: { $regex: filters.search, $options: "i" } },
        { alt: { $regex: filters.search, $options: "i" } },
      ],
    }),
  };

  const page = getSanitizePage(filters.page);
  const limit = getSanitizeLimit(filters.limit);
  const skip = getSanitizeOffset(page, limit);

  const options: QueryOptions = {
    skip,
    lean: true,
    limit: limit + 1,
    sort: { createdAt: -1 },
  };

  const mediaAssets = await MediaAssetModel.find(query, null, options);

  return getPageConnection(mediaAssets, page, limit);
};
