"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExperienceById = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const mongoose_1 = require("mongoose");
const models_1 = require("../../models");
/**
 * Get experience by id.
 * @param id - Experience id
 * @returns Experience
 * @throws 400 error if id is invalid
 * @throws 404 error if experience is not found
 */
const getExperienceById = async (id) => {
    if (!(0, mongoose_1.isValidObjectId)(id))
        throw http_errors_1.default.BadRequest("Invalid experience id");
    const experience = await models_1.ExperienceModel.findById(id);
    if (!experience)
        throw http_errors_1.default.NotFound("Experience not found");
    return experience;
};
exports.getExperienceById = getExperienceById;
