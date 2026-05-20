"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const graphql_1 = require("graphql");
const auth_1 = require("../common/auth");
const models_1 = require("../models");
const projectVisibility_1 = require("../services/projectVisibility");
const serialize = projectVisibility_1.serializeDocument;
const serializeMany = (docs) => docs.map(serialize);
const requireAdmin = (context) => {
    if (!context.admin) {
        throw new Error("Unauthorized");
    }
};
const publicProjectFilter = {
    visibility: { $in: ["PUBLIC", "PRIVATE_SUMMARY", "PASSWORD_PROTECTED"] },
};
const getDateLimit = (days) => {
    const limit = new Date();
    limit.setDate(limit.getDate() - days);
    return limit;
};
exports.resolvers = {
    Date: new graphql_1.GraphQLScalarType({
        name: "Date",
        serialize(value) {
            return value instanceof Date ? value.toISOString() : value;
        },
        parseValue(value) {
            return new Date(String(value));
        },
        parseLiteral(ast) {
            return ast.kind === graphql_1.Kind.STRING ? new Date(ast.value) : null;
        },
    }),
    Query: {
        portfolio: async () => {
            const [profile, availability, experiences, education, certifications, skills, projects, featuredProjects, resumes, defaultResume, testimonials,] = await Promise.all([
                models_1.Profile.findOne().sort({ createdAt: 1 }),
                models_1.AvailabilityStatus.findOne().sort({ createdAt: -1 }),
                models_1.Experience.find().sort({ order: 1 }),
                models_1.Education.find().sort({ order: 1 }),
                models_1.Certification.find().sort({ order: 1 }),
                models_1.Skill.find().sort({ category: 1, order: 1 }),
                models_1.Project.find(publicProjectFilter).sort({ order: 1 }),
                models_1.Project.find({ ...publicProjectFilter, featured: true }).sort({ order: 1 }),
                models_1.ResumeAsset.find().sort({ isDefault: -1, createdAt: -1 }),
                models_1.ResumeAsset.findOne({ isDefault: true }),
                models_1.Testimonial.find({ isVisible: true }).sort({ order: 1 }),
            ]);
            return {
                profile: serialize(profile),
                availability: serialize(availability),
                experiences: serializeMany(experiences),
                education: serializeMany(education),
                certifications: serializeMany(certifications),
                skills: serializeMany(skills),
                projects: projects.map(projectVisibility_1.toPublicProject),
                featuredProjects: featuredProjects.map(projectVisibility_1.toPublicProject),
                resumes: serializeMany(resumes),
                defaultResume: serialize(defaultResume),
                testimonials: serializeMany(testimonials),
            };
        },
        project: async (_, { slug }) => {
            const project = await models_1.Project.findOne({ slug, ...publicProjectFilter });
            return (0, projectVisibility_1.toPublicProject)(project);
        },
        adminMe: async (_, __, context) => {
            requireAdmin(context);
            return serialize(await models_1.AdminUser.findById(context.admin?.id));
        },
        adminProjects: async (_, __, context) => {
            requireAdmin(context);
            return serializeMany(await models_1.Project.find().sort({ order: 1 }));
        },
        adminLeads: async (_, __, context) => {
            requireAdmin(context);
            return serializeMany(await models_1.ContactLead.find().sort({ createdAt: -1 }));
        },
        adminMediaAssets: async (_, __, context) => {
            requireAdmin(context);
            return serializeMany(await models_1.MediaAsset.find().sort({ createdAt: -1 }));
        },
        adminResumes: async (_, __, context) => {
            requireAdmin(context);
            return serializeMany(await models_1.ResumeAsset.find().sort({ isDefault: -1, createdAt: -1 }));
        },
        adminTestimonials: async (_, __, context) => {
            requireAdmin(context);
            return serializeMany(await models_1.Testimonial.find().sort({ order: 1 }));
        },
        analyticsSummary: async (_, { days }, context) => {
            requireAdmin(context);
            const createdAt = { $gte: getDateLimit(days) };
            const [visits, uniqueVisitors, impressions, outboundClicks, resumeDownloads, leads] = await Promise.all([
                models_1.VisitEvent.countDocuments({ createdAt }),
                models_1.VisitEvent.distinct("visitorId", { createdAt }),
                models_1.ProjectImpression.countDocuments({ createdAt }),
                models_1.OutboundClick.countDocuments({ createdAt }),
                models_1.OutboundClick.countDocuments({ createdAt, type: "RESUME_DOWNLOAD" }),
                models_1.ContactLead.countDocuments({ createdAt }),
            ]);
            return {
                totalVisits: visits,
                uniqueVisitors: uniqueVisitors.filter(Boolean).length,
                projectImpressions: impressions,
                outboundClicks,
                resumeDownloads,
                leads,
            };
        },
    },
    Mutation: {
        login: async (_, { email, password }) => {
            const admin = await models_1.AdminUser.findOne({ email: email.toLowerCase() });
            if (!admin)
                throw new Error("Invalid email or password");
            const isValid = await bcryptjs_1.default.compare(password, String(admin.passwordHash));
            if (!isValid)
                throw new Error("Invalid email or password");
            const token = (0, auth_1.signAdminToken)({
                adminId: String(admin._id),
                email: String(admin.email),
            });
            return { token, admin: serialize(admin) };
        },
        updateProfile: async (_, { input }, context) => {
            requireAdmin(context);
            const existing = await models_1.Profile.findOne();
            if (existing) {
                Object.assign(existing, input);
                await existing.save();
                return serialize(existing);
            }
            return serialize(await models_1.Profile.create(input));
        },
        createProject: async (_, { input }, context) => {
            requireAdmin(context);
            return serialize(await models_1.Project.create(input));
        },
        updateProject: async (_, { id, input }, context) => {
            requireAdmin(context);
            return serialize(await models_1.Project.findByIdAndUpdate(id, input, { new: true }));
        },
        deleteProject: async (_, { id }, context) => {
            requireAdmin(context);
            await models_1.Project.findByIdAndDelete(id);
            return true;
        },
        createContactLead: async (_, { input }) => {
            return serialize(await models_1.ContactLead.create(input));
        },
        updateContactLead: async (_, { id, input }, context) => {
            requireAdmin(context);
            return serialize(await models_1.ContactLead.findByIdAndUpdate(id, input, { new: true }));
        },
        createResumeAsset: async (_, { input }, context) => {
            requireAdmin(context);
            if (input.isDefault)
                await models_1.ResumeAsset.updateMany({}, { isDefault: false });
            return serialize(await models_1.ResumeAsset.create(input));
        },
        setDefaultResume: async (_, { id }, context) => {
            requireAdmin(context);
            await models_1.ResumeAsset.updateMany({}, { isDefault: false });
            return serialize(await models_1.ResumeAsset.findByIdAndUpdate(id, { isDefault: true }, { new: true }));
        },
        createMediaAsset: async (_, { input }, context) => {
            requireAdmin(context);
            return serialize(await models_1.MediaAsset.create(input));
        },
        createTestimonial: async (_, { input }, context) => {
            requireAdmin(context);
            return serialize(await models_1.Testimonial.create(input));
        },
        trackVisit: async (_, { input }) => {
            await models_1.VisitEvent.create(input);
            return true;
        },
        trackProjectImpression: async (_, { input }) => {
            await models_1.ProjectImpression.create(input);
            return true;
        },
        trackResumeDownload: async (_, { id, visitorId, path }) => {
            const resume = await models_1.ResumeAsset.findById(id);
            if (resume) {
                resume.downloads = Number(resume.downloads || 0) + 1;
                await resume.save();
            }
            await models_1.OutboundClick.create({
                label: "Resume download",
                url: resume?.url,
                type: "RESUME_DOWNLOAD",
                visitorId,
                path,
            });
            return true;
        },
        trackOutboundClick: async (_, { input }) => {
            await models_1.OutboundClick.create(input);
            return true;
        },
    },
};
