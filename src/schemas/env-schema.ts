import z from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_KEY: z.string(),
  NEXT_PUBLIC_AUTH_DOMAIN: z.string(),
  NEXT_PUBLIC_DATABASE_URL: z.string(),
  NEXT_PUBLIC_PROJECT_ID: z.string(),
  NEXT_PUBLIC_STORAGE_BUCKET: z.string(),
  NEXT_PUBLIC_MESSAGING_SENDER_ID: z.string(),
  NEXT_PUBLIC_APP_ID: z.string(),
  NEXT_PUBLIC_MEASUREMENT_ID: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  FIREBASE_PROJECT_ID: z.string(),
  FIREBASE_CLIENT_EMAIL: z.string(),
  FIREBASE_PRIVATE_KEY: z.string(),
  STRIPE_SECRET_KEY: z.string(),
});

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
