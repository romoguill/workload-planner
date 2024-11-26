import { ErrorHandler } from "hono";
import { HTTPException } from "hono/http-exception";
import { ErrorResponse } from "../../../shared/types";
import env from "../../../shared/env";
import { StatusPhrases } from "../http-status";

const onError: ErrorHandler = (error, c) => {
  if (error instanceof HTTPException) {
    return c.json<ErrorResponse>(
      {
        success: false,
        message: error.message,
      },
      error.status,
    );
  }

  return c.json<ErrorResponse>({
    success: false,
    message:
      env.NODE_ENV === "production"
        ? StatusPhrases.INTERNAL_SERVER_ERROR
        : (error.stack ?? error.message),
  });
};

export default onError;
