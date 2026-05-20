import createHttpError from "http-errors";
import { Types, isValidObjectId } from "mongoose";
import { VisitEventModel } from "src/models";

/**
 * Get visit event by id.
 * @param id - Visit event id
 * @returns Visit event
 * @throws 400 error if id is invalid
 * @throws 404 error if visit event is not found
 */
export const getVisitEventById = async (
  id: string | Types.ObjectId,
) => {
  if (!isValidObjectId(id)) throw createHttpError.BadRequest("Invalid visit event id");

  const visitEvent = await VisitEventModel.findById(id);
  if (!visitEvent) throw createHttpError.NotFound("Visit event not found");

  return visitEvent;
};
