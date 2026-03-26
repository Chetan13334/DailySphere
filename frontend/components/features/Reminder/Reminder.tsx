import AppShell from "@/components/layout/AppShell";

export default function Reminder() {
  return (
    <AppShell headerActive="reminders" sidebarActive="reminders">
      <section className="mb-12">
        <h1 className="mb-2 font-headline text-4xl font-extrabold tracking-tight text-primary">Reminders</h1>
        <p className="max-w-2xl text-on-surface-variant">
          Track your tasks, deadlines, and editorial follow-ups from one focused workspace.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {[
          ["Executive Board Review", "Due at 2:00 PM", "primary"],
          ["Design System Sync", "Due at 4:30 PM", "secondary"],
          ["Weekly Content Audit", "Tomorrow", "tertiary"],
        ].map(([title, time, tone]) => (
          <div key={title} className="rounded-3xl bg-surface-container-lowest p-8 shadow-[0_20px_40px_rgba(25,28,29,0.06)]">
            <div className="mb-4 flex items-center justify-between">
              <span className={`h-3 w-3 rounded-full ${tone === "primary" ? "bg-primary" : tone === "secondary" ? "bg-secondary" : "bg-outline-variant"}`} />
              <span className="text-xs uppercase tracking-widest text-on-surface-variant">Open</span>
            </div>
            <h2 className="font-headline text-2xl font-bold text-primary">{title}</h2>
            <p className="mt-3 text-sm text-on-surface-variant">{time}</p>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
