import { isAuthenticated } from "./general";

export const TestimonialShield = {
  Query: {
    adminTestimonials: isAuthenticated,
  },

  Mutation: {
    createTestimonial: isAuthenticated,
    updateTestimonial: isAuthenticated,
  },
};
