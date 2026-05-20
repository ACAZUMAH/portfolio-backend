import { allow, shield } from "graphql-shield";
import { AdminUserShield } from "./adminUser";
import { AnalyticsShield } from "./analytics";
import { AuthShield } from "./auth";
import { AvailabilityShield } from "./availability";
import { CertificationShield } from "./certifications";
import { EducationShield } from "./education";
import { ExperienceShield } from "./experiences";
import { GeneralShield } from "./general";
import { LeadShield } from "./leads";
import { MediaAssetShield } from "./mediaAssets";
import { PortfolioShield } from "./portfolio";
import { ProfileShield } from "./profile";
import { ProjectShield } from "./projects";
import { ResumeAssetShield } from "./resumeAssets";
import { SkillShield } from "./skills";
import { TestimonialShield } from "./testimonials";

export const permissions = shield(
  {
    Query: {
      ...GeneralShield.Query,
      ...AdminUserShield.Query,
      ...AnalyticsShield.Query,
      ...AvailabilityShield.Query,
      ...CertificationShield.Query,
      ...EducationShield.Query,
      ...ExperienceShield.Query,
      ...LeadShield.Query,
      ...MediaAssetShield.Query,
      ...PortfolioShield.Query,
      ...ProfileShield.Query,
      ...ProjectShield.Query,
      ...ResumeAssetShield.Query,
      ...SkillShield.Query,
      ...TestimonialShield.Query,
    },
    Mutation: {
      ...GeneralShield.Mutation,
      ...AuthShield.Mutation,
      ...AnalyticsShield.Mutation,
      ...AvailabilityShield.Mutation,
      ...CertificationShield.Mutation,
      ...EducationShield.Mutation,
      ...ExperienceShield.Mutation,
      ...LeadShield.Mutation,
      ...MediaAssetShield.Mutation,
      ...ProfileShield.Mutation,
      ...ProjectShield.Mutation,
      ...ResumeAssetShield.Mutation,
      ...SkillShield.Mutation,
      ...TestimonialShield.Mutation,
    },
    Project: {
      ...ProjectShield.Project,
    },
  },
  {
    fallbackRule: allow,
    allowExternalErrors: true,
  },
);
