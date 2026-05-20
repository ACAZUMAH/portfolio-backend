import { Express } from "express";
import { logResponseTime } from "src/middlewares/response-logs";
import { verifyClient } from "src/middlewares/verify-client";
import { verifyToken } from "src/middlewares/verify-token";

const middlewares = [logResponseTime, verifyToken, verifyClient];

export const applyMiddlewares = (app: Express) => {
  middlewares.forEach(middleware => app.use(middleware));
};
