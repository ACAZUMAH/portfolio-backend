"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = void 0;
const dataloaders_1 = require("../dataloaders");
const createContext = async ({ req, }) => {
    return {
        ...req,
        ...(0, dataloaders_1.createDataLoaders)(),
        ip: String(req.ips?.[0] || req.ip || ""),
    };
};
exports.createContext = createContext;
