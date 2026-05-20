export const authTypeDefs = `#graphql

  type AuthPayload {
    admin: AdminUser!
    token: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  extend type Mutation {
    login(data: LoginInput!): AuthPayload!
  }
`;
