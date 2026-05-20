"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminResolvers = void 0;
const adminUser_1 = require("../../services/adminUser");
const adminMe = (_, __, { admin }) => {
    return (0, adminUser_1.getAdminUserById)(admin?.id);
};
exports.adminResolvers = {
    Query: {
        adminMe,
    },
};
