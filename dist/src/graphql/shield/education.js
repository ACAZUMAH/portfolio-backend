"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationShield = void 0;
const general_1 = require("./general");
exports.EducationShield = {
    Query: {
        getEducationById: general_1.isAuthenticated,
        getEducation: general_1.isAuthenticated,
    },
    Mutation: {
        createEducation: general_1.isAuthenticated,
        updateEducation: general_1.isAuthenticated,
        deleteEducation: general_1.isAuthenticated,
    },
};
