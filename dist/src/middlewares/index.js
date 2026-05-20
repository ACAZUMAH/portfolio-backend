"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMiddlewares = void 0;
const response_logs_1 = require("../middlewares/response-logs");
const verify_client_1 = require("../middlewares/verify-client");
const verify_token_1 = require("../middlewares/verify-token");
const middlewares = [response_logs_1.logResponseTime, verify_token_1.verifyToken, verify_client_1.verifyClient];
const applyMiddlewares = (app) => {
    middlewares.forEach(middleware => app.use(middleware));
};
exports.applyMiddlewares = applyMiddlewares;
