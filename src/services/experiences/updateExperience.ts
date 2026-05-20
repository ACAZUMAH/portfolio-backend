import { UpdateExperienceInput } from "src/common/interfaces/graphql";
import { ExperienceModel } from "src/models";
import { getExperienceById } from "./getExperienceById";

/**
 * Update an experience.
 * @param data.id - Experience id
 * @param data - Experience update data
 * @returns Updated experience
 * @throws 400 error if id is invalid
 * @throws 404 error if experience is not found
 */
export const updateExperience = async (data: UpdateExperienceInput) => {
  const experience = await getExperienceById(data.id);

  const update: Record<string, any> = {};

  if (data.role) update.role = data.role;
  if (data.company) update.company = data.company;
  if (data.location) update.location = data.location;
  if (data.workMode) update.workMode = data.workMode;
  if (data.startDate) update.startDate = data.startDate;
  if (data.endDate) update.endDate = data.endDate;
  if (data.isCurrent) update.isCurrent = data.isCurrent;
  if (data.highlights) update.highlights = data.highlights;
  if (data.order) update.order = data.order;

  return await ExperienceModel.findByIdAndUpdate(
    data.id,
    { $set: update },
    { new: true },
  );
};
