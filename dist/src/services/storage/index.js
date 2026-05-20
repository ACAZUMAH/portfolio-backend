"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFileFromStorage = exports.uploadStreamToStorage = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const lib_storage_1 = require("@aws-sdk/lib-storage");
const http_errors_1 = __importDefault(require("http-errors"));
const logger_1 = require("../../logger");
const bucketName = String(process.env.SPACES_BUCKET_NAME);
const s3Client = new client_s3_1.S3Client({
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
const uploadStreamToStorage = async (data) => {
    try {
        const uploadParams = {
            Bucket: bucketName,
            Body: data.stream,
            ContentType: data.mimeType,
            ACL: data.acl ? data.acl : client_s3_1.ObjectCannedACL.public_read,
            Key: data.directory
                ? `${data.directory}/${data.filename}`
                : data.filename,
        };
        const upload = new lib_storage_1.Upload({
            client: s3Client,
            params: uploadParams,
        });
        return upload.done();
    }
    catch (error) {
        logger_1.logger.error(error);
        throw http_errors_1.default.BadGateway("Error uploading file to storage");
    }
};
exports.uploadStreamToStorage = uploadStreamToStorage;
/**
 * @description Delete a file from storage
 * @param key - file key, the path to the file in the bucket
 * @returns Promise<boolean>
 * @throws 502 error if error deleting file from storage
 * @example deleteFileFromStorage('file-key')
 * @example deleteFileFromStorage('directory/file-key')
 * @example deleteFileFromStorage('directory/sub-directory/file-key')
 */
const deleteFileFromStorage = async (key) => {
    try {
        const params = { Bucket: bucketName, Key: key };
        const deleteCommand = new client_s3_1.DeleteObjectCommand(params);
        await s3Client.send(deleteCommand);
        return true;
    }
    catch (error) {
        logger_1.logger.error(error);
        throw http_errors_1.default.BadGateway("Error deleting file from storage");
    }
};
exports.deleteFileFromStorage = deleteFileFromStorage;
