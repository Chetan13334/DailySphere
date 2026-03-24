export const ROUTES = {
  home: "/",
  dashboard: "/dashboard",
  weather: "/weather",
  holidays: "/holidays",
  currency: "/currency",
  reminders: "/reminders",
  login: "/login",
  getStarted: "/get-started",
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
