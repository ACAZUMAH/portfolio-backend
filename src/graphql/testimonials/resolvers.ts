import * as GqlTypes from "src/common/interfaces/graphql";
import * as testimonialsServices from "src/services/testimonials";
import { getId } from "../general";

const adminTestimonials = (
  _: any,
  args: GqlTypes.QueryAdminTestimonialsArgs,
) => {
  return testimonialsServices.getAdminTestimonials(args.filters);
};

const createTestimonial = (
  _: any,
  args: GqlTypes.MutationCreateTestimonialArgs,
) => {
  return testimonialsServices.createTestimonial(args.data);
};

const updateTestimonial = (
  _: any,
  args: GqlTypes.MutationUpdateTestimonialArgs,
) => {
  return testimonialsServices.updateTestimonial(args.data);
};

export const testimonialsResolvers = {
  Query: {
    adminTestimonials,
  },
  Mutation: {
    createTestimonial,
    updateTestimonial,
  },
  Testimonial: {
    ...getId(),
  },
};
