import { model, Schema } from "mongoose";
import { Collections, LeadPriority, LeadStatus } from "src/common/enums";
import { ContactLeadDocument } from "src/common/interfaces";

const contactLeadSchema = new Schema<ContactLeadDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    company: { type: String },
    message: { type: String, required: true },
    projectInterest: { type: String },
    sourcePage: { type: String },
    status: {
      type: String,
      enum: Object.values(LeadStatus),
      default: LeadStatus.NEW,
    },
    priority: {
      type: String,
      enum: Object.values(LeadPriority),
      default: LeadPriority.MEDIUM,
    },
    notes: String,
    followUpDate: String,
  },
  { timestamps: true },
);

export const ContactLeadModel = model<ContactLeadDocument>(
  Collections.ContactLeads,
  contactLeadSchema,
);
