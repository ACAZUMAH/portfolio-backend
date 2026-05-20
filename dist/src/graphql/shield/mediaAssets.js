"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaAssetShield = void 0;
const general_1 = require("./general");
exports.MediaAssetShield = {
    Query: {
        adminMediaAssets: general_1.isAuthenticated,
    },
    Mutation: {
        createMediaAsset: general_1.isAuthenticated,
        updateMediaAsset: general_1.isAuthenticated,
    },
};
