import { UpdateEducationInput } from "src/common/interfaces/graphql";
import { EducationModel } from "src/models";
import { getEducationById } from "./getEducationById";

/**
 * Update education.
 * @param data.id - Education id
 * @param data - Education update data
 * @returns Updated education
 * @throws 400 error if id is invalid
 * @throws 404 error if education is not found
 */
export const updateEducation = async (data: UpdateEducationInput) => {
  const education = await getEducationById(data.id);

  const update: Record<string, any> = {};

  if (data.program) update.program = data.program;
  if (data.institution) update.institution = data.institution;
  if (data.location) update.location = data.location;
  if (data.startDate) update.startDate = data.startDate;
  if (data.endDate) update.endDate = data.endDate;
  if (data.order) update.order = data.order;

  return await EducationModel.findByIdAndUpdate(
    education._id,
    { $set: update },
    { new: true },
  );
};
