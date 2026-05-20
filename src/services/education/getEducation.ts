import { FilterQuery, QueryOptions } from "mongoose";
import {
  getPageConnection,
  getSanitizeLimit,
  getSanitizeOffset,
  getSanitizePage,
} from "src/common/helpers";
import { EducationDocument } from "src/common/interfaces";
import { GetEducationFilters } from "src/common/interfaces/graphql";
import { EducationModel } from "src/models";

/**
 * Get education records.
 * @param filters - Education filters
 * @returns Education connection
 */
export const getEducation = async (filters: GetEducationFilters = {}) => {
  const query: FilterQuery<EducationDocument> = {
    ...(filters.institution && { institution: filters.institution }),
    ...(filters.search && {
      $or: [
        { institution: { $regex: filters.search, $options: "i" } },
        { program: { $regex: filters.search, $options: "i" } },
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

  const education = await EducationModel.find(query, null, options);

  return getPageConnection(education, page, limit);
};
