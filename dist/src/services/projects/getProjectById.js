"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectById = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const mongoose_1 = require("mongoose");
const models_1 = require("../../models");
/**
 * Get project by id.
 * @param id - Project id
 * @returns Project
 * @throws 400 error if id is invalid
 * @throws 404 error if project is not found
 */
const getProjectById = async (id) => {
    if (!(0, mongoose_1.isValidObjectId)(id))
        throw http_errors_1.default.BadRequest("Invalid project id");
    const project = await models_1.ProjectModel.findById(id);
    if (!project)
        throw http_errors_1.default.NotFound("Project not found");
    return project;
};
exports.getProjectById = getProjectById;
