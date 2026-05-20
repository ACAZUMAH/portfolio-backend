import { model, Schema } from "mongoose";
import { Collections } from "src/common/enums";
import { TestimonialDocument } from "src/common/interfaces";

const testimonialSchema = new Schema<TestimonialDocument>(
  {
    name: { type: String, required: true },
    role: { type: String },
    company: { type: String },
    quote: { type: String, required: true },
    isVisible: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export const TestimonialModel = model<TestimonialDocument>(
  Collections.Testimonials,
  testimonialSchema,
);
