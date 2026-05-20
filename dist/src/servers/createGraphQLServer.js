"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGraphQLServer = void 0;
const server_1 = require("@apollo/server");
const drainHttpServer_1 = require("@apollo/server/plugin/drainHttpServer");
const express_1 = require("express");
const formatError_1 = require("../servers/formatError");
const dataloaders_1 = require("../dataloaders");
const constants_1 = require("../common/constants");
const express4_1 = require("@apollo/server/express4");
const createGraphQLSubscriptionSever_1 = require("../servers/createGraphQLSubscriptionSever");
const context = async ({ req }) => {
    return { ...req, ...(0, dataloaders_1.createDataLoaders)(), ip: String(req.ips[0] || req.ip) };
};
const createGraphQLServer = async ({ app, schema, httpServer, }) => {
    const subscriptionServerCleanup = (0, createGraphQLSubscriptionSever_1.createGraphQLSubscriptionSever)({
        schema,
        httpServer,
    });
    const server = new server_1.ApolloServer({
        schema,
        formatError: formatError_1.formatError,
        introspection: !constants_1.isProduction,
        includeStacktraceInErrorResponses: !constants_1.isProduction,
        plugins: [
            {
                async serverWillStart() {
                    return {
                        async drainServer() {
                            await subscriptionServerCleanup.dispose();
                        },
                    };
                },
            },
            (0, drainHttpServer_1.ApolloServerPluginDrainHttpServer)({ httpServer }),
        ],
    });
    await server.start();
    const apolloExpressMiddleware = (0, express4_1.expressMiddleware)(server, { context });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    app.use("/graphql", (0, express_1.json)(), apolloExpressMiddleware);
    return server;
};
exports.createGraphQLServer = createGraphQLServer;
