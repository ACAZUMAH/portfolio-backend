import * as GqlTypes from "src/common/interfaces/graphql";
import * as educationServices from "src/services/education";
import { getId } from "../general";

/**
 * Get education by id
 * @param _ - The parent object (unused)
 * @param args - The query arguments
 * @returns The education or null
 */
const getEducationById = (_: any, args: GqlTypes.QueryGetEducationByIdArgs) => {
  return educationServices.getEducationById(args.id);
};

/**
 * Get education list
 * @param _ - The parent object (unused)
 * @param args - The query arguments
 * @returns The education connection
 */
const getEducation = (_: any, args: GqlTypes.QueryGetEducationArgs) => {
  return educationServices.getEducation(args.filters);
};

/**
 * Create education
 * @param _ - The parent object (unused)
 * @param args - The mutation arguments
 * @returns The created education
 */
const createEducation = (
  _: any,
  args: GqlTypes.MutationCreateEducationArgs,
) => {
  return educationServices.createEducation(args.data);
};

/**
 * Update education
 * @param _ - The parent object (unused)
 * @param args - The mutation arguments
 * @returns The updated education
 */
const updateEducation = (
  _: any,
  args: GqlTypes.MutationUpdateEducationArgs,
) => {
  return educationServices.updateEducation(args.data);
};

/**
 * Delete education
 * @param _ - The parent object (unused)
 * @param args - The mutation arguments
 * @returns Boolean indicating success
 */
const deleteEducation = (
  _: any,
  args: GqlTypes.MutationDeleteEducationArgs,
) => {
  return educationServices.deleteEducation(args.id);
};

export const resolvers = {
  Query: {
    getEducationById,
    getEducation,
  },
  Mutation: {
    createEducation,
    updateEducation,
    deleteEducation,
  },
  Education: {
    ...getId(),
  },
};
