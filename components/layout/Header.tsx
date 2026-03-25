import Link from "next/link";

import { ROUTES } from "@/lib/constants";

type HeaderActive = "dashboard" | "weather" | "holidays" | "currency" | "reminders" | "profile" | "settings";

const NAV_ITEMS: Array<{
  href: string;
  label: string;
  key: HeaderActive;
}> = [
  { key: "dashboard", label: "Dashboard", href: ROUTES.dashboard },
  { key: "weather", label: "Weather", href: ROUTES.weather },
  { key: "holidays", label: "Holidays", href: ROUTES.holidays },
  { key: "currency", label: "Currency", href: ROUTES.currency },
  { key: "reminders", label: "Reminders", href: ROUTES.reminders },
];

type HeaderProps = {
  active?: HeaderActive;
  onMenuClick?: () => void;
};

export default function Header({ active = "currency", onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-none bg-[#f8f9fa]">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-lg p-2 text-[#44474c] transition-all hover:bg-[#f3f4f5] hover:text-[#041627] md:hidden"
            aria-label="Open menu"
            onClick={onMenuClick}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <Link href={ROUTES.dashboard} className="font-headline text-xl font-bold tracking-tighter text-[#041627] sm:text-2xl">
            Zenith Dashboard
          </Link>
        </div>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = item.key === active;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={[
                  "font-['Manrope'] text-sm font-semibold tracking-tight transition-colors",
                  isActive
                    ? "border-b-2 border-[#041627] pb-1 text-[#041627]"
                    : "text-[#44474c] hover:text-[#041627]",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            className="rounded-lg p-2 text-[#44474c] transition-all hover:bg-[#f3f4f5] hover:text-[#041627]"
            aria-label="Search"
          >
            <span className="material-symbols-outlined">search</span>
          </button>
          <Link
            href={ROUTES.settings}
            className="rounded-lg p-2 text-[#44474c] transition-all hover:bg-[#f3f4f5] hover:text-[#041627]"
            aria-label="Settings"
          >
            <span className="material-symbols-outlined">settings</span>
          </Link>
          <Link href={ROUTES.profile} className="flex items-center gap-2 border-l border-[#c4c6cd]/15 pl-2 transition-colors hover:text-[#041627] sm:gap-3 sm:pl-4">
            <span className="hidden text-sm font-medium text-[#041627] sm:block">Profile</span>
            <img
              alt="User profile avatar"
              className="h-8 w-8 rounded-full border border-outline-variant/15 object-cover"
              data-alt="professional headshot of a smiling man in a creative studio with warm lighting and soft background bokeh"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB41a9UZGs-P-FyTfrhabKnx1bXxeq5POwya0KmKz6l8gEJh7-Bxr6tOs1CCt5lnwDVJieEvo0ia6E9HzpcAyXoizCQZX3xXA7YN3rNwxa6ffNCscHa7E-44Far2uyZZgalYscp4d0wkSV_exjd1E0nYVbH7Lt-dx01cW7AFxOZY5YUXgi4QZTuwc5FoMTkLrYm0p96wWkfg9URMe1SgSfEN2YOfb2SZD8xCFTIKi6iVskDgL2-_ogyC_PC67DZ4EWbHtxXvlis8A"
            />
          </Link>
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#f3f4f5]" />
    </header>
  );
}
