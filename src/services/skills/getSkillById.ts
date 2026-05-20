import createHttpError from "http-errors";
import { Types, isValidObjectId } from "mongoose";
import { SkillModel } from "src/models";

/**
 * Get skill by id.
 * @param id - Skill id
 * @returns Skill
 * @throws 400 error if id is invalid
 * @throws 404 error if skill is not found
 */
export const getSkillById = async (
  id: string | Types.ObjectId,
) => {
  if (!isValidObjectId(id)) throw createHttpError.BadRequest("Invalid skill id");

  const skill = await SkillModel.findById(id);
  if (!skill) throw createHttpError.NotFound("Skill not found");

  return skill;
};
