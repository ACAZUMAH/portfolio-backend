import createHttpError from "http-errors";
import { Types, isValidObjectId } from "mongoose";
import { ExperienceModel } from "src/models";

/**
 * Get experience by id.
 * @param id - Experience id
 * @returns Experience
 * @throws 400 error if id is invalid
 * @throws 404 error if experience is not found
 */
export const getExperienceById = async (
  id: string | Types.ObjectId,
) => {
  if (!isValidObjectId(id)) throw createHttpError.BadRequest("Invalid experience id");

  const experience = await ExperienceModel.findById(id);
  if (!experience) throw createHttpError.NotFound("Experience not found");

  return experience;
};
