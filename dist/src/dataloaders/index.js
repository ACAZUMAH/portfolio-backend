"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDataLoaders = void 0;
const assets_1 = require("./assets");
const projects_1 = require("./projects");
const uploads_1 = require("./uploads");
const createDataLoaders = () => ({
    ...(0, projects_1.createProjectLoaders)(),
    ...(0, assets_1.createAssetLoaders)(),
    ...(0, uploads_1.createUploadLoaders)(),
});
exports.createDataLoaders = createDataLoaders;
