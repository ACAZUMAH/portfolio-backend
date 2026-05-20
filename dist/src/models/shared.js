"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seoSchema = void 0;
const mongoose_1 = require("mongoose");
exports.seoSchema = new mongoose_1.Schema({
    title: String,
    description: String,
    keywords: [String],
    ogImageId: String,
}, { _id: false });
