import { config as loadEnv } from "dotenv";

loadEnv();

const main = async () => {
  const app = await import("src/app");
  await app.startApp();
};

main().catch(error => {
  console.error("Unable to start portfolio backend", error);
  process.exit(1);
});
