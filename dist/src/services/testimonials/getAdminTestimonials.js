"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminTestimonials = void 0;
const helpers_1 = require("../../common/helpers");
const models_1 = require("../../models");
/**
 * Get admin testimonials.
 * @param filters - Testimonial filters
 * @returns Testimonials connection
 */
const getAdminTestimonials = async (filters = {}) => {
    const query = {
        ...(filters.company && { company: filters.company }),
        ...(filters.isVisible !== undefined && { isVisible: filters.isVisible }),
        ...(filters.search && {
            $or: [
                { name: { $regex: filters.search, $options: "i" } },
                { role: { $regex: filters.search, $options: "i" } },
                { company: { $regex: filters.search, $options: "i" } },
                { quote: { $regex: filters.search, $options: "i" } },
            ],
        }),
    };
    const page = (0, helpers_1.getSanitizePage)(filters.page);
    const limit = (0, helpers_1.getSanitizeLimit)(filters.limit);
    const skip = (0, helpers_1.getSanitizeOffset)(page, limit);
    const options = {
        skip,
        lean: true,
        limit: limit + 1,
        sort: { order: 1, createdAt: -1 },
    };
    const testimonials = await models_1.TestimonialModel.find(query, null, options);
    return (0, helpers_1.getPageConnection)(testimonials, page, limit);
};
exports.getAdminTestimonials = getAdminTestimonials;
