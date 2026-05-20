import { Document } from "mongoose";
import { PaginationFilters } from "src/common/interfaces/shared";

export interface ExperienceDocument extends Document {
  role: string;
  company: string;
  location?: string;
  workMode?: string;
  startDate?: string;
  endDate?: string;
  isCurrent: boolean;
  highlights: string[];
  order: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateExperience {
  role: string;
  company: string;
  location?: string;
  workMode?: string;
  startDate?: string;
  endDate?: string;
  isCurrent?: boolean;
  highlights?: string[];
  order?: number;
}

export interface UpdateExperience extends Partial<CreateExperience> {
  id: string;
}

export interface GetExperienceFilters extends PaginationFilters {
  company?: string;
  isCurrent?: boolean;
}
