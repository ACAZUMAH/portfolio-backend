"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackOutboundClick = void 0;
const models_1 = require("../../models");
/**
 * Track outbound click.
 * @param data - Outbound click data
 * @returns True when outbound click is recorded
 */
const trackOutboundClick = async (data) => {
    await models_1.OutboundClickModel.create(data);
    return true;
};
exports.trackOutboundClick = trackOutboundClick;
