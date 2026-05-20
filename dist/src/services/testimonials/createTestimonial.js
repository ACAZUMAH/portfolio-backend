"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTestimonial = void 0;
const models_1 = require("../../models");
/**
 * Create a testimonial.
 * @param data - Testimonial data
 * @returns Created testimonial
 */
const createTestimonial = async (data) => {
    return models_1.TestimonialModel.create(data);
};
exports.createTestimonial = createTestimonial;
