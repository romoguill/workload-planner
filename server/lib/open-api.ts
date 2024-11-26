import { StatusCodes } from "@/utils/http-status";
import type { Hook } from "@hono/zod-openapi";
import { apiReference } from "@scalar/hono-api-reference";
import { AppEnv, AppOpenAPI, ErrorResponse } from "../../shared/types";

const configureOpenApi = (app: AppOpenAPI) => {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Workload Planner API",
    },
  });

  app.get(
    "/reference",
    apiReference({
      theme: "solarized",
      darkMode: true,
      spec: {
        url: "/doc",
      },
      defaultHttpClient: {
        targetKey: "javascript",
        clientKey: "fetch",
      },
    }),
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validationHook: Hook<any, AppEnv, any, any> = (result, c) => {
  if (!result.success) {
    return c.json<ErrorResponse>(
      {
        success: false,
        message: result.error.toString(),
      },
      StatusCodes.UNPROCESSABLE_ENTITY,
    );
  }
};

export default configureOpenApi;
