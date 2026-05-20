"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCertification = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const models_1 = require("../../models");
/**
 * Create a certification.
 * @param data - Certification data
 * @returns Created certification
 */
const createCertification = async (data) => {
    const cert = await models_1.CertificationModel.create({
        ...data,
    });
    if (!cert) {
        throw (0, http_errors_1.default)(500, "Failed to create certification");
    }
    return cert;
};
exports.createCertification = createCertification;
