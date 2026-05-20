"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsShield = void 0;
const graphql_shield_1 = require("graphql-shield");
const general_1 = require("./general");
exports.AnalyticsShield = {
    Query: {
        getAnalyticsSummary: general_1.isAuthenticated,
    },
    Mutation: {
        trackVisit: graphql_shield_1.allow,
        trackProjectImpression: graphql_shield_1.allow,
        trackResumeDownload: graphql_shield_1.allow,
        trackOutboundClick: graphql_shield_1.allow,
    },
};
