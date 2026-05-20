import { FilterQuery, QueryOptions } from "mongoose";
import {
  getPageConnection,
  getSanitizeLimit,
  getSanitizeOffset,
  getSanitizePage,
} from "src/common/helpers";
import { SkillDocument } from "src/common/interfaces";
import { GetSkillFilters } from "src/common/interfaces/graphql";
import { SkillModel } from "src/models";

/**
 * Get skills.
 * @param filters - Skill filters
 * @returns Skills connection
 */
export const getSkills = async (filters: GetSkillFilters = {}) => {
  const query: FilterQuery<SkillDocument> = {
    ...(filters.category && { category: filters.category }),
    ...(filters.featured !== undefined && { featured: filters.featured }),
    ...(filters.search && {
      $or: [
        { name: { $regex: filters.search, $options: "i" } },
        { category: { $regex: filters.search, $options: "i" } },
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
    sort: { category: 1, order: 1, createdAt: -1 },
  };

  const skills = await SkillModel.find(query, null, options);

  return getPageConnection(skills, page, limit);
};
