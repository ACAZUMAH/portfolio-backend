"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countProjectImpressions = void 0;
const models_1 = require("../../models");
/**
 * Count project impressions.
 * @param filter - Project impression filters
 * @returns Project impression count
 */
const countProjectImpressions = async (filter = {}) => {
    return models_1.ProjectImpressionModel.countDocuments(filter);
};
exports.countProjectImpressions = countProjectImpressions;
