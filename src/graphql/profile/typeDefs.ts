export const profileTypeDefs = `#graphql
    type Profile {
        id: ID!
        fullName: String!
        title: String!
        headline: String!
        bio: String!
        email: String!
        phone: String
        location: String
        linkedInUrl: String
        githubUrl: String
        twitterUrl: String
        seo: SeoMetadata
        createdAt: DateTime
        updatedAt: DateTime
    }

    input UpdateProfileInput {
        id: ID!
        fullName: String
        title: String
        headline: String
        bio: String
        email: String
        phone: String
        location: String
        linkedInUrl: String
        githubUrl: String
        twitterUrl: String
        seo: SeoMetadataInput
    }

    extend type Query {
        getProfileById(id: ID!): Profile!
        getAdminProfile: Profile!
    }

    extend type Mutation {
        updateProfile(data: UpdateProfileInput!): Profile!
    }
`;
