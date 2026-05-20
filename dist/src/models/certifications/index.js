"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificationModel = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../../common/enums");
const certificationSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    issuer: { type: String },
    date: { type: String },
    url: { type: String },
    order: { type: Number, default: 0 },
}, { timestamps: true });
exports.CertificationModel = (0, mongoose_1.model)(enums_1.Collections.Certifications, certificationSchema);
