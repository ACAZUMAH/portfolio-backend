import createHttpError from "http-errors";
import { Types, isValidObjectId } from "mongoose";
import { AvailabilityStatusModel } from "src/models";

/**
 * Get availability status by id.
 * @param id - Availability status id
 * @returns Availability status
 * @throws 400 error if id is invalid
 * @throws 404 error if availability status is not found
 */
export const getAvailabilityStatusById = async (
  id: string | Types.ObjectId,
) => {
  if (!isValidObjectId(id))
    throw createHttpError.BadRequest("Invalid availability status id");

  const availabilityStatus = await AvailabilityStatusModel.findById(id);
  if (!availabilityStatus)
    throw createHttpError.NotFound("Availability status not found");

  return availabilityStatus;
};
