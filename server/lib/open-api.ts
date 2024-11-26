import { apiReference } from "@scalar/hono-api-reference";
import { AppOpenAPI } from "../../shared/types";

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
      spec: {
        url: "/doc",
      },
    }),
  );
};

export default configureOpenApi;
