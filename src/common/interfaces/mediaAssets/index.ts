import { Document } from "mongoose";
import { MediaType } from "src/common/enums";
import { PaginationFilters } from "src/common/interfaces/shared";

export interface MediaAssetDocument extends Document {
  title: string;
  url: string;
  type: MediaType;
  alt?: string;
  projectId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateMediaAsset {
  title: string;
  url: string;
  type?: MediaType;
  alt?: string;
  projectId?: string;
}

export interface UpdateMediaAsset extends Partial<CreateMediaAsset> {
  id: string;
}

export interface GetMediaAssetFilters extends PaginationFilters {
  type?: MediaType;
  projectId?: string;
}
