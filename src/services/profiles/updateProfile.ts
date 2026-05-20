import { ProfileModel } from "src/models";
import { getProfileById } from "./getProfileById";
import { UpdateProfileInput } from "src/common/interfaces/graphql";

/**
 * Update portfolio profile.
 * @param data - Profile update data
 * @returns Updated or created profile
 */
export const updateProfile = async (data: UpdateProfileInput) => {
  const profile = await getProfileById(data.id);

  const update: Record<string, any> = {};

  if (data.fullName) update.fullName = data.fullName;
  if (data.title) update.title = data.title;
  if (data.headline) update.headline = data.headline;
  if (data.bio) update.bio = data.bio;
  if (data.email) update.email = data.email;
  if (data.phone) update.phone = data.phone;
  if (data.location) update.location = data.location;
  if (data.linkedInUrl) update.linkedInUrl = data.linkedInUrl;
  if (data.githubUrl) update.githubUrl = data.githubUrl;
  if (data.twitterUrl) update.twitterUrl = data.twitterUrl;
  if (data.seo) update.seo = data.seo;

  return ProfileModel.findByIdAndUpdate(
    profile._id,
    { $set: update },
    { new: true },
  );
};
