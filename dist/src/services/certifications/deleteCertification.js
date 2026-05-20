"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCertification = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const mongoose_1 = require("mongoose");
const models_1 = require("../../models");
/**
 * Delete a certification.
 * @param id - Certification id
 * @returns True if certification is deleted
 * @throws 400 error if id is invalid
 * @throws 404 error if certification is not found
 */
const deleteCertification = async (id) => {
    if (!(0, mongoose_1.isValidObjectId)(id))
        throw http_errors_1.default.BadRequest("Invalid certification id");
    const certification = await models_1.CertificationModel.findByIdAndDelete(id);
    if (!certification)
        throw http_errors_1.default.NotFound("Certification not found");
    return true;
};
exports.deleteCertification = deleteCertification;
