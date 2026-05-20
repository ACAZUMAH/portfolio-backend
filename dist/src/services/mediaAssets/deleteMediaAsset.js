"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMediaAsset = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const mongoose_1 = require("mongoose");
const models_1 = require("../../models");
/**
 * Delete a media asset.
 * @param id - Media asset id
 * @returns True if media asset is deleted
 * @throws 400 error if id is invalid
 * @throws 404 error if media asset is not found
 */
const deleteMediaAsset = async (id) => {
    if (!(0, mongoose_1.isValidObjectId)(id))
        throw http_errors_1.default.BadRequest("Invalid media asset id");
    const mediaAsset = await models_1.MediaAssetModel.findByIdAndDelete(id);
    if (!mediaAsset)
        throw http_errors_1.default.NotFound("Media asset not found");
    return true;
};
exports.deleteMediaAsset = deleteMediaAsset;
