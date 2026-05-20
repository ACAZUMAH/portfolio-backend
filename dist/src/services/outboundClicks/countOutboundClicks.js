"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countOutboundClicks = void 0;
const models_1 = require("../../models");
/**
 * Count outbound clicks.
 * @param filter - Outbound click filters
 * @returns Outbound click count
 */
const countOutboundClicks = async (filter = {}) => {
    return models_1.OutboundClickModel.countDocuments(filter);
};
exports.countOutboundClicks = countOutboundClicks;
