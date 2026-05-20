"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../common/config");
const connectToDb = async () => {
    mongoose_1.default.set("strictQuery", true);
    await mongoose_1.default.connect(config_1.config.mongoUri);
    console.log(`MongoDB connected: ${mongoose_1.default.connection.name}`);
};
exports.connectToDb = connectToDb;
