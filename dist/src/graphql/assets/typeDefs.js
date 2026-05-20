"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assetsTypeDefs = void 0;
exports.assetsTypeDefs = `#graphql
  type MediaAsset {
    id: ID!
    title: String!
    url: String!
    type: MediaType!
    alt: String
    projectId: String
  }

  type ResumeAsset {
    id: ID!
    title: String!
    url: String!
    focus: String
    isDefault: Boolean!
    downloads: Int!
  }

  type Testimonial {
    id: ID!
    name: String!
    role: String
    company: String
    quote: String!
    isVisible: Boolean!
    order: Int!
  }

  input ResumeAssetInput {
    title: String!
    url: String!
    focus: String
    isDefault: Boolean
  }

  input MediaAssetInput {
    title: String!
    url: String!
    type: MediaType
    alt: String
    projectId: String
  }

  input TestimonialInput {
    name: String!
    role: String
    company: String
    quote: String!
    isVisible: Boolean
    order: Int
  }

  extend type Query {
    adminMediaAssets: [MediaAsset!]!
    adminResumes: [ResumeAsset!]!
    adminTestimonials: [Testimonial!]!
  }

  extend type Mutation {
    createResumeAsset(data: ResumeAssetInput!): ResumeAsset!
    setDefaultResume(id: ID!): ResumeAsset!
    createMediaAsset(data: MediaAssetInput!): MediaAsset!
    createTestimonial(data: TestimonialInput!): Testimonial!
  }
`;
