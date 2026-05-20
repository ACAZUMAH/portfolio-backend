import { Express } from "express";

export const applyRoutes = (app: Express) => {
  app.get("/health", (_req, res) => {
    res.json({
      ok: true,
      service: "caleb-portfolio-backend",
      timestamp: new Date().toISOString(),
    });
  });
};
