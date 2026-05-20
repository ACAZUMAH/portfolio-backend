import { Document } from "mongoose";
import { PaginationFilters } from "src/common/interfaces/shared";

export interface ResumeAssetDocument extends Document {
  title: string;
  url: string;
  focus?: string;
  isDefault: boolean;
  downloads: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateResumeAsset {
  title: string;
  url: string;
  focus?: string;
  isDefault?: boolean;
}

export interface UpdateResumeAsset extends Partial<CreateResumeAsset> {
  id: string;
}

export interface GetResumeAssetFilters extends PaginationFilters {
  isDefault?: boolean;
  focus?: string;
}
