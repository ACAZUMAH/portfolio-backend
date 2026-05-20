"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminUserTypeDefs = void 0;
exports.adminUserTypeDefs = `#graphql

  type AdminUser {
    id: ID!
    name: String
    email: String!

    createdAt: Date!
    updatedAt: Date!
  }

  extend type Query {
    adminMe: AdminUser!
  }

`;
