import createApp from "@/lib/create-app";
import configureOpenApi from "./lib/open-api";
import healthCheck from "./routes/health-check";
import { authRouter } from "./routes/auth/auth.index";

const app = createApp();

const routes = [healthCheck, authRouter];

// Attach Open Api Config to app
configureOpenApi(app);

// Attach routes to app
routes.forEach((route) => {
  app.route("/api/", route);
});

export default app;
