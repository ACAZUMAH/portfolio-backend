"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.portfolioResolvers = void 0;
const portfolio_1 = require("../../services/portfolio");
const portfolio = () => {
    return (0, portfolio_1.getPortfolio)();
};
exports.portfolioResolvers = {
    Query: {
        portfolio,
    },
};
