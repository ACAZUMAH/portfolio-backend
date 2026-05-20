import createHttpError from "http-errors";
import { CreateSkillInput } from "src/common/interfaces/graphql";
import { SkillModel } from "src/models";

/**
 * Create a skill.
 * @param data - Skill data
 * @returns Created skill
 */
export const createSkill = async (data: CreateSkillInput) => {
  const skill = await SkillModel.create(data);

  if (!skill) {
    throw createHttpError(500, "Failed to create skill");
  }

  return skill;
};
