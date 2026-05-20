import { FilterQuery, QueryOptions } from "mongoose";
import {
  getPageConnection,
  getSanitizeLimit,
  getSanitizeOffset,
  getSanitizePage,
} from "src/common/helpers";
import {
  ContactLeadDocument,
  GetContactLeadFilters,
} from "src/common/interfaces";
import { ContactLeadModel } from "src/models";

/**
 * Get admin contact leads.
 * @param filters - Contact lead filters
 * @returns Contact leads connection
 */
export const getAdminLeads = async (filters: GetContactLeadFilters = {}) => {
  const query: FilterQuery<ContactLeadDocument> = {
    ...(filters.status && { status: filters.status }),
    ...(filters.priority && { priority: filters.priority }),
    ...(filters.projectInterest && { projectInterest: filters.projectInterest }),
    ...(filters.search && {
      $or: [
        { name: { $regex: filters.search, $options: "i" } },
        { email: { $regex: filters.search, $options: "i" } },
        { company: { $regex: filters.search, $options: "i" } },
        { message: { $regex: filters.search, $options: "i" } },
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

  const leads = await ContactLeadModel.find(query, null, options);

  return getPageConnection(leads, page, limit);
};
