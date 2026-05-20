import * as services from "src/services/analytics";
import * as GqlTypes from "src/common/interfaces/graphql/graphql";

const getAnalyticsSummary = (
  _: any,
  args: GqlTypes.QueryGetAnalyticsSummaryArgs,
) => {
  return services.getAnalyticsSummary(args.days!);
};

const trackVisitResolver = (_: any, args: GqlTypes.MutationTrackVisitArgs) => {
  return services.trackVisit(args.data!);
};

const trackProjectImpressionResolver = (
  _: any,
  args: GqlTypes.MutationTrackProjectImpressionArgs,
) => {
  return services.trackProjectImpression(args.data!);
};

const trackResumeDownloadResolver = (_: any, args: any) => {
  return services.trackResumeDownload(args);
};

const trackOutboundClickResolver = (_: any, args: any) => {
  return services.trackOutboundClick(args.data);
};

export const analyticsResolvers = {
  Query: {
    getAnalyticsSummary,
  },
  Mutation: {
    trackVisit: trackVisitResolver,
    trackProjectImpression: trackProjectImpressionResolver,
    trackResumeDownload: trackResumeDownloadResolver,
    trackOutboundClick: trackOutboundClickResolver,
  },
};
