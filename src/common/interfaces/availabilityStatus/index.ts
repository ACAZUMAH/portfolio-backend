import { Document } from "mongoose";
import { PaginationFilters } from "src/common/interfaces/shared";

export interface AvailabilityStatusDocument extends Document {
  label: string;
  description?: string;
  acceptingWork: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateAvailabilityStatus {
  label: string;
  description?: string;
  acceptingWork?: boolean;
}

export interface UpdateAvailabilityStatus {
  id: string;
  label?: string;
  description?: string;
  acceptingWork?: boolean;
}

export interface GetAvailabilityStatusFilters extends PaginationFilters {
  acceptingWork?: boolean;
}
