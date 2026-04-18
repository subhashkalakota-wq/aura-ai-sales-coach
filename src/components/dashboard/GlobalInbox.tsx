import { useState, useMemo } from "react";
import { Calendar, Search, Inbox as InboxIcon, Send } from "lucide-react";
import { inbox } from "@/lib/auracrm-data";

export function GlobalInbox() {
  const [folder, setFolder] = useState<"inbox" | "sent">("inbox");
  const [filterDate, setFilterDate] = useState<string>("all");
  const [selected, setSelected] = useState<string | null>("i1");

  const filtered = useMemo(() => {
    return inbox
      .filter((m) => m.folder === folder)
      .filter((m) => filterDate === "all" || m.date === filterDate);
  }, [folder, filterDate]);

  const current = inbox.find((m) => m.id === selected) ?? filtered[0];

  return (
    <div className="p-6">
      <div className="mb-5">
        <p className="text-xs uppercase tracking-[0.18em] text-foreground/50">Global inbox</p>
        <h1 className="mt-1 font-display text-4xl">Unified communications</h1>
      </div>

      <div className="grid gap-4 lg:grid-cols-[360px_1fr]">
        <div className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
          {/* Toggles */}
          <div className="flex border-b border-border">
            <Tab active={folder === "inbox"} onClick={() => setFolder("inbox")} icon={<InboxIcon className="h-3.5 w-3.5" />} label="Inbox" count={inbox.filter(m => m.folder === "inbox").length} />
            <Tab active={folder === "sent"} onClick={() => setFolder("sent")} icon={<Send className="h-3.5 w-3.5" />} label="Sent" count={inbox.filter(m => m.folder === "sent").length} />
          </div>
          {/* Filters */}
          <div className="flex items-center gap-2 border-b border-border p-3">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-foreground/40" />
              <input placeholder="Search messages…" className="w-full rounded-lg border border-border bg-background py-1.5 pl-8 pr-2 text-xs outline-none focus:border-gold/60" />
            </div>
            <select
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="rounded-lg border border-border bg-background px-2 py-1.5 text-xs outline-none focus:border-gold/60"
            >
              <option value="all">All dates</option>
              <option value="Today">Today</option>
              <option value="Yesterday">Yesterday</option>
              <option value="2 days">2 days ago</option>
            </select>
          </div>
          {/* List */}
          <div className="max-h-[640px] overflow-y-auto">
            {filtered.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelected(m.id)}
                className={`block w-full border-b border-border/60 p-4 text-left transition-colors hover:bg-secondary/40 ${
                  current?.id === m.id ? "bg-secondary/60" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-xs ${m.unread ? "font-semibold" : "text-foreground/60"}`}>{m.from}</span>
                  <span className="text-[10px] text-foreground/40">{m.time}</span>
                </div>
                <div className={`mt-0.5 truncate text-sm ${m.unread ? "font-medium" : "text-foreground/75"}`}>{m.subject}</div>
                <div className="mt-1 truncate text-xs text-foreground/50">{m.preview}</div>
                <div className="mt-2 flex items-center gap-1.5">
                  <UrgencyBadge urgency={m.urgency} />
                  <span className="text-[10px] text-foreground/40">{m.company}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Detail */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          {current ? (
            <>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs text-foreground/55">{current.from} · {current.company}</div>
                  <h2 className="mt-1 font-display text-3xl">{current.subject}</h2>
                  <div className="mt-2 flex items-center gap-2 text-xs text-foreground/55">
                    <Calendar className="h-3 w-3" /> {current.date} · {current.time}
                  </div>
                </div>
                <UrgencyBadge urgency={current.urgency} large />
              </div>
              <div className="mt-6 rounded-xl border border-gold/30 bg-gold/5 p-4 text-sm">
                <div className="text-xs uppercase tracking-wider text-gold">AI context</div>
                <p className="mt-1.5 text-foreground/85">
                  {current.urgency === "High"
                    ? "Time-sensitive request. Recommend reply within 4 hours to maintain trust signal."
                    : current.urgency === "Medium"
                    ? "Routine engagement. Suggest reply within 24h with proposal next-step."
                    : "Low urgency follow-up. Consider scheduling a check-in for next quarter."}
                </p>
              </div>
              <div className="mt-6 leading-relaxed text-foreground/80 whitespace-pre-line text-sm">
                {current.preview}{"\n\n"}Best regards,{"\n"}{current.from}
              </div>
              <div className="mt-8 flex gap-2">
                <button className="rounded-full bg-primary px-5 py-2 text-xs font-medium text-primary-foreground hover:opacity-90">Reply with AI</button>
                <button className="rounded-full border border-border px-5 py-2 text-xs hover:bg-secondary/50">Schedule meeting</button>
                <button className="rounded-full border border-border px-5 py-2 text-xs hover:bg-secondary/50">Mark resolved</button>
              </div>
            </>
          ) : (
            <div className="grid h-full place-items-center text-sm text-foreground/55">No message selected</div>
          )}
        </div>
      </div>
    </div>
  );
}

function Tab({ active, onClick, icon, label, count }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string; count: number }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-1 items-center justify-center gap-2 px-4 py-3 text-xs font-medium transition-colors ${
        active ? "bg-secondary/40 text-foreground border-b-2 border-gold" : "text-foreground/55 hover:text-foreground"
      }`}
    >
      {icon}{label} <span className="text-foreground/40">({count})</span>
    </button>
  );
}

function UrgencyBadge({ urgency, large }: { urgency: "High" | "Medium" | "Low"; large?: boolean }) {
  const cls = urgency === "High" ? "bg-ember/15 text-ember" : urgency === "Medium" ? "bg-gold/15 text-gold" : "bg-foreground/8 text-foreground/55";
  const size = large ? "px-3 py-1 text-xs" : "px-2 py-0.5 text-[10px]";
  return <span className={`inline-flex items-center rounded-full font-medium ${cls} ${size}`}>{urgency} urgency</span>;
}
