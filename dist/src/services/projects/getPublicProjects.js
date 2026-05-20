"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFeaturedPublicProjects = exports.getPublicProjects = void 0;
const helpers_1 = require("../../common/helpers");
const models_1 = require("../../models");
const helpers_2 = require("./helpers");
/**
 * Get public projects.
 * @param filters - Project filters
 * @returns Public-safe projects connection
 */
const getPublicProjects = async (filters = {}) => {
    const query = {
        ...helpers_2.publicProjectFilter,
        ...(filters.stack && { stack: filters.stack }),
        ...(filters.company && { company: filters.company }),
        ...(filters.client && { client: filters.client }),
        ...(filters.featured !== undefined && { featured: filters.featured }),
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
        lean: false,
        limit: limit + 1,
        sort: { order: 1, createdAt: -1 },
    };
    const projects = await models_1.ProjectModel.find(query, null, options);
    const publicProjects = projects.map(helpers_2.toPublicProject);
    return (0, helpers_1.getPageConnection)(publicProjects, page, limit);
};
exports.getPublicProjects = getPublicProjects;
/**
 * Get featured public projects.
 * @param filters - Project filters
 * @returns Featured public-safe projects connection
 */
const getFeaturedPublicProjects = async (filters = {}) => {
    return (0, exports.getPublicProjects)({ ...filters, featured: true });
};
exports.getFeaturedPublicProjects = getFeaturedPublicProjects;
