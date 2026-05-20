import createHttpError from "http-errors";
import { isValidObjectId } from "mongoose";
import { TestimonialModel } from "src/models";

/**
 * Delete a testimonial.
 * @param id - Testimonial id
 * @returns True if testimonial is deleted
 * @throws 400 error if id is invalid
 * @throws 404 error if testimonial is not found
 */
export const deleteTestimonial = async (id: string) => {
  if (!isValidObjectId(id)) throw createHttpError.BadRequest("Invalid testimonial id");

  const testimonial = await TestimonialModel.findByIdAndDelete(id);
  if (!testimonial) throw createHttpError.NotFound("Testimonial not found");

  return true;
};
