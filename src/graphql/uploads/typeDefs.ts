export const uploadTypeDefs = `#graphql
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
