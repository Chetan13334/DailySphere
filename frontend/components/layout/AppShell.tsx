"use client";

import { useState, type ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

type AppShellProps = {
  children: ReactNode;
  headerActive: "dashboard" | "weather" | "holidays" | "currency" | "reminders" | "profile" | "settings";
  sidebarActive?: "overview" | "weather" | "currency" | "holidays" | "reminders" | "profile" | "settings";
  showHeader?: boolean;
  showFooter?: boolean;
  sidebarVariant?: "default" | "standalone";
};

export default function AppShell({
  children,
  headerActive,
  sidebarActive,
  showHeader = true,
  showFooter = true,
  sidebarVariant = "default",
}: AppShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-surface font-body text-on-surface antialiased">
      {showHeader ? (
        <Header active={headerActive} onMenuClick={() => setMobileMenuOpen(true)} />
      ) : (
        <div className="border-b border-[#f3f4f5] bg-[#f8f9fa] px-4 py-3 sm:px-6 lg:hidden">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="rounded-lg p-2 text-[#44474c] transition-all hover:bg-[#f3f4f5] hover:text-[#041627]"
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <span className="font-headline text-lg font-bold tracking-tighter text-[#041627]">Zenith Dashboard</span>
            <div className="w-10" />
          </div>
        </div>
      )}

      <div className="flex min-h-screen">
        <Sidebar active={sidebarActive} variant={sidebarVariant} />

        <main className={["flex-1 px-4 py-8 sm:px-6 sm:py-10 lg:p-12", sidebarVariant === "standalone" ? "lg:ml-64" : "lg:ml-64"].join(" ")}>
          {children}
        </main>
      </div>

      {showFooter ? <Footer /> : null}

      {mobileMenuOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/30"
            aria-label="Close menu overlay"
            onClick={() => setMobileMenuOpen(false)}
          />
          <Sidebar
            active={sidebarActive}
            variant="drawer"
            onNavigate={() => setMobileMenuOpen(false)}
          />
        </div>
      ) : null}
    </div>
  );
}
