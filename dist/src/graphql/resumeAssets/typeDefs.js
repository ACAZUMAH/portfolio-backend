"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resumeAssetsTypeDefs = void 0;
exports.resumeAssetsTypeDefs = `#graphql
  type ResumeAsset {
    id: ID!
    title: String!
    url: String!
    focus: String
    isDefault: Boolean!
    downloads: Int!
  }

  type ResumeAssetConnection {
    edges: [ResumeAsset!]!
    pageInfo: PageInfo!
  }

  input CreateResumeAssetInput {
    title: String!
    url: String!
    focus: String
    isDefault: Boolean
  }

  input UpdateResumeAssetInput {
    id: ID!
    title: String
    url: String
    focus: String
    isDefault: Boolean
  }

  input GetResumeAssetFilters {
    isDefault: Boolean
    focus: String
    search: String
    page: Int
    limit: Int
  }

  extend type Query {
    adminResumes(filters: GetResumeAssetFilters!): ResumeAssetConnection!
  }

  extend type Mutation {
    createResumeAsset(data: CreateResumeAssetInput!): ResumeAsset!
    updateResumeAsset(data: UpdateResumeAssetInput!): ResumeAsset!
    setDefaultResume(id: ID!): ResumeAsset!
  }
`;
