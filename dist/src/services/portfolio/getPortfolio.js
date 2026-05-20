"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPortfolio = void 0;
const availabilityStatus_1 = require("../../services/availabilityStatus");
const certifications_1 = require("../../services/certifications");
const education_1 = require("../../services/education");
const experiences_1 = require("../../services/experiences");
const profiles_1 = require("../../services/profiles");
const projects_1 = require("../../services/projects");
const resumeAssets_1 = require("../../services/resumeAssets");
const skills_1 = require("../../services/skills");
const testimonials_1 = require("../../services/testimonials");
/**
 * Get complete public portfolio content.
 * @returns Portfolio content
 */
const getPortfolio = async (filters = {}) => {
    const defaultFilters = { page: 1, limit: 20 };
    const [profile, availability, experiences, education, certifications, skills, projects, featuredProjects, resumes, defaultResume, testimonials,] = await Promise.all([
        (0, profiles_1.getProfile)(),
        (0, availabilityStatus_1.getLatestAvailabilityStatus)(),
        (0, experiences_1.getExperiences)({ ...defaultFilters, ...filters.experiences }),
        (0, education_1.getEducation)({ ...defaultFilters, ...filters.education }),
        (0, certifications_1.getCertifications)({ ...defaultFilters, ...filters.certifications }),
        (0, skills_1.getSkills)({ ...defaultFilters, ...filters.skills }),
        (0, projects_1.getPublicProjects)({ ...defaultFilters, ...filters.projects }),
        (0, projects_1.getFeaturedPublicProjects)({
            ...defaultFilters,
            ...filters.projects,
        }),
        (0, resumeAssets_1.getAdminResumes)({ ...defaultFilters, ...filters.resumes }),
        (0, resumeAssets_1.getDefaultResumeAsset)(),
        (0, testimonials_1.getVisibleTestimonials)({
            ...defaultFilters,
            ...filters.testimonials,
        }),
    ]);
    return {
        profile,
        availability,
        experiences: experiences.edges,
        education: education.edges,
        certifications: certifications.edges,
        skills: skills.edges,
        projects: projects.edges,
        featuredProjects: featuredProjects.edges,
        resumes: resumes.edges,
        defaultResume,
        testimonials: testimonials.edges,
    };
};
exports.getPortfolio = getPortfolio;
