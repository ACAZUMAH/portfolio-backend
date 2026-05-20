import { FilterQuery } from "mongoose";
import { OutboundClickDocument } from "src/common/interfaces";
import { OutboundClickModel } from "src/models";

/**
 * Count outbound clicks.
 * @param filter - Outbound click filters
 * @returns Outbound click count
 */
export const countOutboundClicks = async (
  filter: FilterQuery<OutboundClickDocument> = {},
) => {
  return OutboundClickModel.countDocuments(filter);
};
