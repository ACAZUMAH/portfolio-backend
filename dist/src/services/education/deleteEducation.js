"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEducation = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const mongoose_1 = require("mongoose");
const models_1 = require("../../models");
/**
 * Delete education.
 * @param id - Education id
 * @returns True if education is deleted
 * @throws 400 error if id is invalid
 * @throws 404 error if education is not found
 */
const deleteEducation = async (id) => {
    if (!(0, mongoose_1.isValidObjectId)(id))
        throw http_errors_1.default.BadRequest("Invalid education id");
    const education = await models_1.EducationModel.findByIdAndDelete(id);
    if (!education)
        throw http_errors_1.default.NotFound("Education not found");
    return true;
};
exports.deleteEducation = deleteEducation;
