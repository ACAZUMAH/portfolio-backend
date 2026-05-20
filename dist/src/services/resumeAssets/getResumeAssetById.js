"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResumeAssetById = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const mongoose_1 = require("mongoose");
const models_1 = require("../../models");
/**
 * Get resume asset by id.
 * @param id - Resume asset id
 * @returns Resume asset
 * @throws 400 error if id is invalid
 * @throws 404 error if resume asset is not found
 */
const getResumeAssetById = async (id) => {
    if (!(0, mongoose_1.isValidObjectId)(id))
        throw http_errors_1.default.BadRequest("Invalid resume asset id");
    const resumeAsset = await models_1.ResumeAssetModel.findById(id);
    if (!resumeAsset)
        throw http_errors_1.default.NotFound("Resume asset not found");
    return resumeAsset;
};
exports.getResumeAssetById = getResumeAssetById;
