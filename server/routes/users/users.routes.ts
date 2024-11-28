import { StatusCodes } from "@/utils/http-status";
import jsonContent from "@/utils/json-content";
import { createRoute, z } from "@hono/zod-openapi";
import { userSchema } from "../../../shared/types";
import { getErrorResponses } from "@/utils/error-responses";

export const meRoute = createRoute({
  path: "/users/me",
  method: "get",
  responses: {
    [StatusCodes.OK]: jsonContent(
      z.object({ success: z.boolean(), user: userSchema }),
      "Logged in user profile",
    ),
    ...getErrorResponses([StatusCodes.UNAUTHORIZED]),
  },
});
export type MeRoute = typeof meRoute;
