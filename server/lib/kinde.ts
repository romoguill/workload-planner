import {
  createKindeServerClient,
  GrantType,
  SessionManager,
} from "@kinde-oss/kinde-typescript-sdk";
import { Context } from "hono";
import { deleteCookie, getCookie, setCookie } from "hono/cookie";
import { CookieOptions } from "hono/utils/cookie";
import env from "../../shared/env";

// Client for authorization code flow
export const kindeClient = createKindeServerClient(
  GrantType.AUTHORIZATION_CODE,
  {
    authDomain: env.KINDE_DOMAIN,
    clientId: env.KINDE_CLIENT_ID,
    clientSecret: env.KINDE_CLIENT_SECRET,
    redirectURL: env.KINDE_CALLBACK_URL,
    logoutRedirectURL: env.KINDE_LOGOUT_REDIRECT_URL,
  },
);

// Client for client credentials flow
export const kindeApiClient = createKindeServerClient(
  GrantType.CLIENT_CREDENTIALS,
  {
    authDomain: env.KINDE_DOMAIN,
    clientId: env.KINDE_CLIENT_ID,
    clientSecret: env.KINDE_CLIENT_SECRET,
    logoutRedirectURL: env.KINDE_LOGOUT_REDIRECT_URL,
  },
);

const authCookieOptions: CookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "Lax",
  maxAge: 60 * 60 * 24 * 120, // 120 days
};

export const sessionManager = (c: Context): SessionManager => ({
  async getSessionItem(key: string) {
    return getCookie(c, key);
  },
  async setSessionItem(key: string, value: unknown) {
    // There are some cookies set by kind that are not the final auth_token and have special syntax
    if (typeof value === "string") {
      setCookie(c, key, value, authCookieOptions);
    } else {
      setCookie(c, key, JSON.stringify(value), authCookieOptions);
    }
  },
  async removeSessionItem(key: string) {
    deleteCookie(c, key, authCookieOptions);
  },
  async destroySession() {
    deleteCookie(c, "auth_session", authCookieOptions);
  },
});
