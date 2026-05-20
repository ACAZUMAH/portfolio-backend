import { AuthAdmin } from "src/common/interfaces";
import { getAdminUserByEmail } from "../adminUser";
import createHttpError from "http-errors";
import { comparePassword, jwtSign } from "src/common/helpers";
import { ClientApp } from "src/common/enums";

/**
 * Authenticates an admin user with email and password.
 * @param email - The email address of the admin user to authenticate.
 * @param password - The password of the admin user to authenticate.
 * @throws NotFound error if no admin user is found with the given email.
 * @throws Unauthorized error if the provided password is not valid.
 * @returns An object containing the admin user and an authentication token.
 */
export const authAdmin = async ({ email, password }: AuthAdmin) => {
  const admin = await getAdminUserByEmail(email);

  if (!admin) throw createHttpError.NotFound("Admin user not found");

  const isMatch = await comparePassword(password, admin.passwordHash);

  if (!isMatch) throw createHttpError.Unauthorized("Invalid password");

  const token = jwtSign({
    id: admin._id,
    adminUserId: admin._id,
    appKey: ClientApp.ADMIN_PORTAL,
  });

  return { admin, token };
};
