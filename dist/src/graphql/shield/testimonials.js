"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestimonialShield = void 0;
const general_1 = require("./general");
exports.TestimonialShield = {
    Query: {
        adminTestimonials: general_1.isAuthenticated,
    },
    Mutation: {
        createTestimonial: general_1.isAuthenticated,
        updateTestimonial: general_1.isAuthenticated,
    },
};
