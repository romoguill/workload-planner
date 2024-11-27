import { z, ZodError } from "zod";

const EnvSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  HOST: z.string(),
  SERVER_URL: z.string().url(),
  PORT: z.coerce.number().default(3000),
  LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace"]),
  KINDE_CALLBACK_URL: z.string().url(),
  KINDE_LOGOUT_REDIRECT_URL: z.string().url(),
  KINDE_DOMAIN: z.string().url(),
  KINDE_CLIENT_ID: z.string(),
  KINDE_CLIENT_SECRET: z.string(),
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
