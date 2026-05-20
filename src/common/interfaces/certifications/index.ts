import { Document } from "mongoose";
import { PaginationFilters } from "src/common/interfaces/shared";

export interface CertificationDocument extends Document {
  title: string;
  issuer?: string;
  date?: string;
  url?: string;
  order: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateCertification {
  title: string;
  issuer?: string | null;
  date?: string | null;
  url?: string | null;
  order?: number | null;
}

export interface UpdateCertification {
  id: string;
  title?: string;
  issuer?: string;
  date?: string;
  url?: string;
  order?: number;
}
