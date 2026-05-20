"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminMediaAssets = void 0;
const helpers_1 = require("../../common/helpers");
const models_1 = require("../../models");
/**
 * Get admin media assets.
 * @param filters - Media asset filters
 * @returns Media assets connection
 */
const getAdminMediaAssets = async (filters = {}) => {
    const query = {
        ...(filters.type && { type: filters.type }),
        ...(filters.projectId && { projectId: filters.projectId }),
        ...(filters.search && {
            $or: [
                { title: { $regex: filters.search, $options: "i" } },
                { alt: { $regex: filters.search, $options: "i" } },
            ],
        }),
    };
    const page = (0, helpers_1.getSanitizePage)(filters.page);
    const limit = (0, helpers_1.getSanitizeLimit)(filters.limit);
    const skip = (0, helpers_1.getSanitizeOffset)(page, limit);
    const options = {
        skip,
        lean: true,
        limit: limit + 1,
        sort: { createdAt: -1 },
    };
    const mediaAssets = await models_1.MediaAssetModel.find(query, null, options);
    return (0, helpers_1.getPageConnection)(mediaAssets, page, limit);
};
exports.getAdminMediaAssets = getAdminMediaAssets;
