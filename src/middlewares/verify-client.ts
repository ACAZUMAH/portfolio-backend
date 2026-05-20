import { NextFunction, Request, Response } from "express";
import { getApp } from "src/common/helpers";

export const verifyClient = (req: Request, _res: Response, next: NextFunction) => {
  const client = req.headers.client;

  if (typeof client === "string") {
    const app = getApp(client);
    if (app) req.clientApp = app;
  }

  next();
};
