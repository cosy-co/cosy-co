declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      DEBUG: string;

      API_HTTP_PORT: string;
      PUBLIC_API_URL: string;
      PUBLIC_WEBSITE_URL: string;
      DISCORD_WEBHOOK_URL: string;

      MONGODB_URI: string;
    }
  }
}

export {};
