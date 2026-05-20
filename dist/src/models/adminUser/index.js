"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUserModel = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../../common/enums");
const adminUserSchema = new mongoose_1.Schema({
    name: String,
    email: { type: String, required: true, unique: true, lowercase: true },
    passwordHash: { type: String, required: true },
}, { timestamps: true });
exports.AdminUserModel = (0, mongoose_1.model)(enums_1.Collections.AdminUsers, adminUserSchema);
