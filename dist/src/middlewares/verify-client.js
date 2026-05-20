"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyClient = void 0;
const helpers_1 = require("../common/helpers");
const verifyClient = (req, _res, next) => {
    const client = req.headers.client;
    if (typeof client === "string") {
        const app = (0, helpers_1.getApp)(client);
        if (app)
            req.clientApp = app;
    }
    next();
};
exports.verifyClient = verifyClient;
