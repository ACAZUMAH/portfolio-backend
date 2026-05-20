"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testimonialsTypeDefs = void 0;
exports.testimonialsTypeDefs = `#graphql
  type Testimonial {
    id: ID!
    name: String!
    role: String
    company: String
    quote: String!
    isVisible: Boolean!
    order: Int!
  }

  type TestimonialConnection {
    edges: [Testimonial!]!
    pageInfo: PageInfo!
  }

  input CreateTestimonialInput {
    name: String!
    role: String
    company: String
    quote: String!
    isVisible: Boolean
    order: Int
  }

  input UpdateTestimonialInput {
    id: ID!
    name: String
    role: String
    company: String
    quote: String
    isVisible: Boolean
    order: Int
  }

  input GetTestimonialFilters {
    company: String
    isVisible: Boolean
    search: String
    page: Int
    limit: Int
  }

  extend type Query {
    adminTestimonials(filters: GetTestimonialFilters!): TestimonialConnection!
  }

  extend type Mutation {
    createTestimonial(data: CreateTestimonialInput!): Testimonial!
    updateTestimonial(data: UpdateTestimonialInput!): Testimonial!
  }
`;
