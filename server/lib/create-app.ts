import { logger } from "@/middlewares/logger";
import notFound from "@/utils/handlers/not-found";
import onError from "@/utils/handlers/on-error";
import { OpenAPIHono } from "@hono/zod-openapi";
import { AppEnv } from "../../shared/types";

export function createRouter() {
  return new OpenAPIHono<AppEnv>({ strict: false });
}

export default function createApp() {
  const app = createRouter();
  // Common middlewares
  app.use(logger());

  // Error handling
  app.onError(onError);
  app.notFound(notFound);

  return app;
}