import createHttpError from "http-errors";
import { Types, isValidObjectId } from "mongoose";
import { EducationModel } from "src/models";

/**
 * Get education by id.
 * @param id - Education id
 * @returns Education
 * @throws 400 error if id is invalid
 * @throws 404 error if education is not found
 */
export const getEducationById = async (
  id: string | Types.ObjectId,
) => {
  if (!isValidObjectId(id)) throw createHttpError.BadRequest("Invalid education id");

  const education = await EducationModel.findById(id);
  if (!education) throw createHttpError.NotFound("Education not found");

  return education;
};
