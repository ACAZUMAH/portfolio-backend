import { Schema } from "mongoose";
import { SeoMetadataDocument } from "src/common/interfaces";

export const seoSchema = new Schema<SeoMetadataDocument>(
  {
    title: { type: String },
    description: { type: String },
    keywords: { type: [String] },
    ogImageId: { type: String },
  },
  { _id: false },
);
