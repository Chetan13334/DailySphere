"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ROUTES } from "@/lib/constants";

const SIDEBAR_ITEMS = [
  { key: "overview", label: "Overview", icon: "dashboard", href: ROUTES.dashboard },
  { key: "weather", label: "Weather", icon: "insights", href: ROUTES.weather },
  { key: "currency", label: "Currency", icon: "currency_exchange", href: ROUTES.currency },
  { key: "holidays", label: "Holidays", icon: "schedule", href: ROUTES.holidays },
  { key: "reminders", label: "Reminders", icon: "inventory_2", href: ROUTES.reminders },
  { key: "profile", label: "Profile", icon: "account_circle", href: ROUTES.profile },
  { key: "settings", label: "Settings", icon: "settings", href: ROUTES.settings },
] as const;

type SidebarActive = (typeof SIDEBAR_ITEMS)[number]["key"];

type SidebarProps = {
  active?: SidebarActive;
  variant?: "default" | "standalone" | "drawer";
  onNavigate?: () => void;
};

export default function Sidebar({ active, variant = "default", onNavigate }: SidebarProps) {
  const pathname = usePathname();
  const currentKey = active ?? SIDEBAR_ITEMS.find((item) => item.href === pathname)?.key ?? "overview";

  const asideClass =
    variant === "standalone"
      ? "hidden h-screen w-64 flex-col gap-8 bg-[#f3f4f5] p-6 pt-6 lg:fixed lg:left-0 lg:top-0 lg:flex"
      : variant === "drawer"
        ? "fixed inset-y-0 left-0 z-50 flex h-full w-80 max-w-[86vw] flex-col gap-8 bg-[#f3f4f5] p-6 pt-6 shadow-2xl lg:hidden"
        : "hidden h-screen w-64 flex-col gap-8 bg-[#f3f4f5] p-6 pt-24 lg:fixed lg:left-0 lg:top-0 lg:flex";

  return (
    <aside className={asideClass}>
      {variant === "drawer" ? (
        <div className="flex items-center justify-between border-b border-outline-variant/10 pb-4">
          <div>
            <p className="font-['Manrope'] text-lg font-bold text-[#041627]">Zenith Dashboard</p>
            <p className="font-['Inter'] text-xs font-medium text-on-surface-variant">Navigation</p>
          </div>
          <button type="button" className="rounded-lg p-2 text-[#44474c] hover:bg-white/70" aria-label="Close menu" onClick={onNavigate}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-1 px-2">
          <p className="font-['Manrope'] text-lg font-bold text-[#041627]">Alex Rivera</p>
          <p className="font-['Inter'] text-xs font-medium text-on-surface-variant">Premium Plan</p>
        </div>
      )}

      <nav className="flex flex-col gap-1">
        {SIDEBAR_ITEMS.map((item) => {
          const isActive = item.key === currentKey;
          const itemClass = isActive
            ? "flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-[#041627] shadow-sm transition-all duration-200 ease-in-out font-['Inter'] text-sm font-medium"
            : "flex items-center gap-3 rounded-xl px-4 py-3 text-[#44474c] transition-all duration-200 ease-in-out hover:bg-white/50 font-['Inter'] text-sm font-medium";

          return (
            <Link key={item.key} href={item.href} className={itemClass} onClick={onNavigate}>
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-1">
        <button
          type="button"
          className="mb-4 w-full rounded-xl bg-primary py-3 font-['Inter'] text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Upgrade Now
        </button>
        <Link href={ROUTES.login} className="flex items-center gap-3 rounded-xl px-4 py-3 text-[#44474c] font-['Inter'] text-sm font-medium" onClick={onNavigate}>
          <span className="material-symbols-outlined">help</span>
          Support
        </Link>
        <Link href={ROUTES.login} className="flex items-center gap-3 rounded-xl px-4 py-3 text-[#44474c] font-['Inter'] text-sm font-medium" onClick={onNavigate}>
          <span className="material-symbols-outlined">logout</span>
          Logout
        </Link>
      </div>
    </aside>
  );
}
