"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAssetLoaders = void 0;
const mediaAssets_1 = require("./mediaAssets");
const resumeAssets_1 = require("./resumeAssets");
const createAssetLoaders = () => ({
    mediaAssetsByProjectIdLoader: (0, mediaAssets_1.createMediaAssetsByProjectIdLoader)(),
    resumeAssetLoader: (0, resumeAssets_1.createResumeAssetLoader)(),
});
exports.createAssetLoaders = createAssetLoaders;
