import { Document } from "mongoose";
import { PaginationFilters } from "src/common/interfaces/shared";

export interface SkillDocument extends Document {
  name: string;
  category: string;
  featured: boolean;
  order: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateSkillInput {
  name: string;
  category: string;
  featured?: boolean;
  order?: number;
}

export interface UpdateSkillInput {
  id: string;
  name?: string;
  category?: string;
  featured?: boolean;
  order?: number;
}

export interface GetSkillFilters extends PaginationFilters {
  category?: string;
  featured?: boolean;
  sort?: string;
  order?: "asc" | "desc";
}
