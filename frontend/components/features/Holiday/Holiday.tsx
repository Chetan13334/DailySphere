import AppShell from "@/components/layout/AppShell";

const upcomingHolidays = [
  {
    day: "Dec",
    date: "25",
    title: "Christmas Day",
    subtitle: "Global • Public Holiday",
    tone: "bg-secondary-container text-on-secondary-container",
  },
  {
    day: "Dec",
    date: "31",
    title: "New Year's Eve",
    subtitle: "Global • Observance",
    tone: "bg-tertiary-fixed text-on-tertiary-fixed",
  },
  {
    day: "Jan",
    date: "01",
    title: "New Year's Day",
    subtitle: "Global • Bank Holiday",
    tone: "bg-error-container text-on-error-container",
  },
  {
    day: "Jan",
    date: "15",
    title: "Martin Luther King Jr.",
    subtitle: "US • Federal Holiday",
    tone: "bg-primary-fixed text-on-primary-fixed",
  },
];

const calendarRows = [
  {
    date: "Jan 1, Mon",
    name: "New Year's Day",
    category: "Global",
    categoryTone: "bg-secondary-container text-on-secondary-container",
    type: "Public Holiday",
    status: "Past",
    statusTone: "text-primary/40",
  },
  {
    date: "May 27, Mon",
    name: "Memorial Day",
    category: "National",
    categoryTone: "bg-primary-fixed text-on-primary-fixed",
    type: "Federal Holiday",
    status: "Past",
    statusTone: "text-primary/40",
  },
  {
    date: "Jul 4, Thu",
    name: "Independence Day",
    category: "National",
    categoryTone: "bg-primary-fixed text-on-primary-fixed",
    type: "Federal Holiday",
    status: "Past",
    statusTone: "text-primary/40",
  },
  {
    date: "Nov 28, Thu",
    name: "Thanksgiving Day",
    category: "Cultural",
    categoryTone: "bg-tertiary-fixed text-on-tertiary-fixed",
    type: "Federal Holiday",
    status: "Upcoming",
    statusTone: "text-error",
    featured: true,
  },
  {
    date: "Dec 25, Wed",
    name: "Christmas Day",
    category: "Global",
    categoryTone: "bg-secondary-container text-on-secondary-container",
    type: "Public Holiday",
    status: "Upcoming",
    statusTone: "text-error",
  },
];

export default function Holiday() {
  return (
    <AppShell headerActive="holidays" sidebarActive="holidays">
      <section className="mb-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h1 className="mb-3 font-headline text-4xl font-extrabold tracking-tight text-primary lg:text-5xl">
              Global Holidays
            </h1>
            <p className="font-body text-on-surface-variant">
              Discover cultural celebrations, public holidays, and seasonal festivities from around the world curated for your editorial calendar.
            </p>
          </div>

          <div className="flex gap-3 rounded-xl bg-surface-container-low p-1.5">
            <select className="cursor-pointer border-none bg-transparent py-2 pl-4 pr-10 text-sm font-semibold focus:ring-0">
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Japan</option>
              <option>France</option>
              <option>Brazil</option>
            </select>
            <div className="my-2 w-px bg-outline-variant/30" />
            <select className="cursor-pointer border-none bg-transparent py-2 pl-4 pr-10 text-sm font-semibold focus:ring-0">
              <option>2024</option>
              <option>2025</option>
            </select>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="group relative min-h-[400px] overflow-hidden rounded-3xl bg-primary-container p-8 lg:col-span-8 lg:p-12">
          <div className="absolute inset-0 z-0">
            <img
              alt="New Year Celebration"
              className="h-full w-full object-cover opacity-60 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"
              data-alt="vibrant firework display over a modern city skyline at night with reflections in water and soft purple and gold hues"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm-6Y5dJYIx92ruh_zDh9yJnXUkcj97IKnrlcDImuZFk3Xvn1zmx6OBINz5IUWYqHa5UAvF1qjhSB386hdb-1WmT6qxW25rLTnd3TmzOadPccHs6JprYJfU0PTMNxWxTNIIQ4NtrUFnsKbxt-Y68SiFW2lexqhjDWqfY5_0fRBZR_UM_93Zdyi55tkzyGSrysQH76FEM_XcezwVyHoznozC6CvVOZqcRbkOUuSf_UlQYDyqQBhnN5rgMFphaPGo5TfgpSgUrmFxQ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
          </div>

          <div className="relative z-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-error" />
              Today's Highlight
            </div>
            <h2 className="mb-4 font-headline text-4xl font-bold leading-tight text-white lg:text-6xl">
              Winter Solstice Festival
            </h2>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/80">
              Experience the longest night of the year with tradition, light, and community across multiple cultures globally.
            </p>
            <button className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-primary transition-all active:scale-95 hover:bg-primary-fixed">
              View Traditional Customs
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h3 className="font-headline text-xl font-bold text-primary">Upcoming</h3>
            <a className="text-sm font-semibold text-primary/60 hover:text-primary" href="#">
              See All
            </a>
          </div>

          <div className="hide-scrollbar flex max-h-[400px] flex-col gap-4 overflow-y-auto pr-2">
            {upcomingHolidays.map((item) => (
              <div
                key={item.title}
                className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-outline-variant/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className={`flex h-14 w-14 flex-col items-center justify-center rounded-xl ${item.tone}`}>
                  <span className="text-xs font-bold uppercase">{item.day}</span>
                  <span className="text-xl font-bold">{item.date}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-primary group-hover:text-surface-tint transition-colors">{item.title}</h4>
                  <p className="text-xs text-on-surface-variant">{item.subtitle}</p>
                </div>
                <span className="material-symbols-outlined text-outline-variant transition-colors group-hover:text-primary">
                  chevron_right
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-12 mt-8">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="font-headline text-2xl font-bold text-primary">Holiday Calendar 2024</h3>
              <p className="text-sm text-on-surface-variant">Full list of significant dates for United States</p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 rounded-lg border border-outline-variant/20 bg-white px-4 py-2 text-sm font-semibold transition-colors hover:bg-surface-container-low">
                <span className="material-symbols-outlined text-sm">calendar_view_month</span>
                Calendar View
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-md">
                <span className="material-symbols-outlined text-sm">download</span>
                Export PDF
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-outline-variant/10 bg-white">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-surface-container-low text-left">
                  <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant/70">Date</th>
                  <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant/70">Holiday Name</th>
                  <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant/70">Category</th>
                  <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant/70">Type</th>
                  <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant/70">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/5">
                {calendarRows.map((row) => (
                  <tr
                    key={row.name}
                    className={[
                      "group transition-colors hover:bg-surface-container-lowest",
                      row.featured ? "bg-surface-container-low/30" : "",
                    ].join(" ")}
                  >
                    <td className="px-8 py-6 font-semibold text-primary">{row.date}</td>
                    <td className="px-8 py-6 font-bold text-primary">{row.name}</td>
                    <td className="px-8 py-6">
                      <span className={`rounded-full px-3 py-1 text-xs font-bold ${row.categoryTone}`}>{row.category}</span>
                    </td>
                    <td className="px-8 py-6 text-sm text-on-surface-variant">{row.type}</td>
                    <td className="px-8 py-6">
                      <div className={`flex items-center gap-2 text-xs font-bold ${row.statusTone}`}>
                        <span
                          className={[
                            "h-2 w-2 rounded-full",
                            row.status === "Upcoming" ? "bg-error animate-pulse" : "bg-outline",
                          ].join(" ")}
                        />
                        {row.status}
                      </div>
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
