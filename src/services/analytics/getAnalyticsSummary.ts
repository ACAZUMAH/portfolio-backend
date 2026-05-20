import { OutboundClickType } from "src/common/enums";
import { countContactLeads } from "src/services/contactLeads";
import { countOutboundClicks } from "src/services/outboundClicks";
import { countProjectImpressions } from "src/services/projectImpressions";
import {
  countVisitEvents,
  getUniqueVisitorCount,
} from "src/services/visitEvents";

const getDateLimit = (days: number) => {
  const limit = new Date();
  limit.setDate(limit.getDate() - days);
  return limit;
};

/**
 * Get analytics summary.
 * @param days - Number of days to summarize
 * @returns Analytics summary
 */
export const getAnalyticsSummary = async (days: number) => {
  const createdAt = { $gte: getDateLimit(days) };
  const [visits, uniqueVisitors, impressions, outboundClicks, resumeDownloads, leads] =
    await Promise.all([
      countVisitEvents({ createdAt }),
      getUniqueVisitorCount({ createdAt }),
      countProjectImpressions({ createdAt }),
      countOutboundClicks({ createdAt }),
      countOutboundClicks({ createdAt, type: OutboundClickType.RESUME_DOWNLOAD }),
      countContactLeads({ createdAt }),
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
