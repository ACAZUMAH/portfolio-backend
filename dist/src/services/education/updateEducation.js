"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEducation = void 0;
const models_1 = require("../../models");
const getEducationById_1 = require("./getEducationById");
/**
 * Update education.
 * @param data.id - Education id
 * @param data - Education update data
 * @returns Updated education
 * @throws 400 error if id is invalid
 * @throws 404 error if education is not found
 */
const updateEducation = async (data) => {
    const education = await (0, getEducationById_1.getEducationById)(data.id);
    const update = {};
    if (data.program)
        update.program = data.program;
    if (data.institution)
        update.institution = data.institution;
    if (data.location)
        update.location = data.location;
    if (data.startDate)
        update.startDate = data.startDate;
    if (data.endDate)
        update.endDate = data.endDate;
    if (data.order)
        update.order = data.order;
    return await models_1.EducationModel.findByIdAndUpdate(education._id, { $set: update }, { new: true });
};
exports.updateEducation = updateEducation;
