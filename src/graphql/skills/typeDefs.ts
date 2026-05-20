export const skillsTypeDefs = `#graphql
  type Skill {
    id: ID!
    name: String!
    category: String!
    featured: Boolean!
    order: Int!
    createdAt: DateTime
    updatedAt: DateTime
  }

  type SkillConnection {
    edges: [Skill!]!
    pageInfo: PageInfo!
  }

  input CreateSkillInput {
    name: String!
    category: String!
    featured: Boolean
    order: Int
  }

  input UpdateSkillInput {
    id: ID!
    name: String
    category: String
    featured: Boolean
    order: Int
  }

  input GetSkillFilters {
    category: String
    featured: Boolean
    search: String
    page: Int
    limit: Int
    sort: String
    order: String
  }

  extend type Query {
    getSkillById(id: ID!): Skill!
    getSkills(filters: GetSkillFilters!): SkillConnection!
  }

  extend type Mutation {
    createSkill(data: CreateSkillInput!): Skill!
    updateSkill(data: UpdateSkillInput!): Skill!
    deleteSkill(id: ID!): Boolean!
  }
`;
