"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = `#graphql
  scalar Date

  enum ProjectVisibility {
    PUBLIC
    PRIVATE_SUMMARY
    PASSWORD_PROTECTED
    HIDDEN
  }

  enum ProjectStatus {
    LIVE
    IN_PROGRESS
    CLIENT_WORK
    OPEN_SOURCE
    PRIVATE
    ARCHIVED
  }

  enum LeadStatus {
    NEW
    REVIEWED
    REPLIED
    ARCHIVED
  }

  enum LeadPriority {
    LOW
    MEDIUM
    HIGH
  }

  enum MediaType {
    IMAGE
    LOGO
    SCREENSHOT
    RESUME
    OG_IMAGE
    OTHER
  }

  type SeoMetadata {
    title: String
    description: String
    keywords: [String!]!
    ogImageId: String
  }

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
    createdAt: Date
    updatedAt: Date
  }

  type AvailabilityStatus {
    id: ID!
    label: String!
    description: String
    acceptingWork: Boolean!
  }

  type Experience {
    id: ID!
    role: String!
    company: String!
    location: String
    workMode: String
    startDate: String
    endDate: String
    isCurrent: Boolean!
    highlights: [String!]!
    order: Int!
  }

  type Education {
    id: ID!
    institution: String!
    program: String!
    location: String
    startDate: String
    endDate: String
    order: Int!
  }

  type Certification {
    id: ID!
    title: String!
    issuer: String
    date: String
    url: String
    order: Int!
  }

  type Skill {
    id: ID!
    name: String!
    category: String!
    featured: Boolean!
    order: Int!
  }

  type ProjectLink {
    label: String
    url: String
    type: String
  }

  type CaseStudySection {
    title: String!
    body: String!
    order: Int!
  }

  type GitHubMetadata {
    repoUrl: String
    stars: Int
    language: String
    pushedAt: String
    defaultBranch: String
  }

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
    caseStudySections: [CaseStudySection!]!
    visibility: ProjectVisibility!
    status: ProjectStatus!
    featured: Boolean!
    order: Int!
    seo: SeoMetadata
    github: GitHubMetadata
    createdAt: Date
    updatedAt: Date
  }

  type MediaAsset {
    id: ID!
    title: String!
    url: String!
    type: MediaType!
    alt: String
    projectId: String
  }

  type ResumeAsset {
    id: ID!
    title: String!
    url: String!
    focus: String
    isDefault: Boolean!
    downloads: Int!
  }

  type Testimonial {
    id: ID!
    name: String!
    role: String
    company: String
    quote: String!
    isVisible: Boolean!
    order: Int!
  }

  type ContactLead {
    id: ID!
    name: String!
    email: String!
    phone: String
    company: String
    message: String!
    projectInterest: String
    sourcePage: String
    status: LeadStatus!
    priority: LeadPriority!
    notes: String
    followUpDate: String
    createdAt: Date
    updatedAt: Date
  }

  type AnalyticsSummary {
    totalVisits: Int!
    uniqueVisitors: Int!
    projectImpressions: Int!
    outboundClicks: Int!
    resumeDownloads: Int!
    leads: Int!
  }

  type AuthPayload {
    token: String!
    admin: AdminUser!
  }

  type AdminUser {
    id: ID!
    name: String
    email: String!
  }

  type Portfolio {
    profile: Profile
    availability: AvailabilityStatus
    experiences: [Experience!]!
    education: [Education!]!
    certifications: [Certification!]!
    skills: [Skill!]!
    projects: [Project!]!
    featuredProjects: [Project!]!
    resumes: [ResumeAsset!]!
    defaultResume: ResumeAsset
    testimonials: [Testimonial!]!
  }

  input SeoMetadataInput {
    title: String
    description: String
    keywords: [String!]
    ogImageId: String
  }

  input ProfileInput {
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
    seo: SeoMetadataInput
  }

  input ProjectLinkInput {
    label: String
    url: String
    type: String
  }

  input CaseStudySectionInput {
    title: String!
    body: String!
    order: Int
  }

  input GitHubMetadataInput {
    repoUrl: String
    stars: Int
    language: String
    pushedAt: String
    defaultBranch: String
  }

  input ProjectInput {
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

  input ContactLeadInput {
    name: String!
    email: String!
    phone: String
    company: String
    message: String!
    projectInterest: String
    sourcePage: String
  }

  input ContactLeadAdminInput {
    status: LeadStatus
    priority: LeadPriority
    notes: String
    followUpDate: String
  }

  input ResumeAssetInput {
    title: String!
    url: String!
    focus: String
    isDefault: Boolean
  }

  input MediaAssetInput {
    title: String!
    url: String!
    type: MediaType
    alt: String
    projectId: String
  }

  input TestimonialInput {
    name: String!
    role: String
    company: String
    quote: String!
    isVisible: Boolean
    order: Int
  }

  input VisitEventInput {
    visitorId: String
    sessionId: String
    path: String
    referrer: String
    userAgent: String
    device: String
    utmSource: String
    utmMedium: String
    utmCampaign: String
  }

  input ProjectImpressionInput {
    projectId: String
    slug: String
    visitorId: String
    path: String
  }

  input OutboundClickInput {
    label: String
    url: String
    type: String
    visitorId: String
    path: String
  }

  type Query {
    portfolio: Portfolio!
    project(slug: String!): Project
    adminMe: AdminUser
    adminProjects: [Project!]!
    adminLeads: [ContactLead!]!
    adminMediaAssets: [MediaAsset!]!
    adminResumes: [ResumeAsset!]!
    adminTestimonials: [Testimonial!]!
    analyticsSummary(days: Int = 30): AnalyticsSummary!
  }

  type Mutation {
    login(email: String!, password: String!): AuthPayload!
    updateProfile(input: ProfileInput!): Profile!
    createProject(input: ProjectInput!): Project!
    updateProject(id: ID!, input: ProjectInput!): Project!
    deleteProject(id: ID!): Boolean!
    createContactLead(input: ContactLeadInput!): ContactLead!
    updateContactLead(id: ID!, input: ContactLeadAdminInput!): ContactLead!
    createResumeAsset(input: ResumeAssetInput!): ResumeAsset!
    setDefaultResume(id: ID!): ResumeAsset!
    createMediaAsset(input: MediaAssetInput!): MediaAsset!
    createTestimonial(input: TestimonialInput!): Testimonial!
    trackVisit(input: VisitEventInput!): Boolean!
    trackProjectImpression(input: ProjectImpressionInput!): Boolean!
    trackResumeDownload(id: ID!, visitorId: String, path: String): Boolean!
    trackOutboundClick(input: OutboundClickInput!): Boolean!
  }
`;
