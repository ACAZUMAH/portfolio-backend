import { FilterQuery } from "mongoose";
import { VisitEventDocument } from "src/common/interfaces";
import { VisitEventModel } from "src/models";

/**
 * Count visit events.
 * @param filter - Visit event filters
 * @returns Visit event count
 */
export const countVisitEvents = async (
  filter: FilterQuery<VisitEventDocument> = {},
) => {
  return VisitEventModel.countDocuments(filter);
};
