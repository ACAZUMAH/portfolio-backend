"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAvailabilityStatus = void 0;
const models_1 = require("../../models");
/**
 * Create an availability status.
 * @param data - Availability status data
 * @returns Created availability status
 */
const createAvailabilityStatus = async (data) => {
    return models_1.AvailabilityStatusModel.create(data);
};
exports.createAvailabilityStatus = createAvailabilityStatus;
