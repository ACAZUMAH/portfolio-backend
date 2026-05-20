import mongoose from "mongoose";
import { config } from "./config";
import { logger } from "src/logger";

export const connectToDb = async () => {
  const url = config.mongoUri;

  mongoose.connection.on("connected", () => {
    logger.info(
      "Connected to MongoDB",
      url.indexOf("@") > 0 ? url.split("@")[1] : url,
    );
  });

  mongoose.connection.on("error", (err) => {
    logger.error("Database error:", err);
  });

  mongoose.connection.on("disconnected", (err) => {
    logger.info("Database disconnected...", err);
  });

  // mongoose.set('debug', isDevelopment)

  mongoose.set("strictQuery", true);
  await mongoose.connect(url);
};
