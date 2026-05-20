import "express-async-errors";
import { createServer } from "http";
import { config } from "src/common/helpers/config";
import { connectToDb } from "src/common/helpers/connectToDb";
import { schema } from "src/graphql";
import { applyMiddlewares } from "src/middlewares";
import createError from "http-errors";
import { errorHandler } from "src/middlewares/error-handler";
import { applyRoutes } from "src/routes";
import { createExpressApp, createGraphQLServer } from "src/servers";
import { logger } from "./logger";

export const startApp = async () => {
  const app = createExpressApp();
  const httpServer = createServer(app);

  applyMiddlewares(app);
  applyRoutes(app);

  await createGraphQLServer({ app, schema, httpServer });
  await connectToDb();

  app.all("*", (_req, _res, next) => {
    next(createError(404, "Unable to find the requested resource."));
  });

  app.use(errorHandler);

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: config.port }, resolve),
  );

  logger.info(`🚀 Server ready at http://localhost:${config.port}/`);
  logger.info(
    `🚀 GraphQL Server ready at http://localhost:${config.port}/graphql`,
  );

  // seedDatabase();
};
