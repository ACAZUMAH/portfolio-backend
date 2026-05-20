import { VisitEventInput } from "src/common/interfaces/graphql";
import { VisitEventModel } from "src/models";

/**
 * Track visit event.
 * @param data - Visit event data
 * @returns True when visit event is recorded
 */
export const trackVisit = async (data: VisitEventInput) => {
  await VisitEventModel.create({
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
