import type { NotFoundHandler } from "hono";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { ErrorResponse } from "../../../shared/types";

const notFound: NotFoundHandler = (c) => {
  return c.json<ErrorResponse>(
    {
      success: false,
      message: `${ReasonPhrases.NOT_FOUND} - Resource: ${c.req.path}`,
    },
    StatusCodes.NOT_FOUND,
  );
};

export default notFound;
