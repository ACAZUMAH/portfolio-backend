"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const models_1 = require("../../models");
/**
 * Create a project.
 * @param data - Project data
 * @returns Created project
 */
const createProject = async (data) => {
    const createData = Object.fromEntries(Object.entries(data).filter(([, value]) => value !== undefined && value !== null));
    const project = await models_1.ProjectModel.create(createData);
    if (!project) {
        throw (0, http_errors_1.default)(500, "Failed to create project");
    }
    return project;
};
exports.createProject = createProject;
