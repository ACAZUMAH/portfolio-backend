import {
  default as CreateHttpError,
  default as createHttpError,
} from "http-errors";
import { Types, isValidObjectId } from "mongoose";
import { StorageDirectory } from "src/common/enums/storage";
import {
  generateRandomFileName,
  getFileExtensionMimeTypes,
  getMimeTypeFromBase64,
} from "src/common/helpers";
import { CreateUpload } from "src/common/interfaces/uploads";
import { UploadModel } from "src/models/uploads";
import {
  deleteFileFromStorage,
  uploadStreamToStorage,
} from "src/services/storage";

/**
 * Create an upload
 * @param data.filename - upload filename
 * @param data.directory - upload directory
 * @param data.mimeType - upload mimeType
 * @param data.size - upload size
 * @param data.url - upload url
 * @returns created upload
 */
export const createUpload = async (data: CreateUpload) => {
  return UploadModel.create(data);
};

/**
 * Get an upload by id
 * @param id - upload id
 * @returns upload
 * @throws 404 error if upload not found
 */
export const getUploadById = async (id: string | Types.ObjectId) => {
  if (!isValidObjectId(id))
    throw CreateHttpError.BadRequest("Invalid upload id");

  const upload = await UploadModel.findById(id, null, { lean: true });
  if (!upload) throw CreateHttpError.NotFound("Upload not found");

  return upload;
};

/**
 * Get an upload by filename
 * @param filename - upload filename
 * @returns upload
 * @throws 404 error if upload not found
 */
export const getUploadByFilename = async (filename: string) => {
  const upload = await UploadModel.findOne({ filename }, null, { lean: true });

  if (!upload) throw CreateHttpError.NotFound("Upload not found");

  return upload;
};

/**
 * Get uploads by ids
 * @param ids - upload ids
 * @returns uploads
 * @throws 400 error if invalid upload ids
 * @example getUploadsByIds(['upload-id-1', 'upload-id-2'])
 */
export const getUploadsByIds = async (ids: Array<Types.ObjectId | string>) => {
  if (!ids.length) return [];

  if (!ids.every(isValidObjectId)) {
    throw CreateHttpError.BadRequest("Invalid upload ids");
  }

  return UploadModel.find({ _id: { $in: ids } }, null, { lean: true });
};

/**
 * @description upload a photo
 * @param file  - base64 encoded file
 * @param directory  - storage directory
 * @returns  created upload
 */
export const uploadPhoto = async (
  file: string,
  directory: StorageDirectory,
) => {
  const mimeType = getMimeTypeFromBase64(file);

  // allow only image files
  if (!mimeType.startsWith("image/")) {
    throw createHttpError.BadRequest(
      "Invalid file type, only images are allowed",
    );
  }

  const extension = getFileExtensionMimeTypes(mimeType);
  const filename = generateRandomFileName(extension);

  let cleanBase64 = file;
  if (file.startsWith("data:")) {
    cleanBase64 = file.replace(/^data:.*?base64,/, "");
  }

  const buffer = Buffer.from(cleanBase64, "base64");

  await uploadStreamToStorage({
    filename,
    mimeType,
    directory,
    stream: buffer,
  });

  return createUpload({
    filename,
    mimeType,
    directory,
    size: buffer.length,
  });
};

/**
 * Delete an upload by id
 * @param id - upload id
 * @returns delete result
 * @throws 404 error if upload not found
 * @example deleteUploadById('upload-id')
 */
export const deleteUploadById = async (id: Types.ObjectId | string) => {
  const upload = await getUploadById(id);

  const storageKey = upload.directory
    ? `${upload.directory}/${upload.filename}`
    : upload.filename;

  await deleteFileFromStorage(storageKey);

  return UploadModel.findOneAndDelete({ _id: id });
};

/**
 * Upload a file
 * @param file - base64 encoded file
 * @param directory - storage directory
 * @returns created upload
 * @throws 400 error if invalid file type
 */
export const uploadFile = async (file: string, directory: StorageDirectory) => {
  const mimeType = getMimeTypeFromBase64(file);
  const extension = getFileExtensionMimeTypes(mimeType);
  const filename = generateRandomFileName(extension);

  let cleanBase64 = file;
  if (file.startsWith("data:")) {
    cleanBase64 = file.replace(/^data:.*?base64,/, "");
  }

  const buffer = Buffer.from(cleanBase64, "base64");

  await uploadStreamToStorage({
    filename,
    mimeType,
    directory,
    stream: buffer,
  });

  return createUpload({
    filename,
    mimeType,
    directory,
    size: buffer.length,
  });
};
