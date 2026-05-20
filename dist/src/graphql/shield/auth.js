"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthShield = void 0;
const graphql_shield_1 = require("graphql-shield");
exports.AuthShield = {
    Mutation: {
        login: graphql_shield_1.allow,
    },
};
