"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseTypeDefs = void 0;
exports.baseTypeDefs = `#graphql
  scalar Date

  enum ProjectVisibility {
    PUBLIC
    PRIVATE_SUMMARY
    PASSWORD_PROTECTED
    HIDDEN
  }

  enum ProjectStatus {
    LIVE
    IN_PROGRESS
    CLIENT_WORK
    OPEN_SOURCE
    PRIVATE
    ARCHIVED
  }

  enum LeadStatus {
    NEW
    REVIEWED
    REPLIED
    ARCHIVED
  }

  enum LeadPriority {
    LOW
    MEDIUM
    HIGH
  }

  enum MediaType {
    IMAGE
    LOGO
    SCREENSHOT
    RESUME
    OG_IMAGE
    OTHER
  }

  type SeoMetadata {
    title: String
    description: String
    keywords: [String!]!
    ogImageId: String
  }

  type ProjectLink {
    label: String
    url: String
    type: String
  }

  type CaseStudySection {
    title: String!
    body: String!
    order: Int!
  }

  type GitHubMetadata {
    repoUrl: String
    stars: Int
    language: String
    pushedAt: String
    defaultBranch: String
  }

  input SeoMetadataInput {
    title: String
    description: String
    keywords: [String!]
    ogImageId: String
  }

  input ProjectLinkInput {
    label: String
    url: String
    type: String
  }

  input CaseStudySectionInput {
    title: String!
    body: String!
    order: Int
  }

  input GitHubMetadataInput {
    repoUrl: String
    stars: Int
    language: String
    pushedAt: String
    defaultBranch: String
  }

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;
