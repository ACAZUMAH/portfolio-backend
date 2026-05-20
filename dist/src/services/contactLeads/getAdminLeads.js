"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminLeads = void 0;
const helpers_1 = require("../../common/helpers");
const models_1 = require("../../models");
/**
 * Get admin contact leads.
 * @param filters - Contact lead filters
 * @returns Contact leads connection
 */
const getAdminLeads = async (filters = {}) => {
    const query = {
        ...(filters.status && { status: filters.status }),
        ...(filters.priority && { priority: filters.priority }),
        ...(filters.projectInterest && { projectInterest: filters.projectInterest }),
        ...(filters.search && {
            $or: [
                { name: { $regex: filters.search, $options: "i" } },
                { email: { $regex: filters.search, $options: "i" } },
                { company: { $regex: filters.search, $options: "i" } },
                { message: { $regex: filters.search, $options: "i" } },
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
    const leads = await models_1.ContactLeadModel.find(query, null, options);
    return (0, helpers_1.getPageConnection)(leads, page, limit);
};
exports.getAdminLeads = getAdminLeads;
