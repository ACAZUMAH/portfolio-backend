"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProjectLoaders = void 0;
const projects_1 = require("./projects");
const createProjectLoaders = () => ({
    projectLoader: (0, projects_1.createProjectLoader)(),
});
exports.createProjectLoaders = createProjectLoaders;
