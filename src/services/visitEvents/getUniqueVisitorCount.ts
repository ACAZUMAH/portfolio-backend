import { FilterQuery } from "mongoose";
import { VisitEventDocument } from "src/common/interfaces";
import { VisitEventModel } from "src/models";

/**
 * Get unique visitor count.
 * @param filter - Visit event filters
 * @returns Unique visitor count
 */
export const getUniqueVisitorCount = async (
  filter: FilterQuery<VisitEventDocument> = {},
) => {
  const visitors = await VisitEventModel.distinct("visitorId", filter);
  return visitors.filter(Boolean).length;
};
