import { model, Schema } from "mongoose";
import { Collections } from "src/common/enums";
import { ExperienceDocument } from "src/common/interfaces";

const experienceSchema = new Schema<ExperienceDocument>(
  {
    role: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String },
    workMode: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    isCurrent: { type: Boolean, default: false },
    highlights: [String],
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export const ExperienceModel = model<ExperienceDocument>(
  Collections.Experiences,
  experienceSchema,
);
