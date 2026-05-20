"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.resolvers = exports.typeDefs = void 0;
const schema_1 = require("@graphql-tools/schema");
const graphql_middleware_1 = require("graphql-middleware");
const analytics_1 = require("../graphql/analytics");
const mediaAssets_1 = require("../graphql/mediaAssets");
const resumeAssets_1 = require("../graphql/resumeAssets");
const testimonials_1 = require("../graphql/testimonials");
const auth_1 = require("../graphql/auth");
const leads_1 = require("../graphql/leads");
const portfolio_1 = require("../graphql/portfolio");
const projects_1 = require("../graphql/projects");
const adminUser_1 = require("../graphql/adminUser");
const graphql_scalars_1 = require("graphql-scalars");
const general_1 = require("../graphql/general");
const profile_1 = require("../graphql/profile");
const availability_1 = require("../graphql/availability");
const experiences_1 = require("../graphql/experiences");
const education_1 = require("../graphql/education");
const certifications_1 = require("../graphql/certifications");
const skills_1 = require("../graphql/skills");
const uploads_1 = require("./uploads");
const shield_1 = require("./shield");
exports.typeDefs = [
    auth_1.authTypeDefs,
    adminUser_1.adminUserTypeDefs,
    portfolio_1.portfolioTypeDefs,
    projects_1.projectsTypeDefs,
    leads_1.leadsTypeDefs,
    mediaAssets_1.mediaAssetsTypeDefs,
    resumeAssets_1.resumeAssetsTypeDefs,
    testimonials_1.testimonialsTypeDefs,
    profile_1.profileTypeDefs,
    analytics_1.analyticsTypeDefs,
    graphql_scalars_1.typeDefs,
    general_1.generalTypeDefs,
    availability_1.availabilityTypeDefs,
    experiences_1.experiencesTypeDefs,
    education_1.educationTypeDefs,
    certifications_1.certificationsTypeDefs,
    skills_1.skillsTypeDefs,
    uploads_1.uploadTypeDefs,
];
exports.resolvers = [
    auth_1.authResolvers,
    adminUser_1.adminResolvers,
    portfolio_1.portfolioResolvers,
    projects_1.projectsResolvers,
    leads_1.leadsResolvers,
    mediaAssets_1.mediaAssetsResolvers,
    resumeAssets_1.resumeAssetsResolvers,
    testimonials_1.testimonialsResolvers,
    analytics_1.analyticsResolvers,
    graphql_scalars_1.resolvers,
    general_1.generalResolvers,
    profile_1.resolvers,
    availability_1.resolvers,
    experiences_1.resolvers,
    education_1.resolvers,
    certifications_1.resolvers,
    skills_1.resolvers,
    uploads_1.uploadResolvers,
];
const executableSchema = (0, schema_1.makeExecutableSchema)({
    typeDefs: exports.typeDefs,
    resolvers: exports.resolvers,
});
exports.schema = (0, graphql_middleware_1.applyMiddleware)(executableSchema, shield_1.permissions);
