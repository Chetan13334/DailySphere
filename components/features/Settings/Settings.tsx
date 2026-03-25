"use client";

import { motion } from "framer-motion";

import AppShell from "@/components/layout/AppShell";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const widgetItems = [
  { icon: "cloudy_snowing", label: "Weather Forecast", checked: true },
  { icon: "currency_exchange", label: "Currency Converter", checked: true },
  { icon: "calendar_today", label: "Global Holidays", checked: false },
  { icon: "monitoring", label: "Market Insights", checked: true },
];

export default function Settings() {
  return (
    <AppShell headerActive="profile" sidebarActive="settings" showHeader={false} sidebarVariant="standalone">
      <motion.div className="mx-auto w-full max-w-7xl" initial="hidden" animate="show" variants={container}>
        <motion.header className="mb-8 sm:mb-12" variants={fadeUp}>
          <h1 className="mb-2 font-headline text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Settings
          </h1>
          <p className="text-base text-on-surface-variant sm:text-lg">Manage your editorial environment and preferences.</p>
        </motion.header>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-12 xl:gap-8">
          <motion.section className="rounded-xl bg-surface-container-lowest p-5 sm:p-8 xl:col-span-7" variants={fadeUp}>
            <div>
              <h2 className="mb-5 font-headline text-lg font-bold text-primary sm:mb-6 sm:text-xl">Appearance</h2>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-xl">
                    <p className="font-semibold text-on-surface">Interface Theme</p>
                    <p className="text-sm text-on-surface-variant">Customize how Zenith looks on your device.</p>
                  </div>
                  <div className="flex flex-wrap gap-1 rounded-xl bg-surface-container-low p-1">
                    <button className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-primary shadow-sm sm:px-4">
                      <span className="material-symbols-outlined text-[18px]">light_mode</span>
                      Light
                    </button>
                    <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-on-surface-variant transition-colors hover:bg-surface-container sm:px-4">
                      <span className="material-symbols-outlined text-[18px]">dark_mode</span>
                      Dark
                    </button>
                    <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-on-surface-variant transition-colors hover:bg-surface-container sm:px-4">
                      <span className="material-symbols-outlined text-[18px]">settings_brightness</span>
                      Auto
                    </button>
                  </div>
                </div>

                <div className="h-px bg-outline-variant/15" />

                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-xl">
                    <p className="font-semibold text-on-surface">Time Format</p>
                    <p className="text-sm text-on-surface-variant">Choose your preferred clock display.</p>
                  </div>
                  <div className="flex rounded-xl bg-surface-container-low p-1">
                    <button className="rounded-lg px-4 py-2 text-sm font-medium text-on-surface-variant transition-colors hover:bg-surface-container sm:px-5">
                      12h
                    </button>
                    <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm sm:px-5">
                      24h
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="mb-5 font-headline text-lg font-bold text-primary sm:mb-6 sm:text-xl">Regional Settings</h2>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-on-surface">Default Location</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
                      location_on
                    </span>
                    <input
                      className="w-full rounded-xl border border-outline-variant/15 bg-surface-container-lowest py-3 pl-11 pr-4 font-body text-sm outline-none transition-all focus:border-primary-fixed-dim focus:ring-4 focus:ring-primary-fixed/20"
                      type="text"
                      defaultValue="San Francisco, CA"
                    />
                  </div>
                  <p className="mt-1 text-xs text-on-surface-variant">
                    Used for weather forecasts and local holiday tracking.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.div className="flex flex-col gap-6 xl:col-span-5" variants={fadeUp}>
            <section className="rounded-xl bg-surface-container-lowest p-5 sm:p-8">
              <h2 className="mb-5 font-headline text-lg font-bold text-primary sm:mb-6 sm:text-xl">Default Widgets</h2>
              <div className="flex flex-col gap-4">
                {widgetItems.map((item) => (
                  <label
                    key={item.label}
                    className="flex cursor-pointer items-center justify-between rounded-xl bg-surface-container-low/50 p-4 transition-colors hover:bg-surface-container-low"
                  >
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-secondary">{item.icon}</span>
                      <span className="font-medium text-on-surface">{item.label}</span>
                    </div>
                    <input
                      checked={item.checked}
                      readOnly
                      className="h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary"
                      type="checkbox"
                    />
                  </label>
                ))}
              </div>
            </section>

            <section className="rounded-xl bg-surface-container-lowest p-5 sm:p-8">
              <h2 className="mb-5 font-headline text-lg font-bold text-primary sm:mb-6 sm:text-xl">Notifications</h2>
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="max-w-[70%]">
                    <p className="font-semibold text-on-surface">Push Notifications</p>
                    <p className="text-sm text-on-surface-variant">
                      Receive real-time alerts for price changes and weather events.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary transition-colors duration-200 ease-in-out focus:outline-none"
                  >
                    <span className="pointer-events-none inline-block h-5 w-5 translate-x-5 transform rounded-full bg-white shadow transition duration-200 ease-in-out" />
                  </button>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div className="max-w-[70%]">
                    <p className="font-semibold text-on-surface">Email Digests</p>
                    <p className="text-sm text-on-surface-variant">Weekly summary of your dashboard analytics and trends.</p>
                  </div>
                  <button
                    type="button"
                    className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-surface-container-highest transition-colors duration-200 ease-in-out focus:outline-none"
                  >
                    <span className="pointer-events-none inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white shadow transition duration-200 ease-in-out" />
                  </button>
                </div>
              </div>
            </section>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button className="rounded-xl bg-surface-container-high px-8 py-3 font-headline font-bold text-primary transition-all hover:bg-surface-container-highest">
                Discard Changes
              </button>
              <button className="rounded-xl bg-gradient-to-br from-primary to-primary-container px-10 py-3 font-headline font-bold text-on-primary shadow-lg shadow-primary/10 transition-all hover:scale-[1.02] active:scale-95">
                Save Settings
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AppShell>
  );
}
