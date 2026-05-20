"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSkillById = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const mongoose_1 = require("mongoose");
const models_1 = require("../../models");
/**
 * Get skill by id.
 * @param id - Skill id
 * @returns Skill
 * @throws 400 error if id is invalid
 * @throws 404 error if skill is not found
 */
const getSkillById = async (id) => {
    if (!(0, mongoose_1.isValidObjectId)(id))
        throw http_errors_1.default.BadRequest("Invalid skill id");
    const skill = await models_1.SkillModel.findById(id);
    if (!skill)
        throw http_errors_1.default.NotFound("Skill not found");
    return skill;
};
exports.getSkillById = getSkillById;
