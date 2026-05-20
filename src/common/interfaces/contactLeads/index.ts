import { Document } from "mongoose";
import { LeadPriority, LeadStatus } from "src/common/enums";
import { PaginationFilters } from "src/common/interfaces/shared";

export interface ContactLeadDocument extends Document {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  projectInterest?: string;
  sourcePage?: string;
  status: LeadStatus;
  priority: LeadPriority;
  notes?: string;
  followUpDate?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateContactLead {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  projectInterest?: string;
  sourcePage?: string;
}

export interface UpdateContactLead {
  id: string;
  status?: LeadStatus | null;
  priority?: LeadPriority | null;
  notes?: string | null;
  followUpDate?: string | null;
}

export interface GetContactLeadFilters extends PaginationFilters {
  status?: LeadStatus | null;
  priority?: LeadPriority | null;
  projectInterest?: string | null;
}
