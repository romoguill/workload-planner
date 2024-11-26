import app from "@/app";
import { serve } from "bun";

const port = 3000;

console.log(`Server is running on port http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
