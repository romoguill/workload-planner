import { createRouter } from "@/lib/create-app";
import { StatusCodes } from "@/utils/http-status";
import jsonContent from "@/utils/json-content";
import { createRoute } from "@hono/zod-openapi";
import { z } from "zod";

const router = createRouter().openapi(
  createRoute({
    method: "get",
    path: "/health",
    responses: {
      [StatusCodes.OK]: jsonContent(z.string(), "API health-check"),
    },
  }),
  (c) => {
    return c.text("Server running");
  },
);

export default router;
