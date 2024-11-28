import { OpenAPIHono, RouteConfig, RouteHandler } from "@hono/zod-openapi";
import type { UserType } from "@kinde-oss/kinde-typescript-sdk";
import { Env } from "hono";
import { PinoLogger } from "hono-pino";
import { z } from "zod";

export interface AppEnv extends Env {
  Variables: {
    logger: PinoLogger;
  };
}
export type AppOpenAPI = OpenAPIHono<AppEnv>;
export type AppRouteHandler<T extends RouteConfig> = RouteHandler<T, AppEnv>;

export const errorSchema = z.object({
  success: z.literal(false),
  message: z.string(),
});
export type ErrorResponse = z.infer<typeof errorSchema>;

export const userSchema: z.ZodType<UserType> = z.object({
  email: z.string().email(),
  family_name: z.string(),
  given_name: z.string(),
  id: z.string(),
  picture: z.string().nullable(),
});

export type User = z.infer<typeof userSchema>;
