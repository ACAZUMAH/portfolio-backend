import { Document, Types } from "mongoose";
import { ProjectStatus, ProjectVisibility } from "src/common/enums";
import {
  PaginationFilters,
  SeoMetadataDocument,
} from "src/common/interfaces/shared";

export interface ProjectLinkDocument {
  label?: string;
  url?: string;
  type?: string;
}

export interface CaseStudySectionDocument {
  title: string;
  body: string;
  order: number;
}

export interface GitHubMetadataDocument {
  repoUrl?: string;
  stars?: number;
  language?: string;
  pushedAt?: string;
  defaultBranch?: string;
}

export interface ProjectDocument extends Document {
  title: string;
  slug: string;
  summary: string;
  problem?: string;
  role?: string;
  company?: string;
  client?: string;
  stack: string[];
  features: string[];
  outcomes: string[];
  lessons: string[];
  links: ProjectLinkDocument[];
  mediaIds: string[];
  caseStudySections: CaseStudySectionDocument[];
  visibility: ProjectVisibility;
  status: ProjectStatus;
  featured: boolean;
  order: number;
  seo?: SeoMetadataDocument;
  github?: GitHubMetadataDocument;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateProject {
  title: string;
  slug: string;
  summary: string;
  problem?: string;
  role?: string;
  company?: string;
  client?: string;
  stack?: string[];
  features?: string[];
  outcomes?: string[];
  lessons?: string[];
  links?: ProjectLinkDocument[];
  mediaIds?: string[];
  caseStudySections?: CaseStudySectionDocument[];
  visibility?: ProjectVisibility;
  status?: ProjectStatus;
  featured?: boolean;
  order?: number;
  seo?: SeoMetadataDocument;
  github?: GitHubMetadataDocument;
}

export interface UpdateProject extends Partial<CreateProject> {
  id: string;
}

export interface GetProjectFilters extends PaginationFilters {
  stack?: string;
  company?: string;
  client?: string;
  featured?: boolean;
  visibility?: ProjectVisibility;
  status?: ProjectStatus;
}

export interface AddProjectMediaPayload {
  photoId: string;
  projectId: string;
}

export interface DeleteProjectMediaPayload {
  photoId: string;
  projectId: string;
}

export interface SortProjectMediasPayload {
  projectId: string;
  medias: string[];
}

export interface UploadProjectMediaPayload {
  file: string;
  projectId: string;
}
