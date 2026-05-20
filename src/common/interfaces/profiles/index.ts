import { Document } from "mongoose";
import {
  PaginationFilters,
  SeoMetadataDocument,
} from "src/common/interfaces/shared";
import {
  GetCertificationFilters,
  GetEducationFilters,
  GetExperienceFilters,
  GetSkillFilters,
} from "../graphql";
import { GetProjectFilters } from "../projects";
import { GetResumeAssetFilters } from "../resumeAssets";
import { GetTestimonialFilters } from "../testimonials";

export interface ProfileDocument extends Document {
  fullName: string;
  title: string;
  headline: string;
  bio: string;
  email: string;
  phone?: string;
  location?: string;
  linkedInUrl?: string;
  githubUrl?: string;
  twitterUrl?: string;
  seo?: SeoMetadataDocument;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UpdateProfile {
  fullName?: string;
  title?: string;
  headline?: string;
  bio?: string;
  email?: string;
  phone?: string;
  location?: string;
  linkedInUrl?: string;
  githubUrl?: string;
  twitterUrl?: string;
  seo?: SeoMetadataDocument;
}

export interface GetPortfolioFilters {
  limit?: number;
  page?: number;
  experiences?: GetExperienceFilters;
  education?: GetEducationFilters;
  certifications?: GetCertificationFilters;
  skills?: GetSkillFilters;
  projects?: GetProjectFilters;
  resumes?: GetResumeAssetFilters;
  testimonials?: GetTestimonialFilters;
}
