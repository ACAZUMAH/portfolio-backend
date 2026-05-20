import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { jwtVerify } from "src/common/helpers";
import { getAdminUserById } from "src/services/adminUser";

export const verifyToken = async (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  try {
    const bearerHeader = req.headers["authorization"];

    if (!bearerHeader) return next();

    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer.length > 1 ? bearer[1] : bearer[0];

    if (!bearerToken) return next();

    const data = jwtVerify(bearerToken);

    const adminUserId = data?.adminUserId || data?.id;

    if (!adminUserId) return next();

    const user = await getAdminUserById(adminUserId);

    req.admin = user;
    req.token = bearerToken;
  } catch {
    throw createHttpError.Unauthorized("Invalid token");
  }
  return next();
};
