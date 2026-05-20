import { isValidObjectId, Types } from "mongoose";
import { AdminUserModel } from "src/models";
import createHttpError from "http-errors";

/**
 * Gets an admin user by their ID.
 * @param id The ID of the admin user to retrieve.
 * @throws BadRequest error if the provided id is not a valid ObjectId.
 * @throws NotFound error if no admin user is found with the given ID.
 * @returns The admin user.
 */
export const getAdminUserById = async (id: string | Types.ObjectId) => {
  if (!isValidObjectId(id))
    throw createHttpError.BadRequest("Invalid admin user id");

  const adminUser = await AdminUserModel.findById(id);

  if (!adminUser) throw createHttpError.NotFound("Admin user not found");

  return adminUser;
};

/**
 * Gets an admin user by their email.
 * @param email The email of the admin user to retrieve.
 * @returns The admin user.
 */
export const getAdminUserByEmail = async (email: string) => {
  return await AdminUserModel.findOne({ email });
};
