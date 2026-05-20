"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminUserByEmail = exports.getAdminUserById = void 0;
const mongoose_1 = require("mongoose");
const models_1 = require("../../models");
const http_errors_1 = __importDefault(require("http-errors"));
/**
 * Gets an admin user by their ID.
 * @param id The ID of the admin user to retrieve.
 * @throws BadRequest error if the provided id is not a valid ObjectId.
 * @throws NotFound error if no admin user is found with the given ID.
 * @returns The admin user.
 */
const getAdminUserById = async (id) => {
    if (!(0, mongoose_1.isValidObjectId)(id))
        throw http_errors_1.default.BadRequest("Invalid admin user id");
    const adminUser = await models_1.AdminUserModel.findById(id);
    if (!adminUser)
        throw http_errors_1.default.NotFound("Admin user not found");
    return adminUser;
};
exports.getAdminUserById = getAdminUserById;
/**
 * Gets an admin user by their email.
 * @param email The email of the admin user to retrieve.
 * @returns The admin user.
 */
const getAdminUserByEmail = async (email) => {
    return await models_1.AdminUserModel.findOne({ email });
};
exports.getAdminUserByEmail = getAdminUserByEmail;
