"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackProjectImpression = void 0;
const models_1 = require("../../models");
/**
 * Track project impression.
 * @param data - Project impression data
 * @returns True when project impression is recorded
 */
const trackProjectImpression = async (data) => {
    await models_1.ProjectImpressionModel.create(data);
    return true;
};
exports.trackProjectImpression = trackProjectImpression;
