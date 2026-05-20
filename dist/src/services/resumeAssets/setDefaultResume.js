"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDefaultResume = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const mongoose_1 = require("mongoose");
const models_1 = require("../../models");
/**
 * Set default resume asset.
 * @param id - Resume asset id
 * @returns Updated resume asset
 * @throws 400 error if id is invalid
 * @throws 404 error if resume asset is not found
 */
const setDefaultResume = async (id) => {
    if (!(0, mongoose_1.isValidObjectId)(id))
        throw http_errors_1.default.BadRequest("Invalid resume asset id");
    const resumeAsset = await models_1.ResumeAssetModel.findById(id);
    if (!resumeAsset)
        throw http_errors_1.default.NotFound("Resume asset not found");
    await models_1.ResumeAssetModel.updateMany({}, { isDefault: false });
    resumeAsset.isDefault = true;
    await resumeAsset.save();
    return resumeAsset;
};
exports.setDefaultResume = setDefaultResume;
