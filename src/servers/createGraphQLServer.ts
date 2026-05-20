import { ApolloServer, BaseContext, ContextFunction } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { json } from "express";
import { CreateGraphQLServer, GraphqlContext } from "src/common/interfaces";
import { formatError } from "src/servers/formatError";
import cors from "cors";
import { createDataLoaders } from "src/dataloaders";
import { isProduction } from "src/common/constants";
import {
  ExpressContextFunctionArgument,
  expressMiddleware,
} from "@apollo/server/express4";
import { createGraphQLSubscriptionSever } from "src/servers/createGraphQLSubscriptionSever";

const context: ContextFunction<
  [ExpressContextFunctionArgument],
  GraphqlContext
> = async ({ req }) => {
  return { ...req, ...createDataLoaders(), ip: String(req.ips[0] || req.ip) };
};

export const createGraphQLServer = async ({
  app,
  schema,
  httpServer,
}: CreateGraphQLServer) => {
  const subscriptionServerCleanup = createGraphQLSubscriptionSever({
    schema,
    httpServer,
  });

  const server = new ApolloServer({
    schema,
    formatError,
    introspection: !isProduction,
    includeStacktraceInErrorResponses: !isProduction,
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
      ApolloServerPluginDrainHttpServer({ httpServer }),
    ],
  });

  await server.start();

  const apolloExpressMiddleware = expressMiddleware(server, { context });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  app.use("/graphql", json(), apolloExpressMiddleware);

  return server;
};
