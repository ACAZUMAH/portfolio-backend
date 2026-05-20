"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGraphQLSubscriptionSever = void 0;
const ws_1 = require("ws");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const ws_2 = require("graphql-ws/use/ws");
const createGraphQLSubscriptionSever = ({ schema, httpServer, }) => {
    const wsServer = new ws_1.WebSocketServer({
        server: httpServer,
        path: "/graphql",
    });
    // Hand in the schema we just created and have the
    // WebSocketServer start listening.
    const serverCleanup = (0, ws_2.useServer)({ schema }, wsServer);
    return serverCleanup;
};
exports.createGraphQLSubscriptionSever = createGraphQLSubscriptionSever;
