import Link from "next/link";

import { ROUTES } from "@/route/route";

const ZenithDashboard = () => {
  return (
    <div className="bg-background font-body text-on-background overflow-x-hidden selection:bg-primary-fixed selection:text-primary">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="hero-blob hero-blob-a" aria-hidden="true" />
        <div className="hero-blob hero-blob-b" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
      </div>

      <header className="sticky top-0 z-50 border-b border-[#edf0f2] bg-white/85 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-4 sm:px-8">
          <Link href={ROUTES.home} className="animate-fade-up font-headline text-2xl font-bold tracking-tighter text-[#041627]">
            DailySphere
          </Link>

          <div className="animate-fade-up hidden items-center gap-8 font-['Manrope'] text-sm font-semibold tracking-tight md:flex">
            <Link href={ROUTES.home} className="border-b-2 border-[#041627] pb-1 text-[#041627]">
              Dashboard
            </Link>
            <Link href={ROUTES.weather} className="text-[#44474c] transition-colors duration-300 hover:text-[#041627]">
              Weather
            </Link>
            <Link href={ROUTES.holidays} className="text-[#44474c] transition-colors duration-300 hover:text-[#041627]">
              Holidays
            </Link>
            <Link href={ROUTES.currency} className="text-[#44474c] transition-colors duration-300 hover:text-[#041627]">
              Currency
            </Link>
            <Link href={ROUTES.reminders} className="text-[#44474c] transition-colors duration-300 hover:text-[#041627]">
              Reminders
            </Link>
          </div>

          <div className="animate-fade-up flex items-center gap-4">
            <button className="rounded-lg px-5 py-2 text-sm font-semibold text-primary transition-all duration-300 hover:bg-[#f3f4f5] hover:shadow-[0_10px_30px_rgba(4,22,39,0.08)]">
              Login
            </button>
            <Link
              href={ROUTES.getStarted}
              className="primary-gradient inline-flex items-center justify-center rounded-xl px-6 py-2 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(4,22,39,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(4,22,39,0.24)] active:scale-95"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative px-6 pb-28 pt-20 sm:px-8 sm:pt-24">
          <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
            <span className="font-label animate-fade-up mb-6 inline-block rounded-full border border-[#d8e8f2] bg-white/90 px-4 py-1 text-xs font-bold uppercase tracking-[0.24em] text-on-secondary-container shadow-[0_10px_30px_rgba(4,22,39,0.06)]">
              Intelligence Redefined
            </span>

            <h1 className="animate-fade-up-delayed font-headline mb-8 max-w-4xl text-5xl font-extrabold leading-[1.08] tracking-tight text-primary md:text-7xl">
              Your Day, Perfected.
              <br />
              One Unified Dashboard.
            </h1>

            <p className="animate-fade-up-delayed-2 mb-12 max-w-2xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
              Zenith consolidates your most vital information - from global forecasts to financial markets - into a
              singular, breathtakingly simple workspace.
            </p>

            <div className="animate-fade-up-delayed-3 flex flex-col gap-4 sm:flex-row">
              <Link
                href={ROUTES.getStarted}
                className="primary-gradient inline-flex items-center justify-center rounded-xl px-10 py-4 font-semibold text-white shadow-[0_18px_36px_rgba(4,22,39,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_rgba(4,22,39,0.24)]"
              >
                Get Started for Free
              </Link>
              <button className="rounded-xl border border-[#dde1e6] bg-white px-10 py-4 font-semibold text-primary shadow-[0_10px_24px_rgba(4,22,39,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cad3db] hover:shadow-[0_18px_36px_rgba(4,22,39,0.08)]">
                Explore Features
              </button>
            </div>

            <div className="animate-scale-in relative mt-20 w-full max-w-6xl">
              <div className="absolute inset-0 rounded-full bg-primary-fixed opacity-15 blur-3xl" />
              <div className="editorial-shadow premium-panel relative rounded-[2rem] border border-[#e7ebef] bg-white p-4">
                <img
                  alt="DailySphere Interface"
                  className="h-auto w-full rounded-2xl"
                  data-alt="Modern clean dashboard interface showing minimalist weather widgets, financial charts, and calendar in high-end editorial style with soft navy accents"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvHuh1VL_Bl7iuI7SSJ4VeMVFyMFP2x9tu2TIcp_JKAPR881c7dqy57NFuFTQwQTumlW6t_K_WOI0xA60hTo1KSFzeQvN9eL15YgSKRCgsaw7S7ttl4j3H5empC62zkri3UUjfpY6fkJZ7VIWVSzGwH5_6ssD4P4ipdCQchws33jBaf-nWarQYP7DZVgPam9feoodo1ZhlXbAPgPoF_OJKjE9Fx5Ow0WpDaF8mQOKCU87T2nPrsEbZHXffDmGaQ5CBXAXIe3uUdQ"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 sm:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-2">
            <div className="animate-fade-up">
              <h2 className="font-headline mb-6 text-4xl font-bold leading-tight text-primary">
                Eliminate the noise. Focus on what matters.
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-on-surface-variant">
                Stop jumping between tabs. Zenith centralizes the essential pillars of your daily routine. We've
                replaced the chaos of multiple apps with a curated, high-contrast environment designed for clarity and
                rapid decision-making.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined rounded-lg bg-primary-fixed p-2 text-primary">
                    integration_instructions
                  </span>
                  <div>
                    <h4 className="font-bold text-primary">Unified Ecosystem</h4>
                    <p className="text-sm text-on-surface-variant">
                      Every widget speaks the same visual language for zero cognitive load.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined rounded-lg bg-primary-fixed p-2 text-primary">
                    auto_awesome
                  </span>
                  <div>
                    <h4 className="font-bold text-primary">Intelligent Context</h4>
                    <p className="text-sm text-on-surface-variant">
                      The dashboard adapts to your location, timezone, and priority tasks.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="card-pop editorial-shadow flex aspect-square flex-col justify-between rounded-3xl border border-[#eceff2] bg-white p-8">
                <span className="material-symbols-outlined text-4xl text-primary">cloudy_snowing</span>
                <div className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Live Weather</div>
              </div>
              <div className="card-pop delay-1 editorial-shadow mt-8 flex aspect-square flex-col justify-between rounded-3xl bg-primary p-8 text-white">
                <span className="material-symbols-outlined text-4xl">payments</span>
                <div className="text-sm font-bold uppercase tracking-widest opacity-80">Currency</div>
              </div>
              <div className="card-pop delay-2 editorial-shadow flex aspect-square flex-col justify-between rounded-3xl border border-[#eceff2] bg-white p-8">
                <span className="material-symbols-outlined text-4xl text-primary">calendar_today</span>
                <div className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Holidays</div>
              </div>
              <div className="card-pop delay-3 editorial-shadow mt-8 flex aspect-square flex-col justify-between rounded-3xl bg-secondary-container p-8 text-on-secondary-container">
                <span className="material-symbols-outlined text-4xl">notifications_active</span>
                <div className="text-sm font-bold uppercase tracking-widest">Reminders</div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-28 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 animate-fade-up">
              <h2 className="font-headline mb-4 text-4xl font-bold text-primary">Precision-Engineered Widgets</h2>
              <p className="max-w-xl text-on-surface-variant">
                Every component in Zenith is crafted to provide maximum insight with minimum effort.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="editorial-shadow group relative overflow-hidden rounded-3xl border border-[#eceff2] bg-white p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(4,22,39,0.10)] md:col-span-2">
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <span className="material-symbols-outlined mb-4 text-3xl text-primary">thermostat</span>
                    <h3 className="font-headline mb-2 text-2xl font-bold text-primary">Hyper-Local Forecasts</h3>
                    <p className="max-w-xs text-on-surface-variant">
                      Global precision weather tracking with precipitation alerts and hourly granularity.
                    </p>
                  </div>
                  <div className="mt-12 flex gap-4">
                    <div className="rounded-xl bg-surface-container-low px-4 py-2 text-xs font-bold">
                      72{"\u00B0"}F Sunny
                    </div>
                    <div className="rounded-xl bg-surface-container-low px-4 py-2 text-xs font-bold">12% Humidity</div>
                  </div>
                </div>
                <div className="absolute -right-20 -bottom-20 opacity-5 transition-transform duration-700 group-hover:scale-110">
                  <span className="material-symbols-outlined text-[300px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    wb_sunny
                  </span>
                </div>
              </div>

              <div className="premium-panel editorial-shadow rounded-3xl bg-primary p-10 text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(4,22,39,0.18)]">
                <span className="material-symbols-outlined mb-4 text-3xl">currency_exchange</span>
                <h3 className="font-headline mb-2 text-2xl font-bold">Global Markets</h3>
                <p className="mb-8 text-sm leading-relaxed opacity-70">
                  Real-time currency exchange rates and historical trends for over 150 fiat and digital assets.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-xs font-bold">USD/EUR</span>
                    <span className="text-sm font-semibold">
                      0.92 <span className="ml-1 text-[10px] text-green-400">{"\u25B2"} 0.4%</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-xs font-bold">USD/GBP</span>
                    <span className="text-sm font-semibold">
                      0.79 <span className="ml-1 text-[10px] text-red-400">{"\u25BC"} 0.1%</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="editorial-shadow rounded-3xl border border-[#eceff2] bg-white p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(4,22,39,0.10)]">
                <span className="material-symbols-outlined mb-4 text-3xl text-primary">event</span>
                <h3 className="font-headline mb-2 text-2xl font-bold text-primary">Global Calendar</h3>
                <p className="mb-6 text-sm text-on-surface-variant">
                  Stay ahead with public holidays and cultural events across 200+ countries.
                </p>
                <div className="flex items-center gap-4 rounded-2xl bg-surface-container-low p-4">
                  <div className="flex h-10 w-10 flex-col items-center justify-center rounded-lg bg-white shadow-sm">
                    <span className="text-[10px] font-bold uppercase text-error">Dec</span>
                    <span className="text-sm font-bold">25</span>
                  </div>
                  <span className="text-sm font-semibold">Christmas Day</span>
                </div>
              </div>

              <div className="editorial-shadow relative overflow-hidden rounded-3xl bg-secondary-container p-10 text-on-secondary-container transition-transform duration-500 hover:-translate-y-1 md:col-span-2">
                <div className="max-w-md">
                  <span className="material-symbols-outlined mb-4 text-3xl">check_circle</span>
                  <h3 className="font-headline mb-2 text-2xl font-bold">Smart Reminders</h3>
                  <p className="mb-8 text-sm leading-relaxed opacity-80">
                    Integrated task management that syncs across your workflow to ensure no deadline is ever missed.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-white/30 px-3 py-1 text-xs font-medium">Draft annual report</span>
                    <span className="rounded-full bg-white/30 px-3 py-1 text-xs font-medium">Review Q4 analytics</span>
                    <span className="rounded-full bg-white/30 px-3 py-1 text-xs font-medium">Market research</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#edf0f2] px-6 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <div className="text-center transition-transform duration-500 hover:-translate-y-1 md:text-left">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-fixed text-primary">
                  <span className="material-symbols-outlined text-2xl">bolt</span>
                </div>
                <h4 className="font-headline mb-4 text-xl font-bold text-primary">Pure Efficiency</h4>
                <p className="leading-relaxed text-on-surface-variant">
                  Reduce tab switching by 40%. All your essential data points are visible in a single glance.
                </p>
              </div>

              <div className="text-center transition-transform duration-500 hover:-translate-y-1 md:text-left">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-fixed text-primary">
                  <span className="material-symbols-outlined text-2xl">visibility</span>
                </div>
                <h4 className="font-headline mb-4 text-xl font-bold text-primary">Absolute Clarity</h4>
                <p className="leading-relaxed text-on-surface-variant">
                  High-contrast editorial design ensures you never have to squint to find the information you need.
                </p>
              </div>

              <div className="text-center transition-transform duration-500 hover:-translate-y-1 md:text-left">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-fixed text-primary">
                  <span className="material-symbols-outlined text-2xl">eco</span>
                </div>
                <h4 className="font-headline mb-4 text-xl font-bold text-primary">Bespoke Simplicity</h4>
                <p className="leading-relaxed text-on-surface-variant">
                  Zenith removes the clutter. No ads, no tracking, just your day, organized and perfected.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary px-6 py-32 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="animate-fade-up font-headline mb-8 text-4xl font-extrabold text-white md:text-5xl">
              Ready to reclaim your digital workspace?
            </h2>
            <p className="animate-fade-up-delayed mb-12 text-lg text-on-primary-container">
              Join over 10,000 professionals using Zenith to power their daily productivity.
            </p>
            <div className="animate-fade-up-delayed-2 flex flex-col justify-center gap-4 sm:flex-row">
              <button className="rounded-xl bg-white px-10 py-4 font-bold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-container-lowest">
                Get Zenith Today
              </button>
              <button className="rounded-xl border border-white/20 px-10 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10">
                View Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-[#c4c6cd]/15 bg-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-12 py-12 md:flex-row">
          <div className="mb-8 font-['Inter'] text-xs uppercase tracking-widest text-[#44474c] md:mb-0">
            {"\u00A9"} 2024 Zenith Editorial Dashboard. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a className="font-['Inter'] text-xs uppercase tracking-widest text-[#44474c] transition-colors hover:text-[#041627]" href="#">
              Privacy Policy
            </a>
            <a className="font-['Inter'] text-xs uppercase tracking-widest text-[#44474c] transition-colors hover:text-[#041627]" href="#">
              Terms of Service
            </a>
            <a className="font-['Inter'] text-xs uppercase tracking-widest text-[#44474c] transition-colors hover:text-[#041627]" href="#">
              Cookie Settings
            </a>
            <a className="font-['Inter'] text-xs uppercase tracking-widest text-[#44474c] transition-colors hover:text-[#041627]" href="#">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ZenithDashboard;
