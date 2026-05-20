import { model, Schema } from "mongoose";
import { Collections } from "src/common/enums";
import { CertificationDocument } from "src/common/interfaces";

const certificationSchema = new Schema<CertificationDocument>(
  {
    title: { type: String, required: true },
    issuer: { type: String },
    date: { type: String },
    url: { type: String },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export const CertificationModel = model<CertificationDocument>(
  Collections.Certifications,
  certificationSchema,
);
