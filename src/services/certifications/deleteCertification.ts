import createHttpError from "http-errors";
import { isValidObjectId } from "mongoose";
import { CertificationModel } from "src/models";

/**
 * Delete a certification.
 * @param id - Certification id
 * @returns True if certification is deleted
 * @throws 400 error if id is invalid
 * @throws 404 error if certification is not found
 */
export const deleteCertification = async (id: string) => {
  if (!isValidObjectId(id))
    throw createHttpError.BadRequest("Invalid certification id");

  const certification = await CertificationModel.findByIdAndDelete(id);
  if (!certification) throw createHttpError.NotFound("Certification not found");

  return true;
};
