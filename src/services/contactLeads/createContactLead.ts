import { CreateContactLeadInput } from "src/common/interfaces/graphql";
import { ContactLeadModel } from "src/models";

/**
 * Create a contact lead.
 * @param data - Contact lead data
 * @returns Created contact lead
 */
export const createContactLead = async (data: CreateContactLeadInput) => {
  return ContactLeadModel.create(data);
};
