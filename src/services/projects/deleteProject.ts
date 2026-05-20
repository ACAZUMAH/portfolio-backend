import createHttpError from "http-errors";
import { isValidObjectId } from "mongoose";
import { ProjectModel } from "src/models";

/**
 * Delete a project.
 * @param id - Project id
 * @returns True if project is deleted
 * @throws 400 error if id is invalid
 * @throws 404 error if project is not found
 */
export const deleteProject = async (id: string) => {
  if (!isValidObjectId(id)) throw createHttpError.BadRequest("Invalid project id");

  const project = await ProjectModel.findByIdAndDelete(id);
  if (!project) throw createHttpError.NotFound("Project not found");

  return true;
};
