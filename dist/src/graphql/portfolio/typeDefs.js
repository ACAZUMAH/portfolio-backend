"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.portfolioTypeDefs = void 0;
exports.portfolioTypeDefs = `#graphql

  type Portfolio {
    profile: Profile
    availability: AvailabilityStatus
    experiences: [Experience!]!
    education: [Education!]!
    certifications: [Certification!]!
    skills: [Skill!]!
    projects: [Project!]!
    featuredProjects: [Project!]!
    resumes: [ResumeAsset!]!
    defaultResume: ResumeAsset
    testimonials: [Testimonial!]!
  }

  input GetPortfolioFilters {
    experiences: GetExperienceFilters
    education: GetEducationFilters
    certifications: GetCertificationFilters
    skills: GetSkillFilters
    projects: GetProjectFilters
    resumes: GetResumeAssetFilters
    testimonials: GetTestimonialFilters
    limit: Int
    page: Int
  }

  extend type Query {
    portfolio(filters: GetPortfolioFilters): Portfolio!
  }

`;
