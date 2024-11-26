import app from "@/app";
import { serve } from "bun";
import env from "../shared/env";

const port = Number(env.PORT || 3000);

// eslint-disable-next-line no-console
console.log(`Server is running on port http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
