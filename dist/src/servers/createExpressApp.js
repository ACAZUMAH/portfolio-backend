"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExpressApp = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const constants_1 = require("../common/constants");
const corsOptions = {
    maxAge: 600,
    credentials: true,
    origin: (origin, callback) => {
        if (!origin) {
            callback(null, true);
        }
        else if (constants_1.isDevelopment) {
            callback(null, true);
        }
        else if (constants_1.isStaging && constants_1.stagingWhitelist.includes(origin)) {
            callback(null, true);
        }
        else if (constants_1.isProduction && constants_1.productionWhitelist.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error(`Not allowed by CORS: ${origin}`));
        }
    },
};
const createExpressApp = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.static("public"));
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.json({
        limit: "50mb",
        verify: (req, _res, buf) => {
            req.rawBody = buf.toString("utf8");
        },
    }));
    app.disable("x-powered-by");
    app.options("*", (0, cors_1.default)(corsOptions));
    app.use((0, cors_1.default)(corsOptions));
    app.get("/", (_req, res) => {
        res.send("Caleb portfolio backend is running.");
    });
    return app;
};
exports.createExpressApp = createExpressApp;
