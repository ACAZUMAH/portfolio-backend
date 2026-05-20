import { FilterQuery } from "mongoose";
import { ProjectImpressionDocument } from "src/common/interfaces";
import { ProjectImpressionModel } from "src/models";

/**
 * Count project impressions.
 * @param filter - Project impression filters
 * @returns Project impression count
 */
export const countProjectImpressions = async (
  filter: FilterQuery<ProjectImpressionDocument> = {},
) => {
  return ProjectImpressionModel.countDocuments(filter);
};
