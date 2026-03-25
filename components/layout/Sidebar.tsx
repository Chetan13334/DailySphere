 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ROUTES } from "@/lib/constants";

const SIDEBAR_ITEMS = [
  { key: "overview", label: "Overview", icon: "dashboard", href: ROUTES.home },
  { key: "weather", label: "Weather", icon: "insights", href: ROUTES.weather },
  { key: "currency", label: "Currency", icon: "currency_exchange", href: ROUTES.currency },
  { key: "holidays", label: "Holidays", icon: "schedule", href: ROUTES.holidays },
  { key: "reminders", label: "Reminders", icon: "inventory_2", href: ROUTES.reminders },
] as const;

type SidebarActive = (typeof SIDEBAR_ITEMS)[number]["key"];

type SidebarProps = {
  active?: SidebarActive;
};

export default function Sidebar({ active }: SidebarProps) {
  const pathname = usePathname();
  const currentKey =
    active ??
    SIDEBAR_ITEMS.find((item) => item.href === pathname)?.key ??
    "overview";

  return (
    <aside className="hidden h-screen w-64 flex-col gap-8 bg-[#f3f4f5] p-6 pt-24 lg:fixed lg:left-0 lg:top-0 lg:flex">
      <div className="flex flex-col gap-1 px-2">
        <p className="font-['Manrope'] text-lg font-bold text-[#041627]">Alex Rivera</p>
        <p className="font-['Inter'] text-xs font-medium text-on-surface-variant">Premium Plan</p>
      </div>

      <nav className="flex flex-col gap-1">
        {SIDEBAR_ITEMS.map((item) => {
          const isActive = item.key === currentKey;
          const itemClass = isActive
            ? "flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-[#041627] shadow-sm transition-all duration-200 ease-in-out font-['Inter'] text-sm font-medium"
            : "flex items-center gap-3 rounded-xl px-4 py-3 text-[#44474c] transition-all duration-200 ease-in-out hover:bg-white/50 font-['Inter'] text-sm font-medium";

          return (
            <Link key={item.key} href={item.href} className={itemClass}>
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
        <Link href={ROUTES.login} className="flex items-center gap-3 rounded-xl px-4 py-3 text-[#44474c] font-['Inter'] text-sm font-medium">
          <span className="material-symbols-outlined">help</span>
          Support
        </Link>
        <Link href={ROUTES.login} className="flex items-center gap-3 rounded-xl px-4 py-3 text-[#44474c] font-['Inter'] text-sm font-medium">
          <span className="material-symbols-outlined">logout</span>
          Logout
        </Link>
      </div>
    </aside>
  );
}
