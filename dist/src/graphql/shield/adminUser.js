"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUserShield = void 0;
const general_1 = require("./general");
exports.AdminUserShield = {
    Query: {
        adminMe: general_1.isAuthenticated,
    },
};
