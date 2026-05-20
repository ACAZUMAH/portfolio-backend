import { makeExecutableSchema } from "@graphql-tools/schema";
import { applyMiddleware } from "graphql-middleware";
import { analyticsResolvers, analyticsTypeDefs } from "src/graphql/analytics";
import {
  mediaAssetsResolvers,
  mediaAssetsTypeDefs,
} from "src/graphql/mediaAssets";
import {
  resumeAssetsResolvers,
  resumeAssetsTypeDefs,
} from "src/graphql/resumeAssets";
import {
  testimonialsResolvers,
  testimonialsTypeDefs,
} from "src/graphql/testimonials";
import { authResolvers, authTypeDefs } from "src/graphql/auth";
import { leadsResolvers, leadsTypeDefs } from "src/graphql/leads";
import { portfolioResolvers, portfolioTypeDefs } from "src/graphql/portfolio";
import { projectsResolvers, projectsTypeDefs } from "src/graphql/projects";
import { adminResolvers, adminUserTypeDefs } from "src/graphql/adminUser";
import {
  resolvers as scalarResolvers,
  typeDefs as scalarTypeDefs,
} from "graphql-scalars";
import { generalResolvers, generalTypeDefs } from "src/graphql/general";
import {
  profileTypeDefs,
  resolvers as profileResolvers,
} from "src/graphql/profile";
import {
  availabilityTypeDefs,
  resolvers as availabilityResolvers,
} from "src/graphql/availability";
import {
  experiencesTypeDefs,
  resolvers as experiencesResolvers,
} from "src/graphql/experiences";
import {
  educationTypeDefs,
  resolvers as educationResolvers,
} from "src/graphql/education";
import {
  certificationsTypeDefs,
  resolvers as certificationsResolvers,
} from "src/graphql/certifications";
import {
  skillsTypeDefs,
  resolvers as skillsResolvers,
} from "src/graphql/skills";
import { uploadResolvers, uploadTypeDefs } from "./uploads";
import { permissions } from "./shield";

export const typeDefs = [
  authTypeDefs,
  adminUserTypeDefs,
  portfolioTypeDefs,
  projectsTypeDefs,
  leadsTypeDefs,
  mediaAssetsTypeDefs,
  resumeAssetsTypeDefs,
  testimonialsTypeDefs,
  profileTypeDefs,
  analyticsTypeDefs,
  scalarTypeDefs,
  generalTypeDefs,
  availabilityTypeDefs,
  experiencesTypeDefs,
  educationTypeDefs,
  certificationsTypeDefs,
  skillsTypeDefs,
  uploadTypeDefs,
];

export const resolvers = [
  authResolvers,
  adminResolvers,
  portfolioResolvers,
  projectsResolvers,
  leadsResolvers,
  mediaAssetsResolvers,
  resumeAssetsResolvers,
  testimonialsResolvers,
  analyticsResolvers,
  scalarResolvers,
  generalResolvers,
  profileResolvers,
  availabilityResolvers,
  experiencesResolvers,
  educationResolvers,
  certificationsResolvers,
  skillsResolvers,
  uploadResolvers,
];

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export const schema = applyMiddleware(executableSchema, permissions);
