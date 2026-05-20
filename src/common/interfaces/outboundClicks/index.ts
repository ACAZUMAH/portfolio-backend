import { Document } from "mongoose";
import { OutboundClickType } from "src/common/enums";
import { PaginationFilters } from "src/common/interfaces/shared";

export interface OutboundClickDocument extends Document {
  label?: string;
  url?: string;
  type?: string;
  visitorId?: string;
  path?: string;
  createdAt?: Date;
}

export interface TrackOutboundClick {
  label?: string;
  url?: string;
  type?: OutboundClickType | string;
  visitorId?: string;
  path?: string;
}

export interface GetOutboundClickFilters extends PaginationFilters {
  type?: OutboundClickType | string;
  visitorId?: string;
}
