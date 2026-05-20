"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProjectLoader = void 0;
const dataloader_1 = __importDefault(require("dataloader"));
const models_1 = require("../../models");
const createProjectLoader = () => {
    const getProjectsByIds = async (ids) => {
        const projects = await models_1.ProjectModel.find({ _id: { $in: ids } });
        return ids.map(id => projects.find(project => String(project._id) === id) ?? null);
    };
    return new dataloader_1.default(getProjectsByIds);
};
exports.createProjectLoader = createProjectLoader;
