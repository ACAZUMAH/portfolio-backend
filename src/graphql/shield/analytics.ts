import { allow } from "graphql-shield";
import { isAuthenticated } from "./general";

export const AnalyticsShield = {
  Query: {
    getAnalyticsSummary: isAuthenticated,
  },

  Mutation: {
    trackVisit: allow,
    trackProjectImpression: allow,
    trackResumeDownload: allow,
    trackOutboundClick: allow,
  },
};
