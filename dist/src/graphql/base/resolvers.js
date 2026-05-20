"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseResolvers = void 0;
const graphql_1 = require("graphql");
exports.baseResolvers = {
    Date: new graphql_1.GraphQLScalarType({
        name: "Date",
        serialize(value) {
            return value instanceof Date ? value.toISOString() : value;
        },
        parseValue(value) {
            return new Date(String(value));
        },
        parseLiteral(ast) {
            return ast.kind === graphql_1.Kind.STRING ? new Date(ast.value) : null;
        },
    }),
};
