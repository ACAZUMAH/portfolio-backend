"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.experiencesTypeDefs = void 0;
exports.experiencesTypeDefs = `#graphql
  type Experience {
    id: ID!
    role: String!
    company: String!
    location: String
    workMode: String
    startDate: String
    endDate: String
    isCurrent: Boolean!
    highlights: [String!]!
    order: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type ExperienceConnection {
    edges: [Experience!]!
    pageInfo: PageInfo!
  }

  input CreateExperienceInput {
    role: String!
    company: String!
    location: String
    workMode: String
    startDate: DateTime
    endDate: DateTime
    isCurrent: Boolean
    highlights: [String!]
    order: Int
  }

  input UpdateExperienceInput {
    id: ID!
    role: String
    company: String
    location: String
    workMode: String
    startDate: DateTime
    endDate: DateTime
    isCurrent: Boolean
    highlights: [String!]
    order: Int
  }

  input GetExperienceFilters {
    company: String
    isCurrent: Boolean
    search: String
    order: Int
    page: Int
    limit: Int
  }

  extend type Query {
    getExperienceById(id: ID!): Experience!
    getExperiences(filters: GetExperienceFilters!): ExperienceConnection!
  }

  extend type Mutation {
    createExperience(data: CreateExperienceInput!): Experience!
    updateExperience(data: UpdateExperienceInput!): Experience!
    deleteExperience(id: ID!): Boolean!
  }
`;
