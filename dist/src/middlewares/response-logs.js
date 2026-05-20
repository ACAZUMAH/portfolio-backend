"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logResponseTime = void 0;
const logger_1 = require("../logger");
const logResponseTime = (req, res, next) => {
    const startHrTime = process.hrtime();
    res.on("finish", () => {
        const elapsedHrTime = process.hrtime(startHrTime);
        const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
        logger_1.logger.info(`${req.method} ${res.statusCode} ${elapsedTimeInMs.toFixed(2)}ms\t${req.originalUrl}`);
    });
    next();
};
exports.logResponseTime = logResponseTime;
