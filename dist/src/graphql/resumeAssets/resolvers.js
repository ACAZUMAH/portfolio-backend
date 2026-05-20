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
exports.resumeAssetsResolvers = void 0;
const resumeAssetsServices = __importStar(require("../../services/resumeAssets"));
const general_1 = require("../general");
const adminResumes = (_, args) => {
    return resumeAssetsServices.getAdminResumes(args.filters);
};
const createResumeAsset = (_, args) => {
    return resumeAssetsServices.createResumeAsset(args.data);
};
const updateResumeAsset = (_, args) => {
    return resumeAssetsServices.updateResumeAsset(args.data);
};
const setDefaultResume = (_, args) => {
    return resumeAssetsServices.setDefaultResume(args.id);
};
exports.resumeAssetsResolvers = {
    Query: {
        adminResumes,
    },
    Mutation: {
        createResumeAsset,
        updateResumeAsset,
        setDefaultResume,
    },
    ResumeAsset: {
        ...(0, general_1.getId)(),
    },
};
