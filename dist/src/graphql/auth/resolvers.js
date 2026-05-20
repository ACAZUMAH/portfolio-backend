"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authResolvers = void 0;
const services_1 = require("../../services");
const login = (_, args) => {
    return (0, services_1.authAdmin)({ ...args.data });
};
exports.authResolvers = {
    Mutation: {
        login,
    },
};
