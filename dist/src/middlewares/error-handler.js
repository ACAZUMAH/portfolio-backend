"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const helpers_1 = require("../common/helpers");
const logger_1 = require("../logger");
const errorHandler = (err, _req, res, _next) => {
    logger_1.rollbar.error(err);
    if (http_errors_1.default.isHttpError(err)) {
        return res.status(err.status).json((0, helpers_1.constructHttpResponse)(null, err));
    }
    if (process.env.NODE_ENV !== "production") {
        return res.status(500).json((0, helpers_1.constructHttpResponse)(null, (0, http_errors_1.default)(500, err.message, { details: err.stack })));
    }
    return res
        .status(500)
        .json((0, helpers_1.constructHttpResponse)(null, (0, http_errors_1.default)(500, "Server error")));
};
exports.errorHandler = errorHandler;
