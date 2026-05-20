"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSkill = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const models_1 = require("../../models");
/**
 * Create a skill.
 * @param data - Skill data
 * @returns Created skill
 */
const createSkill = async (data) => {
    const skill = await models_1.SkillModel.create(data);
    if (!skill) {
        throw (0, http_errors_1.default)(500, "Failed to create skill");
    }
    return skill;
};
exports.createSkill = createSkill;
