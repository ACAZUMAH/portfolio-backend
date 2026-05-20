import { model, Schema } from "mongoose";
import {
  Collections,
  ProjectStatus,
  ProjectVisibility,
} from "src/common/enums";
import {
  CaseStudySectionDocument,
  ProjectDocument,
  ProjectLinkDocument,
} from "src/common/interfaces";
import { seoSchema } from "../seo/seo";

const caseStudySectionSchema = new Schema<CaseStudySectionDocument>(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    order: { type: Number, default: 0 },
  },
  { _id: false },
);

const projectLinkSchema = new Schema<ProjectLinkDocument>(
  {
    label: { type: String },
    url: { type: String },
    type: { type: String },
  },
  { _id: false, typeKey: "$type" },
);

const githubSchema = new Schema(
  {
    repoUrl: { type: String },
    stars: { type: Number },
    language: { type: String },
    pushedAt: { type: String },
    defaultBranch: { type: String },
  },
  { _id: false },
);

const projectSchema = new Schema<ProjectDocument>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    summary: { type: String, required: true },
    problem: { type: String },
    role: { type: String },
    company: { type: String },
    client: { type: String },
    stack: [String],
    features: [String],
    outcomes: [String],
    lessons: [String],
    links: [projectLinkSchema],
    mediaIds: [String],
    caseStudySections: [caseStudySectionSchema],
    visibility: {
      type: String,
      enum: Object.values(ProjectVisibility),
      default: ProjectVisibility.PUBLIC,
    },
    status: {
      type: String,
      enum: Object.values(ProjectStatus),
      default: ProjectStatus.LIVE,
    },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
    seo: seoSchema,
    github: githubSchema,
  },
  { timestamps: true },
);

export const ProjectModel = model<ProjectDocument>(
  Collections.Projects,
  projectSchema,
);
