import { NextFunction, Request, Response } from "express";
import createError from "http-errors";

type Validator<T> = (value: unknown) => T;

export const requestValidator =
  <T>(validator: Validator<T>, source: "body" | "query" | "params" = "body") =>
  (req: Request, _res: Response, next: NextFunction) => {
    try {
      const value = validator(req[source]);
      (req as Request & { validated?: T }).validated = value;
      next();
    } catch (error: any) {
      next(createError(400, error?.message || "Invalid request payload"));
    }
  };
