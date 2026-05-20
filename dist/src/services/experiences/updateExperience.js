"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateExperience = void 0;
const models_1 = require("../../models");
const getExperienceById_1 = require("./getExperienceById");
/**
 * Update an experience.
 * @param data.id - Experience id
 * @param data - Experience update data
 * @returns Updated experience
 * @throws 400 error if id is invalid
 * @throws 404 error if experience is not found
 */
const updateExperience = async (data) => {
    const experience = await (0, getExperienceById_1.getExperienceById)(data.id);
    const update = {};
    if (data.role)
        update.role = data.role;
    if (data.company)
        update.company = data.company;
    if (data.location)
        update.location = data.location;
    if (data.workMode)
        update.workMode = data.workMode;
    if (data.startDate)
        update.startDate = data.startDate;
    if (data.endDate)
        update.endDate = data.endDate;
    if (data.isCurrent)
        update.isCurrent = data.isCurrent;
    if (data.highlights)
        update.highlights = data.highlights;
    if (data.order)
        update.order = data.order;
    return await models_1.ExperienceModel.findByIdAndUpdate(data.id, { $set: update }, { new: true });
};
exports.updateExperience = updateExperience;
