import { StatusCodes } from "@/utils/http-status";
import { createRoute, z } from "@hono/zod-openapi";

export const loginRoute = createRoute({
  path: "/auth/login",
  method: "get",
  responses: {
    [StatusCodes.TEMPORARY_REDIRECT]: {
      description: "Redirect to Kinde Auth Service",
      headers: z.object({ Location: z.string().url() }),
    },
  },
});
export type LoginRoute = typeof loginRoute;

export const registerRoute = createRoute({
  path: "/auth/register",
  method: "get",
  responses: {
    [StatusCodes.TEMPORARY_REDIRECT]: {
      description: "Redirect to Kinde Auth Service",
      headers: z.object({ Location: z.string().url() }),
    },
  },
});
export type RegisterRoute = typeof registerRoute;
