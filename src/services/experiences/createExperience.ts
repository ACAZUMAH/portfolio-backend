import { CreateExperienceInput } from "src/common/interfaces/graphql";
import { ExperienceModel } from "src/models";

/**
 * Create an experience.
 * @param data - Experience data
 * @returns Created experience
 */
export const createExperience = async (data: CreateExperienceInput) => {
  return ExperienceModel.create(data);
};
