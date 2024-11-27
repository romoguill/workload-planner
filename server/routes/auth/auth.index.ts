import { createRouter } from "@/lib/create-app";
import {
  callbackRoute,
  loginRoute,
  logoutRoute,
  registerRoute,
} from "./auth.routes";
import {
  callbackHandler,
  loginHandler,
  logoutHandler,
  registerHandler,
} from "./auth.handlers";

export const authRouter = createRouter()
  .openapi(registerRoute, registerHandler)
  .openapi(loginRoute, loginHandler)
  .openapi(callbackRoute, callbackHandler)
  .openapi(logoutRoute, logoutHandler);
