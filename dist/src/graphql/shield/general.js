"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralShield = exports.isAuthenticated = void 0;
const graphql_shield_1 = require("graphql-shield");
exports.isAuthenticated = (0, graphql_shield_1.rule)()((_, __, ctx) => {
    return !!ctx.admin;
});
exports.GeneralShield = {
    Query: {
        _empty: graphql_shield_1.allow,
        hello: graphql_shield_1.allow,
        healthCheck: graphql_shield_1.allow,
    },
    Mutation: {
        _empty: graphql_shield_1.allow,
    },
};
