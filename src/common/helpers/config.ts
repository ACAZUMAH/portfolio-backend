const getEnv = (key: string, fallback: string) => {
  const value = process.env[key];
  if (!value || value === "undefined" || value === "null") return fallback;
  return value;
};

export const config = {
  port: Number(process.env.PORT || 8000),
  mongoUri: getEnv(
    "MONGO_URL",
    getEnv("MONGODB_URI", "mongodb://127.0.0.1:27017/caleb_portfolio")
  ),
  jwtSecret: getEnv("JWT_SECRET", "dev-portfolio-secret"),
  adminEmail: getEnv("ADMIN_EMAIL", "calebazumah9@gmail.com").toLowerCase(),
  adminPassword: getEnv("ADMIN_PASSWORD", "ChangeMe123!"),
  publicPortalUrl: getEnv("PUBLIC_PORTAL_URL", "http://localhost:5173"),
  adminPortalUrl: getEnv("ADMIN_PORTAL_URL", "http://localhost:5174"),
  githubUsername: getEnv("GITHUB_USERNAME", "ACAZUMAH"),
};
