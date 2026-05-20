import { model, Schema } from "mongoose";
import { Collections } from "src/common/enums";
import { AvailabilityStatusDocument } from "src/common/interfaces";

const availabilityStatusSchema = new Schema<AvailabilityStatusDocument>(
  {
    label: { type: String, required: true },
    description: { type: String },
    acceptingWork: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export const AvailabilityStatusModel = model<AvailabilityStatusDocument>(
  Collections.AvailabilityStatuses,
  availabilityStatusSchema,
);
