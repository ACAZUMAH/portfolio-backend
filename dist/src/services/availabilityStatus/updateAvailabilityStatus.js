"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAvailabilityStatus = void 0;
const models_1 = require("../../models");
const getAvailabilityStatusById_1 = require("./getAvailabilityStatusById");
/**
 * Update an availability status.
 * @param data.id - Availability status id
 * @param data - Availability status update data
 * @returns Updated availability status
 * @throws 400 error if id is invalid
 * @throws 404 error if availability status is not found
 */
const updateAvailabilityStatus = async (data) => {
    const availabilityStatus = await (0, getAvailabilityStatusById_1.getAvailabilityStatusById)(data.id);
    const update = {};
    if (data.description)
        update.description = data.description;
    if (data.acceptingWork)
        update.acceptingWork = data.acceptingWork;
    if (data.label)
        update.label = data.label;
    return await models_1.AvailabilityStatusModel.findByIdAndUpdate(availabilityStatus._id, { $set: update }, {
        new: true,
    });
};
exports.updateAvailabilityStatus = updateAvailabilityStatus;
