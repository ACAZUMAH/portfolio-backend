export const educationTypeDefs = `#graphql
  type Education {
    id: ID!
    institution: String!
    program: String!
    location: String
    startDate: String
    endDate: String
    order: Int!
    createdAt: DateTime
    updatedAt: DateTime
  }

  type EducationConnection {
    edges: [Education!]!
    pageInfo: PageInfo!
  }

  input CreateEducationInput {
    institution: String!
    program: String!
    location: String
    startDate: String
    endDate: String
    order: Int
  }

  input UpdateEducationInput {
    id: ID!
    institution: String
    program: String
    location: String
    startDate: DateTime
    endDate: DateTime
    order: Int
  }

  input GetEducationFilters {
    institution: String
    search: String
    page: Int
    limit: Int
  }

  extend type Query {
    getEducationById(id: ID!): Education!
    getEducation(filters: GetEducationFilters!): EducationConnection!
  }

  extend type Mutation {
    createEducation(data: CreateEducationInput!): Education!
    updateEducation(data: UpdateEducationInput!): Education!
    deleteEducation(id: ID!): Boolean!
  }
`;
