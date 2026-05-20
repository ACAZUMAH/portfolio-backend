import { Schema, model } from "mongoose";
import { Collections } from "src/common/enums";
import { UploadDocument } from "src/common/interfaces/uploads";

const uploadSchema = new Schema<UploadDocument>(
  {
    filename: { type: String, required: true },
    directory: { type: String, required: true },
    mimeType: { type: String, required: true },
    size: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const UploadModel = model<UploadDocument>(
  Collections.Uploads,
  uploadSchema
);
