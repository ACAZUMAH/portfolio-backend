"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContactLead = void 0;
const models_1 = require("../../models");
/**
 * Create a contact lead.
 * @param data - Contact lead data
 * @returns Created contact lead
 */
const createContactLead = async (data) => {
    return models_1.ContactLeadModel.create(data);
};
exports.createContactLead = createContactLead;
