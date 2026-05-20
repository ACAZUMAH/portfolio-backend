"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectsResolvers = void 0;
const projectServices = __importStar(require("../../services/projects"));
const general_1 = require("../general");
const getProjectById = (_, args) => {
    return projectServices.getProjectById(args.id);
};
const getPublicProjectBySlug = (_, args) => {
    return projectServices.getPublicProjectBySlug(args.slug);
};
const getAdminProjects = (_, args) => {
    return projectServices.getAdminProjects(args.filters);
};
const getPublicProjects = (_, args) => {
    return projectServices.getPublicProjects(args.filters);
};
const getFeaturedPublicProjects = (_, args) => {
    return projectServices.getFeaturedPublicProjects(args.filters);
};
const createProject = (_, args) => {
    return projectServices.createProject(args.data);
};
const updateProject = (_, args) => {
    return projectServices.updateProject(args.data);
};
const deleteProject = (_, args) => {
    return projectServices.deleteProject(args.id);
};
const uploadProjectMedia = (_, args) => {
    return projectServices.uploadProjectMedia(args.data);
};
const deleteProjectMedia = (_, args) => {
    return projectServices.deleteProjectMedia(args.data);
};
const medias = (parent, _, { uploadLoader }) => {
    return uploadLoader.loadMany(parent.mediaIds?.map(String) ?? []);
};
exports.projectsResolvers = {
    Query: {
        getProjectById,
        getPublicProjectBySlug,
        getAdminProjects,
        getPublicProjects,
        getFeaturedPublicProjects,
    },
    Mutation: {
        createProject,
        updateProject,
        deleteProject,
        uploadProjectMedia,
        deleteProjectMedia,
    },
    Project: {
        ...(0, general_1.getId)(),
        medias,
    },
};
