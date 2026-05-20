"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createResumeAssetLoader = void 0;
const dataloader_1 = __importDefault(require("dataloader"));
const models_1 = require("../../models");
const createResumeAssetLoader = () => {
    const getResumeAssetsByIds = async (ids) => {
        const resumes = await models_1.ResumeAssetModel.find({ _id: { $in: ids } });
        return ids.map(id => resumes.find(resume => String(resume._id) === id) ?? null);
    };
    return new dataloader_1.default(getResumeAssetsByIds);
};
exports.createResumeAssetLoader = createResumeAssetLoader;
