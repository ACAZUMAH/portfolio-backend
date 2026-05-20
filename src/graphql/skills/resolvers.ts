import * as GqlTypes from "src/common/interfaces/graphql";
import * as skillsServices from "src/services/skills";
import { getId } from "../general";

/**
 * Get skill by id
 * @param _ - The parent object (unused)
 * @param args - The query arguments
 * @returns The skill or null
 */
const getSkillById = (_: any, args: GqlTypes.QueryGetSkillByIdArgs) => {
  return skillsServices.getSkillById(args.id);
};

/**
 * Get skills list
 * @param _ - The parent object (unused)
 * @param args - The query arguments
 * @returns The skills connection
 */
const getSkills = (_: any, args: GqlTypes.QueryGetSkillsArgs) => {
  return skillsServices.getSkills(args.filters);
};

/**
 * Create skill
 * @param _ - The parent object (unused)
 * @param args - The mutation arguments
 * @returns The created skill
 */
const createSkill = (_: any, args: GqlTypes.MutationCreateSkillArgs) => {
  return skillsServices.createSkill(args.data);
};

/**
 * Update skill
 * @param _ - The parent object (unused)
 * @param args - The mutation arguments
 * @returns The updated skill
 */
const updateSkill = (_: any, args: GqlTypes.MutationUpdateSkillArgs) => {
  return skillsServices.updateSkill(args.data);
};

/**
 * Delete skill
 * @param _ - The parent object (unused)
 * @param args - The mutation arguments
 * @returns Boolean indicating success
 */
const deleteSkill = (_: any, args: GqlTypes.MutationDeleteSkillArgs) => {
  return skillsServices.deleteSkill(args.id);
};

export const resolvers = {
  Query: {
    getSkillById,
    getSkills,
  },
  Mutation: {
    createSkill,
    updateSkill,
    deleteSkill,
  },
  Skill: {
    ...getId(),
  },
};
