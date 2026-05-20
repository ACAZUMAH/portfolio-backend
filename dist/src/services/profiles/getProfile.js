"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfile = void 0;
const models_1 = require("../../models");
/**
 * Get portfolio profile.
 * @returns Profile
 */
const getProfile = async () => {
    return models_1.ProfileModel.findOne().sort({ createdAt: 1 });
};
exports.getProfile = getProfile;
