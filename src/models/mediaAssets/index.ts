import { model, Schema } from "mongoose";
import { Collections, MediaType } from "src/common/enums";
import { MediaAssetDocument } from "src/common/interfaces";

const mediaAssetSchema = new Schema<MediaAssetDocument>(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    type: {
      type: String,
      enum: Object.values(MediaType),
      default: MediaType.OTHER,
    },
    alt: { type: String },
    projectId: { type: String },
  },
  { timestamps: true },
);

export const MediaAssetModel = model<MediaAssetDocument>(
  Collections.MediaAssets,
  mediaAssetSchema,
);
