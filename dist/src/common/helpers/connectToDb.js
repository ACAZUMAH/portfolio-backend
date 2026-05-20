"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const logger_1 = require("../../logger");
const connectToDb = async () => {
    const url = config_1.config.mongoUri;
    mongoose_1.default.connection.on("connected", () => {
        logger_1.logger.info("Connected to MongoDB", url.indexOf("@") > 0 ? url.split("@")[1] : url);
    });
    mongoose_1.default.connection.on("error", (err) => {
        logger_1.logger.error("Database error:", err);
    });
    mongoose_1.default.connection.on("disconnected", (err) => {
        logger_1.logger.info("Database disconnected...", err);
    });
    // mongoose.set('debug', isDevelopment)
    mongoose_1.default.set("strictQuery", true);
    await mongoose_1.default.connect(url);
};
exports.connectToDb = connectToDb;
