"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startApp = void 0;
require("express-async-errors");
const http_1 = require("http");
const config_1 = require("./common/helpers/config");
const connectToDb_1 = require("./common/helpers/connectToDb");
const graphql_1 = require("./graphql");
const middlewares_1 = require("./middlewares");
const http_errors_1 = __importDefault(require("http-errors"));
const error_handler_1 = require("./middlewares/error-handler");
const routes_1 = require("./routes");
const servers_1 = require("./servers");
const logger_1 = require("./logger");
const seed_1 = require("./common/helpers/seed");
const startApp = async () => {
    const app = (0, servers_1.createExpressApp)();
    const httpServer = (0, http_1.createServer)(app);
    (0, middlewares_1.applyMiddlewares)(app);
    (0, routes_1.applyRoutes)(app);
    await (0, servers_1.createGraphQLServer)({ app, schema: graphql_1.schema, httpServer });
    await (0, connectToDb_1.connectToDb)();
    app.all("*", (_req, _res, next) => {
        next((0, http_errors_1.default)(404, "Unable to find the requested resource."));
    });
    app.use(error_handler_1.errorHandler);
    await new Promise((resolve) => httpServer.listen({ port: config_1.config.port }, resolve));
    logger_1.logger.info(`🚀 Server ready at http://localhost:${config_1.config.port}/`);
    logger_1.logger.info(`🚀 GraphQL Server ready at http://localhost:${config_1.config.port}/graphql`);
    (0, seed_1.seedDatabase)();
};
exports.startApp = startApp;
