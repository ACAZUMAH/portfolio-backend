import { AvailabilityStatusModel } from "src/models";

/**
 * Get latest availability status.
 * @returns Latest availability status
 */
export const getLatestAvailabilityStatus = async () => {
  return AvailabilityStatusModel.findOne().sort({ createdAt: -1 });
};
