"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = exports.deleteUploadById = exports.uploadPhoto = exports.getUploadsByIds = exports.getUploadByFilename = exports.getUploadById = exports.createUpload = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const mongoose_1 = require("mongoose");
const helpers_1 = require("../../common/helpers");
const uploads_1 = require("../../models/uploads");
const storage_1 = require("../../services/storage");
/**
 * Create an upload
 * @param data.filename - upload filename
 * @param data.directory - upload directory
 * @param data.mimeType - upload mimeType
 * @param data.size - upload size
 * @param data.url - upload url
 * @returns created upload
 */
const createUpload = async (data) => {
    return uploads_1.UploadModel.create(data);
};
exports.createUpload = createUpload;
/**
 * Get an upload by id
 * @param id - upload id
 * @returns upload
 * @throws 404 error if upload not found
 */
const getUploadById = async (id) => {
    if (!(0, mongoose_1.isValidObjectId)(id))
        throw http_errors_1.default.BadRequest("Invalid upload id");
    const upload = await uploads_1.UploadModel.findById(id, null, { lean: true });
    if (!upload)
        throw http_errors_1.default.NotFound("Upload not found");
    return upload;
};
exports.getUploadById = getUploadById;
/**
 * Get an upload by filename
 * @param filename - upload filename
 * @returns upload
 * @throws 404 error if upload not found
 */
const getUploadByFilename = async (filename) => {
    const upload = await uploads_1.UploadModel.findOne({ filename }, null, { lean: true });
    if (!upload)
        throw http_errors_1.default.NotFound("Upload not found");
    return upload;
};
exports.getUploadByFilename = getUploadByFilename;
/**
 * Get uploads by ids
 * @param ids - upload ids
 * @returns uploads
 * @throws 400 error if invalid upload ids
 * @example getUploadsByIds(['upload-id-1', 'upload-id-2'])
 */
const getUploadsByIds = async (ids) => {
    if (!ids.length)
        return [];
    if (!ids.every(mongoose_1.isValidObjectId)) {
        throw http_errors_1.default.BadRequest("Invalid upload ids");
    }
    return uploads_1.UploadModel.find({ _id: { $in: ids } }, null, { lean: true });
};
exports.getUploadsByIds = getUploadsByIds;
/**
 * @description upload a photo
 * @param file  - base64 encoded file
 * @param directory  - storage directory
 * @returns  created upload
 */
const uploadPhoto = async (file, directory) => {
    const mimeType = (0, helpers_1.getMimeTypeFromBase64)(file);
    // allow only image files
    if (!mimeType.startsWith("image/")) {
        throw http_errors_1.default.BadRequest("Invalid file type, only images are allowed");
    }
    const extension = (0, helpers_1.getFileExtensionMimeTypes)(mimeType);
    const filename = (0, helpers_1.generateRandomFileName)(extension);
    let cleanBase64 = file;
    if (file.startsWith("data:")) {
        cleanBase64 = file.replace(/^data:.*?base64,/, "");
    }
    const buffer = Buffer.from(cleanBase64, "base64");
    await (0, storage_1.uploadStreamToStorage)({
        filename,
        mimeType,
        directory,
        stream: buffer,
    });
    return (0, exports.createUpload)({
        filename,
        mimeType,
        directory,
        size: buffer.length,
    });
};
exports.uploadPhoto = uploadPhoto;
/**
 * Delete an upload by id
 * @param id - upload id
 * @returns delete result
 * @throws 404 error if upload not found
 * @example deleteUploadById('upload-id')
 */
const deleteUploadById = async (id) => {
    const upload = await (0, exports.getUploadById)(id);
    const storageKey = upload.directory
        ? `${upload.directory}/${upload.filename}`
        : upload.filename;
    await (0, storage_1.deleteFileFromStorage)(storageKey);
    return uploads_1.UploadModel.findOneAndDelete({ _id: id });
};
exports.deleteUploadById = deleteUploadById;
/**
 * Upload a file
 * @param file - base64 encoded file
 * @param directory - storage directory
 * @returns created upload
 * @throws 400 error if invalid file type
 */
const uploadFile = async (file, directory) => {
    const mimeType = (0, helpers_1.getMimeTypeFromBase64)(file);
    const extension = (0, helpers_1.getFileExtensionMimeTypes)(mimeType);
    const filename = (0, helpers_1.generateRandomFileName)(extension);
    let cleanBase64 = file;
    if (file.startsWith("data:")) {
        cleanBase64 = file.replace(/^data:.*?base64,/, "");
    }
    const buffer = Buffer.from(cleanBase64, "base64");
    await (0, storage_1.uploadStreamToStorage)({
        filename,
        mimeType,
        directory,
        stream: buffer,
    });
    return (0, exports.createUpload)({
        filename,
        mimeType,
        directory,
        size: buffer.length,
    });
};
exports.uploadFile = uploadFile;
