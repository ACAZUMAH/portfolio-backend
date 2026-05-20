import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  AccountNumber: { input: unknown; output: unknown; }
  BigInt: { input: unknown; output: unknown; }
  Byte: { input: unknown; output: unknown; }
  CountryCode: { input: unknown; output: unknown; }
  CountryName: { input: unknown; output: unknown; }
  Cuid: { input: unknown; output: unknown; }
  Cuid2: { input: unknown; output: unknown; }
  Currency: { input: unknown; output: unknown; }
  DID: { input: unknown; output: unknown; }
  Date: { input: unknown; output: unknown; }
  DateTime: { input: unknown; output: unknown; }
  DateTimeISO: { input: unknown; output: unknown; }
  DeweyDecimal: { input: unknown; output: unknown; }
  Duration: { input: unknown; output: unknown; }
  EmailAddress: { input: unknown; output: unknown; }
  GUID: { input: unknown; output: unknown; }
  GeoJSON: { input: unknown; output: unknown; }
  HSL: { input: unknown; output: unknown; }
  HSLA: { input: unknown; output: unknown; }
  HexColorCode: { input: unknown; output: unknown; }
  Hexadecimal: { input: unknown; output: unknown; }
  IBAN: { input: unknown; output: unknown; }
  IP: { input: unknown; output: unknown; }
  IPCPatent: { input: unknown; output: unknown; }
  IPv4: { input: unknown; output: unknown; }
  IPv6: { input: unknown; output: unknown; }
  ISBN: { input: unknown; output: unknown; }
  ISO8601Duration: { input: unknown; output: unknown; }
  JSON: { input: unknown; output: unknown; }
  JSONObject: { input: unknown; output: unknown; }
  JWT: { input: unknown; output: unknown; }
  LCCSubclass: { input: unknown; output: unknown; }
  Latitude: { input: unknown; output: unknown; }
  LocalDate: { input: unknown; output: unknown; }
  LocalDateTime: { input: unknown; output: unknown; }
  LocalEndTime: { input: unknown; output: unknown; }
  LocalTime: { input: unknown; output: unknown; }
  Locale: { input: unknown; output: unknown; }
  Long: { input: unknown; output: unknown; }
  Longitude: { input: unknown; output: unknown; }
  MAC: { input: unknown; output: unknown; }
  NegativeFloat: { input: unknown; output: unknown; }
  NegativeInt: { input: unknown; output: unknown; }
  NonEmptyString: { input: unknown; output: unknown; }
  NonNegativeFloat: { input: unknown; output: unknown; }
  NonNegativeInt: { input: unknown; output: unknown; }
  NonPositiveFloat: { input: unknown; output: unknown; }
  NonPositiveInt: { input: unknown; output: unknown; }
  ObjectID: { input: unknown; output: unknown; }
  PhoneNumber: { input: unknown; output: unknown; }
  Port: { input: unknown; output: unknown; }
  PositiveFloat: { input: unknown; output: unknown; }
  PositiveInt: { input: unknown; output: unknown; }
  PostalCode: { input: unknown; output: unknown; }
  RGB: { input: unknown; output: unknown; }
  RGBA: { input: unknown; output: unknown; }
  RoutingNumber: { input: unknown; output: unknown; }
  SESSN: { input: unknown; output: unknown; }
  SafeInt: { input: unknown; output: unknown; }
  SemVer: { input: unknown; output: unknown; }
  Time: { input: unknown; output: unknown; }
  TimeZone: { input: unknown; output: unknown; }
  Timestamp: { input: unknown; output: unknown; }
  ULID: { input: unknown; output: unknown; }
  URL: { input: unknown; output: unknown; }
  USCurrency: { input: unknown; output: unknown; }
  UUID: { input: unknown; output: unknown; }
  UnsignedFloat: { input: unknown; output: unknown; }
  UnsignedInt: { input: unknown; output: unknown; }
  UtcOffset: { input: unknown; output: unknown; }
  Void: { input: unknown; output: unknown; }
};

export type AdminUser = {
  __typename?: 'AdminUser';
  createdAt: Scalars['Date']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
};

export type AnalyticsSummary = {
  __typename?: 'AnalyticsSummary';
  leads: Scalars['Int']['output'];
  outboundClicks: Scalars['Int']['output'];
  projectImpressions: Scalars['Int']['output'];
  resumeDownloads: Scalars['Int']['output'];
  totalVisits: Scalars['Int']['output'];
  uniqueVisitors: Scalars['Int']['output'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  admin: AdminUser;
  token: Scalars['String']['output'];
};

export type AvailabilityStatus = {
  __typename?: 'AvailabilityStatus';
  acceptingWork: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AvailabilityStatusConnection = {
  __typename?: 'AvailabilityStatusConnection';
  edges: Array<AvailabilityStatus>;
  pageInfo: PageInfo;
};

export type CaseStudySection = {
  __typename?: 'CaseStudySection';
  body: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type CaseStudySectionInput = {
  body: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};

export type Certification = {
  __typename?: 'Certification';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  issuer?: Maybe<Scalars['String']['output']>;
  order: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type CertificationConnection = {
  __typename?: 'CertificationConnection';
  edges: Array<Certification>;
  pageInfo: PageInfo;
};

export type ContactLead = {
  __typename?: 'ContactLead';
  company?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  followUpDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  name: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  priority: LeadPriority;
  projectInterest?: Maybe<Scalars['String']['output']>;
  sourcePage?: Maybe<Scalars['String']['output']>;
  status: LeadStatus;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CreateAvailabilityStatusInput = {
  acceptingWork?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
};

export type CreateCertificationInput = {
  date?: InputMaybe<Scalars['String']['input']>;
  issuer?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CreateContactLeadInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  message: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  projectInterest?: InputMaybe<Scalars['String']['input']>;
  sourcePage?: InputMaybe<Scalars['String']['input']>;
};

export type CreateEducationInput = {
  endDate?: InputMaybe<Scalars['String']['input']>;
  institution: Scalars['String']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  program: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['String']['input']>;
};

export type CreateExperienceInput = {
  company: Scalars['String']['input'];
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  highlights?: InputMaybe<Array<Scalars['String']['input']>>;
  isCurrent?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  role: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  workMode?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMediaAssetInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  type?: InputMaybe<MediaType>;
  url: Scalars['String']['input'];
};

export type CreateProjectInput = {
  caseStudySections?: InputMaybe<Array<CaseStudySectionInput>>;
  client?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  features?: InputMaybe<Array<Scalars['String']['input']>>;
  github?: InputMaybe<GitHubMetadataInput>;
  lessons?: InputMaybe<Array<Scalars['String']['input']>>;
  links?: InputMaybe<Array<ProjectLinkInput>>;
  mediaIds?: InputMaybe<Array<Scalars['String']['input']>>;
  order?: InputMaybe<Scalars['Int']['input']>;
  outcomes?: InputMaybe<Array<Scalars['String']['input']>>;
  problem?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  seo?: InputMaybe<SeoMetadataInput>;
  slug: Scalars['String']['input'];
  stack?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<ProjectStatus>;
  summary: Scalars['String']['input'];
  title: Scalars['String']['input'];
  visibility?: InputMaybe<ProjectVisibility>;
};

export type CreateResumeAssetInput = {
  focus?: InputMaybe<Scalars['String']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type CreateSkillInput = {
  category: Scalars['String']['input'];
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateTestimonialInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  quote: Scalars['String']['input'];
  role?: InputMaybe<Scalars['String']['input']>;
};

export type Education = {
  __typename?: 'Education';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  endDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  institution: Scalars['String']['output'];
  location?: Maybe<Scalars['String']['output']>;
  order: Scalars['Int']['output'];
  program: Scalars['String']['output'];
  startDate?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EducationConnection = {
  __typename?: 'EducationConnection';
  edges: Array<Education>;
  pageInfo: PageInfo;
};

export type Experience = {
  __typename?: 'Experience';
  company: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  endDate?: Maybe<Scalars['String']['output']>;
  highlights: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isCurrent: Scalars['Boolean']['output'];
  location?: Maybe<Scalars['String']['output']>;
  order: Scalars['Int']['output'];
  role: Scalars['String']['output'];
  startDate?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  workMode?: Maybe<Scalars['String']['output']>;
};

export type ExperienceConnection = {
  __typename?: 'ExperienceConnection';
  edges: Array<Experience>;
  pageInfo: PageInfo;
};

export type GetAvailabilityStatusFilters = {
  acceptingWork?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type GetCertificationFilters = {
  issuer?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type GetEducationFilters = {
  institution?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type GetExperienceFilters = {
  company?: InputMaybe<Scalars['String']['input']>;
  isCurrent?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type GetMediaAssetFilters = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<MediaType>;
};

export type GetPortfolioFilters = {
  certifications?: InputMaybe<GetCertificationFilters>;
  education?: InputMaybe<GetEducationFilters>;
  experiences?: InputMaybe<GetExperienceFilters>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  projects?: InputMaybe<GetProjectFilters>;
  resumes?: InputMaybe<GetResumeAssetFilters>;
  skills?: InputMaybe<GetSkillFilters>;
  testimonials?: InputMaybe<GetTestimonialFilters>;
};

export type GetProjectFilters = {
  client?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stack?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ProjectStatus>;
  visibility?: InputMaybe<ProjectVisibility>;
};

export type GetResumeAssetFilters = {
  focus?: InputMaybe<Scalars['String']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type GetSkillFilters = {
  category?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

export type GetTestimonialFilters = {
  company?: InputMaybe<Scalars['String']['input']>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type GitHubMetadata = {
  __typename?: 'GitHubMetadata';
  defaultBranch?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  pushedAt?: Maybe<Scalars['DateTime']['output']>;
  repoUrl?: Maybe<Scalars['String']['output']>;
  stars?: Maybe<Scalars['Int']['output']>;
};

export type GitHubMetadataInput = {
  defaultBranch?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  pushedAt?: InputMaybe<Scalars['DateTime']['input']>;
  repoUrl?: InputMaybe<Scalars['String']['input']>;
  stars?: InputMaybe<Scalars['Int']['input']>;
};

export enum LeadPriority {
  HIGH = 'HIGH',
  LOW = 'LOW',
  MEDIUM = 'MEDIUM'
}

export enum LeadStatus {
  ARCHIVED = 'ARCHIVED',
  NEW = 'NEW',
  REPLIED = 'REPLIED',
  REVIEWED = 'REVIEWED'
}

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MediaAsset = {
  __typename?: 'MediaAsset';
  alt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  projectId?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: MediaType;
  url: Scalars['String']['output'];
};

export type MediaAssetConnection = {
  __typename?: 'MediaAssetConnection';
  edges: Array<MediaAsset>;
  pageInfo: PageInfo;
};

export enum MediaType {
  IMAGE = 'IMAGE',
  LOGO = 'LOGO',
  OG_IMAGE = 'OG_IMAGE',
  OTHER = 'OTHER',
  RESUME = 'RESUME',
  SCREENSHOT = 'SCREENSHOT'
}

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']['output']>;
  createAvailabilityStatus: AvailabilityStatus;
  createCertification: Certification;
  createContactLead: ContactLead;
  createEducation: Education;
  createExperience: Experience;
  createMediaAsset: MediaAsset;
  createProject: Project;
  createResumeAsset: ResumeAsset;
  createSkill: Skill;
  createTestimonial: Testimonial;
  deleteCertification: Scalars['Boolean']['output'];
  deleteEducation: Scalars['Boolean']['output'];
  deleteExperience: Scalars['Boolean']['output'];
  deleteProject: Scalars['Boolean']['output'];
  deleteSkill: Scalars['Boolean']['output'];
  login: AuthPayload;
  setDefaultResume: ResumeAsset;
  trackOutboundClick: Scalars['Boolean']['output'];
  trackProjectImpression: Scalars['Boolean']['output'];
  trackResumeDownload: Scalars['Boolean']['output'];
  trackVisit: Scalars['Boolean']['output'];
  updateAvailabilityStatus: AvailabilityStatus;
  updateCertification: Certification;
  updateContactLead: ContactLead;
  updateEducation: Education;
  updateExperience: Experience;
  updateMediaAsset: MediaAsset;
  updateProfile: Profile;
  updateProject: Project;
  updateResumeAsset: ResumeAsset;
  updateSkill: Skill;
  updateTestimonial: Testimonial;
};


export type MutationCreateAvailabilityStatusArgs = {
  data: CreateAvailabilityStatusInput;
};


export type MutationCreateCertificationArgs = {
  data: CreateCertificationInput;
};


export type MutationCreateContactLeadArgs = {
  data: CreateContactLeadInput;
};


export type MutationCreateEducationArgs = {
  data: CreateEducationInput;
};


export type MutationCreateExperienceArgs = {
  data: CreateExperienceInput;
};


export type MutationCreateMediaAssetArgs = {
  data: CreateMediaAssetInput;
};


export type MutationCreateProjectArgs = {
  data: CreateProjectInput;
};


export type MutationCreateResumeAssetArgs = {
  data: CreateResumeAssetInput;
};


export type MutationCreateSkillArgs = {
  data: CreateSkillInput;
};


export type MutationCreateTestimonialArgs = {
  data: CreateTestimonialInput;
};


export type MutationDeleteCertificationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEducationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteExperienceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSkillArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationSetDefaultResumeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationTrackOutboundClickArgs = {
  data: OutboundClickInput;
};


export type MutationTrackProjectImpressionArgs = {
  data: ProjectImpressionInput;
};


export type MutationTrackResumeDownloadArgs = {
  data: ResumeDownloadInput;
};


export type MutationTrackVisitArgs = {
  data: VisitEventInput;
};


export type MutationUpdateAvailabilityStatusArgs = {
  data: UpdateAvailabilityStatusInput;
};


export type MutationUpdateCertificationArgs = {
  data: UpdateCertificationInput;
};


export type MutationUpdateContactLeadArgs = {
  data: UpdateContactLeadInput;
};


export type MutationUpdateEducationArgs = {
  data: UpdateEducationInput;
};


export type MutationUpdateExperienceArgs = {
  data: UpdateExperienceInput;
};


export type MutationUpdateMediaAssetArgs = {
  data: UpdateMediaAssetInput;
};


export type MutationUpdateProfileArgs = {
  data: UpdateProfileInput;
};


export type MutationUpdateProjectArgs = {
  data: UpdateProjectInput;
};


export type MutationUpdateResumeAssetArgs = {
  data: UpdateResumeAssetInput;
};


export type MutationUpdateSkillArgs = {
  data: UpdateSkillInput;
};


export type MutationUpdateTestimonialArgs = {
  data: UpdateTestimonialInput;
};

export type OutboundClickInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  visitorId?: InputMaybe<Scalars['String']['input']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type Portfolio = {
  __typename?: 'Portfolio';
  availability?: Maybe<AvailabilityStatus>;
  certifications: Array<Certification>;
  defaultResume?: Maybe<ResumeAsset>;
  education: Array<Education>;
  experiences: Array<Experience>;
  featuredProjects: Array<Project>;
  profile?: Maybe<Profile>;
  projects: Array<Project>;
  resumes: Array<ResumeAsset>;
  skills: Array<Skill>;
  testimonials: Array<Testimonial>;
};

export type Profile = {
  __typename?: 'Profile';
  bio: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  githubUrl?: Maybe<Scalars['String']['output']>;
  headline: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  linkedInUrl?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<SeoMetadata>;
  title: Scalars['String']['output'];
  twitterUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Project = {
  __typename?: 'Project';
  caseStudySections: Array<CaseStudySection>;
  client?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  featured: Scalars['Boolean']['output'];
  features: Array<Scalars['String']['output']>;
  github?: Maybe<GitHubMetadata>;
  id: Scalars['ID']['output'];
  lessons: Array<Scalars['String']['output']>;
  links: Array<ProjectLink>;
  mediaIds: Array<Scalars['String']['output']>;
  order: Scalars['Int']['output'];
  outcomes: Array<Scalars['String']['output']>;
  problem?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<SeoMetadata>;
  slug: Scalars['String']['output'];
  stack: Array<Scalars['String']['output']>;
  status: ProjectStatus;
  summary: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  visibility: ProjectVisibility;
};

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  edges: Array<Project>;
  pageInfo: PageInfo;
};

export type ProjectImpressionInput = {
  path?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  visitorId?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectLink = {
  __typename?: 'ProjectLink';
  label?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ProjectLinkInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export enum ProjectStatus {
  ARCHIVED = 'ARCHIVED',
  CLIENT_WORK = 'CLIENT_WORK',
  IN_PROGRESS = 'IN_PROGRESS',
  LIVE = 'LIVE',
  OPEN_SOURCE = 'OPEN_SOURCE',
  PRIVATE = 'PRIVATE'
}

export enum ProjectVisibility {
  HIDDEN = 'HIDDEN',
  PASSWORD_PROTECTED = 'PASSWORD_PROTECTED',
  PRIVATE_SUMMARY = 'PRIVATE_SUMMARY',
  PUBLIC = 'PUBLIC'
}

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']['output']>;
  adminMe: AdminUser;
  adminMediaAssets: MediaAssetConnection;
  adminResumes: ResumeAssetConnection;
  adminTestimonials: TestimonialConnection;
  getAdminLeads: Array<ContactLead>;
  getAdminProfile: Profile;
  getAdminProjects: ProjectConnection;
  getAnalyticsSummary: AnalyticsSummary;
  getAvailabilityStatusById: AvailabilityStatus;
  getCertificationById: Certification;
  getCertifications: CertificationConnection;
  getEducation: EducationConnection;
  getEducationById: Education;
  getExperienceById: Experience;
  getExperiences: ExperienceConnection;
  getFeaturedPublicProjects: ProjectConnection;
  getLatestAvailabilityStatus?: Maybe<AvailabilityStatus>;
  getProfileById: Profile;
  getProjectById: Project;
  getPublicProjectBySlug?: Maybe<Project>;
  getPublicProjects: ProjectConnection;
  getSkillById: Skill;
  getSkills: SkillConnection;
  healthCheck: Scalars['String']['output'];
  hello: Scalars['String']['output'];
  portfolio: Portfolio;
};


export type QueryAdminMediaAssetsArgs = {
  filters: GetMediaAssetFilters;
};


export type QueryAdminResumesArgs = {
  filters: GetResumeAssetFilters;
};


export type QueryAdminTestimonialsArgs = {
  filters: GetTestimonialFilters;
};


export type QueryGetAdminProjectsArgs = {
  filters: GetProjectFilters;
};


export type QueryGetAnalyticsSummaryArgs = {
  days?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAvailabilityStatusByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetCertificationByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetCertificationsArgs = {
  filters: GetCertificationFilters;
};


export type QueryGetEducationArgs = {
  filters: GetEducationFilters;
};


export type QueryGetEducationByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetExperienceByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetExperiencesArgs = {
  filters: GetExperienceFilters;
};


export type QueryGetFeaturedPublicProjectsArgs = {
  filters: GetProjectFilters;
};


export type QueryGetProfileByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetProjectByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetPublicProjectBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetPublicProjectsArgs = {
  filters: GetProjectFilters;
};


export type QueryGetSkillByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetSkillsArgs = {
  filters: GetSkillFilters;
};


export type QueryPortfolioArgs = {
  filters?: InputMaybe<GetPortfolioFilters>;
};

export type ResumeAsset = {
  __typename?: 'ResumeAsset';
  downloads: Scalars['Int']['output'];
  focus?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ResumeAssetConnection = {
  __typename?: 'ResumeAssetConnection';
  edges: Array<ResumeAsset>;
  pageInfo: PageInfo;
};

export type ResumeDownloadInput = {
  path?: InputMaybe<Scalars['String']['input']>;
  resumeId: Scalars['ID']['input'];
  visitorId?: InputMaybe<Scalars['String']['input']>;
};

export type SeoMetadata = {
  __typename?: 'SeoMetadata';
  description?: Maybe<Scalars['String']['output']>;
  keywords: Array<Scalars['String']['output']>;
  ogImageId?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SeoMetadataInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  ogImageId?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Skill = {
  __typename?: 'Skill';
  category: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  featured: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SkillConnection = {
  __typename?: 'SkillConnection';
  edges: Array<Skill>;
  pageInfo: PageInfo;
};

export type Subscription = {
  __typename?: 'Subscription';
  _empty?: Maybe<Scalars['String']['output']>;
};

export type Testimonial = {
  __typename?: 'Testimonial';
  company?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isVisible: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  quote: Scalars['String']['output'];
  role?: Maybe<Scalars['String']['output']>;
};

export type TestimonialConnection = {
  __typename?: 'TestimonialConnection';
  edges: Array<Testimonial>;
  pageInfo: PageInfo;
};

export type UpdateAvailabilityStatusInput = {
  acceptingWork?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCertificationInput = {
  date?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  issuer?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateContactLeadInput = {
  followUpDate?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<LeadPriority>;
  status?: InputMaybe<LeadStatus>;
};

export type UpdateEducationInput = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['ID']['input'];
  institution?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  program?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateExperienceInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  highlights?: InputMaybe<Array<Scalars['String']['input']>>;
  id: Scalars['ID']['input'];
  isCurrent?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  workMode?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMediaAssetInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  projectId?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<MediaType>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProfileInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  githubUrl?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  linkedInUrl?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  seo?: InputMaybe<SeoMetadataInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  twitterUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProjectInput = {
  caseStudySections?: InputMaybe<Array<CaseStudySectionInput>>;
  client?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  features?: InputMaybe<Array<Scalars['String']['input']>>;
  github?: InputMaybe<GitHubMetadataInput>;
  id: Scalars['ID']['input'];
  lessons?: InputMaybe<Array<Scalars['String']['input']>>;
  links?: InputMaybe<Array<ProjectLinkInput>>;
  mediaIds?: InputMaybe<Array<Scalars['String']['input']>>;
  order?: InputMaybe<Scalars['Int']['input']>;
  outcomes?: InputMaybe<Array<Scalars['String']['input']>>;
  problem?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  seo?: InputMaybe<SeoMetadataInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  stack?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<ProjectStatus>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<ProjectVisibility>;
};

export type UpdateResumeAssetInput = {
  focus?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSkillInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateTestimonialInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  quote?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

export type VisitEventInput = {
  device?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  referrer?: InputMaybe<Scalars['String']['input']>;
  sessionId?: InputMaybe<Scalars['String']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
  utmCampaign?: InputMaybe<Scalars['String']['input']>;
  utmMedium?: InputMaybe<Scalars['String']['input']>;
  utmSource?: InputMaybe<Scalars['String']['input']>;
  visitorId?: InputMaybe<Scalars['String']['input']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;





/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AccountNumber: ResolverTypeWrapper<Scalars['AccountNumber']['output']>;
  AdminUser: ResolverTypeWrapper<AdminUser>;
  AnalyticsSummary: ResolverTypeWrapper<AnalyticsSummary>;
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  AvailabilityStatus: ResolverTypeWrapper<AvailabilityStatus>;
  AvailabilityStatusConnection: ResolverTypeWrapper<AvailabilityStatusConnection>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Byte: ResolverTypeWrapper<Scalars['Byte']['output']>;
  CaseStudySection: ResolverTypeWrapper<CaseStudySection>;
  CaseStudySectionInput: CaseStudySectionInput;
  Certification: ResolverTypeWrapper<Certification>;
  CertificationConnection: ResolverTypeWrapper<CertificationConnection>;
  ContactLead: ResolverTypeWrapper<ContactLead>;
  CountryCode: ResolverTypeWrapper<Scalars['CountryCode']['output']>;
  CountryName: ResolverTypeWrapper<Scalars['CountryName']['output']>;
  CreateAvailabilityStatusInput: CreateAvailabilityStatusInput;
  CreateCertificationInput: CreateCertificationInput;
  CreateContactLeadInput: CreateContactLeadInput;
  CreateEducationInput: CreateEducationInput;
  CreateExperienceInput: CreateExperienceInput;
  CreateMediaAssetInput: CreateMediaAssetInput;
  CreateProjectInput: CreateProjectInput;
  CreateResumeAssetInput: CreateResumeAssetInput;
  CreateSkillInput: CreateSkillInput;
  CreateTestimonialInput: CreateTestimonialInput;
  Cuid: ResolverTypeWrapper<Scalars['Cuid']['output']>;
  Cuid2: ResolverTypeWrapper<Scalars['Cuid2']['output']>;
  Currency: ResolverTypeWrapper<Scalars['Currency']['output']>;
  DID: ResolverTypeWrapper<Scalars['DID']['output']>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DateTimeISO: ResolverTypeWrapper<Scalars['DateTimeISO']['output']>;
  DeweyDecimal: ResolverTypeWrapper<Scalars['DeweyDecimal']['output']>;
  Duration: ResolverTypeWrapper<Scalars['Duration']['output']>;
  Education: ResolverTypeWrapper<Education>;
  EducationConnection: ResolverTypeWrapper<EducationConnection>;
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']['output']>;
  Experience: ResolverTypeWrapper<Experience>;
  ExperienceConnection: ResolverTypeWrapper<ExperienceConnection>;
  GUID: ResolverTypeWrapper<Scalars['GUID']['output']>;
  GeoJSON: ResolverTypeWrapper<Scalars['GeoJSON']['output']>;
  GetAvailabilityStatusFilters: GetAvailabilityStatusFilters;
  GetCertificationFilters: GetCertificationFilters;
  GetEducationFilters: GetEducationFilters;
  GetExperienceFilters: GetExperienceFilters;
  GetMediaAssetFilters: GetMediaAssetFilters;
  GetPortfolioFilters: GetPortfolioFilters;
  GetProjectFilters: GetProjectFilters;
  GetResumeAssetFilters: GetResumeAssetFilters;
  GetSkillFilters: GetSkillFilters;
  GetTestimonialFilters: GetTestimonialFilters;
  GitHubMetadata: ResolverTypeWrapper<GitHubMetadata>;
  GitHubMetadataInput: GitHubMetadataInput;
  HSL: ResolverTypeWrapper<Scalars['HSL']['output']>;
  HSLA: ResolverTypeWrapper<Scalars['HSLA']['output']>;
  HexColorCode: ResolverTypeWrapper<Scalars['HexColorCode']['output']>;
  Hexadecimal: ResolverTypeWrapper<Scalars['Hexadecimal']['output']>;
  IBAN: ResolverTypeWrapper<Scalars['IBAN']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  IP: ResolverTypeWrapper<Scalars['IP']['output']>;
  IPCPatent: ResolverTypeWrapper<Scalars['IPCPatent']['output']>;
  IPv4: ResolverTypeWrapper<Scalars['IPv4']['output']>;
  IPv6: ResolverTypeWrapper<Scalars['IPv6']['output']>;
  ISBN: ResolverTypeWrapper<Scalars['ISBN']['output']>;
  ISO8601Duration: ResolverTypeWrapper<Scalars['ISO8601Duration']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']['output']>;
  JWT: ResolverTypeWrapper<Scalars['JWT']['output']>;
  LCCSubclass: ResolverTypeWrapper<Scalars['LCCSubclass']['output']>;
  Latitude: ResolverTypeWrapper<Scalars['Latitude']['output']>;
  LeadPriority: LeadPriority;
  LeadStatus: LeadStatus;
  LocalDate: ResolverTypeWrapper<Scalars['LocalDate']['output']>;
  LocalDateTime: ResolverTypeWrapper<Scalars['LocalDateTime']['output']>;
  LocalEndTime: ResolverTypeWrapper<Scalars['LocalEndTime']['output']>;
  LocalTime: ResolverTypeWrapper<Scalars['LocalTime']['output']>;
  Locale: ResolverTypeWrapper<Scalars['Locale']['output']>;
  LoginInput: LoginInput;
  Long: ResolverTypeWrapper<Scalars['Long']['output']>;
  Longitude: ResolverTypeWrapper<Scalars['Longitude']['output']>;
  MAC: ResolverTypeWrapper<Scalars['MAC']['output']>;
  MediaAsset: ResolverTypeWrapper<MediaAsset>;
  MediaAssetConnection: ResolverTypeWrapper<MediaAssetConnection>;
  MediaType: MediaType;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  NegativeFloat: ResolverTypeWrapper<Scalars['NegativeFloat']['output']>;
  NegativeInt: ResolverTypeWrapper<Scalars['NegativeInt']['output']>;
  NonEmptyString: ResolverTypeWrapper<Scalars['NonEmptyString']['output']>;
  NonNegativeFloat: ResolverTypeWrapper<Scalars['NonNegativeFloat']['output']>;
  NonNegativeInt: ResolverTypeWrapper<Scalars['NonNegativeInt']['output']>;
  NonPositiveFloat: ResolverTypeWrapper<Scalars['NonPositiveFloat']['output']>;
  NonPositiveInt: ResolverTypeWrapper<Scalars['NonPositiveInt']['output']>;
  ObjectID: ResolverTypeWrapper<Scalars['ObjectID']['output']>;
  OutboundClickInput: OutboundClickInput;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PhoneNumber: ResolverTypeWrapper<Scalars['PhoneNumber']['output']>;
  Port: ResolverTypeWrapper<Scalars['Port']['output']>;
  Portfolio: ResolverTypeWrapper<Portfolio>;
  PositiveFloat: ResolverTypeWrapper<Scalars['PositiveFloat']['output']>;
  PositiveInt: ResolverTypeWrapper<Scalars['PositiveInt']['output']>;
  PostalCode: ResolverTypeWrapper<Scalars['PostalCode']['output']>;
  Profile: ResolverTypeWrapper<Profile>;
  Project: ResolverTypeWrapper<Project>;
  ProjectConnection: ResolverTypeWrapper<ProjectConnection>;
  ProjectImpressionInput: ProjectImpressionInput;
  ProjectLink: ResolverTypeWrapper<ProjectLink>;
  ProjectLinkInput: ProjectLinkInput;
  ProjectStatus: ProjectStatus;
  ProjectVisibility: ProjectVisibility;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  RGB: ResolverTypeWrapper<Scalars['RGB']['output']>;
  RGBA: ResolverTypeWrapper<Scalars['RGBA']['output']>;
  ResumeAsset: ResolverTypeWrapper<ResumeAsset>;
  ResumeAssetConnection: ResolverTypeWrapper<ResumeAssetConnection>;
  ResumeDownloadInput: ResumeDownloadInput;
  RoutingNumber: ResolverTypeWrapper<Scalars['RoutingNumber']['output']>;
  SESSN: ResolverTypeWrapper<Scalars['SESSN']['output']>;
  SafeInt: ResolverTypeWrapper<Scalars['SafeInt']['output']>;
  SemVer: ResolverTypeWrapper<Scalars['SemVer']['output']>;
  SeoMetadata: ResolverTypeWrapper<SeoMetadata>;
  SeoMetadataInput: SeoMetadataInput;
  Skill: ResolverTypeWrapper<Skill>;
  SkillConnection: ResolverTypeWrapper<SkillConnection>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Testimonial: ResolverTypeWrapper<Testimonial>;
  TestimonialConnection: ResolverTypeWrapper<TestimonialConnection>;
  Time: ResolverTypeWrapper<Scalars['Time']['output']>;
  TimeZone: ResolverTypeWrapper<Scalars['TimeZone']['output']>;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']['output']>;
  ULID: ResolverTypeWrapper<Scalars['ULID']['output']>;
  URL: ResolverTypeWrapper<Scalars['URL']['output']>;
  USCurrency: ResolverTypeWrapper<Scalars['USCurrency']['output']>;
  UUID: ResolverTypeWrapper<Scalars['UUID']['output']>;
  UnsignedFloat: ResolverTypeWrapper<Scalars['UnsignedFloat']['output']>;
  UnsignedInt: ResolverTypeWrapper<Scalars['UnsignedInt']['output']>;
  UpdateAvailabilityStatusInput: UpdateAvailabilityStatusInput;
  UpdateCertificationInput: UpdateCertificationInput;
  UpdateContactLeadInput: UpdateContactLeadInput;
  UpdateEducationInput: UpdateEducationInput;
  UpdateExperienceInput: UpdateExperienceInput;
  UpdateMediaAssetInput: UpdateMediaAssetInput;
  UpdateProfileInput: UpdateProfileInput;
  UpdateProjectInput: UpdateProjectInput;
  UpdateResumeAssetInput: UpdateResumeAssetInput;
  UpdateSkillInput: UpdateSkillInput;
  UpdateTestimonialInput: UpdateTestimonialInput;
  UtcOffset: ResolverTypeWrapper<Scalars['UtcOffset']['output']>;
  VisitEventInput: VisitEventInput;
  Void: ResolverTypeWrapper<Scalars['Void']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AccountNumber: Scalars['AccountNumber']['output'];
  AdminUser: AdminUser;
  AnalyticsSummary: AnalyticsSummary;
  AuthPayload: AuthPayload;
  AvailabilityStatus: AvailabilityStatus;
  AvailabilityStatusConnection: AvailabilityStatusConnection;
  BigInt: Scalars['BigInt']['output'];
  Boolean: Scalars['Boolean']['output'];
  Byte: Scalars['Byte']['output'];
  CaseStudySection: CaseStudySection;
  CaseStudySectionInput: CaseStudySectionInput;
  Certification: Certification;
  CertificationConnection: CertificationConnection;
  ContactLead: ContactLead;
  CountryCode: Scalars['CountryCode']['output'];
  CountryName: Scalars['CountryName']['output'];
  CreateAvailabilityStatusInput: CreateAvailabilityStatusInput;
  CreateCertificationInput: CreateCertificationInput;
  CreateContactLeadInput: CreateContactLeadInput;
  CreateEducationInput: CreateEducationInput;
  CreateExperienceInput: CreateExperienceInput;
  CreateMediaAssetInput: CreateMediaAssetInput;
  CreateProjectInput: CreateProjectInput;
  CreateResumeAssetInput: CreateResumeAssetInput;
  CreateSkillInput: CreateSkillInput;
  CreateTestimonialInput: CreateTestimonialInput;
  Cuid: Scalars['Cuid']['output'];
  Cuid2: Scalars['Cuid2']['output'];
  Currency: Scalars['Currency']['output'];
  DID: Scalars['DID']['output'];
  Date: Scalars['Date']['output'];
  DateTime: Scalars['DateTime']['output'];
  DateTimeISO: Scalars['DateTimeISO']['output'];
  DeweyDecimal: Scalars['DeweyDecimal']['output'];
  Duration: Scalars['Duration']['output'];
  Education: Education;
  EducationConnection: EducationConnection;
  EmailAddress: Scalars['EmailAddress']['output'];
  Experience: Experience;
  ExperienceConnection: ExperienceConnection;
  GUID: Scalars['GUID']['output'];
  GeoJSON: Scalars['GeoJSON']['output'];
  GetAvailabilityStatusFilters: GetAvailabilityStatusFilters;
  GetCertificationFilters: GetCertificationFilters;
  GetEducationFilters: GetEducationFilters;
  GetExperienceFilters: GetExperienceFilters;
  GetMediaAssetFilters: GetMediaAssetFilters;
  GetPortfolioFilters: GetPortfolioFilters;
  GetProjectFilters: GetProjectFilters;
  GetResumeAssetFilters: GetResumeAssetFilters;
  GetSkillFilters: GetSkillFilters;
  GetTestimonialFilters: GetTestimonialFilters;
  GitHubMetadata: GitHubMetadata;
  GitHubMetadataInput: GitHubMetadataInput;
  HSL: Scalars['HSL']['output'];
  HSLA: Scalars['HSLA']['output'];
  HexColorCode: Scalars['HexColorCode']['output'];
  Hexadecimal: Scalars['Hexadecimal']['output'];
  IBAN: Scalars['IBAN']['output'];
  ID: Scalars['ID']['output'];
  IP: Scalars['IP']['output'];
  IPCPatent: Scalars['IPCPatent']['output'];
  IPv4: Scalars['IPv4']['output'];
  IPv6: Scalars['IPv6']['output'];
  ISBN: Scalars['ISBN']['output'];
  ISO8601Duration: Scalars['ISO8601Duration']['output'];
  Int: Scalars['Int']['output'];
  JSON: Scalars['JSON']['output'];
  JSONObject: Scalars['JSONObject']['output'];
  JWT: Scalars['JWT']['output'];
  LCCSubclass: Scalars['LCCSubclass']['output'];
  Latitude: Scalars['Latitude']['output'];
  LocalDate: Scalars['LocalDate']['output'];
  LocalDateTime: Scalars['LocalDateTime']['output'];
  LocalEndTime: Scalars['LocalEndTime']['output'];
  LocalTime: Scalars['LocalTime']['output'];
  Locale: Scalars['Locale']['output'];
  LoginInput: LoginInput;
  Long: Scalars['Long']['output'];
  Longitude: Scalars['Longitude']['output'];
  MAC: Scalars['MAC']['output'];
  MediaAsset: MediaAsset;
  MediaAssetConnection: MediaAssetConnection;
  Mutation: Record<PropertyKey, never>;
  NegativeFloat: Scalars['NegativeFloat']['output'];
  NegativeInt: Scalars['NegativeInt']['output'];
  NonEmptyString: Scalars['NonEmptyString']['output'];
  NonNegativeFloat: Scalars['NonNegativeFloat']['output'];
  NonNegativeInt: Scalars['NonNegativeInt']['output'];
  NonPositiveFloat: Scalars['NonPositiveFloat']['output'];
  NonPositiveInt: Scalars['NonPositiveInt']['output'];
  ObjectID: Scalars['ObjectID']['output'];
  OutboundClickInput: OutboundClickInput;
  PageInfo: PageInfo;
  PhoneNumber: Scalars['PhoneNumber']['output'];
  Port: Scalars['Port']['output'];
  Portfolio: Portfolio;
  PositiveFloat: Scalars['PositiveFloat']['output'];
  PositiveInt: Scalars['PositiveInt']['output'];
  PostalCode: Scalars['PostalCode']['output'];
  Profile: Profile;
  Project: Project;
  ProjectConnection: ProjectConnection;
  ProjectImpressionInput: ProjectImpressionInput;
  ProjectLink: ProjectLink;
  ProjectLinkInput: ProjectLinkInput;
  Query: Record<PropertyKey, never>;
  RGB: Scalars['RGB']['output'];
  RGBA: Scalars['RGBA']['output'];
  ResumeAsset: ResumeAsset;
  ResumeAssetConnection: ResumeAssetConnection;
  ResumeDownloadInput: ResumeDownloadInput;
  RoutingNumber: Scalars['RoutingNumber']['output'];
  SESSN: Scalars['SESSN']['output'];
  SafeInt: Scalars['SafeInt']['output'];
  SemVer: Scalars['SemVer']['output'];
  SeoMetadata: SeoMetadata;
  SeoMetadataInput: SeoMetadataInput;
  Skill: Skill;
  SkillConnection: SkillConnection;
  String: Scalars['String']['output'];
  Subscription: Record<PropertyKey, never>;
  Testimonial: Testimonial;
  TestimonialConnection: TestimonialConnection;
  Time: Scalars['Time']['output'];
  TimeZone: Scalars['TimeZone']['output'];
  Timestamp: Scalars['Timestamp']['output'];
  ULID: Scalars['ULID']['output'];
  URL: Scalars['URL']['output'];
  USCurrency: Scalars['USCurrency']['output'];
  UUID: Scalars['UUID']['output'];
  UnsignedFloat: Scalars['UnsignedFloat']['output'];
  UnsignedInt: Scalars['UnsignedInt']['output'];
  UpdateAvailabilityStatusInput: UpdateAvailabilityStatusInput;
  UpdateCertificationInput: UpdateCertificationInput;
  UpdateContactLeadInput: UpdateContactLeadInput;
  UpdateEducationInput: UpdateEducationInput;
  UpdateExperienceInput: UpdateExperienceInput;
  UpdateMediaAssetInput: UpdateMediaAssetInput;
  UpdateProfileInput: UpdateProfileInput;
  UpdateProjectInput: UpdateProjectInput;
  UpdateResumeAssetInput: UpdateResumeAssetInput;
  UpdateSkillInput: UpdateSkillInput;
  UpdateTestimonialInput: UpdateTestimonialInput;
  UtcOffset: Scalars['UtcOffset']['output'];
  VisitEventInput: VisitEventInput;
  Void: Scalars['Void']['output'];
};

export interface AccountNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AccountNumber'], any> {
  name: 'AccountNumber';
}

export type AdminUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdminUser'] = ResolversParentTypes['AdminUser']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
};

export type AnalyticsSummaryResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnalyticsSummary'] = ResolversParentTypes['AnalyticsSummary']> = {
  leads?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  outboundClicks?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  projectImpressions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  resumeDownloads?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalVisits?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  uniqueVisitors?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type AuthPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  admin?: Resolver<ResolversTypes['AdminUser'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type AvailabilityStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['AvailabilityStatus'] = ResolversParentTypes['AvailabilityStatus']> = {
  acceptingWork?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
};

export type AvailabilityStatusConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AvailabilityStatusConnection'] = ResolversParentTypes['AvailabilityStatusConnection']> = {
  edges?: Resolver<Array<ResolversTypes['AvailabilityStatus']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface ByteScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Byte'], any> {
  name: 'Byte';
}

export type CaseStudySectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CaseStudySection'] = ResolversParentTypes['CaseStudySection']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type CertificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Certification'] = ResolversParentTypes['Certification']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  issuer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type CertificationConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CertificationConnection'] = ResolversParentTypes['CertificationConnection']> = {
  edges?: Resolver<Array<ResolversTypes['Certification']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type ContactLeadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactLead'] = ResolversParentTypes['ContactLead']> = {
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  followUpDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  priority?: Resolver<ResolversTypes['LeadPriority'], ParentType, ContextType>;
  projectInterest?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sourcePage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['LeadStatus'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
};

export interface CountryCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['CountryCode'], any> {
  name: 'CountryCode';
}

export interface CountryNameScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['CountryName'], any> {
  name: 'CountryName';
}

export interface CuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cuid'], any> {
  name: 'Cuid';
}

export interface Cuid2ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cuid2'], any> {
  name: 'Cuid2';
}

export interface CurrencyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Currency'], any> {
  name: 'Currency';
}

export interface DidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DID'], any> {
  name: 'DID';
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface DateTimeIsoScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTimeISO'], any> {
  name: 'DateTimeISO';
}

export interface DeweyDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DeweyDecimal'], any> {
  name: 'DeweyDecimal';
}

export interface DurationScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Duration'], any> {
  name: 'Duration';
}

export type EducationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Education'] = ResolversParentTypes['Education']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  institution?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  program?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
};

export type EducationConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EducationConnection'] = ResolversParentTypes['EducationConnection']> = {
  edges?: Resolver<Array<ResolversTypes['Education']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress';
}

export type ExperienceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Experience'] = ResolversParentTypes['Experience']> = {
  company?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  highlights?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isCurrent?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  workMode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ExperienceConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExperienceConnection'] = ResolversParentTypes['ExperienceConnection']> = {
  edges?: Resolver<Array<ResolversTypes['Experience']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export interface GuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GUID'], any> {
  name: 'GUID';
}

export interface GeoJsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GeoJSON'], any> {
  name: 'GeoJSON';
}

export type GitHubMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['GitHubMetadata'] = ResolversParentTypes['GitHubMetadata']> = {
  defaultBranch?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pushedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  repoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stars?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export interface HslScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HSL'], any> {
  name: 'HSL';
}

export interface HslaScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HSLA'], any> {
  name: 'HSLA';
}

export interface HexColorCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HexColorCode'], any> {
  name: 'HexColorCode';
}

export interface HexadecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Hexadecimal'], any> {
  name: 'Hexadecimal';
}

export interface IbanScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IBAN'], any> {
  name: 'IBAN';
}

export interface IpScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IP'], any> {
  name: 'IP';
}

export interface IpcPatentScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IPCPatent'], any> {
  name: 'IPCPatent';
}

export interface IPv4ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IPv4'], any> {
  name: 'IPv4';
}

export interface IPv6ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IPv6'], any> {
  name: 'IPv6';
}

export interface IsbnScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISBN'], any> {
  name: 'ISBN';
}

export interface Iso8601DurationScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISO8601Duration'], any> {
  name: 'ISO8601Duration';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export interface JwtScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JWT'], any> {
  name: 'JWT';
}

export interface LccSubclassScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LCCSubclass'], any> {
  name: 'LCCSubclass';
}

export interface LatitudeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Latitude'], any> {
  name: 'Latitude';
}

export interface LocalDateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LocalDate'], any> {
  name: 'LocalDate';
}

export interface LocalDateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LocalDateTime'], any> {
  name: 'LocalDateTime';
}

export interface LocalEndTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LocalEndTime'], any> {
  name: 'LocalEndTime';
}

export interface LocalTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LocalTime'], any> {
  name: 'LocalTime';
}

export interface LocaleScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Locale'], any> {
  name: 'Locale';
}

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long';
}

export interface LongitudeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Longitude'], any> {
  name: 'Longitude';
}

export interface MacScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['MAC'], any> {
  name: 'MAC';
}

export type MediaAssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaAsset'] = ResolversParentTypes['MediaAsset']> = {
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  projectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['MediaType'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type MediaAssetConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaAssetConnection'] = ResolversParentTypes['MediaAssetConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MediaAsset']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createAvailabilityStatus?: Resolver<ResolversTypes['AvailabilityStatus'], ParentType, ContextType, RequireFields<MutationCreateAvailabilityStatusArgs, 'data'>>;
  createCertification?: Resolver<ResolversTypes['Certification'], ParentType, ContextType, RequireFields<MutationCreateCertificationArgs, 'data'>>;
  createContactLead?: Resolver<ResolversTypes['ContactLead'], ParentType, ContextType, RequireFields<MutationCreateContactLeadArgs, 'data'>>;
  createEducation?: Resolver<ResolversTypes['Education'], ParentType, ContextType, RequireFields<MutationCreateEducationArgs, 'data'>>;
  createExperience?: Resolver<ResolversTypes['Experience'], ParentType, ContextType, RequireFields<MutationCreateExperienceArgs, 'data'>>;
  createMediaAsset?: Resolver<ResolversTypes['MediaAsset'], ParentType, ContextType, RequireFields<MutationCreateMediaAssetArgs, 'data'>>;
  createProject?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationCreateProjectArgs, 'data'>>;
  createResumeAsset?: Resolver<ResolversTypes['ResumeAsset'], ParentType, ContextType, RequireFields<MutationCreateResumeAssetArgs, 'data'>>;
  createSkill?: Resolver<ResolversTypes['Skill'], ParentType, ContextType, RequireFields<MutationCreateSkillArgs, 'data'>>;
  createTestimonial?: Resolver<ResolversTypes['Testimonial'], ParentType, ContextType, RequireFields<MutationCreateTestimonialArgs, 'data'>>;
  deleteCertification?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteCertificationArgs, 'id'>>;
  deleteEducation?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteEducationArgs, 'id'>>;
  deleteExperience?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteExperienceArgs, 'id'>>;
  deleteProject?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteProjectArgs, 'id'>>;
  deleteSkill?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteSkillArgs, 'id'>>;
  login?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'data'>>;
  setDefaultResume?: Resolver<ResolversTypes['ResumeAsset'], ParentType, ContextType, RequireFields<MutationSetDefaultResumeArgs, 'id'>>;
  trackOutboundClick?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationTrackOutboundClickArgs, 'data'>>;
  trackProjectImpression?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationTrackProjectImpressionArgs, 'data'>>;
  trackResumeDownload?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationTrackResumeDownloadArgs, 'data'>>;
  trackVisit?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationTrackVisitArgs, 'data'>>;
  updateAvailabilityStatus?: Resolver<ResolversTypes['AvailabilityStatus'], ParentType, ContextType, RequireFields<MutationUpdateAvailabilityStatusArgs, 'data'>>;
  updateCertification?: Resolver<ResolversTypes['Certification'], ParentType, ContextType, RequireFields<MutationUpdateCertificationArgs, 'data'>>;
  updateContactLead?: Resolver<ResolversTypes['ContactLead'], ParentType, ContextType, RequireFields<MutationUpdateContactLeadArgs, 'data'>>;
  updateEducation?: Resolver<ResolversTypes['Education'], ParentType, ContextType, RequireFields<MutationUpdateEducationArgs, 'data'>>;
  updateExperience?: Resolver<ResolversTypes['Experience'], ParentType, ContextType, RequireFields<MutationUpdateExperienceArgs, 'data'>>;
  updateMediaAsset?: Resolver<ResolversTypes['MediaAsset'], ParentType, ContextType, RequireFields<MutationUpdateMediaAssetArgs, 'data'>>;
  updateProfile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType, RequireFields<MutationUpdateProfileArgs, 'data'>>;
  updateProject?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationUpdateProjectArgs, 'data'>>;
  updateResumeAsset?: Resolver<ResolversTypes['ResumeAsset'], ParentType, ContextType, RequireFields<MutationUpdateResumeAssetArgs, 'data'>>;
  updateSkill?: Resolver<ResolversTypes['Skill'], ParentType, ContextType, RequireFields<MutationUpdateSkillArgs, 'data'>>;
  updateTestimonial?: Resolver<ResolversTypes['Testimonial'], ParentType, ContextType, RequireFields<MutationUpdateTestimonialArgs, 'data'>>;
};

export interface NegativeFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NegativeFloat'], any> {
  name: 'NegativeFloat';
}

export interface NegativeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NegativeInt'], any> {
  name: 'NegativeInt';
}

export interface NonEmptyStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonEmptyString'], any> {
  name: 'NonEmptyString';
}

export interface NonNegativeFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonNegativeFloat'], any> {
  name: 'NonNegativeFloat';
}

export interface NonNegativeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonNegativeInt'], any> {
  name: 'NonNegativeInt';
}

export interface NonPositiveFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonPositiveFloat'], any> {
  name: 'NonPositiveFloat';
}

export interface NonPositiveIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonPositiveInt'], any> {
  name: 'NonPositiveInt';
}

export interface ObjectIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjectID'], any> {
  name: 'ObjectID';
}

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export interface PhoneNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PhoneNumber'], any> {
  name: 'PhoneNumber';
}

export interface PortScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Port'], any> {
  name: 'Port';
}

export type PortfolioResolvers<ContextType = any, ParentType extends ResolversParentTypes['Portfolio'] = ResolversParentTypes['Portfolio']> = {
  availability?: Resolver<Maybe<ResolversTypes['AvailabilityStatus']>, ParentType, ContextType>;
  certifications?: Resolver<Array<ResolversTypes['Certification']>, ParentType, ContextType>;
  defaultResume?: Resolver<Maybe<ResolversTypes['ResumeAsset']>, ParentType, ContextType>;
  education?: Resolver<Array<ResolversTypes['Education']>, ParentType, ContextType>;
  experiences?: Resolver<Array<ResolversTypes['Experience']>, ParentType, ContextType>;
  featuredProjects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType>;
  projects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType>;
  resumes?: Resolver<Array<ResolversTypes['ResumeAsset']>, ParentType, ContextType>;
  skills?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>;
  testimonials?: Resolver<Array<ResolversTypes['Testimonial']>, ParentType, ContextType>;
};

export interface PositiveFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PositiveFloat'], any> {
  name: 'PositiveFloat';
}

export interface PositiveIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PositiveInt'], any> {
  name: 'PositiveInt';
}

export interface PostalCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PostalCode'], any> {
  name: 'PostalCode';
}

export type ProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']> = {
  bio?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  githubUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  headline?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  linkedInUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seo?: Resolver<Maybe<ResolversTypes['SeoMetadata']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  twitterUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
};

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  caseStudySections?: Resolver<Array<ResolversTypes['CaseStudySection']>, ParentType, ContextType>;
  client?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  featured?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  features?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  github?: Resolver<Maybe<ResolversTypes['GitHubMetadata']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lessons?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  links?: Resolver<Array<ResolversTypes['ProjectLink']>, ParentType, ContextType>;
  mediaIds?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  outcomes?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  problem?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seo?: Resolver<Maybe<ResolversTypes['SeoMetadata']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stack?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ProjectStatus'], ParentType, ContextType>;
  summary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  visibility?: Resolver<ResolversTypes['ProjectVisibility'], ParentType, ContextType>;
};

export type ProjectConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectConnection'] = ResolversParentTypes['ProjectConnection']> = {
  edges?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type ProjectLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectLink'] = ResolversParentTypes['ProjectLink']> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  adminMe?: Resolver<ResolversTypes['AdminUser'], ParentType, ContextType>;
  adminMediaAssets?: Resolver<ResolversTypes['MediaAssetConnection'], ParentType, ContextType, RequireFields<QueryAdminMediaAssetsArgs, 'filters'>>;
  adminResumes?: Resolver<ResolversTypes['ResumeAssetConnection'], ParentType, ContextType, RequireFields<QueryAdminResumesArgs, 'filters'>>;
  adminTestimonials?: Resolver<ResolversTypes['TestimonialConnection'], ParentType, ContextType, RequireFields<QueryAdminTestimonialsArgs, 'filters'>>;
  getAdminLeads?: Resolver<Array<ResolversTypes['ContactLead']>, ParentType, ContextType>;
  getAdminProfile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType>;
  getAdminProjects?: Resolver<ResolversTypes['ProjectConnection'], ParentType, ContextType, RequireFields<QueryGetAdminProjectsArgs, 'filters'>>;
  getAnalyticsSummary?: Resolver<ResolversTypes['AnalyticsSummary'], ParentType, ContextType, RequireFields<QueryGetAnalyticsSummaryArgs, 'days'>>;
  getAvailabilityStatusById?: Resolver<ResolversTypes['AvailabilityStatus'], ParentType, ContextType, RequireFields<QueryGetAvailabilityStatusByIdArgs, 'id'>>;
  getCertificationById?: Resolver<ResolversTypes['Certification'], ParentType, ContextType, RequireFields<QueryGetCertificationByIdArgs, 'id'>>;
  getCertifications?: Resolver<ResolversTypes['CertificationConnection'], ParentType, ContextType, RequireFields<QueryGetCertificationsArgs, 'filters'>>;
  getEducation?: Resolver<ResolversTypes['EducationConnection'], ParentType, ContextType, RequireFields<QueryGetEducationArgs, 'filters'>>;
  getEducationById?: Resolver<ResolversTypes['Education'], ParentType, ContextType, RequireFields<QueryGetEducationByIdArgs, 'id'>>;
  getExperienceById?: Resolver<ResolversTypes['Experience'], ParentType, ContextType, RequireFields<QueryGetExperienceByIdArgs, 'id'>>;
  getExperiences?: Resolver<ResolversTypes['ExperienceConnection'], ParentType, ContextType, RequireFields<QueryGetExperiencesArgs, 'filters'>>;
  getFeaturedPublicProjects?: Resolver<ResolversTypes['ProjectConnection'], ParentType, ContextType, RequireFields<QueryGetFeaturedPublicProjectsArgs, 'filters'>>;
  getLatestAvailabilityStatus?: Resolver<Maybe<ResolversTypes['AvailabilityStatus']>, ParentType, ContextType>;
  getProfileById?: Resolver<ResolversTypes['Profile'], ParentType, ContextType, RequireFields<QueryGetProfileByIdArgs, 'id'>>;
  getProjectById?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<QueryGetProjectByIdArgs, 'id'>>;
  getPublicProjectBySlug?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryGetPublicProjectBySlugArgs, 'slug'>>;
  getPublicProjects?: Resolver<ResolversTypes['ProjectConnection'], ParentType, ContextType, RequireFields<QueryGetPublicProjectsArgs, 'filters'>>;
  getSkillById?: Resolver<ResolversTypes['Skill'], ParentType, ContextType, RequireFields<QueryGetSkillByIdArgs, 'id'>>;
  getSkills?: Resolver<ResolversTypes['SkillConnection'], ParentType, ContextType, RequireFields<QueryGetSkillsArgs, 'filters'>>;
  healthCheck?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hello?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  portfolio?: Resolver<ResolversTypes['Portfolio'], ParentType, ContextType, Partial<QueryPortfolioArgs>>;
};

export interface RgbScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGB'], any> {
  name: 'RGB';
}

export interface RgbaScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGBA'], any> {
  name: 'RGBA';
}

export type ResumeAssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResumeAsset'] = ResolversParentTypes['ResumeAsset']> = {
  downloads?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  focus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isDefault?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ResumeAssetConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResumeAssetConnection'] = ResolversParentTypes['ResumeAssetConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ResumeAsset']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export interface RoutingNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RoutingNumber'], any> {
  name: 'RoutingNumber';
}

export interface SessnScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['SESSN'], any> {
  name: 'SESSN';
}

export interface SafeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['SafeInt'], any> {
  name: 'SafeInt';
}

export interface SemVerScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['SemVer'], any> {
  name: 'SemVer';
}

export type SeoMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['SeoMetadata'] = ResolversParentTypes['SeoMetadata']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keywords?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  ogImageId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type SkillResolvers<ContextType = any, ParentType extends ResolversParentTypes['Skill'] = ResolversParentTypes['Skill']> = {
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  featured?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
};

export type SkillConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SkillConnection'] = ResolversParentTypes['SkillConnection']> = {
  edges?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  _empty?: SubscriptionResolver<Maybe<ResolversTypes['String']>, "_empty", ParentType, ContextType>;
};

export type TestimonialResolvers<ContextType = any, ParentType extends ResolversParentTypes['Testimonial'] = ResolversParentTypes['Testimonial']> = {
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isVisible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  quote?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type TestimonialConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TestimonialConnection'] = ResolversParentTypes['TestimonialConnection']> = {
  edges?: Resolver<Array<ResolversTypes['Testimonial']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export interface TimeZoneScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TimeZone'], any> {
  name: 'TimeZone';
}

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export interface UlidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ULID'], any> {
  name: 'ULID';
}

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export interface UsCurrencyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['USCurrency'], any> {
  name: 'USCurrency';
}

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export interface UnsignedFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UnsignedFloat'], any> {
  name: 'UnsignedFloat';
}

export interface UnsignedIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UnsignedInt'], any> {
  name: 'UnsignedInt';
}

export interface UtcOffsetScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UtcOffset'], any> {
  name: 'UtcOffset';
}

export interface VoidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Void'], any> {
  name: 'Void';
}

export type Resolvers<ContextType = any> = {
  AccountNumber?: GraphQLScalarType;
  AdminUser?: AdminUserResolvers<ContextType>;
  AnalyticsSummary?: AnalyticsSummaryResolvers<ContextType>;
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  AvailabilityStatus?: AvailabilityStatusResolvers<ContextType>;
  AvailabilityStatusConnection?: AvailabilityStatusConnectionResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  Byte?: GraphQLScalarType;
  CaseStudySection?: CaseStudySectionResolvers<ContextType>;
  Certification?: CertificationResolvers<ContextType>;
  CertificationConnection?: CertificationConnectionResolvers<ContextType>;
  ContactLead?: ContactLeadResolvers<ContextType>;
  CountryCode?: GraphQLScalarType;
  CountryName?: GraphQLScalarType;
  Cuid?: GraphQLScalarType;
  Cuid2?: GraphQLScalarType;
  Currency?: GraphQLScalarType;
  DID?: GraphQLScalarType;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  DateTimeISO?: GraphQLScalarType;
  DeweyDecimal?: GraphQLScalarType;
  Duration?: GraphQLScalarType;
  Education?: EducationResolvers<ContextType>;
  EducationConnection?: EducationConnectionResolvers<ContextType>;
  EmailAddress?: GraphQLScalarType;
  Experience?: ExperienceResolvers<ContextType>;
  ExperienceConnection?: ExperienceConnectionResolvers<ContextType>;
  GUID?: GraphQLScalarType;
  GeoJSON?: GraphQLScalarType;
  GitHubMetadata?: GitHubMetadataResolvers<ContextType>;
  HSL?: GraphQLScalarType;
  HSLA?: GraphQLScalarType;
  HexColorCode?: GraphQLScalarType;
  Hexadecimal?: GraphQLScalarType;
  IBAN?: GraphQLScalarType;
  IP?: GraphQLScalarType;
  IPCPatent?: GraphQLScalarType;
  IPv4?: GraphQLScalarType;
  IPv6?: GraphQLScalarType;
  ISBN?: GraphQLScalarType;
  ISO8601Duration?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  JWT?: GraphQLScalarType;
  LCCSubclass?: GraphQLScalarType;
  Latitude?: GraphQLScalarType;
  LocalDate?: GraphQLScalarType;
  LocalDateTime?: GraphQLScalarType;
  LocalEndTime?: GraphQLScalarType;
  LocalTime?: GraphQLScalarType;
  Locale?: GraphQLScalarType;
  Long?: GraphQLScalarType;
  Longitude?: GraphQLScalarType;
  MAC?: GraphQLScalarType;
  MediaAsset?: MediaAssetResolvers<ContextType>;
  MediaAssetConnection?: MediaAssetConnectionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  NegativeFloat?: GraphQLScalarType;
  NegativeInt?: GraphQLScalarType;
  NonEmptyString?: GraphQLScalarType;
  NonNegativeFloat?: GraphQLScalarType;
  NonNegativeInt?: GraphQLScalarType;
  NonPositiveFloat?: GraphQLScalarType;
  NonPositiveInt?: GraphQLScalarType;
  ObjectID?: GraphQLScalarType;
  PageInfo?: PageInfoResolvers<ContextType>;
  PhoneNumber?: GraphQLScalarType;
  Port?: GraphQLScalarType;
  Portfolio?: PortfolioResolvers<ContextType>;
  PositiveFloat?: GraphQLScalarType;
  PositiveInt?: GraphQLScalarType;
  PostalCode?: GraphQLScalarType;
  Profile?: ProfileResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  ProjectConnection?: ProjectConnectionResolvers<ContextType>;
  ProjectLink?: ProjectLinkResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RGB?: GraphQLScalarType;
  RGBA?: GraphQLScalarType;
  ResumeAsset?: ResumeAssetResolvers<ContextType>;
  ResumeAssetConnection?: ResumeAssetConnectionResolvers<ContextType>;
  RoutingNumber?: GraphQLScalarType;
  SESSN?: GraphQLScalarType;
  SafeInt?: GraphQLScalarType;
  SemVer?: GraphQLScalarType;
  SeoMetadata?: SeoMetadataResolvers<ContextType>;
  Skill?: SkillResolvers<ContextType>;
  SkillConnection?: SkillConnectionResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Testimonial?: TestimonialResolvers<ContextType>;
  TestimonialConnection?: TestimonialConnectionResolvers<ContextType>;
  Time?: GraphQLScalarType;
  TimeZone?: GraphQLScalarType;
  Timestamp?: GraphQLScalarType;
  ULID?: GraphQLScalarType;
  URL?: GraphQLScalarType;
  USCurrency?: GraphQLScalarType;
  UUID?: GraphQLScalarType;
  UnsignedFloat?: GraphQLScalarType;
  UnsignedInt?: GraphQLScalarType;
  UtcOffset?: GraphQLScalarType;
  Void?: GraphQLScalarType;
};

