"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const helpers_1 = require("../common/helpers");
const adminUser_1 = require("../services/adminUser");
const verifyToken = async (req, _res, next) => {
    try {
        const bearerHeader = req.headers["authorization"];
        if (!bearerHeader)
            return next();
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer.length > 1 ? bearer[1] : bearer[0];
        if (!bearerToken)
            return next();
        const data = (0, helpers_1.jwtVerify)(bearerToken);
        const adminUserId = data?.adminUserId || data?.id;
        if (!adminUserId)
            return next();
        const user = await (0, adminUser_1.getAdminUserById)(adminUserId);
        req.admin = user;
        req.token = bearerToken;
    }
    catch {
        throw http_errors_1.default.Unauthorized("Invalid token");
    }
    return next();
};
exports.verifyToken = verifyToken;
