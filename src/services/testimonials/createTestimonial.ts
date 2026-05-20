import { CreateTestimonialInput } from "src/common/interfaces/graphql";
import { TestimonialModel } from "src/models";

/**
 * Create a testimonial.
 * @param data - Testimonial data
 * @returns Created testimonial
 */
export const createTestimonial = async (data: CreateTestimonialInput) => {
  return TestimonialModel.create(data);
};
