import { createRouter } from "@/lib/create-app";
import { callbackRoute, loginRoute, registerRoute } from "./auth.routes";
import {
  callbackHandler,
  loginHandler,
  registerHandler,
} from "./auth.handlers";

export const authRouter = createRouter()
  .openapi(registerRoute, registerHandler)
  .openapi(loginRoute, loginHandler)
  .openapi(callbackRoute, callbackHandler);
