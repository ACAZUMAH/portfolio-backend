import { model, Schema } from "mongoose";
import { Collections } from "src/common/enums";
import { ResumeAssetDocument } from "src/common/interfaces";

const resumeAssetSchema = new Schema<ResumeAssetDocument>(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    focus: { type: String },
    isDefault: { type: Boolean, default: false },
    downloads: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export const ResumeAssetModel = model<ResumeAssetDocument>(
  Collections.ResumeAssets,
  resumeAssetSchema,
);
