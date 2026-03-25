export const ROUTES = {
  home: "/",
  dashboard: "/dashboard",
  weather: "/weather",
  holidays: "/holidays",
  currency: "/currency",
  reminders: "/reminders",
  profile: "/profile",
  login: "/login",
  register: "/register",
  getStarted: "/register",
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
