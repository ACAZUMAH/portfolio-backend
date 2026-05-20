import { ProjectImpressionInput } from "src/common/interfaces/graphql";
import { ProjectImpressionModel } from "src/models";

/**
 * Track project impression.
 * @param data - Project impression data
 * @returns True when project impression is recorded
 */
export const trackProjectImpression = async (data: ProjectImpressionInput) => {
  await ProjectImpressionModel.create(data);
  return true;
};
