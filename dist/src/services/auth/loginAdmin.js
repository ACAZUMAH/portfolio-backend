"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginAdmin = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const auth_1 = require("../../common/auth");
const models_1 = require("../../models");
const projectVisibility_1 = require("../../services/projectVisibility");
const loginAdmin = async ({ email, password, }) => {
    const admin = await models_1.AdminUser.findOne({ email: email.toLowerCase() });
    if (!admin)
        throw new Error("Invalid email or password");
    const isValid = await bcryptjs_1.default.compare(password, String(admin.passwordHash));
    if (!isValid)
        throw new Error("Invalid email or password");
    const token = (0, auth_1.signAdminToken)({
        adminId: String(admin._id),
        email: String(admin.email),
    });
    return { token, admin: (0, projectVisibility_1.serializeDocument)(admin) };
};
exports.loginAdmin = loginAdmin;
