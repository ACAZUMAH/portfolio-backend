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
import { publicProjectFilter, toPublicProject } from "./helpers";

/**
 * Get public projects.
 * @param filters - Project filters
 * @returns Public-safe projects connection
 */
export const getPublicProjects = async (filters: GetProjectFilters = {}) => {
  const query: FilterQuery<ProjectDocument> = {
    ...publicProjectFilter,
    ...(filters.stack && { stack: filters.stack }),
    ...(filters.company && { company: filters.company }),
    ...(filters.client && { client: filters.client }),
    ...(filters.featured !== undefined && { featured: filters.featured }),
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
    lean: false,
    limit: limit + 1,
    sort: { order: 1, createdAt: -1 },
  };

  const projects = await ProjectModel.find(query, null, options);
  const publicProjects = projects.map(toPublicProject);

  return getPageConnection(publicProjects, page, limit);
};

/**
 * Get featured public projects.
 * @param filters - Project filters
 * @returns Featured public-safe projects connection
 */
export const getFeaturedPublicProjects = async (
  filters: GetProjectFilters = {},
) => {
  return getPublicProjects({ ...filters, featured: true });
};
