"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authTypeDefs = void 0;
exports.authTypeDefs = `#graphql

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
