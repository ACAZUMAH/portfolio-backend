import { CreateAvailabilityStatusInput } from "src/common/interfaces/graphql";
import { AvailabilityStatusModel } from "src/models";

/**
 * Create an availability status.
 * @param data - Availability status data
 * @returns Created availability status
 */
export const createAvailabilityStatus = async (
  data: CreateAvailabilityStatusInput,
) => {
  return AvailabilityStatusModel.create(data);
};
