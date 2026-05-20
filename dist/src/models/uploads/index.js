"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadModel = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../../common/enums");
const uploadSchema = new mongoose_1.Schema({
    filename: { type: String, required: true },
    directory: { type: String, required: true },
    mimeType: { type: String, required: true },
    size: { type: Number, required: true },
}, {
    timestamps: true,
});
exports.UploadModel = (0, mongoose_1.model)(enums_1.Collections.Uploads, uploadSchema);
