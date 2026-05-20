"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileShield = void 0;
const graphql_shield_1 = require("graphql-shield");
const general_1 = require("./general");
exports.ProfileShield = {
    Query: {
        getProfileById: graphql_shield_1.allow,
        getAdminProfile: general_1.isAuthenticated,
    },
    Mutation: {
        updateProfile: general_1.isAuthenticated,
    },
};
