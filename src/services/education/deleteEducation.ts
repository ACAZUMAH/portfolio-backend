import createHttpError from "http-errors";
import { isValidObjectId } from "mongoose";
import { EducationModel } from "src/models";

/**
 * Delete education.
 * @param id - Education id
 * @returns True if education is deleted
 * @throws 400 error if id is invalid
 * @throws 404 error if education is not found
 */
export const deleteEducation = async (id: string) => {
  if (!isValidObjectId(id)) throw createHttpError.BadRequest("Invalid education id");

  const education = await EducationModel.findByIdAndDelete(id);
  if (!education) throw createHttpError.NotFound("Education not found");

  return true;
};
