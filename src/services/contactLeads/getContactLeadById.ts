import createHttpError from "http-errors";
import { Types, isValidObjectId } from "mongoose";
import { ContactLeadModel } from "src/models";

/**
 * Get contact lead by id.
 * @param id - Contact lead id
 * @returns Contact lead
 * @throws 400 error if id is invalid
 * @throws 404 error if contact lead is not found
 */
export const getContactLeadById = async (
  id: string | Types.ObjectId,
) => {
  if (!isValidObjectId(id))
    throw createHttpError.BadRequest("Invalid contact lead id");

  const contactLead = await ContactLeadModel.findById(id);
  if (!contactLead) throw createHttpError.NotFound("Contact lead not found");

  return contactLead;
};
