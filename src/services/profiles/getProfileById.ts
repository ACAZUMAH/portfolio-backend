import createHttpError from "http-errors";
import { Types, isValidObjectId } from "mongoose";
import { ProfileModel } from "src/models";

/**
 * Get profile by id.
 * @param id - Profile id
 * @returns Profile
 * @throws 400 error if id is invalid
 * @throws 404 error if profile is not found
 */
export const getProfileById = async (id: string | Types.ObjectId) => {
  if (!isValidObjectId(id))
    throw createHttpError.BadRequest("Invalid profile id");

  const profile = await ProfileModel.findById(id);

  console.log("Profile:", JSON.stringify(profile, null, 2));

  if (!profile) throw createHttpError.NotFound("Profile not found");

  return profile;
};
