"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProject = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const mongoose_1 = require("mongoose");
const models_1 = require("../../models");
/**
 * Delete a project.
 * @param id - Project id
 * @returns True if project is deleted
 * @throws 400 error if id is invalid
 * @throws 404 error if project is not found
 */
const deleteProject = async (id) => {
    if (!(0, mongoose_1.isValidObjectId)(id))
        throw http_errors_1.default.BadRequest("Invalid project id");
    const project = await models_1.ProjectModel.findByIdAndDelete(id);
    if (!project)
        throw http_errors_1.default.NotFound("Project not found");
    return true;
};
exports.deleteProject = deleteProject;
