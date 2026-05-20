"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMediaAssetById = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const mongoose_1 = require("mongoose");
const models_1 = require("../../models");
/**
 * Get media asset by id.
 * @param id - Media asset id
 * @returns Media asset
 * @throws 400 error if id is invalid
 * @throws 404 error if media asset is not found
 */
const getMediaAssetById = async (id) => {
    if (!(0, mongoose_1.isValidObjectId)(id))
        throw http_errors_1.default.BadRequest("Invalid media asset id");
    const mediaAsset = await models_1.MediaAssetModel.findById(id);
    if (!mediaAsset)
        throw http_errors_1.default.NotFound("Media asset not found");
    return mediaAsset;
};
exports.getMediaAssetById = getMediaAssetById;
