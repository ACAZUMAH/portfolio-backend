import { GraphqlContext } from "src/common/interfaces";
import * as services from "src/services/contactLeads";
import * as GqlTypes from "src/common/interfaces/graphql";

const getAdminLeads = (_: any, __: any, _context: GraphqlContext) => {
  return services.getAdminLeads().then((leads) => leads.edges);
};

const createContactLeadResolver = (
  _: any,
  args: GqlTypes.MutationCreateContactLeadArgs,
) => {
  return services.createContactLead(args.data);
};

const updateContactLeadResolver = (
  _: any,
  args: GqlTypes.MutationUpdateContactLeadArgs,
) => {
  return services.updateContactLead({ ...args.data });
};

export const leadsResolvers = {
  Query: {
    getAdminLeads,
  },
  Mutation: {
    createContactLead: createContactLeadResolver,
    updateContactLead: updateContactLeadResolver,
  },
};
