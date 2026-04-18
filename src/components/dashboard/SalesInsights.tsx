import { useState } from "react";
import { customers } from "@/lib/auracrm-data";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export function SalesInsights() {
  const [accepted, setAccepted] = useState<string[]>([]);

  return (
    <div className="space-y-6 p-6">
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-foreground/50">Sales insights engine</p>
        <h1 className="mt-1 font-display text-4xl">Per-account intelligence</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {customers.map((c) => {
          const isAccepted = accepted.includes(c.id);
          return (
            <div key={c.id} className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:shadow-elegant">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-charcoal text-xs font-medium text-ivory">{c.avatar}</div>
                  <div>
                    <div className="font-medium">{c.company}</div>
                    <div className="text-xs text-foreground/55">{c.name} · {c.email}</div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <StatusBadge status={c.status} />
                  <UrgencyBadge urgency={c.urgency} />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <Mini label="Value" value={`$${(c.value / 1000).toFixed(0)}k`} />
                <Mini label="Stage" value={c.stage} />
                <Mini label="Confidence" value={`${c.probability}%`} />
              </div>

              <div className="mt-5 rounded-xl border border-gold/30 bg-gold/5 p-4">
                <div className="flex items-center gap-2 text-xs text-gold">
                  <Sparkles className="h-3.5 w-3.5" /> AI Recommendation
                </div>
                <p className="mt-1.5 text-sm text-foreground/85">{c.recommendation}</p>
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  disabled={isAccepted}
                  onClick={() => setAccepted([...accepted, c.id])}
                  className={`flex-1 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all ${
                    isAccepted ? "bg-mint/15 text-mint" : "bg-primary text-primary-foreground hover:opacity-90"
                  }`}
                >
                  {isAccepted ? (<><CheckCircle2 className="h-3.5 w-3.5" /> Accepted</>) : (<>Accept customer <ArrowRight className="h-3.5 w-3.5" /></>)}
                </button>
                <button className="rounded-full border border-border bg-background px-4 py-2 text-xs hover:bg-secondary/50">Snooze</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: "Active" | "Pending" | "In Pipeline" }) {
  const cls = status === "Active" ? "bg-mint/15 text-mint" : status === "Pending" ? "bg-gold/20 text-gold" : "bg-foreground/8 text-foreground/60";
  return <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${cls}`}>{status}</span>;
}
function UrgencyBadge({ urgency }: { urgency: "High" | "Medium" | "Low" }) {
  const cls = urgency === "High" ? "bg-ember/15 text-ember" : urgency === "Medium" ? "bg-gold/15 text-gold" : "bg-foreground/8 text-foreground/55";
  return <span className={`rounded-full px-2 py-0.5 text-[10px] ${cls}`}>{urgency} urgency</span>;
}
function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-secondary/40 p-3">
      <div className="text-[10px] uppercase tracking-wider text-foreground/50">{label}</div>
      <div className="mt-1 font-display text-lg">{value}</div>
    </div>
  );
}
