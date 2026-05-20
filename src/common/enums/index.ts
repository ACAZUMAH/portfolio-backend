export enum ClientApp {
  CLIENTS_PORTAL = "CLIENTS_PORTAL",
  ADMIN_PORTAL = "ADMIN_PORTAL",
}

export enum Collections {
  Auth = "Auth",
  AdminUsers = "AdminUser",
  AvailabilityStatuses = "AvailabilityStatus",
  Certifications = "Certification",
  ContactLeads = "ContactLead",
  Education = "Education",
  Experiences = "Experience",
  MediaAssets = "MediaAsset",
  OutboundClicks = "OutboundClick",
  Profiles = "Profile",
  ProjectImpressions = "ProjectImpression",
  Projects = "Project",
  ResumeAssets = "ResumeAsset",
  Skills = "Skill",
  Testimonials = "Testimonial",
  VisitEvents = "VisitEvent",
  Uploads = "Upload",
}

export enum ProjectVisibility {
  PUBLIC = "PUBLIC",
  PRIVATE_SUMMARY = "PRIVATE_SUMMARY",
  PASSWORD_PROTECTED = "PASSWORD_PROTECTED",
  HIDDEN = "HIDDEN",
}

export enum ProjectStatus {
  LIVE = "LIVE",
  IN_PROGRESS = "IN_PROGRESS",
  CLIENT_WORK = "CLIENT_WORK",
  OPEN_SOURCE = "OPEN_SOURCE",
  PRIVATE = "PRIVATE",
  ARCHIVED = "ARCHIVED",
}

export enum LeadStatus {
  NEW = "NEW",
  REVIEWED = "REVIEWED",
  REPLIED = "REPLIED",
  ARCHIVED = "ARCHIVED",
}

export enum LeadPriority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

export enum MediaType {
  IMAGE = "IMAGE",
  LOGO = "LOGO",
  SCREENSHOT = "SCREENSHOT",
  RESUME = "RESUME",
  OG_IMAGE = "OG_IMAGE",
  OTHER = "OTHER",
}

export enum OutboundClickType {
  LINK = "LINK",
  RESUME_DOWNLOAD = "RESUME_DOWNLOAD",
  SOCIAL_PROFILE = "SOCIAL_PROFILE",
  PROJECT_LINK = "PROJECT_LINK",
}

export enum ErrorCode {
  BAD_REQUEST = "BAD_REQUEST",
  UNAUTHORIZED = "UNAUTHORIZED",
  FORBIDDEN = "FORBIDDEN",
  NOT_FOUND = "NOT_FOUND",
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
}
