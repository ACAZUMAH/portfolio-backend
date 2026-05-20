import { Document } from "mongoose";
import { PaginationFilters } from "src/common/interfaces/shared";

export interface EducationDocument extends Document {
  institution: string;
  program: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  order: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateEducation {
  institution: string;
  program: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  order?: number;
}

export interface UpdateEducation extends Partial<CreateEducation> {
  id: string;
}

export interface GetEducationFilters extends PaginationFilters {
  institution?: string;
}
