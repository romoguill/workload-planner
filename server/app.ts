import createApp from "@/lib/create-app";
import configureOpenApi from "./lib/open-api";

const app = createApp();

// Attach Open Api Config to app
configureOpenApi(app);

app.get("/health", (c) => {
  return c.text("Server running");
});

export default app;
