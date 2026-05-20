"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniqueVisitorCount = void 0;
const models_1 = require("../../models");
/**
 * Get unique visitor count.
 * @param filter - Visit event filters
 * @returns Unique visitor count
 */
const getUniqueVisitorCount = async (filter = {}) => {
    const visitors = await models_1.VisitEventModel.distinct("visitorId", filter);
    return visitors.filter(Boolean).length;
};
exports.getUniqueVisitorCount = getUniqueVisitorCount;
