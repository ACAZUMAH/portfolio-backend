import * as GqlTypes from "src/common/interfaces/graphql";
import * as availabilityServices from "src/services/availabilityStatus";
import { getId } from "../general";

/**
 * Get availability status by id
 * @param _ - The parent object (unused)
 * @param args - The query arguments
 * @returns The availability status or null
 */
const getAvailabilityStatusById = (
  _: any,
  args: GqlTypes.QueryGetAvailabilityStatusByIdArgs,
) => {
  return availabilityServices.getAvailabilityStatusById(args.id);
};

/**
 * Get latest availability status
 * @returns The availability status or null
 */
const getLatestAvailabilityStatus = () => {
  return availabilityServices.getLatestAvailabilityStatus();
};

/**
 * Create availability status
 * @param _ - The parent object (unused)
 * @param args - The mutation arguments
 * @returns The created availability status
 */
const createAvailabilityStatus = (
  _: any,
  args: GqlTypes.MutationCreateAvailabilityStatusArgs,
) => {
  return availabilityServices.createAvailabilityStatus(args.data);
};

/**
 * Update availability status
 * @param _ - The parent object (unused)
 * @param args - The mutation arguments
 * @returns The updated availability status
 */
const updateAvailabilityStatus = (
  _: any,
  args: GqlTypes.MutationUpdateAvailabilityStatusArgs,
) => {
  return availabilityServices.updateAvailabilityStatus(args.data);
};

export const resolvers = {
  Query: {
    getAvailabilityStatusById,
    getLatestAvailabilityStatus,
  },
  Mutation: {
    createAvailabilityStatus,
    updateAvailabilityStatus,
  },
  AvailabilityStatus: {
    ...getId(),
  },
};
