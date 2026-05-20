"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestimonialModel = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../../common/enums");
const testimonialSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    role: { type: String },
    company: { type: String },
    quote: { type: String, required: true },
    isVisible: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
}, { timestamps: true });
exports.TestimonialModel = (0, mongoose_1.model)(enums_1.Collections.Testimonials, testimonialSchema);
