import { OpenAPIHono } from "@hono/zod-openapi";
import notFound from "./utils/handlers/not-found";
import onError from "./utils/handlers/on-error";

const app = new OpenAPIHono();

app.get("/", (c) => {
  return c.text("hello");
});

app.get("/error", (c) => {
  throw Error("asdfas");
});

app.onError(onError);
app.notFound(notFound);

export default app;
