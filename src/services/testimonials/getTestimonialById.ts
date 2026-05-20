import createHttpError from "http-errors";
import { Types, isValidObjectId } from "mongoose";
import { TestimonialModel } from "src/models";

/**
 * Get testimonial by id.
 * @param id - Testimonial id
 * @returns Testimonial
 * @throws 400 error if id is invalid
 * @throws 404 error if testimonial is not found
 */
export const getTestimonialById = async (
  id: string | Types.ObjectId,
) => {
  if (!isValidObjectId(id)) throw createHttpError.BadRequest("Invalid testimonial id");

  const testimonial = await TestimonialModel.findById(id);
  if (!testimonial) throw createHttpError.NotFound("Testimonial not found");

  return testimonial;
};
