"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProfile = void 0;
const models_1 = require("../../models");
const getProfileById_1 = require("./getProfileById");
/**
 * Update portfolio profile.
 * @param data - Profile update data
 * @returns Updated or created profile
 */
const updateProfile = async (data) => {
    const profile = await (0, getProfileById_1.getProfileById)(data.id);
    const update = {};
    if (data.fullName)
        update.fullName = data.fullName;
    if (data.title)
        update.title = data.title;
    if (data.headline)
        update.headline = data.headline;
    if (data.bio)
        update.bio = data.bio;
    if (data.email)
        update.email = data.email;
    if (data.phone)
        update.phone = data.phone;
    if (data.location)
        update.location = data.location;
    if (data.linkedInUrl)
        update.linkedInUrl = data.linkedInUrl;
    if (data.githubUrl)
        update.githubUrl = data.githubUrl;
    if (data.twitterUrl)
        update.twitterUrl = data.twitterUrl;
    if (data.seo)
        update.seo = data.seo;
    return models_1.ProfileModel.findByIdAndUpdate(profile._id, { $set: update }, { new: true });
};
exports.updateProfile = updateProfile;
