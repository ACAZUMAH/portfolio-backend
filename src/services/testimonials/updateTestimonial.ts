import createHttpError from "http-errors";
import { isValidObjectId } from "mongoose";

import { UpdateTestimonialInput } from "src/common/interfaces/graphql";
import { TestimonialModel } from "src/models";
import { getTestimonialById } from "./getTestimonialById";

/**
 * Update a testimonial.
 * @param data.id - Testimonial id
 * @param data - Testimonial update data
 * @returns Updated testimonial
 * @throws 400 error if id is invalid
 * @throws 404 error if testimonial is not found
 */
export const updateTestimonial = async (data: UpdateTestimonialInput) => {
  const testimonial = await getTestimonialById(data.id);

  const update: Record<string, any> = {};

  if (data.name) update.name = data.name;
  if (data.role) update.role = data.role;
  if (data.company) update.company = data.company;
  if (data.quote) update.quote = data.quote;
  if (data.order) update.order = data.order;
  if (data.isVisible !== undefined) update.isVisible = data.isVisible;

  return await TestimonialModel.findByIdAndUpdate(
    testimonial._id,
    { $set: update },
    {
      new: true,
    },
  );
};
