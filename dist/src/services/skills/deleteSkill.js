"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSkill = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const mongoose_1 = require("mongoose");
const models_1 = require("../../models");
/**
 * Delete a skill.
 * @param id - Skill id
 * @returns True if skill is deleted
 * @throws 400 error if id is invalid
 * @throws 404 error if skill is not found
 */
const deleteSkill = async (id) => {
    if (!(0, mongoose_1.isValidObjectId)(id))
        throw http_errors_1.default.BadRequest("Invalid skill id");
    const skill = await models_1.SkillModel.findByIdAndDelete(id);
    if (!skill)
        throw http_errors_1.default.NotFound("Skill not found");
    return true;
};
exports.deleteSkill = deleteSkill;
