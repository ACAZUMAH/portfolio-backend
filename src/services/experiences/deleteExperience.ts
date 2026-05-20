import createHttpError from "http-errors";
import { isValidObjectId } from "mongoose";
import { ExperienceModel } from "src/models";

/**
 * Delete an experience.
 * @param id - Experience id
 * @returns True if experience is deleted
 * @throws 400 error if id is invalid
 * @throws 404 error if experience is not found
 */
export const deleteExperience = async (id: string) => {
  if (!isValidObjectId(id)) throw createHttpError.BadRequest("Invalid experience id");

  const experience = await ExperienceModel.findByIdAndDelete(id);
  if (!experience) throw createHttpError.NotFound("Experience not found");

  return true;
};
