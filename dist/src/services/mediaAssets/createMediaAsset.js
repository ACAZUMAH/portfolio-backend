"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMediaAsset = void 0;
const models_1 = require("../../models");
/**
 * Create a media asset.
 * @param data - Media asset data
 * @returns Created media asset
 */
const createMediaAsset = async (data) => {
    return models_1.MediaAssetModel.create(data);
};
exports.createMediaAsset = createMediaAsset;
