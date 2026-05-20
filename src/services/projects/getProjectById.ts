import createHttpError from "http-errors";
import { Types, isValidObjectId } from "mongoose";
import { ProjectModel } from "src/models";

/**
 * Get project by id.
 * @param id - Project id
 * @returns Project
 * @throws 400 error if id is invalid
 * @throws 404 error if project is not found
 */
export const getProjectById = async (
  id: string | Types.ObjectId,
) => {
  if (!isValidObjectId(id)) throw createHttpError.BadRequest("Invalid project id");

  const project = await ProjectModel.findById(id);
  if (!project) throw createHttpError.NotFound("Project not found");

  return project;
};
