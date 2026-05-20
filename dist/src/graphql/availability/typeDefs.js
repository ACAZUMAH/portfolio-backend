"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.availabilityTypeDefs = void 0;
exports.availabilityTypeDefs = `#graphql
  type AvailabilityStatus {
    id: ID!
    label: String!
    description: String
    acceptingWork: Boolean!
    createdAt: DateTime
    updatedAt: DateTime
  }

  type AvailabilityStatusConnection {
    edges: [AvailabilityStatus!]!
    pageInfo: PageInfo!
  }

  input CreateAvailabilityStatusInput {
    label: String!
    description: String
    acceptingWork: Boolean
  }

  input UpdateAvailabilityStatusInput {
    id: ID!
    label: String
    description: String
    acceptingWork: Boolean
  }

  input GetAvailabilityStatusFilters {
    acceptingWork: Boolean
    search: String
    page: Int
    limit: Int
  }

  extend type Query {
    getAvailabilityStatusById(id: ID!): AvailabilityStatus!
    getLatestAvailabilityStatus: AvailabilityStatus
  }

  extend type Mutation {
    createAvailabilityStatus(data: CreateAvailabilityStatusInput!): AvailabilityStatus!
    updateAvailabilityStatus(data: UpdateAvailabilityStatusInput!): AvailabilityStatus!
  }
`;
