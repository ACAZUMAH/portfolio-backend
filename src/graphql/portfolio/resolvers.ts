import { getPortfolio } from "src/services/portfolio";

const portfolio = () => {
  return getPortfolio();
};

export const portfolioResolvers = {
  Query: {
    portfolio,
  },
};
