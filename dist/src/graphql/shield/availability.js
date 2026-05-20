"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvailabilityShield = void 0;
const graphql_shield_1 = require("graphql-shield");
const general_1 = require("./general");
exports.AvailabilityShield = {
    Query: {
        getAvailabilityStatusById: general_1.isAuthenticated,
        getLatestAvailabilityStatus: graphql_shield_1.allow,
    },
    Mutation: {
        createAvailabilityStatus: general_1.isAuthenticated,
        updateAvailabilityStatus: general_1.isAuthenticated,
    },
};
