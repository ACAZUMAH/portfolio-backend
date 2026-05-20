import createHttpError from "http-errors";
import { Types, isValidObjectId } from "mongoose";
import { CertificationModel } from "src/models";

/**
 * Get certification by id.
 * @param id - Certification id
 * @returns Certification
 * @throws 400 error if id is invalid
 * @throws 404 error if certification is not found
 */
export const getCertificationById = async (
  id: string | Types.ObjectId,
) => {
  if (!isValidObjectId(id))
    throw createHttpError.BadRequest("Invalid certification id");

  const certification = await CertificationModel.findById(id);
  if (!certification) throw createHttpError.NotFound("Certification not found");

  return certification;
};
