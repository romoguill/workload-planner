import { ErrorHandler } from "hono";
import { HTTPException } from "hono/http-exception";
import { ErrorResponse } from "../../../shared/types";
import { ReasonPhrases } from "http-status-codes";
import env from "../../../shared/env";

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
        ? ReasonPhrases.INTERNAL_SERVER_ERROR
        : (error.stack ?? error.message),
  });
};

export default onError;
