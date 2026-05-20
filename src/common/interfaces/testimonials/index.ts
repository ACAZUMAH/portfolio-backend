import { Document } from "mongoose";
import { PaginationFilters } from "src/common/interfaces/shared";

export interface TestimonialDocument extends Document {
  name: string;
  role?: string;
  company?: string;
  quote: string;
  isVisible: boolean;
  order: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateTestimonial {
  name: string;
  role?: string;
  company?: string;
  quote: string;
  isVisible?: boolean;
  order?: number;
}

export interface UpdateTestimonial extends Partial<CreateTestimonial> {
  id: string;
}

export interface GetTestimonialFilters extends PaginationFilters {
  company?: string;
  isVisible?: boolean;
}
