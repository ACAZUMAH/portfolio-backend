import { CreateEducationInput } from "src/common/interfaces/graphql";
import { EducationModel } from "src/models";

/**
 * Create education.
 * @param data - Education data
 * @returns Created education
 */
export const createEducation = async (data: CreateEducationInput) => {
  return EducationModel.create(data);
};
