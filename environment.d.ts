declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      DEBUG: string;

      API_HTTP_PORT: string;
      API_URL: string;
      WEBSITE_URL: string;

      MONGODB_URI: string;
    }
  }
}

export {};
