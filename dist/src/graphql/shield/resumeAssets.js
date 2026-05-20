"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumeAssetShield = void 0;
const general_1 = require("./general");
exports.ResumeAssetShield = {
    Query: {
        adminResumes: general_1.isAuthenticated,
    },
    Mutation: {
        createResumeAsset: general_1.isAuthenticated,
        updateResumeAsset: general_1.isAuthenticated,
        setDefaultResume: general_1.isAuthenticated,
    },
};
