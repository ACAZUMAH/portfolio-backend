"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadShield = void 0;
const graphql_shield_1 = require("graphql-shield");
const general_1 = require("./general");
exports.LeadShield = {
    Query: {
        getAdminLeads: general_1.isAuthenticated,
    },
    Mutation: {
        createContactLead: graphql_shield_1.allow,
        updateContactLead: general_1.isAuthenticated,
    },
};
