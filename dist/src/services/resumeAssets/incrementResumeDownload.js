"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incrementResumeDownload = void 0;
const mongoose_1 = require("mongoose");
const models_1 = require("../../models");
/**
 * Increment resume download count.
 * @param id - Resume asset id
 * @returns Updated resume asset or null
 */
const incrementResumeDownload = async (id) => {
    if (!(0, mongoose_1.isValidObjectId)(id))
        return null;
    return models_1.ResumeAssetModel.findByIdAndUpdate(id, { $inc: { downloads: 1 } }, { new: true });
};
exports.incrementResumeDownload = incrementResumeDownload;
