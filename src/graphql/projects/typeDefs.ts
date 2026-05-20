export const projectsTypeDefs = `#graphql
  type Project {
    id: ID!
    title: String!
    slug: String!
    summary: String!
    problem: String
    role: String
    company: String
    client: String
    stack: [String!]!
    features: [String!]!
    outcomes: [String!]!
    lessons: [String!]!
    links: [ProjectLink!]!
    mediaIds: [String!]!
    medias: [Upload!]!
    caseStudySections: [CaseStudySection!]!
    visibility: ProjectVisibility!
    status: ProjectStatus!
    featured: Boolean!
    order: Int!
    seo: SeoMetadata
    github: GitHubMetadata
    createdAt: DateTime
    updatedAt: DateTime
  }

  type ProjectConnection {
    edges: [Project!]!
    pageInfo: PageInfo!
  }

  input CreateProjectInput {
    title: String!
    slug: String!
    summary: String!
    problem: String
    role: String
    company: String
    client: String
    stack: [String!]
    features: [String!]
    outcomes: [String!]
    lessons: [String!]
    links: [ProjectLinkInput!]
    mediaIds: [String!]
    caseStudySections: [CaseStudySectionInput!]
    visibility: ProjectVisibility
    status: ProjectStatus
    featured: Boolean
    order: Int
    seo: SeoMetadataInput
    github: GitHubMetadataInput
  }

  input UpdateProjectInput {
    id: ID!
    title: String
    slug: String
    summary: String
    problem: String
    role: String
    company: String
    client: String
    stack: [String!]
    features: [String!]
    outcomes: [String!]
    lessons: [String!]
    links: [ProjectLinkInput!]
    mediaIds: [String!]
    caseStudySections: [CaseStudySectionInput!]
    visibility: ProjectVisibility
    status: ProjectStatus
    featured: Boolean
    order: Int
    seo: SeoMetadataInput
    github: GitHubMetadataInput
  }

  input GetProjectFilters {
    stack: String
    company: String
    client: String
    featured: Boolean
    visibility: ProjectVisibility
    status: ProjectStatus
    search: String
    page: Int
    limit: Int
  }


  input UploadProjectMediaInput {
    file: String!
    projectId: ID!
  }

  input DeleteProjectMediaInput {
    photoId: ID!
    projectId: ID!
  }

  extend type Query {
    getProjectById(id: ID!): Project!
    getPublicProjectBySlug(slug: String!): Project
    getAdminProjects(filters: GetProjectFilters!): ProjectConnection!
    getPublicProjects(filters: GetProjectFilters!): ProjectConnection!
    getFeaturedPublicProjects(filters: GetProjectFilters!): ProjectConnection!
  }

  extend type Mutation {
    createProject(data: CreateProjectInput!): Project!
    updateProject(data: UpdateProjectInput!): Project!
    deleteProject(id: ID!): Boolean!
    uploadProjectMedia(data: UploadProjectMediaInput!): Project!
    deleteProjectMedia(data: DeleteProjectMediaInput!): Project!
  }
`;
