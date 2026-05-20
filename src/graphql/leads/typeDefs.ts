export const leadsTypeDefs = `#graphql
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
    createdAt: DateTime
    updatedAt: DateTime
  }

  input CreateContactLeadInput {
    name: String!
    email: String!
    phone: String
    company: String
    message: String!
    projectInterest: String
    sourcePage: String
  }

  input UpdateContactLeadInput {
    id: ID!
    status: LeadStatus
    priority: LeadPriority
    notes: String
    followUpDate: String
  }

  extend type Query {
    getAdminLeads: [ContactLead!]!
  }

  extend type Mutation {
    createContactLead(data: CreateContactLeadInput!): ContactLead!
    updateContactLead(data: UpdateContactLeadInput!): ContactLead!
  }
`;
