"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyRoutes = void 0;
const applyRoutes = (app) => {
    app.get("/health", (_req, res) => {
        res.json({
            ok: true,
            service: "caleb-portfolio-backend",
            timestamp: new Date().toISOString(),
        });
    });
};
exports.applyRoutes = applyRoutes;
