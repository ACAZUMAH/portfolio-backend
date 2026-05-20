"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countContactLeads = void 0;
const models_1 = require("../../models");
/**
 * Count contact leads.
 * @param filter - Contact lead filters
 * @returns Contact lead count
 */
const countContactLeads = async (filter = {}) => {
    return models_1.ContactLeadModel.countDocuments(filter);
};
exports.countContactLeads = countContactLeads;
