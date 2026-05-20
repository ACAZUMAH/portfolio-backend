"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateContactLead = void 0;
const models_1 = require("../../models");
const getContactLeadById_1 = require("./getContactLeadById");
/**
 * Update a contact lead.
 * @param data.id - Contact lead id
 * @param data - Contact lead update data
 * @returns Updated contact lead
 * @throws 400 error if id is invalid
 * @throws 404 error if contact lead is not found
 */
const updateContactLead = async (data) => {
    const contactLead = await (0, getContactLeadById_1.getContactLeadById)(data.id);
    const update = {};
    if (data.followUpDate)
        update.followUpDate = data.followUpDate;
    if (data.status)
        update.status = data.status;
    if (data.notes)
        update.notes = data.notes;
    if (data.priority)
        update.priority = data.priority;
    return await models_1.ContactLeadModel.findByIdAndUpdate(contactLead._id, { $set: update }, { new: true });
};
exports.updateContactLead = updateContactLead;
