"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAdmin = void 0;
const requireAdmin = (context) => {
    if (!context.admin) {
        throw new Error("Unauthorized");
    }
};
exports.requireAdmin = requireAdmin;
