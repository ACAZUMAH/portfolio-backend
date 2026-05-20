import { ClientApp } from "../enums";
import { config } from "../helpers/config";

export const clientsPortal = {
  key: ClientApp.CLIENTS_PORTAL,
  name: "Clients Portal",
  domain: config.publicPortalUrl,
};

export const adminPortal = {
  key: ClientApp.ADMIN_PORTAL,
  name: "Admin Portal",
  domain: config.adminPortalUrl,
};

export const apps = [clientsPortal, adminPortal];

export const isTest = process.env.NODE_ENV === "test";
export const isStaging = process.env.NODE_ENV === "staging";
export const isProduction = process.env.NODE_ENV === "production";
export const isDevelopment = !isProduction && !isStaging && !isTest;

export const productionWhitelist = [
  config.publicPortalUrl,
  config.adminPortalUrl,
].filter(Boolean);

export const stagingWhitelist = [
  config.publicPortalUrl,
  config.adminPortalUrl,
  "http://localhost:5173",
  "http://localhost:5174",
].filter(Boolean);
