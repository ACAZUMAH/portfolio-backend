import { GetPortfolioFilters } from "src/common/interfaces";
import { getLatestAvailabilityStatus } from "src/services/availabilityStatus";
import { getCertifications } from "src/services/certifications";
import { getEducation } from "src/services/education";
import { getExperiences } from "src/services/experiences";
import { getProfile } from "src/services/profiles";
import {
  getFeaturedPublicProjects,
  getPublicProjects,
} from "src/services/projects";
import {
  getAdminResumes,
  getDefaultResumeAsset,
} from "src/services/resumeAssets";
import { getSkills } from "src/services/skills";
import { getVisibleTestimonials } from "src/services/testimonials";

/**
 * Get complete public portfolio content.
 * @returns Portfolio content
 */
export const getPortfolio = async (filters: GetPortfolioFilters = {}) => {
  const defaultFilters = { page: 1, limit: 20 };
  const [
    profile,
    availability,
    experiences,
    education,
    certifications,
    skills,
    projects,
    featuredProjects,
    resumes,
    defaultResume,
    testimonials,
  ] = await Promise.all([
    getProfile(),
    getLatestAvailabilityStatus(),
    getExperiences({ ...defaultFilters, ...filters.experiences } as any),
    getEducation({ ...defaultFilters, ...filters.education } as any),
    getCertifications({ ...defaultFilters, ...filters.certifications } as any),
    getSkills({ ...defaultFilters, ...filters.skills } as any),
    getPublicProjects({ ...defaultFilters, ...filters.projects } as any),
    getFeaturedPublicProjects({
      ...defaultFilters,
      ...filters.projects,
    } as any),
    getAdminResumes({ ...defaultFilters, ...filters.resumes } as any),
    getDefaultResumeAsset(),
    getVisibleTestimonials({
      ...defaultFilters,
      ...filters.testimonials,
    } as any),
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
