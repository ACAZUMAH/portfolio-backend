"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumeAssetModel = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../../common/enums");
const resumeAssetSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    focus: { type: String },
    isDefault: { type: Boolean, default: false },
    downloads: { type: Number, default: 0 },
}, { timestamps: true });
exports.ResumeAssetModel = (0, mongoose_1.model)(enums_1.Collections.ResumeAssets, resumeAssetSchema);
