import { Activity, Inbox, CalendarClock, FileText, Users, Sparkles } from "lucide-react";

const features = [
  { icon: Activity, title: "Interactive AI Dashboard", body: "Top deals tracker, real-time alert feed, and dynamic pipeline charts in one bird's-eye view." },
  { icon: Sparkles, title: "Sales Insights Engine", body: "Per-account urgency scoring, status badges, and actionable AI recommendations." },
  { icon: CalendarClock, title: "Smart Follow-Up Scheduler", body: "Pick a slot, generate a Google Meet link, and dispatch invites automatically." },
  { icon: Inbox, title: "Global Inbox + AI", body: "Contextual urgency badges, date filtering, and inbox/sent toggling — all enriched by AI." },
  { icon: FileText, title: "Account Summaries & Proposals", body: "Concise client briefs and itemized proposals tailored to each prospect's needs." },
  { icon: Users, title: "Customer Lobby", body: "Live status tracking and direct CRM management with safe deletion flows." },
];

export function Features() {
  return (
    <section id="features" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">The toolkit</p>
          <h2 className="mt-3 font-display text-5xl leading-tight md:text-6xl">
            Everything a closer needs,<br />
            <span className="italic text-foreground/60">nothing they don't.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group relative bg-card p-8 transition-colors hover:bg-secondary/40">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-charcoal text-gold transition-transform group-hover:scale-110">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
