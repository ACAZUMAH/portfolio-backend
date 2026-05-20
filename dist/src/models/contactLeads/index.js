"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactLeadModel = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../../common/enums");
const contactLeadSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    company: { type: String },
    message: { type: String, required: true },
    projectInterest: { type: String },
    sourcePage: { type: String },
    status: {
        type: String,
        enum: Object.values(enums_1.LeadStatus),
        default: enums_1.LeadStatus.NEW,
    },
    priority: {
        type: String,
        enum: Object.values(enums_1.LeadPriority),
        default: enums_1.LeadPriority.MEDIUM,
    },
    notes: String,
    followUpDate: String,
}, { timestamps: true });
exports.ContactLeadModel = (0, mongoose_1.model)(enums_1.Collections.ContactLeads, contactLeadSchema);
