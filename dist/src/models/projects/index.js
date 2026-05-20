"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModel = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../../common/enums");
const seo_1 = require("../seo/seo");
const caseStudySectionSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    order: { type: Number, default: 0 },
}, { _id: false });
const projectLinkSchema = new mongoose_1.Schema({
    label: { type: String },
    url: { type: String },
    type: { type: String },
}, { _id: false, typeKey: "$type" });
const githubSchema = new mongoose_1.Schema({
    repoUrl: { type: String },
    stars: { type: Number },
    language: { type: String },
    pushedAt: { type: String },
    defaultBranch: { type: String },
}, { _id: false });
const projectSchema = new mongoose_1.Schema({
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
        enum: Object.values(enums_1.ProjectVisibility),
        default: enums_1.ProjectVisibility.PUBLIC,
    },
    status: {
        type: String,
        enum: Object.values(enums_1.ProjectStatus),
        default: enums_1.ProjectStatus.LIVE,
    },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
    seo: seo_1.seoSchema,
    github: githubSchema,
}, { timestamps: true });
exports.ProjectModel = (0, mongoose_1.model)(enums_1.Collections.Projects, projectSchema);
