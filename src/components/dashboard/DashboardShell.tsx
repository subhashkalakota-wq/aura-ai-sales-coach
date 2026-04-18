import { Link, useRouter } from "@tanstack/react-router";
import { LayoutDashboard, Inbox, Users, FileText, CalendarClock, Sparkles, Bell, Search } from "lucide-react";

interface Props {
  active: string;
  onChange: (k: string) => void;
}

const nav = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "insights", label: "Sales Insights", icon: Sparkles },
  { key: "inbox", label: "Global Inbox", icon: Inbox },
  { key: "scheduler", label: "Scheduler", icon: CalendarClock },
  { key: "lobby", label: "Customer Lobby", icon: Users },
  { key: "summarizer", label: "Summarizer", icon: FileText },
];

export function DashboardShell({ active, onChange, children }: Props & { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="hidden w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground lg:flex">
        <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-6">
          <div className="grid h-7 w-7 place-items-center rounded-full bg-gradient-gold">
            <Sparkles className="h-3.5 w-3.5 text-charcoal" />
          </div>
          <Link to="/" className="font-display text-xl">Aura<span className="italic text-gold">CRM</span></Link>
        </div>
        <nav className="flex-1 space-y-1 px-3 py-6">
          {nav.map((n) => {
            const isActive = active === n.key;
            return (
              <button
                key={n.key}
                onClick={() => onChange(n.key)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all ${
                  isActive
                    ? "bg-sidebar-accent text-gold shadow-soft"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                }`}
              >
                <n.icon className="h-4 w-4" />
                {n.label}
                {isActive && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-gold" />}
              </button>
            );
          })}
        </nav>
        <div className="m-3 rounded-2xl border border-sidebar-border bg-sidebar-accent p-4">
          <div className="text-xs text-sidebar-foreground/60">AI usage this month</div>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="font-display text-2xl text-gold">2,431</span>
            <span className="text-xs text-sidebar-foreground/50">/ 5,000</span>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-sidebar-border">
            <div className="h-full w-[48%] rounded-full bg-gradient-gold" />
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-background/80 px-6 backdrop-blur-xl">
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/40" />
            <input
              placeholder="Search customers, deals, conversations…"
              className="w-full rounded-full border border-border bg-secondary/40 py-2 pl-10 pr-4 text-sm outline-none transition focus:border-gold/60 focus:ring-2 focus:ring-gold/20"
            />
          </div>
          <button className="relative grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-secondary/50">
            <Bell className="h-4 w-4" />
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-ember pulse-glow" />
          </button>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <div className="text-xs font-medium">Alex Morgan</div>
              <div className="text-[10px] text-foreground/50">VP Sales</div>
            </div>
            <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-charcoal text-xs font-medium text-ivory">AM</div>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden">{children}</main>
      </div>
    </div>
  );
}
