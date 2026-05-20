"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateResumeAsset = void 0;
const models_1 = require("../../models");
const getResumeAssetById_1 = require("./getResumeAssetById");
/**
 * Update a resume asset.
 * @param data.id - Resume asset id
 * @param data - Resume asset update data
 * @returns Updated resume asset
 * @throws 400 error if id is invalid
 * @throws 404 error if resume asset is not found
 */
const updateResumeAsset = async (data) => {
    const resumeAsset = await (0, getResumeAssetById_1.getResumeAssetById)(data.id);
    const update = {};
    if (data.title)
        update.title = data.title;
    if (data.url)
        update.url = data.url;
    if (data.focus)
        update.focus = data.focus;
    if (data.isDefault)
        update.isDefault = data.isDefault;
    if (data.isDefault) {
        await models_1.ResumeAssetModel.updateMany({ _id: { $ne: resumeAsset._id } }, { isDefault: false });
    }
    return await models_1.ResumeAssetModel.findByIdAndUpdate(resumeAsset._id, { $set: update }, {
        new: true,
    });
};
exports.updateResumeAsset = updateResumeAsset;
