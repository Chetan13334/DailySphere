import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

type AppShellProps = {
  children: ReactNode;
  headerActive: "dashboard" | "weather" | "holidays" | "currency" | "reminders" | "profile";
  sidebarActive?: "overview" | "weather" | "currency" | "holidays" | "reminders" | "profile";
};

export default function AppShell({ children, headerActive, sidebarActive }: AppShellProps) {
  return (
    <div className="bg-surface font-body text-on-surface antialiased">
      <Header active={headerActive} />
      <div className="flex min-h-screen">
        <Sidebar active={sidebarActive} />
        <main className="flex-1 px-6 py-12 lg:ml-64 lg:p-12">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
