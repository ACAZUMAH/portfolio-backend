"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentAdmin = void 0;
const models_1 = require("../../models");
const requireAdmin_1 = require("../../services/auth/requireAdmin");
const projectVisibility_1 = require("../../services/projectVisibility");
const getCurrentAdmin = async (context) => {
    (0, requireAdmin_1.requireAdmin)(context);
    return (0, projectVisibility_1.serializeDocument)(await models_1.AdminUser.findById(context.admin?.id));
};
exports.getCurrentAdmin = getCurrentAdmin;
