"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTestimonialById = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const mongoose_1 = require("mongoose");
const models_1 = require("../../models");
/**
 * Get testimonial by id.
 * @param id - Testimonial id
 * @returns Testimonial
 * @throws 400 error if id is invalid
 * @throws 404 error if testimonial is not found
 */
const getTestimonialById = async (id) => {
    if (!(0, mongoose_1.isValidObjectId)(id))
        throw http_errors_1.default.BadRequest("Invalid testimonial id");
    const testimonial = await models_1.TestimonialModel.findById(id);
    if (!testimonial)
        throw http_errors_1.default.NotFound("Testimonial not found");
    return testimonial;
};
exports.getTestimonialById = getTestimonialById;
