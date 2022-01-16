export const mediaServer = {
  // origin: "http://localhost",
  origin: "https://media.ducnguyen96.xyz",
};

export const local = {
  // Core application settings
  app: {
    name: "reddit",
    origin: "http://localhost:3000",
    env: "local" as "local" | "test" | "prod",
  },
  // GraphQL API and OAuth endpoint(s)
  api: {
    // origin: "http://localhost:5000",
    origin: "https://api.ducnguyen96.xyz",
  },
};

/**
 * Client-side application settings for the test / QA environment.
 */
export const test: typeof local = {
  app: {
    ...local.app,
    origin: "https://test.example.com",
    env: "test",
  },
  api: {
    ...local.api,
    origin: "https://us-central1.example-test.cloudfunctions.net",
  },
};

/**
 * Client-side application settings for the production environment.
 */
export const prod: typeof local = {
  app: {
    ...local.app,
    origin: "https://redditclone.ducnguyen96.xyz",
    env: "prod",
  },
  api: {
    ...local.api,
    origin: "https://api.ducnguyen96.xyz",
  },
};

export type Config = typeof local;
export default { local, test, prod };
