import * as GqlTypes from "src/common/interfaces/graphql";
import * as experiencesServices from "src/services/experiences";
import { getId } from "../general";

/**
 * Get experience by id
 * @param _ - The parent object (unused)
 * @param args - The query arguments
 * @returns The experience or null
 */
const getExperienceById = (
  _: any,
  args: GqlTypes.QueryGetExperienceByIdArgs,
) => {
  return experiencesServices.getExperienceById(args.id);
};

/**
 * Get experiences
 * @param _ - The parent object (unused)
 * @param args - The query arguments
 * @returns The experiences connection
 */
const getExperiences = (_: any, args: GqlTypes.QueryGetExperiencesArgs) => {
  return experiencesServices.getExperiences(args.filters);
};

/**
 * Create experience
 * @param _ - The parent object (unused)
 * @param args - The mutation arguments
 * @returns The created experience
 */
const createExperience = (
  _: any,
  args: GqlTypes.MutationCreateExperienceArgs,
) => {
  return experiencesServices.createExperience(args.data);
};

/**
 * Update experience
 * @param _ - The parent object (unused)
 * @param args - The mutation arguments
 * @returns The updated experience
 */
const updateExperience = (
  _: any,
  args: GqlTypes.MutationUpdateExperienceArgs,
) => {
  return experiencesServices.updateExperience(args.data);
};

/**
 * Delete experience
 * @param _ - The parent object (unused)
 * @param args - The mutation arguments
 * @returns Boolean indicating success
 */
const deleteExperience = (
  _: any,
  args: GqlTypes.MutationDeleteExperienceArgs,
) => {
  return experiencesServices.deleteExperience(args.id);
};

export const resolvers = {
  Query: {
    getExperienceById,
    getExperiences,
  },
  Mutation: {
    createExperience,
    updateExperience,
    deleteExperience,
  },
  Experience: {
    ...getId(),
  },
};
