"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = void 0;
const graphql_shield_1 = require("graphql-shield");
const adminUser_1 = require("./adminUser");
const analytics_1 = require("./analytics");
const auth_1 = require("./auth");
const availability_1 = require("./availability");
const certifications_1 = require("./certifications");
const education_1 = require("./education");
const experiences_1 = require("./experiences");
const general_1 = require("./general");
const leads_1 = require("./leads");
const mediaAssets_1 = require("./mediaAssets");
const portfolio_1 = require("./portfolio");
const profile_1 = require("./profile");
const projects_1 = require("./projects");
const resumeAssets_1 = require("./resumeAssets");
const skills_1 = require("./skills");
const testimonials_1 = require("./testimonials");
exports.permissions = (0, graphql_shield_1.shield)({
    Query: {
        ...general_1.GeneralShield.Query,
        ...adminUser_1.AdminUserShield.Query,
        ...analytics_1.AnalyticsShield.Query,
        ...availability_1.AvailabilityShield.Query,
        ...certifications_1.CertificationShield.Query,
        ...education_1.EducationShield.Query,
        ...experiences_1.ExperienceShield.Query,
        ...leads_1.LeadShield.Query,
        ...mediaAssets_1.MediaAssetShield.Query,
        ...portfolio_1.PortfolioShield.Query,
        ...profile_1.ProfileShield.Query,
        ...projects_1.ProjectShield.Query,
        ...resumeAssets_1.ResumeAssetShield.Query,
        ...skills_1.SkillShield.Query,
        ...testimonials_1.TestimonialShield.Query,
    },
    Mutation: {
        ...general_1.GeneralShield.Mutation,
        ...auth_1.AuthShield.Mutation,
        ...analytics_1.AnalyticsShield.Mutation,
        ...availability_1.AvailabilityShield.Mutation,
        ...certifications_1.CertificationShield.Mutation,
        ...education_1.EducationShield.Mutation,
        ...experiences_1.ExperienceShield.Mutation,
        ...leads_1.LeadShield.Mutation,
        ...mediaAssets_1.MediaAssetShield.Mutation,
        ...profile_1.ProfileShield.Mutation,
        ...projects_1.ProjectShield.Mutation,
        ...resumeAssets_1.ResumeAssetShield.Mutation,
        ...skills_1.SkillShield.Mutation,
        ...testimonials_1.TestimonialShield.Mutation,
    },
    Project: {
        ...projects_1.ProjectShield.Project,
    },
}, {
    fallbackRule: graphql_shield_1.allow,
    allowExternalErrors: true,
});
