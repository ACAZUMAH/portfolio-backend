import createHttpError from "http-errors";
import { isValidObjectId } from "mongoose";
import { UpdateSkillInput } from "src/common/interfaces/graphql";
import { SkillModel } from "src/models";

/**
 * Update a skill.
 * @param data.id - Skill id
 * @param data - Skill update data
 * @returns Updated skill
 * @throws 400 error if id is invalid
 * @throws 404 error if skill is not found
 */
export const updateSkill = async (data: UpdateSkillInput) => {
  const { id, ...updateData } = data;
  if (!isValidObjectId(id))
    throw createHttpError.BadRequest("Invalid skill id");

  const skill = await SkillModel.findByIdAndUpdate(id, updateData, {
    new: true,
  });
  if (!skill) throw createHttpError.NotFound("Skill not found");

  return skill;
};
