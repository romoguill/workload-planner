import { OpenAPIHono } from "@hono/zod-openapi";
import { logger } from "@/middlewares/logger";
import notFound from "@/utils/handlers/not-found";
import onError from "@/utils/handlers/on-error";
import { Env as PinoEnv } from "hono-pino";

const app = new OpenAPIHono<PinoEnv>();

// Common middlewares
app.use(logger());

app.get("/", (c) => {
  return c.text("hello");
});

app.get("/error", () => {
  throw Error("asdfas");
});

app.onError(onError);
app.notFound(notFound);

export default app;
