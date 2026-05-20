"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stagingWhitelist = exports.productionWhitelist = exports.isDevelopment = exports.isProduction = exports.isStaging = exports.isTest = exports.apps = exports.adminPortal = exports.clientsPortal = void 0;
const enums_1 = require("../enums");
const config_1 = require("../helpers/config");
exports.clientsPortal = {
    key: enums_1.ClientApp.CLIENTS_PORTAL,
    name: "Clients Portal",
    domain: config_1.config.publicPortalUrl,
};
exports.adminPortal = {
    key: enums_1.ClientApp.ADMIN_PORTAL,
    name: "Admin Portal",
    domain: config_1.config.adminPortalUrl,
};
exports.apps = [exports.clientsPortal, exports.adminPortal];
exports.isTest = process.env.NODE_ENV === "test";
exports.isStaging = process.env.NODE_ENV === "staging";
exports.isProduction = process.env.NODE_ENV === "production";
exports.isDevelopment = !exports.isProduction && !exports.isStaging && !exports.isTest;
exports.productionWhitelist = [
    config_1.config.publicPortalUrl,
    config_1.config.adminPortalUrl,
].filter(Boolean);
exports.stagingWhitelist = [
    config_1.config.publicPortalUrl,
    config_1.config.adminPortalUrl,
    "http://localhost:5173",
    "http://localhost:5174",
].filter(Boolean);
