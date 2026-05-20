import { Document } from "mongoose";
import { PaginationFilters } from "src/common/interfaces/shared";

export interface ProjectImpressionDocument extends Document {
  projectId?: string;
  slug?: string;
  visitorId?: string;
  path?: string;
  createdAt?: Date;
}

export interface TrackProjectImpression {
  projectId?: string;
  slug?: string;
  visitorId?: string;
  path?: string;
}

export interface GetProjectImpressionFilters extends PaginationFilters {
  projectId?: string;
  slug?: string;
  visitorId?: string;
}
