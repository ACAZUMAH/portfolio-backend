import createHttpError from "http-errors";
import { isValidObjectId } from "mongoose";
import { SkillModel } from "src/models";

/**
 * Delete a skill.
 * @param id - Skill id
 * @returns True if skill is deleted
 * @throws 400 error if id is invalid
 * @throws 404 error if skill is not found
 */
export const deleteSkill = async (id: string) => {
  if (!isValidObjectId(id)) throw createHttpError.BadRequest("Invalid skill id");

  const skill = await SkillModel.findByIdAndDelete(id);
  if (!skill) throw createHttpError.NotFound("Skill not found");

  return true;
};
