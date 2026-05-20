import createHttpError from "http-errors";
import { Types, isValidObjectId } from "mongoose";
import { ProjectImpressionModel } from "src/models";

/**
 * Get project impression by id.
 * @param id - Project impression id
 * @returns Project impression
 * @throws 400 error if id is invalid
 * @throws 404 error if project impression is not found
 */
export const getProjectImpressionById = async (
  id: string | Types.ObjectId,
) => {
  if (!isValidObjectId(id))
    throw createHttpError.BadRequest("Invalid project impression id");

  const projectImpression = await ProjectImpressionModel.findById(id);
  if (!projectImpression)
    throw createHttpError.NotFound("Project impression not found");

  return projectImpression;
};
