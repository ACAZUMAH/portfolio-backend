"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAvailabilityStatusById = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const mongoose_1 = require("mongoose");
const models_1 = require("../../models");
/**
 * Get availability status by id.
 * @param id - Availability status id
 * @returns Availability status
 * @throws 400 error if id is invalid
 * @throws 404 error if availability status is not found
 */
const getAvailabilityStatusById = async (id) => {
    if (!(0, mongoose_1.isValidObjectId)(id))
        throw http_errors_1.default.BadRequest("Invalid availability status id");
    const availabilityStatus = await models_1.AvailabilityStatusModel.findById(id);
    if (!availabilityStatus)
        throw http_errors_1.default.NotFound("Availability status not found");
    return availabilityStatus;
};
exports.getAvailabilityStatusById = getAvailabilityStatusById;
