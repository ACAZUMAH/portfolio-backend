import { Document } from "mongoose";
import { PaginationFilters } from "src/common/interfaces/shared";

export interface VisitEventDocument extends Document {
  visitorId?: string;
  sessionId?: string;
  path?: string;
  referrer?: string;
  userAgent?: string;
  device?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  createdAt?: Date;
}

export interface TrackVisitEvent {
  visitorId?: string;
  sessionId?: string;
  path?: string;
  referrer?: string;
  userAgent?: string;
  device?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

export interface GetVisitEventFilters extends PaginationFilters {
  visitorId?: string;
  path?: string;
  referrer?: string;
}
