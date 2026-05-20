import { ContactLeadModel } from "src/models";
import { getContactLeadById } from "./getContactLeadById";
import { UpdateContactLeadInput } from "src/common/interfaces/graphql";

/**
 * Update a contact lead.
 * @param data.id - Contact lead id
 * @param data - Contact lead update data
 * @returns Updated contact lead
 * @throws 400 error if id is invalid
 * @throws 404 error if contact lead is not found
 */
export const updateContactLead = async (data: UpdateContactLeadInput) => {
  const contactLead = await getContactLeadById(data.id);

  const update: Record<string, any> = {};

  if (data.followUpDate) update.followUpDate = data.followUpDate;
  if (data.status) update.status = data.status;
  if (data.notes) update.notes = data.notes;
  if (data.priority) update.priority = data.priority;

  return await ContactLeadModel.findByIdAndUpdate(
    contactLead._id,
    { $set: update },
    { new: true },
  );
};
