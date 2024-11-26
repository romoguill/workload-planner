import { AppOpenAPI } from "../../shared/types";

const configureOpenApi = (app: AppOpenAPI) => {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Workload Planner API",
    },
  });
};

export default configureOpenApi;
