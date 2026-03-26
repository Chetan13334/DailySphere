import AppShell from "@/components/layout/AppShell";

export default function Currency() {
  return (
    <AppShell headerActive="currency" sidebarActive="currency">
      <section className="mb-12">
        <h1 className="mb-2 font-headline text-4xl font-extrabold tracking-tight text-primary">Currency Market</h1>
        <p className="max-w-2xl font-body text-on-surface-variant">
          Real-time global exchange rates and professional conversion tools for your editorial finance tracking.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-8 transition-all md:col-span-8">
          <div className="flex items-center justify-between">
            <h2 className="font-headline text-xl font-bold text-primary">Converter</h2>
            <span className="flex items-center gap-2 text-xs font-label text-on-surface-variant">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Live Updates Active
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 items-end gap-6 md:grid-cols-7">
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="px-1 font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                Amount
              </label>
              <input
                className="w-full rounded-lg border-none bg-surface-container-low p-4 font-headline text-lg font-bold text-primary outline-none transition-all focus:ring-2 focus:ring-primary-fixed"
                type="number"
                defaultValue="1000.00"
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="px-1 font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                From
              </label>
              <div className="relative">
                <select className="w-full cursor-pointer appearance-none rounded-lg border-none bg-surface-container-low p-4 pr-10 font-body text-sm font-medium text-primary outline-none transition-all focus:ring-2 focus:ring-primary-fixed">
                  <option>USD - US Dollar</option>
                  <option>EUR - Euro</option>
                  <option>GBP - British Pound</option>
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                  expand_more
                </span>
              </div>
            </div>

            <div className="flex justify-center pb-2 md:col-span-1">
              <button className="rounded-full bg-surface-container-high p-3 transition-all active:scale-95 hover:bg-primary hover:text-white">
                <span className="material-symbols-outlined">swap_horiz</span>
              </button>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="px-1 font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                To
              </label>
              <div className="relative">
                <select className="w-full cursor-pointer appearance-none rounded-lg border-none bg-surface-container-low p-4 pr-10 font-body text-sm font-medium text-primary outline-none transition-all focus:ring-2 focus:ring-primary-fixed">
                  <option>EUR - Euro</option>
                  <option>USD - US Dollar</option>
                  <option>GBP - British Pound</option>
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                  expand_more
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-xl bg-surface-container-low p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-1 font-label text-sm text-on-surface-variant">Converted Amount</p>
              <p className="font-headline text-3xl font-extrabold text-primary">924.50 EUR</p>
            </div>
            <div className="text-left md:text-right">
              <p className="mb-1 font-label text-xs text-on-surface-variant">Exchange Rate</p>
              <p className="font-body text-sm font-semibold text-primary">1 USD = 0.9245 EUR</p>
            </div>
          </div>

          <button className="mt-8 w-full rounded-lg bg-gradient-to-br from-primary to-primary-container py-4 text-lg font-headline font-bold text-white transition-all active:scale-[0.98] hover:opacity-90">
            Convert Now
          </button>
        </div>

        <div className="flex flex-col gap-6 md:col-span-4">
          <div className="rounded-xl bg-surface-container-lowest p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-headline text-lg font-bold text-primary">Popular Pairs</h2>
              <button className="text-xs font-bold text-primary hover:underline">View All</button>
            </div>

            <div className="flex flex-col gap-4">
              <div className="group flex cursor-pointer items-center justify-between rounded-lg bg-surface p-4 transition-colors hover:bg-surface-container">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
                    <span className="material-symbols-outlined text-sm">euro</span>
                  </div>
                  <div>
                    <p className="font-body text-sm font-bold text-primary">EUR/USD</p>
                    <p className="font-label text-[10px] uppercase text-on-surface-variant">Euro / US Dollar</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-headline text-sm font-bold text-primary">1.0854</p>
                  <p className="font-label text-[10px] font-bold text-emerald-600">+0.12%</p>
                </div>
              </div>

              <div className="group flex cursor-pointer items-center justify-between rounded-lg bg-surface p-4 transition-colors hover:bg-surface-container">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
                    <span className="material-symbols-outlined text-sm">currency_pound</span>
                  </div>
                  <div>
                    <p className="font-body text-sm font-bold text-primary">GBP/USD</p>
                    <p className="font-label text-[10px] uppercase text-on-surface-variant">Pound / US Dollar</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-headline text-sm font-bold text-primary">1.2642</p>
                  <p className="font-label text-[10px] font-bold text-error">-0.05%</p>
                </div>
              </div>

              <div className="group flex cursor-pointer items-center justify-between rounded-lg bg-surface p-4 transition-colors hover:bg-surface-container">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
                    <span className="material-symbols-outlined text-sm">currency_yen</span>
                  </div>
                  <div>
                    <p className="font-body text-sm font-bold text-primary">USD/JPY</p>
                    <p className="font-label text-[10px] uppercase text-on-surface-variant">US Dollar / Yen</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-headline text-sm font-bold text-primary">149.82</p>
                  <p className="font-label text-[10px] font-bold text-emerald-600">+0.31%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl bg-surface-container-high/50 p-6">
            <div className="relative z-10">
              <h3 className="mb-2 font-headline text-sm font-bold text-primary">Market Insights</h3>
              <p className="mb-4 font-body text-xs text-on-surface-variant">
                The US Dollar continues its rally against major currencies ahead of the FED meeting.
              </p>
              <div className="flex items-center gap-2">
                <span className="rounded bg-primary-fixed px-2 py-1 text-[10px] font-bold uppercase text-primary">
                  Macro
                </span>
                <span className="rounded bg-secondary-fixed px-2 py-1 text-[10px] font-bold uppercase text-secondary">
                  Analysis
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-7xl text-on-surface-variant/10">
              trending_up
            </span>
          </div>
        </div>

        <div className="rounded-xl bg-surface-container-lowest p-8 md:col-span-12">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-headline text-xl font-bold text-primary">Recent History</h2>
            <div className="flex gap-2">
              <button className="rounded-lg p-2 text-on-surface-variant transition-colors hover:bg-surface-container">
                <span className="material-symbols-outlined">filter_list</span>
              </button>
              <button className="rounded-lg p-2 text-on-surface-variant transition-colors hover:bg-surface-container">
                <span className="material-symbols-outlined">download</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-outline-variant/15">
                  <th className="px-4 pb-4 font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Date &amp; Time
                  </th>
                  <th className="px-4 pb-4 font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Source Amount
                  </th>
                  <th className="px-4 pb-4 font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Target Amount
                  </th>
                  <th className="px-4 pb-4 font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Conversion Rate
                  </th>
                  <th className="px-4 pb-4 font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Status
                  </th>
                  <th className="px-4 pb-4 font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant" />
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {[
                  ["Oct 24, 2023", "09:42 AM", "5,000.00 USD", "4,625.50 EUR", "0.9251"],
                  ["Oct 23, 2023", "04:15 PM", "1,200.00 GBP", "1,516.40 USD", "1.2637"],
                  ["Oct 23, 2023", "11:05 AM", "50,000.00 JPY", "333.75 USD", "0.0067"],
                ].map(([date, time, source, target, rate]) => (
                  <tr className="group transition-colors hover:bg-surface-container-low" key={`${date}-${time}`}>
                    <td className="px-4 py-5">
                      <p className="font-body text-sm font-medium text-primary">{date}</p>
                      <p className="font-label text-[10px] text-on-surface-variant">{time}</p>
                    </td>
                    <td className="px-4 py-5 font-headline text-sm font-bold text-primary">{source}</td>
                    <td className="px-4 py-5 font-headline text-sm font-bold text-primary">{target}</td>
                    <td className="px-4 py-5 font-body text-xs text-on-surface-variant">{rate}</td>
                    <td className="px-4 py-5">
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold uppercase tracking-tight text-emerald-800">
                        Completed
                      </span>
                    </td>
                    <td className="px-4 py-5 text-right">
                      <button className="rounded-full p-2 opacity-0 transition-all hover:bg-surface-container group-hover:opacity-100">
                        <span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
