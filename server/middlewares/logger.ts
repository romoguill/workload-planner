import env from "../../shared/env";
import { pinoLogger } from "hono-pino";
import pino from "pino";
import pretty from "pino-pretty";

export function logger() {
  return pinoLogger({
    pino: pino(
      {
        level: env.LOG_LEVEL || "info",
      },
      env.NODE_ENV === "production" ? undefined : pretty(),
    ),
    http: {
      reqId: () => crypto.randomUUID(),
      onReqBindings: (c) => ({
        // Overide default bindings, for some reason the default has no query params
        req: {
          url: c.req.url,
          method: c.req.method,
          headers: c.req.header(),
        },
      }),
    },
  });
}
