"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceShield = void 0;
const general_1 = require("./general");
exports.ExperienceShield = {
    Query: {
        getExperienceById: general_1.isAuthenticated,
        getExperiences: general_1.isAuthenticated,
    },
    Mutation: {
        createExperience: general_1.isAuthenticated,
        updateExperience: general_1.isAuthenticated,
        deleteExperience: general_1.isAuthenticated,
    },
};
