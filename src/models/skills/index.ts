import { model, Schema } from "mongoose";
import { Collections } from "src/common/enums";
import { SkillDocument } from "src/common/interfaces";

const skillSchema = new Schema<SkillDocument>(
  {
    name: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const SkillModel = model<SkillDocument>(Collections.Skills, skillSchema);
