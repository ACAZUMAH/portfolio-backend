import { FilterQuery, QueryOptions } from "mongoose";
import {
  getPageConnection,
  getSanitizeLimit,
  getSanitizeOffset,
  getSanitizePage,
} from "src/common/helpers";
import {
  GetProjectImpressionFilters,
  ProjectImpressionDocument,
} from "src/common/interfaces";
import { ProjectImpressionModel } from "src/models";

/**
 * Get project impressions.
 * @param filters - Project impression filters
 * @returns Project impressions connection
 */
export const getProjectImpressions = async (
  filters: GetProjectImpressionFilters = {},
) => {
  const query: FilterQuery<ProjectImpressionDocument> = {
    ...(filters.projectId && { projectId: filters.projectId }),
    ...(filters.slug && { slug: filters.slug }),
    ...(filters.visitorId && { visitorId: filters.visitorId }),
    ...(filters.search && {
      $or: [
        { slug: { $regex: filters.search, $options: "i" } },
        { path: { $regex: filters.search, $options: "i" } },
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

  const projectImpressions = await ProjectImpressionModel.find(query, null, options);

  return getPageConnection(projectImpressions, page, limit);
};
