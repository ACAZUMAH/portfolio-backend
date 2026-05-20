import { model, Schema } from "mongoose";
import { Collections } from "src/common/enums";
import { EducationDocument } from "src/common/interfaces";

const educationSchema = new Schema<EducationDocument>(
  {
    institution: { type: String, required: true },
    program: { type: String, required: true },
    location: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export const EducationModel = model<EducationDocument>(
  Collections.Education,
  educationSchema,
);
