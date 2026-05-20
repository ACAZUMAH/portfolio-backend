import { FilterQuery } from "mongoose";
import { ContactLeadDocument } from "src/common/interfaces";
import { ContactLeadModel } from "src/models";

/**
 * Count contact leads.
 * @param filter - Contact lead filters
 * @returns Contact lead count
 */
export const countContactLeads = async (
  filter: FilterQuery<ContactLeadDocument> = {},
) => {
  return ContactLeadModel.countDocuments(filter);
};
