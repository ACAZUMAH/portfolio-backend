export const adminUserTypeDefs = `#graphql

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
