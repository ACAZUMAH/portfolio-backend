"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminResumes = void 0;
const helpers_1 = require("../../common/helpers");
const models_1 = require("../../models");
/**
 * Get admin resume assets.
 * @param filters - Resume asset filters
 * @returns Resume assets connection
 */
const getAdminResumes = async (filters = {}) => {
    const query = {
        ...(filters.isDefault !== undefined && { isDefault: filters.isDefault }),
        ...(filters.focus && { focus: filters.focus }),
        ...(filters.search && {
            $or: [
                { title: { $regex: filters.search, $options: "i" } },
                { focus: { $regex: filters.search, $options: "i" } },
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
        sort: { isDefault: -1, createdAt: -1 },
    };
    const resumes = await models_1.ResumeAssetModel.find(query, null, options);
    return (0, helpers_1.getPageConnection)(resumes, page, limit);
};
exports.getAdminResumes = getAdminResumes;
