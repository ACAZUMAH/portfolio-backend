import createHttpError from "http-errors";
import { StorageDirectory } from "src/common/enums/storage";
import { ProjectModel } from "src/models";
import { getUploadById, uploadPhoto } from "src/services/uploads";
import { getProjectById } from "./getProjectById";
import {
  AddProjectMediaPayload,
  DeleteProjectMediaPayload,
  SortProjectMediasPayload,
  UploadProjectMediaPayload,
} from "src/common/interfaces";

export const addProjectMedia = async (data: AddProjectMediaPayload) => {
  const upload = await getUploadById(data.photoId);
  const project = await getProjectById(data.projectId);

  if (!upload.mimeType.startsWith("image/")) {
    throw createHttpError.BadRequest(
      "Invalid file type, only images are allowed",
    );
  }

  return ProjectModel.findOneAndUpdate(
    { _id: project._id },
    { $addToSet: { mediaIds: upload._id.toString() } },
    {
      new: true,
      lean: true,
    },
  );
};

export const uploadProjectMedia = async (data: UploadProjectMediaPayload) => {
  const project = await getProjectById(data.projectId);
  const upload = await uploadPhoto(data.file, StorageDirectory.ProjectPhotos);

  return ProjectModel.findOneAndUpdate(
    { _id: project._id },
    { $addToSet: { mediaIds: upload._id.toString() } },
    {
      new: true,
      lean: true,
    },
  );
};

export const sortProjectMedias = async (data: SortProjectMediasPayload) => {
  const { projectId, medias } = data;
  const project = await getProjectById(projectId);

  if (project.mediaIds.length !== medias.length) {
    throw new createHttpError.BadRequest(
      "Number of provided photo IDs does not match the number of photos associated with the product",
    );
  }

  const productMedias = project.mediaIds.map((media) => media.toString());
  const isValidMedia = medias.every((id) => productMedias.includes(id));

  if (!isValidMedia) {
    throw new createHttpError.BadRequest(
      "One or more provided photo IDs are invalid",
    );
  }

  return ProjectModel.findOneAndUpdate(
    { _id: project._id },
    { mediaIds: medias },
    { new: true, lean: true },
  );
};

export const deleteProjectMedia = async (data: DeleteProjectMediaPayload) => {
  const { projectId, photoId } = data;
  const project = await getProjectById(projectId);

  const medias = project.mediaIds.map((media) => media.toString());
  if (!medias.includes(photoId)) {
    throw createHttpError.BadRequest("Photo not found");
  }

  return ProjectModel.findOneAndUpdate(
    { _id: project._id },
    {
      $pull: { mediaIds: photoId },
    },
    { new: true, lean: true },
  );
};
