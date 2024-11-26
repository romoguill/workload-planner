import createApp from "@/lib/create-app";
import configureOpenApi from "./lib/open-api";
import healthCheck from "./routes/health-check";

const app = createApp();

const routes = [healthCheck];

// Attach Open Api Config to app
configureOpenApi(app);

routes.forEach((route) => {
  app.route("/", route);
});

export default app;
