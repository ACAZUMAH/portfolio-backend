"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatError = void 0;
const errors_1 = require("@apollo/server/errors");
const http_errors_1 = __importDefault(require("http-errors"));
const enums_1 = require("../common/enums");
const logger_1 = require("../logger");
const errorCodes = {
    400: enums_1.ErrorCode.BAD_REQUEST,
    401: enums_1.ErrorCode.UNAUTHORIZED,
    403: enums_1.ErrorCode.FORBIDDEN,
    404: enums_1.ErrorCode.NOT_FOUND,
    500: enums_1.ErrorCode.INTERNAL_SERVER_ERROR,
};
const formatError = (formattedError, error) => {
    const unwrappedError = (0, errors_1.unwrapResolverError)(error);
    logger_1.logger.error(unwrappedError);
    if (!http_errors_1.default.isHttpError(unwrappedError)) {
        logger_1.rollbar.error(`GraphQL Error: ${unwrappedError?.message || "Unknown error"}`);
        return formattedError;
    }
    return {
        ...formattedError,
        message: unwrappedError.message,
        extensions: {
            ...formattedError.extensions,
            code: errorCodes[unwrappedError.statusCode] || enums_1.ErrorCode.INTERNAL_SERVER_ERROR,
        },
    };
};
exports.formatError = formatError;
