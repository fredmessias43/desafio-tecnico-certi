export const environment = {
  env: import.meta.env.NG_APP_ENV || "development",
  production: import.meta.env.NG_APP_ENV === "production",
  apiUrl: import.meta.env.NG_APP_API_URL || "http://localhost:3000",
  websocketsUrl: import.meta.env.NG_APP_WEBSOCKETS_URL || 'ws://localhost:8080',
};
