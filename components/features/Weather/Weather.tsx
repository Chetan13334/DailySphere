import AppShell from "@/components/layout/AppShell";

export default function Weather() {
  return (
    <AppShell headerActive="weather" sidebarActive="weather">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="hero-blob hero-blob-a" aria-hidden="true" />
        <div className="hero-blob hero-blob-b" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
      </div>

      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-medium text-on-surface-variant">
            <span className="material-symbols-outlined text-sm">location_on</span>
            <span className="font-body text-sm tracking-tight">Reykjavík, Iceland</span>
          </div>
          <h1 className="font-headline text-5xl font-extrabold tracking-tighter text-primary">Weather Forecast</h1>
        </div>
        <button className="flex items-center gap-2 rounded-xl border border-outline-variant/15 bg-white px-6 py-3 font-headline font-bold text-primary shadow-sm transition-all active:scale-95 hover:bg-surface-container-low">
          <span className="material-symbols-outlined">map</span>
          <span>Change Location</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <section className="space-y-8 lg:col-span-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-primary-container p-12 text-on-primary shadow-2xl">
            <div className="absolute right-0 top-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-white opacity-10 blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-80 w-80 rounded-full bg-white opacity-5 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-12 md:flex-row md:justify-between">
              <div className="space-y-8">
                <div className="space-y-2">
                  <p className="font-headline text-xs font-semibold uppercase tracking-widest text-primary-fixed-dim">
                    Current Condition
                  </p>
                  <h2 className="font-headline text-3xl font-bold">Light Snowfall</h2>
                  <p className="font-body text-on-primary/70">Last updated: 10:45 AM local time</p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="font-headline text-[8rem] font-extrabold leading-none tracking-tighter">-4°</span>
                  <span className="font-headline text-4xl font-bold text-on-primary/60">C</span>
                </div>
              </div>

              <div className="flex flex-col items-end justify-between">
                <span className="material-symbols-outlined text-[10rem] leading-none text-primary-fixed-dim/40">
                  ac_unit
                </span>
                <div className="flex gap-4">
                  <div className="flex min-w-[100px] flex-col items-center rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                    <span className="material-symbols-outlined text-secondary-fixed">air</span>
                    <span className="mt-2 font-headline font-bold">12 km/h</span>
                    <span className="text-[10px] font-bold uppercase tracking-tighter text-on-primary/60">Wind</span>
                  </div>
                  <div className="flex min-w-[100px] flex-col items-center rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                    <span className="material-symbols-outlined text-secondary-fixed">humidity_percentage</span>
                    <span className="mt-2 font-headline font-bold">82%</span>
                    <span className="text-[10px] font-bold uppercase tracking-tighter text-on-primary/60">
                      Humidity
                    </span>
                  </div>
                  <div className="flex min-w-[100px] flex-col items-center rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                    <span className="material-symbols-outlined text-secondary-fixed">visibility</span>
                    <span className="mt-2 font-headline font-bold">4.2 km</span>
                    <span className="text-[10px] font-bold uppercase tracking-tighter text-on-primary/60">Vis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-surface-container-low p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-headline text-xl font-bold text-primary">Hourly Forecast</h3>
              <div className="flex gap-2">
                <button className="rounded-full bg-surface-container-lowest p-2 shadow-sm transition-all hover:bg-white">
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button className="rounded-full bg-surface-container-lowest p-2 shadow-sm transition-all hover:bg-white">
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-2">
              {[
                { label: "Now", icon: "ac_unit", temp: "-4°", active: false },
                { label: "12 PM", icon: "cloudy_snowing", temp: "-3°", active: false },
                { label: "1 PM", icon: "cloudy_snowing", temp: "-2°", active: true },
                { label: "2 PM", icon: "cloud", temp: "-2°", active: false },
                { label: "3 PM", icon: "cloud", temp: "-3°", active: false },
                { label: "4 PM", icon: "partly_cloudy_day", temp: "-5°", active: false },
                { label: "5 PM", icon: "wb_twilight", temp: "-7°", active: false },
              ].map(({ label, icon, temp, active }) => (
                <div
                  key={label}
                  className={[
                    "flex w-28 flex-shrink-0 cursor-default flex-col items-center gap-4 rounded-2xl border border-outline-variant/5 p-6 transition-all hover:-translate-y-1",
                    active ? "translate-y-[-4px] bg-primary text-on-primary shadow-lg shadow-primary/10" : "bg-surface-container-lowest",
                  ].join(" ")}
                >
                  <span className={active ? "text-xs font-bold text-on-primary/60" : "text-xs font-bold text-on-surface-variant"}>
                    {label}
                  </span>
                  <span
                    className="material-symbols-outlined text-3xl"
                    style={active ? { color: "var(--color-on-primary)" } : { color: "var(--color-primary)" }}
                  >
                    {icon}
                  </span>
                  <span className={active ? "font-headline text-lg font-bold text-on-primary" : "font-headline text-lg font-bold"}>
                    {temp}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-8 lg:col-span-4">
          <div className="rounded-[2rem] border border-outline-variant/10 bg-surface-container-lowest p-8 shadow-sm">
            <h3 className="mb-8 font-headline text-xl font-bold text-primary">7-Day Forecast</h3>
            <div className="space-y-6">
              {[
                ["Tomorrow", "cloudy_snowing", "30%", "-2°", "-6°"],
                ["Tuesday", "cloud", "10%", "0°", "-4°"],
                ["Wednesday", "wb_sunny", "0%", "1°", "-3°"],
                ["Thursday", "cloudy_snowing", "80%", "-5°", "-9°"],
                ["Friday", "ac_unit", "100%", "-8°", "-12°"],
                ["Saturday", "cloud", "20%", "-2°", "-5°"],
              ].map(([day, icon, chance, high, low]) => (
                <div key={day} className="flex items-center justify-between">
                  <span className="w-20 font-body font-semibold text-on-surface-variant">{day}</span>
                  <div className="flex flex-1 items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {icon}
                    </span>
                    <span className="text-xs font-medium text-on-surface-variant">{chance}</span>
                  </div>
                  <div className="flex w-20 justify-end gap-4">
                    <span className="font-headline font-bold text-primary">{high}</span>
                    <span className="font-headline font-bold text-on-surface-variant/40">{low}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-10 w-full rounded-xl bg-surface-container-low py-4 font-headline font-bold text-primary transition-all hover:bg-surface-container-high">
              View Extended Forecast
            </button>
          </div>

          <div className="rounded-[2rem] bg-secondary-container p-8">
            <div className="mb-4 flex items-start justify-between">
              <h3 className="font-headline text-lg font-bold text-on-secondary-container">Air Quality Index</h3>
              <span className="material-symbols-outlined text-on-secondary-container">eco</span>
            </div>
            <div className="mb-4 flex items-end gap-3">
              <span className="font-headline text-4xl font-extrabold text-on-secondary-container">24</span>
              <span className="mb-1 text-sm font-bold text-on-secondary-container">Good</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-on-secondary-container/10">
              <div className="h-full w-[24%] bg-primary" />
            </div>
            <p className="mt-4 text-xs font-medium leading-relaxed text-on-secondary-container/80">
              Air quality is excellent. Ideal for outdoor activities and exercise.
            </p>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
