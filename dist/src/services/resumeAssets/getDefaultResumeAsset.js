"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultResumeAsset = void 0;
const models_1 = require("../../models");
/**
 * Get default resume asset.
 * @returns Default resume asset
 */
const getDefaultResumeAsset = async () => {
    return models_1.ResumeAssetModel.findOne({ isDefault: true });
};
exports.getDefaultResumeAsset = getDefaultResumeAsset;
