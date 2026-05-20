"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaAssetModel = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../../common/enums");
const mediaAssetSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    type: {
        type: String,
        enum: Object.values(enums_1.MediaType),
        default: enums_1.MediaType.OTHER,
    },
    alt: { type: String },
    projectId: { type: String },
}, { timestamps: true });
exports.MediaAssetModel = (0, mongoose_1.model)(enums_1.Collections.MediaAssets, mediaAssetSchema);
