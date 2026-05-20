import { model, Schema } from "mongoose";
import { Collections } from "src/common/enums";
import { ProjectImpressionDocument } from "src/common/interfaces";

const projectImpressionSchema = new Schema<ProjectImpressionDocument>(
  {
    projectId: { type: String },
    slug: { type: String },
    visitorId: { type: String },
    path: { type: String },
  },
  { timestamps: true },
);

export const ProjectImpressionModel = model<ProjectImpressionDocument>(
  Collections.ProjectImpressions,
  projectImpressionSchema,
);
