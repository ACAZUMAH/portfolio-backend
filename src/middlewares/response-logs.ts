import { NextFunction, Request, Response } from "express";
import { logger } from "src/logger";

export const logResponseTime = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const startHrTime = process.hrtime();

  res.on("finish", () => {
    const elapsedHrTime = process.hrtime(startHrTime);
    const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
    logger.info(
      `${req.method} ${res.statusCode} ${elapsedTimeInMs.toFixed(2)}ms\t${req.originalUrl}`
    );
  });

  next();
};
