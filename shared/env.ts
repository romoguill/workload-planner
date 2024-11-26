import { z, ZodError } from "zod";

const EnvSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  PORT: z.coerce.number().default(3000),
  LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace"]),
});

export type Env = z.infer<typeof EnvSchema>;

let env: Env;

try {
  // eslint-disable-next-line node/no-process-env
  env = EnvSchema.parse(process.env);
} catch (error) {
  if (error instanceof ZodError) {
    // eslint-disable-next-line no-console
    console.error("‼ Missing env variables.");
    // eslint-disable-next-line no-console
    console.error(error.flatten().fieldErrors);
  }
  process.exit(1);
}

export default env;
