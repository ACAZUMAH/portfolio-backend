"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillModel = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../../common/enums");
const skillSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
}, { timestamps: true });
exports.SkillModel = (0, mongoose_1.model)(enums_1.Collections.Skills, skillSchema);
