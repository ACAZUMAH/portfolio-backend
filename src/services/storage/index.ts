import {
  DeleteObjectCommand,
  ObjectCannedACL,
  S3Client,
} from "@aws-sdk/client-s3";

import { Upload } from "@aws-sdk/lib-storage";
import createHttpError from "http-errors";
import { logger } from "src/logger";
import { UploadContentToStorageParams } from "src/common/interfaces/storage";

const bucketName = String(process.env.SPACES_BUCKET_NAME);

const s3Client = new S3Client({
  forcePathStyle: true,
  region: String(process.env.SPACES_REGION),
  endpoint: String(process.env.SPACES_ENDPOINT),
  credentials: {
    accessKeyId: String(process.env.SPACES_ACCESS_KEY_ID),
    secretAccessKey: String(process.env.SPACES_SECRET_ACCESS_KEY),
  },
});

/**
 * @description Get a file from storage
 * @param data.filename - file name
 * @param data.directory - directory in the bucket
 * @param data.mimeType - file mime type
 * @param data.stream - file content
 * @returns Promise<void>
 * @throws 502 error if error uploading file to storage
 * @example uploadStreamToStorage({ filename: 'file-name', directory: 'directory', mimeType: 'mime-type', stream: 'file-content' })
 */
export const uploadStreamToStorage = async (
  data: UploadContentToStorageParams
) => {
  try {
    const uploadParams = {
      Bucket: bucketName,
      Body: data.stream,
      ContentType: data.mimeType,
      ACL: data.acl ? data.acl : ObjectCannedACL.public_read,
      Key: data.directory
        ? `${data.directory}/${data.filename}`
        : data.filename,
    };

    const upload = new Upload({
      client: s3Client,
      params: uploadParams,
    });

    return upload.done();
  } catch (error) {
    logger.error(error);
    throw createHttpError.BadGateway("Error uploading file to storage");
  }
};

/**
 * @description Delete a file from storage
 * @param key - file key, the path to the file in the bucket
 * @returns Promise<boolean>
 * @throws 502 error if error deleting file from storage
 * @example deleteFileFromStorage('file-key')
 * @example deleteFileFromStorage('directory/file-key')
 * @example deleteFileFromStorage('directory/sub-directory/file-key')
 */
export const deleteFileFromStorage = async (key: string) => {
  try {
    const params = { Bucket: bucketName, Key: key };

    const deleteCommand = new DeleteObjectCommand(params);
    await s3Client.send(deleteCommand);

    return true;
  } catch (error) {
    logger.error(error);
    throw createHttpError.BadGateway("Error deleting file from storage");
  }
};
