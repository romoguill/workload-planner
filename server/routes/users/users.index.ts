import { createRouter } from "@/lib/create-app";
import { meRoute } from "./users.routes";
import { meHandler } from "./users.handlers";

export const usersRouter = createRouter().openapi(meRoute, meHandler);
