import cors, { CorsOptions } from "cors";
import express, { Express, Request, Response } from "express";
import {
  isDevelopment,
  isProduction,
  isStaging,
  productionWhitelist,
  stagingWhitelist,
} from "src/common/constants";

const corsOptions: CorsOptions = {
  maxAge: 600,
  credentials: true,
  origin: (origin, callback) => {
    if (!origin) {
      callback(null, true);
    } else if (isDevelopment) {
      callback(null, true);
    } else if (isStaging && stagingWhitelist.includes(origin)) {
      callback(null, true);
    } else if (isProduction && productionWhitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`Not allowed by CORS: ${origin}`));
    }
  },
};

export const createExpressApp = (): Express => {
  const app = express();

  app.use(express.static("public"));
  app.use(express.urlencoded({ extended: true }));
  app.use(
    express.json({
      limit: "50mb",
      verify: (req, _res, buf) => {
        (req as Request & { rawBody?: string }).rawBody = buf.toString("utf8");
      },
    })
  );

  app.disable("x-powered-by");
  app.options("*", cors(corsOptions));
  app.use(cors(corsOptions));

  app.get("/", (_req: Request, res: Response) => {
    res.send("Caleb portfolio backend is running.");
  });

  return app;
};
