"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillShield = void 0;
const general_1 = require("./general");
exports.SkillShield = {
    Query: {
        getSkillById: general_1.isAuthenticated,
        getSkills: general_1.isAuthenticated,
    },
    Mutation: {
        createSkill: general_1.isAuthenticated,
        updateSkill: general_1.isAuthenticated,
        deleteSkill: general_1.isAuthenticated,
    },
};
