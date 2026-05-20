import { FilterQuery, QueryOptions } from "mongoose";
import {
  getPageConnection,
  getSanitizeLimit,
  getSanitizeOffset,
  getSanitizePage,
} from "src/common/helpers";
import { ProjectDocument } from "src/common/interfaces";
import { GetProjectFilters } from "src/common/interfaces/graphql";
import { ProjectModel } from "src/models";

/**
 * Get admin projects.
 * @param filters - Project filters
 * @returns Projects connection
 */
export const getAdminProjects = async (filters: GetProjectFilters = {}) => {
  const query: FilterQuery<ProjectDocument> = {
    ...(filters.stack && { stack: filters.stack }),
    ...(filters.company && { company: filters.company }),
    ...(filters.client && { client: filters.client }),
    ...(filters.featured !== undefined && { featured: filters.featured }),
    ...(filters.visibility && { visibility: filters.visibility }),
    ...(filters.status && { status: filters.status }),
    ...(filters.search && {
      $or: [
        { title: { $regex: filters.search, $options: "i" } },
        { summary: { $regex: filters.search, $options: "i" } },
        { company: { $regex: filters.search, $options: "i" } },
        { client: { $regex: filters.search, $options: "i" } },
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
    sort: { order: 1, createdAt: -1 },
  };

  const projects = await ProjectModel.find(query, null, options);

  return getPageConnection(projects, page, limit);
};
