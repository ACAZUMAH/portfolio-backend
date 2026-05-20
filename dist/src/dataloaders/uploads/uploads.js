"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUploadLoader = void 0;
const dataloader_1 = __importDefault(require("dataloader"));
const uploads_1 = require("../../models/uploads");
const createUploadLoader = () => {
    const getUploadsByIds = async (ids) => {
        const uploads = await uploads_1.UploadModel.find({ _id: { $in: ids } });
        return ids.map(id => uploads.find(upload => upload._id.toString() === id));
    };
    return new dataloader_1.default(getUploadsByIds);
};
exports.createUploadLoader = createUploadLoader;
