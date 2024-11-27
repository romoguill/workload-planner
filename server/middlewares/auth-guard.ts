import { kindeClient, sessionManager } from "@/lib/kinde";
import { StatusCodes } from "@/utils/http-status";
import { UserType } from "@kinde-oss/kinde-typescript-sdk";
import { createMiddleware } from "hono/factory";
import { HTTPException } from "hono/http-exception";
import { AppEnv } from "../../shared/types";

const authGuard = createMiddleware<AppEnv & { Variables: { user: UserType } }>(
  async (c, next) => {
    const isAuthenticated = await kindeClient.isAuthenticated(sessionManager);

    if (!isAuthenticated) {
      throw new HTTPException(StatusCodes.UNAUTHORIZED);
    }

    const user = await kindeClient.getUserProfile(sessionManager);
    c.set("user", user);
    await next();
  },
);

export default authGuard;
