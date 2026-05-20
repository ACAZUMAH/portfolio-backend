"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnalyticsSummary = void 0;
const enums_1 = require("../../common/enums");
const contactLeads_1 = require("../../services/contactLeads");
const outboundClicks_1 = require("../../services/outboundClicks");
const projectImpressions_1 = require("../../services/projectImpressions");
const visitEvents_1 = require("../../services/visitEvents");
const getDateLimit = (days) => {
    const limit = new Date();
    limit.setDate(limit.getDate() - days);
    return limit;
};
/**
 * Get analytics summary.
 * @param days - Number of days to summarize
 * @returns Analytics summary
 */
const getAnalyticsSummary = async (days) => {
    const createdAt = { $gte: getDateLimit(days) };
    const [visits, uniqueVisitors, impressions, outboundClicks, resumeDownloads, leads] = await Promise.all([
        (0, visitEvents_1.countVisitEvents)({ createdAt }),
        (0, visitEvents_1.getUniqueVisitorCount)({ createdAt }),
        (0, projectImpressions_1.countProjectImpressions)({ createdAt }),
        (0, outboundClicks_1.countOutboundClicks)({ createdAt }),
        (0, outboundClicks_1.countOutboundClicks)({ createdAt, type: enums_1.OutboundClickType.RESUME_DOWNLOAD }),
        (0, contactLeads_1.countContactLeads)({ createdAt }),
    ]);
    return {
        totalVisits: visits,
        uniqueVisitors,
        projectImpressions: impressions,
        outboundClicks,
        resumeDownloads,
        leads,
    };
};
exports.getAnalyticsSummary = getAnalyticsSummary;
