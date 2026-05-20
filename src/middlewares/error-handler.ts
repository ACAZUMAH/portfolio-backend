import { NextFunction, Request, Response } from "express";
import createError from "http-errors";
import { constructHttpResponse } from "src/common/helpers";
import { rollbar } from "src/logger";

export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  rollbar.error(err);

  if (createError.isHttpError(err)) {
    return res.status(err.status).json(constructHttpResponse(null, err));
  }

  if (process.env.NODE_ENV !== "production") {
    return res.status(500).json(
      constructHttpResponse(
        null,
        createError(500, err.message, { details: err.stack })
      )
    );
  }

  return res
    .status(500)
    .json(constructHttpResponse(null, createError(500, "Server error")));
};
