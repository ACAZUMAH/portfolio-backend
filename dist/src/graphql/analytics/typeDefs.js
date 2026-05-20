"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyticsTypeDefs = void 0;
exports.analyticsTypeDefs = `#graphql
  type AnalyticsSummary {
    totalVisits: Int!
    uniqueVisitors: Int!
    projectImpressions: Int!
    outboundClicks: Int!
    resumeDownloads: Int!
    leads: Int!
  }

  input VisitEventInput {
    visitorId: String
    sessionId: String
    path: String
    referrer: String
    userAgent: String
    device: String
    utmSource: String
    utmMedium: String
    utmCampaign: String
  }

  input ProjectImpressionInput {
    projectId: String
    slug: String
    visitorId: String
    path: String
  }

  input OutboundClickInput {
    label: String
    url: String
    type: String
    visitorId: String
    path: String
  }

  input ResumeDownloadInput {
    resumeId: ID!
    visitorId: String
    path: String
  }

  extend type Query {
    getAnalyticsSummary(days: Int = 30): AnalyticsSummary!
  }

  extend type Mutation {
    trackVisit(data: VisitEventInput!): Boolean!
    trackProjectImpression(data: ProjectImpressionInput!): Boolean!
    trackResumeDownload(data: ResumeDownloadInput!): Boolean!
    trackOutboundClick(data: OutboundClickInput!): Boolean!
  }
`;
