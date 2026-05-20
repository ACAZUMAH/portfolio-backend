"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createResumeAsset = void 0;
const models_1 = require("../../models");
/**
 * Create a resume asset.
 * @param data - Resume asset data
 * @returns Created resume asset
 */
const createResumeAsset = async (data) => {
    if (data.isDefault)
        await models_1.ResumeAssetModel.updateMany({}, { isDefault: false });
    return models_1.ResumeAssetModel.create(data);
};
exports.createResumeAsset = createResumeAsset;
