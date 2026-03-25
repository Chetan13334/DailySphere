import AppShell from "@/components/layout/AppShell";

export default function Holiday() {
  return (
    <AppShell headerActive="holidays" sidebarActive="holidays">
      <section className="mb-12">
        <h1 className="mb-2 font-headline text-4xl font-extrabold tracking-tight text-primary">Holiday Calendar</h1>
        <p className="max-w-2xl text-on-surface-variant">
          Upcoming public holidays and observances presented in a simple editorial view.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {[
          ["Halloween", "Oct 31", "Global observance"],
          ["Thanksgiving", "Nov 23", "US holiday"],
          ["Christmas Day", "Dec 25", "International holiday"],
          ["New Year", "Jan 1", "Worldwide celebration"],
        ].map(([name, date, desc]) => (
          <div key={name} className="rounded-3xl bg-tertiary-fixed p-8 shadow-[0_20px_40px_rgba(25,28,29,0.06)]">
            <p className="text-xs uppercase tracking-widest text-on-tertiary-fixed-variant">{date}</p>
            <h2 className="mt-2 font-headline text-2xl font-bold text-on-tertiary-fixed">{name}</h2>
            <p className="mt-3 text-sm text-on-tertiary-fixed-variant">{desc}</p>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
