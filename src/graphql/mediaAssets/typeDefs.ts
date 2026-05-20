export const mediaAssetsTypeDefs = `#graphql
  type MediaAsset {
    id: ID!
    title: String!
    url: String!
    type: MediaType!
    alt: String
    projectId: String
  }

  type MediaAssetConnection {
    edges: [MediaAsset!]!
    pageInfo: PageInfo!
  }

  input CreateMediaAssetInput {
    title: String!
    url: String!
    type: MediaType
    alt: String
    projectId: String
  }

  input UpdateMediaAssetInput {
    id: ID!
    title: String
    url: String
    type: MediaType
    alt: String
    projectId: String
  }

  input GetMediaAssetFilters {
    type: MediaType
    projectId: String
    search: String
    page: Int
    limit: Int
  }

  extend type Query {
    adminMediaAssets(filters: GetMediaAssetFilters!): MediaAssetConnection!
  }

  extend type Mutation {
    createMediaAsset(data: CreateMediaAssetInput!): MediaAsset!
    updateMediaAsset(data: UpdateMediaAssetInput!): MediaAsset!
  }
`;
