"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminProjects = void 0;
const helpers_1 = require("../../common/helpers");
const models_1 = require("../../models");
/**
 * Get admin projects.
 * @param filters - Project filters
 * @returns Projects connection
 */
const getAdminProjects = async (filters = {}) => {
    const query = {
        ...(filters.stack && { stack: filters.stack }),
        ...(filters.company && { company: filters.company }),
        ...(filters.client && { client: filters.client }),
        ...(filters.featured !== undefined && { featured: filters.featured }),
        ...(filters.visibility && { visibility: filters.visibility }),
        ...(filters.status && { status: filters.status }),
        ...(filters.search && {
            $or: [
                { title: { $regex: filters.search, $options: "i" } },
                { summary: { $regex: filters.search, $options: "i" } },
                { company: { $regex: filters.search, $options: "i" } },
                { client: { $regex: filters.search, $options: "i" } },
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
        sort: { order: 1, createdAt: -1 },
    };
    const projects = await models_1.ProjectModel.find(query, null, options);
    return (0, helpers_1.getPageConnection)(projects, page, limit);
};
exports.getAdminProjects = getAdminProjects;
