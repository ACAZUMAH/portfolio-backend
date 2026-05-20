"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfileById = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const mongoose_1 = require("mongoose");
const models_1 = require("../../models");
/**
 * Get profile by id.
 * @param id - Profile id
 * @returns Profile
 * @throws 400 error if id is invalid
 * @throws 404 error if profile is not found
 */
const getProfileById = async (id) => {
    if (!(0, mongoose_1.isValidObjectId)(id))
        throw http_errors_1.default.BadRequest("Invalid profile id");
    const profile = await models_1.ProfileModel.findById(id);
    console.log("Profile:", JSON.stringify(profile, null, 2));
    if (!profile)
        throw http_errors_1.default.NotFound("Profile not found");
    return profile;
};
exports.getProfileById = getProfileById;
