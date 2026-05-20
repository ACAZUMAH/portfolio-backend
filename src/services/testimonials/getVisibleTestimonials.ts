import { FilterQuery, QueryOptions } from "mongoose";
import {
  getPageConnection,
  getSanitizeLimit,
  getSanitizeOffset,
  getSanitizePage,
} from "src/common/helpers";
import { GetTestimonialFilters } from "src/common/interfaces/graphql";
import { TestimonialDocument } from "src/common/interfaces";
import { TestimonialModel } from "src/models";

/**
 * Get visible testimonials.
 * @param filters - Testimonial filters
 * @returns Visible testimonials connection
 */
export const getVisibleTestimonials = async (
  filters: GetTestimonialFilters = {},
) => {
  const query: FilterQuery<TestimonialDocument> = {
    isVisible: true,
    ...(filters.company && { company: filters.company }),
    ...(filters.search && {
      $or: [
        { name: { $regex: filters.search, $options: "i" } },
        { role: { $regex: filters.search, $options: "i" } },
        { company: { $regex: filters.search, $options: "i" } },
        { quote: { $regex: filters.search, $options: "i" } },
      ],
    }),
  };

  const page = getSanitizePage(filters.page);
  const limit = getSanitizeLimit(filters.limit);
  const skip = getSanitizeOffset(page, limit);

  const options: QueryOptions = {
    skip,
    lean: true,
    limit: limit + 1,
    sort: { order: 1, createdAt: -1 },
  };

  const testimonials = await TestimonialModel.find(query, null, options);

  return getPageConnection(testimonials, page, limit);
};
