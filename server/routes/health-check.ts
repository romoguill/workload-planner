import { createRouter } from "@/lib/create-app";
import { createRoute, z } from "@hono/zod-openapi";

const router = createRouter().openapi(
  createRoute({
    method: "get",
    path: "/health",
    responses: {
      200: {
        content: {
          "text/plain": {
            schema: z.string(),
          },
        },
        description: "Server health check",
      },
    },
  }),
  (c) => {
    return c.text("Server running");
  },
);

export default router;
