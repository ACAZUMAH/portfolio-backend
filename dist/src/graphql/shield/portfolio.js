"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioShield = void 0;
const graphql_shield_1 = require("graphql-shield");
exports.PortfolioShield = {
    Query: {
        portfolio: graphql_shield_1.allow,
    },
};
