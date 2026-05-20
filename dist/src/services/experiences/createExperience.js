"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExperience = void 0;
const models_1 = require("../../models");
/**
 * Create an experience.
 * @param data - Experience data
 * @returns Created experience
 */
const createExperience = async (data) => {
    return models_1.ExperienceModel.create(data);
};
exports.createExperience = createExperience;
