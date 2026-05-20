"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMediaAsset = void 0;
const mongoose_1 = require("mongoose");
const models_1 = require("../../models");
const getMediaAssetById_1 = require("./getMediaAssetById");
/**
 * Update a media asset.
 * @param data.id - Media asset id
 * @param data - Media asset update data
 * @returns Updated media asset
 * @throws 400 error if id is invalid
 * @throws 404 error if media asset is not found
 */
const updateMediaAsset = async (data) => {
    const mediaAsset = await (0, getMediaAssetById_1.getMediaAssetById)(data.id);
    const update = {};
    if (data.title)
        update.title = data.title;
    if (data.type)
        update.type = data.type;
    if (data.alt)
        update.alt = data.alt;
    if (data.url)
        update.url = data.url;
    if (data.projectId && (0, mongoose_1.isValidObjectId)(data.projectId))
        update.projectId = data.projectId;
    return await models_1.MediaAssetModel.findByIdAndUpdate(mediaAsset._id, { $set: update }, { new: true });
};
exports.updateMediaAsset = updateMediaAsset;
