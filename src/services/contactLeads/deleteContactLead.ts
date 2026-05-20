import createHttpError from "http-errors";
import { isValidObjectId } from "mongoose";
import { ContactLeadModel } from "src/models";

/**
 * Delete a contact lead.
 * @param id - Contact lead id
 * @returns True if contact lead is deleted
 * @throws 400 error if id is invalid
 * @throws 404 error if contact lead is not found
 */
export const deleteContactLead = async (id: string) => {
  if (!isValidObjectId(id))
    throw createHttpError.BadRequest("Invalid contact lead id");

  const contactLead = await ContactLeadModel.findByIdAndDelete(id);
  if (!contactLead) throw createHttpError.NotFound("Contact lead not found");

  return true;
};
