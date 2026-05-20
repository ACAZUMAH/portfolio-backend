"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEducation = void 0;
const models_1 = require("../../models");
/**
 * Create education.
 * @param data - Education data
 * @returns Created education
 */
const createEducation = async (data) => {
    return models_1.EducationModel.create(data);
};
exports.createEducation = createEducation;
