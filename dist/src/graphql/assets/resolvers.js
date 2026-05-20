"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assetsResolvers = void 0;
const mediaAssets_1 = require("../../services/mediaAssets");
const resumeAssets_1 = require("../../services/resumeAssets");
const testimonials_1 = require("../../services/testimonials");
const adminMediaAssets = (_, __, _context) => {
    return (0, mediaAssets_1.getAdminMediaAssets)().then((mediaAssets) => mediaAssets.edges);
};
const adminResumes = (_, __, _context) => {
    return (0, resumeAssets_1.getAdminResumes)().then((resumes) => resumes.edges);
};
const adminTestimonials = (_, __, _context) => {
    return (0, testimonials_1.getAdminTestimonials)().then((testimonials) => testimonials.edges);
};
const createResumeAssetResolver = (_, args) => {
    return (0, resumeAssets_1.createResumeAsset)(args.data);
};
const setDefaultResumeResolver = (_, args) => {
    return (0, resumeAssets_1.setDefaultResume)(args.id);
};
const createMediaAssetResolver = (_, args) => {
    return (0, mediaAssets_1.createMediaAsset)(args.data);
};
const createTestimonialResolver = (_, args) => {
    return (0, testimonials_1.createTestimonial)(args.data);
};
exports.assetsResolvers = {
    Query: {
        adminMediaAssets,
        adminResumes,
        adminTestimonials,
    },
    Mutation: {
        createResumeAsset: createResumeAssetResolver,
        setDefaultResume: setDefaultResumeResolver,
        createMediaAsset: createMediaAssetResolver,
        createTestimonial: createTestimonialResolver,
    },
};
