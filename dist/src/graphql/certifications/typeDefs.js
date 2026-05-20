"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.certificationsTypeDefs = void 0;
exports.certificationsTypeDefs = `#graphql
  type Certification {
    id: ID!
    title: String!
    issuer: String
    date: String
    url: String
    order: Int!
    createdAt: DateTime
    updatedAt: DateTime
  }

  type CertificationConnection {
    edges: [Certification!]!
    pageInfo: PageInfo!
  }

  input CreateCertificationInput {
    title: String!
    issuer: String
    date: String
    url: String
    order: Int
  }

  input UpdateCertificationInput {
    id: ID!
    title: String
    issuer: String
    date: String
    url: String
    order: Int
  }

  input GetCertificationFilters {
    issuer: String
    search: String
    page: Int
    limit: Int
  }

  extend type Query {
    getCertificationById(id: ID!): Certification!
    getCertifications(filters: GetCertificationFilters!): CertificationConnection!
  }

  extend type Mutation {
    createCertification(data: CreateCertificationInput!): Certification!
    updateCertification(data: UpdateCertificationInput!): Certification!
    deleteCertification(id: ID!): Boolean!
  }
`;
