"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationModel = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../../common/enums");
const educationSchema = new mongoose_1.Schema({
    institution: { type: String, required: true },
    program: { type: String, required: true },
    location: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    order: { type: Number, default: 0 },
}, { timestamps: true });
exports.EducationModel = (0, mongoose_1.model)(enums_1.Collections.Education, educationSchema);
