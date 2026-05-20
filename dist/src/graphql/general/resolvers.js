"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getId = exports.generalResolvers = exports.idResolver = void 0;
const hello = () => "hello world";
const healthCheck = () => "OK";
const idResolver = (parent) => {
    return `${parent._id}`;
};
exports.idResolver = idResolver;
exports.generalResolvers = {
    Query: {
        hello,
        healthCheck,
    },
};
const getId = () => ({
    id: exports.idResolver,
});
exports.getId = getId;
