"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProjectMedia = exports.sortProjectMedias = exports.uploadProjectMedia = exports.addProjectMedia = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const storage_1 = require("../../common/enums/storage");
const models_1 = require("../../models");
const uploads_1 = require("../../services/uploads");
const getProjectById_1 = require("./getProjectById");
const addProjectMedia = async (data) => {
    const upload = await (0, uploads_1.getUploadById)(data.photoId);
    const project = await (0, getProjectById_1.getProjectById)(data.projectId);
    if (!upload.mimeType.startsWith("image/")) {
        throw http_errors_1.default.BadRequest("Invalid file type, only images are allowed");
    }
    return models_1.ProjectModel.findOneAndUpdate({ _id: project._id }, { $addToSet: { mediaIds: upload._id.toString() } }, {
        new: true,
        lean: true,
    });
};
exports.addProjectMedia = addProjectMedia;
const uploadProjectMedia = async (data) => {
    const project = await (0, getProjectById_1.getProjectById)(data.projectId);
    const upload = await (0, uploads_1.uploadPhoto)(data.file, storage_1.StorageDirectory.ProjectPhotos);
    return models_1.ProjectModel.findOneAndUpdate({ _id: project._id }, { $addToSet: { mediaIds: upload._id.toString() } }, {
        new: true,
        lean: true,
    });
};
exports.uploadProjectMedia = uploadProjectMedia;
const sortProjectMedias = async (data) => {
    const { projectId, medias } = data;
    const project = await (0, getProjectById_1.getProjectById)(projectId);
    if (project.mediaIds.length !== medias.length) {
        throw new http_errors_1.default.BadRequest("Number of provided photo IDs does not match the number of photos associated with the product");
    }
    const productMedias = project.mediaIds.map((media) => media.toString());
    const isValidMedia = medias.every((id) => productMedias.includes(id));
    if (!isValidMedia) {
        throw new http_errors_1.default.BadRequest("One or more provided photo IDs are invalid");
    }
    return models_1.ProjectModel.findOneAndUpdate({ _id: project._id }, { mediaIds: medias }, { new: true, lean: true });
};
exports.sortProjectMedias = sortProjectMedias;
const deleteProjectMedia = async (data) => {
    const { projectId, photoId } = data;
    const project = await (0, getProjectById_1.getProjectById)(projectId);
    const medias = project.mediaIds.map((media) => media.toString());
    if (!medias.includes(photoId)) {
        throw http_errors_1.default.BadRequest("Photo not found");
    }
    return models_1.ProjectModel.findOneAndUpdate({ _id: project._id }, {
        $pull: { mediaIds: photoId },
    }, { new: true, lean: true });
};
exports.deleteProjectMedia = deleteProjectMedia;
