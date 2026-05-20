import { Types } from "mongoose";
import { ProfileModel } from "src/models";

/**
 * Get portfolio profile.
 * @returns Profile
 */
export const getProfile = async () => {
  return ProfileModel.findOne().sort({ createdAt: 1 });
};
