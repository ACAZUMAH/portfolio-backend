"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seoSchema = void 0;
const mongoose_1 = require("mongoose");
exports.seoSchema = new mongoose_1.Schema({
    title: { type: String },
    description: { type: String },
    keywords: { type: [String] },
    ogImageId: { type: String },
}, { _id: false });
