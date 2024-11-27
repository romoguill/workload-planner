import { OpenAPIHono, RouteConfig, RouteHandler } from "@hono/zod-openapi";
import { Env } from "hono";
import { PinoLogger } from "hono-pino";

export interface AppEnv extends Env {
  Variables: {
    logger: PinoLogger;
  };
}
export type AppOpenAPI = OpenAPIHono<AppEnv>;
export type AppRouteHandler<T extends RouteConfig> = RouteHandler<T, AppEnv>;

export type ErrorResponse = {
  success: false;
  message: string;
};
