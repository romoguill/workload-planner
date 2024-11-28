import { kindeClient, sessionManager } from "@/lib/kinde";
import { AppRouteHandler } from "../../../shared/types";
import { MeRoute } from "./users.routes";
import { HTTPException } from "hono/http-exception";
import { StatusCodes } from "@/utils/http-status";

export const meHandler: AppRouteHandler<MeRoute> = async (c) => {
  const isAuthenticated = await kindeClient.isAuthenticated(sessionManager(c));

  if (!isAuthenticated) {
    throw new HTTPException(StatusCodes.UNAUTHORIZED);
  }

  const user = await kindeClient.getUserProfile(sessionManager(c));

  return c.json({
    success: true,
    user,
  });
};
