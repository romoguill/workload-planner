import createApp from "@/lib/create-app";
import configureOpenApi from "./lib/open-api";
import healthCheck from "./routes/health-check";
import { authRouter } from "./routes/auth/auth.index";
import { usersRouter } from "./routes/users/users.index";

const app = createApp();

const routes = [healthCheck, authRouter, usersRouter];

// Attach Open Api Config to app
configureOpenApi(app);

// Attach routes to app
routes.forEach((route) => {
  app.route("/api/", route);
});

export default app;
