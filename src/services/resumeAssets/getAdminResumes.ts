import { FilterQuery, QueryOptions } from "mongoose";
import {
  getPageConnection,
  getSanitizeLimit,
  getSanitizeOffset,
  getSanitizePage,
} from "src/common/helpers";
import { ResumeAssetDocument } from "src/common/interfaces";
import { ResumeAssetModel } from "src/models";
import { GetResumeAssetFilters } from "src/common/interfaces/graphql";

/**
 * Get admin resume assets.
 * @param filters - Resume asset filters
 * @returns Resume assets connection
 */
export const getAdminResumes = async (filters: GetResumeAssetFilters = {}) => {
  const query: FilterQuery<ResumeAssetDocument> = {
    ...(filters.isDefault !== undefined && { isDefault: filters.isDefault }),
    ...(filters.focus && { focus: filters.focus }),
    ...(filters.search && {
      $or: [
        { title: { $regex: filters.search, $options: "i" } },
        { focus: { $regex: filters.search, $options: "i" } },
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
    sort: { isDefault: -1, createdAt: -1 },
  };

  const resumes = await ResumeAssetModel.find(query, null, options);

  return getPageConnection(resumes, page, limit);
};
