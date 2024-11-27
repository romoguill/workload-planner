import { createRoute } from "@hono/zod-openapi";
import { errorSchema } from "../../shared/types";
import { StatusCodes } from "./http-status";

type Responses = Parameters<typeof createRoute>[0]["responses"];

export const errorResponses = {
  [StatusCodes.BAD_REQUEST]: {
    description: "Bad request: problem processing request.",
    content: {
      "application/json": {
        schema: errorSchema,
      },
    },
  },
  [StatusCodes.UNAUTHORIZED]: {
    description: "Unauthorized: authentication required.",
    content: {
      "application/json": {
        schema: errorSchema,
      },
    },
  },
  [StatusCodes.FORBIDDEN]: {
    description: "Forbidden: insufficient permissions.",
    content: {
      "application/json": {
        schema: errorSchema,
      },
    },
  },
  [StatusCodes.NOT_FOUND]: {
    description: "Not found: resource does not exist.",
    content: {
      "application/json": {
        schema: errorSchema,
      },
    },
  },
  [StatusCodes.TOO_MANY_REQUESTS]: {
    description: "Rate limit: too many requests.",
    content: {
      "application/json": {
        schema: errorSchema,
      },
    },
  },
} satisfies Responses;
