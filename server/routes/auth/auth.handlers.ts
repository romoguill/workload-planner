import { kindeClient, sessionManager } from "@/lib/kinde";
import { StatusCodes } from "@/utils/http-status";
import { AppRouteHandler } from "../../../shared/types";
import { LoginRoute, RegisterRoute } from "./auth.routes";

export const loginHandler: AppRouteHandler<LoginRoute> = async (c) => {
  const loginUrl = await kindeClient.login(sessionManager);
  return c.redirect(loginUrl, StatusCodes.TEMPORARY_REDIRECT);
};

export const registerHandler: AppRouteHandler<RegisterRoute> = async (c) => {
  const registerUrl = await kindeClient.register(sessionManager);
  return c.redirect(registerUrl, StatusCodes.TEMPORARY_REDIRECT);
};
