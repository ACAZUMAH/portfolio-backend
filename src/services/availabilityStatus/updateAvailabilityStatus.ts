import createHttpError from "http-errors";
import { isValidObjectId } from "mongoose";
import { UpdateAvailabilityStatusInput } from "src/common/interfaces/graphql";
import { AvailabilityStatusModel } from "src/models";
import { getAvailabilityStatusById } from "./getAvailabilityStatusById";

/**
 * Update an availability status.
 * @param data.id - Availability status id
 * @param data - Availability status update data
 * @returns Updated availability status
 * @throws 400 error if id is invalid
 * @throws 404 error if availability status is not found
 */
export const updateAvailabilityStatus = async (
  data: UpdateAvailabilityStatusInput,
) => {
  const availabilityStatus = await getAvailabilityStatusById(data.id);

  const update: Record<string, any> = {};

  if (data.description) update.description = data.description;
  if (data.acceptingWork) update.acceptingWork = data.acceptingWork;
  if (data.label) update.label = data.label;

  return await AvailabilityStatusModel.findByIdAndUpdate(
    availabilityStatus._id,
    { $set: update },
    {
      new: true,
    },
  );
};
