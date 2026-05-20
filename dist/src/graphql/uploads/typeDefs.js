"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadTypeDefs = void 0;
exports.uploadTypeDefs = `#graphql
    type Upload {
        id: ID!
        size: Int!
        url: String!
        filename: String!
        mimeType: String!
        directory: String!
        createdAt: DateTime!
        updatedAt: DateTime!
    }
`;
