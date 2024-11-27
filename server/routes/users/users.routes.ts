import { StatusCodes } from "@/utils/http-status";
import jsonContent from "@/utils/json-content";
import { createRoute, z } from "@hono/zod-openapi";

export const meRoute = createRoute({
  path: "/users/me",
  method: "get",
  responses: {
    [StatusCodes.OK]: jsonContent(z.object({}), "Client authentication status"),
  },
});
export type MeRoute = typeof meRoute;
