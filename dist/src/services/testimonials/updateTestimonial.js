"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTestimonial = void 0;
const models_1 = require("../../models");
const getTestimonialById_1 = require("./getTestimonialById");
/**
 * Update a testimonial.
 * @param data.id - Testimonial id
 * @param data - Testimonial update data
 * @returns Updated testimonial
 * @throws 400 error if id is invalid
 * @throws 404 error if testimonial is not found
 */
const updateTestimonial = async (data) => {
    const testimonial = await (0, getTestimonialById_1.getTestimonialById)(data.id);
    const update = {};
    if (data.name)
        update.name = data.name;
    if (data.role)
        update.role = data.role;
    if (data.company)
        update.company = data.company;
    if (data.quote)
        update.quote = data.quote;
    if (data.order)
        update.order = data.order;
    if (data.isVisible !== undefined)
        update.isVisible = data.isVisible;
    return await models_1.TestimonialModel.findByIdAndUpdate(testimonial._id, { $set: update }, {
        new: true,
    });
};
exports.updateTestimonial = updateTestimonial;
