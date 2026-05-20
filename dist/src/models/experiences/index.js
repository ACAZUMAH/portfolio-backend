"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceModel = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../../common/enums");
const experienceSchema = new mongoose_1.Schema({
    role: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String },
    workMode: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    isCurrent: { type: Boolean, default: false },
    highlights: [String],
    order: { type: Number, default: 0 },
}, { timestamps: true });
exports.ExperienceModel = (0, mongoose_1.model)(enums_1.Collections.Experiences, experienceSchema);
