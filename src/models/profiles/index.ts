import { model, Schema } from "mongoose";
import { Collections } from "src/common/enums";
import { ProfileDocument } from "src/common/interfaces";
import { seoSchema } from "../seo/seo";

const profileSchema = new Schema<ProfileDocument>(
  {
    fullName: { type: String, required: true },
    title: { type: String, required: true },
    headline: { type: String, required: true },
    bio: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    location: { type: String },
    linkedInUrl: { type: String },
    githubUrl: { type: String },
    twitterUrl: { type: String },
    seo: seoSchema,
  },
  { timestamps: true },
);

export const ProfileModel = model<ProfileDocument>(
  Collections.Profiles,
  profileSchema,
);
