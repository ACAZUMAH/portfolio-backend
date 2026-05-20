import { FilterQuery, QueryOptions } from "mongoose";
import {
  getPageConnection,
  getSanitizeLimit,
  getSanitizeOffset,
  getSanitizePage,
} from "src/common/helpers";
import { ExperienceDocument } from "src/common/interfaces";
import { GetExperienceFilters } from "src/common/interfaces/graphql";
import { ExperienceModel } from "src/models";

/**
 * Get experiences.
 * @param filters - Experience filters
 * @returns Experiences connection
 */
export const getExperiences = async (filters: GetExperienceFilters = {}) => {
  const query: FilterQuery<ExperienceDocument> = {
    ...(filters.company && { company: filters.company }),
    ...(filters.isCurrent !== undefined && { isCurrent: filters.isCurrent }),
    ...(filters.order !== undefined && { order: filters.order }),
    ...(filters.search && {
      $or: [
        { role: { $regex: filters.search, $options: "i" } },
        { company: { $regex: filters.search, $options: "i" } },
        { location: { $regex: filters.search, $options: "i" } },
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

  const experiences = await ExperienceModel.find(query, null, options);

  return getPageConnection(experiences, page, limit);
};
