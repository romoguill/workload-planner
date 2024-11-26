import type { NotFoundHandler } from "hono";
import { ErrorResponse } from "../../../shared/types";
import { StatusCodes, StatusPhrases } from "../http-status";

const notFound: NotFoundHandler = (c) => {
  return c.json<ErrorResponse>(
    {
      success: false,
      message: `${StatusPhrases.NOT_FOUND} - Resource: ${c.req.path}`,
    },
    StatusCodes.NOT_FOUND,
  );
};

export default notFound;
