"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMediaAssetsByProjectIdLoader = void 0;
const dataloader_1 = __importDefault(require("dataloader"));
const models_1 = require("../../models");
const createMediaAssetsByProjectIdLoader = () => {
    const getMediaAssetsByProjectIds = async (projectIds) => {
        const mediaAssets = await models_1.MediaAssetModel.find({ projectId: { $in: projectIds } });
        return projectIds.map(projectId => mediaAssets.filter(mediaAsset => mediaAsset.projectId === projectId));
    };
    return new dataloader_1.default(getMediaAssetsByProjectIds);
};
exports.createMediaAssetsByProjectIdLoader = createMediaAssetsByProjectIdLoader;
