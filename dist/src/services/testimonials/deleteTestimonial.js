"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTestimonial = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const mongoose_1 = require("mongoose");
const models_1 = require("../../models");
/**
 * Delete a testimonial.
 * @param id - Testimonial id
 * @returns True if testimonial is deleted
 * @throws 400 error if id is invalid
 * @throws 404 error if testimonial is not found
 */
const deleteTestimonial = async (id) => {
    if (!(0, mongoose_1.isValidObjectId)(id))
        throw http_errors_1.default.BadRequest("Invalid testimonial id");
    const testimonial = await models_1.TestimonialModel.findByIdAndDelete(id);
    if (!testimonial)
        throw http_errors_1.default.NotFound("Testimonial not found");
    return true;
};
exports.deleteTestimonial = deleteTestimonial;
