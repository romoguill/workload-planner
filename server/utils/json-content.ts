import { ZodSchema } from "zod";

export default function jsonContent(schema: ZodSchema, description: string) {
  return {
    content: {
      "application/json": {
        schema,
      },
    },
    description,
  };
}
