"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authAdmin = void 0;
const adminUser_1 = require("../adminUser");
const http_errors_1 = __importDefault(require("http-errors"));
const helpers_1 = require("../../common/helpers");
const enums_1 = require("../../common/enums");
/**
 * Authenticates an admin user with email and password.
 * @param email - The email address of the admin user to authenticate.
 * @param password - The password of the admin user to authenticate.
 * @throws NotFound error if no admin user is found with the given email.
 * @throws Unauthorized error if the provided password is not valid.
 * @returns An object containing the admin user and an authentication token.
 */
const authAdmin = async ({ email, password }) => {
    const admin = await (0, adminUser_1.getAdminUserByEmail)(email);
    if (!admin)
        throw http_errors_1.default.NotFound("Admin user not found");
    const isMatch = await (0, helpers_1.comparePassword)(password, admin.passwordHash);
    if (!isMatch)
        throw http_errors_1.default.Unauthorized("Invalid password");
    const token = (0, helpers_1.jwtSign)({
        id: admin._id,
        adminUserId: admin._id,
        appKey: enums_1.ClientApp.ADMIN_PORTAL,
    });
    return { admin, token };
};
exports.authAdmin = authAdmin;
