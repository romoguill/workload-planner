import { createRouter } from "@/lib/create-app";
import { loginRoute, registerRoute } from "./auth.routes";
import { loginHandler, registerHandler } from "./auth.handlers";

export const authRouter = createRouter()
  .openapi(registerRoute, registerHandler)
  .openapi(loginRoute, loginHandler);
