"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackVisit = void 0;
const models_1 = require("../../models");
/**
 * Track visit event.
 * @param data - Visit event data
 * @returns True when visit event is recorded
 */
const trackVisit = async (data) => {
    await models_1.VisitEventModel.create({
        visitorId: data.visitorId || "anonymous",
        sessionId: data.sessionId || "unknown-session",
        path: data.path || "/",
        referrer: data.referrer || "direct",
        userAgent: data.userAgent || "unknown",
        device: data.device || "unknown",
        utmSource: data.utmSource || "direct",
        utmMedium: data.utmMedium || "none",
        utmCampaign: data.utmCampaign || "none",
    });
    return true;
};
exports.trackVisit = trackVisit;
