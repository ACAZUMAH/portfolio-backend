"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLatestAvailabilityStatus = void 0;
const models_1 = require("../../models");
/**
 * Get latest availability status.
 * @returns Latest availability status
 */
const getLatestAvailabilityStatus = async () => {
    return models_1.AvailabilityStatusModel.findOne().sort({ createdAt: -1 });
};
exports.getLatestAvailabilityStatus = getLatestAvailabilityStatus;
