import { motion } from "framer-motion";
import { Area, AreaChart, Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { TrendingUp, AlertTriangle, Sparkles, ArrowUpRight, Zap, Target } from "lucide-react";
import { customers, alerts, pipelineData, stageData } from "@/lib/auracrm-data";

export function DashboardOverview() {
  const topDeals = [...customers].sort((a, b) => b.value - a.value).slice(0, 5);
  const totalPipeline = customers.reduce((s, c) => s + c.value, 0);

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-foreground/50">Good morning, Alex</p>
          <h1 className="mt-1 font-display text-4xl">Pipeline at a glance</h1>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs text-foreground/50">
          <span className="h-1.5 w-1.5 rounded-full bg-mint pulse-glow" />
          Live · last sync 12s ago
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Pipeline value" value={`$${(totalPipeline / 1000).toFixed(0)}k`} delta="+12.4%" icon={TrendingUp} accent="gold" />
        <StatCard label="Active deals" value="23" delta="+3" icon={Target} accent="mint" />
        <StatCard label="At-risk deals" value="3" delta="2 new" icon={AlertTriangle} accent="ember" />
        <StatCard label="AI actions today" value="48" delta="+18%" icon={Sparkles} accent="gold" />
      </div>

      {/* Charts row */}
      <div className="grid gap-4 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 rounded-2xl border border-border bg-card p-6 shadow-soft"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display text-2xl">Pipeline velocity</h3>
              <p className="text-sm text-foreground/55">7-week trend</p>
            </div>
            <div className="text-right">
              <div className="font-display text-3xl text-gold">$3.1M</div>
              <div className="text-xs text-mint">+34% vs prev period</div>
            </div>
          </div>
          <div className="mt-6 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={pipelineData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="aura-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.78 0.135 80)" stopOpacity={0.45} />
                    <stop offset="100%" stopColor="oklch(0.78 0.135 80)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.88 0.01 80)" vertical={false} />
                <XAxis dataKey="week" stroke="oklch(0.55 0.01 70)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="oklch(0.55 0.01 70)" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "oklch(0.18 0.008 60)",
                    border: "1px solid oklch(1 0 0 / 0.1)",
                    borderRadius: 12,
                    color: "oklch(0.972 0.012 85)",
                    fontSize: 12,
                  }}
                />
                <Area type="monotone" dataKey="value" stroke="oklch(0.78 0.135 80)" strokeWidth={2.5} fill="url(#aura-grad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="rounded-2xl border border-border bg-card p-6 shadow-soft"
        >
          <h3 className="font-display text-2xl">By stage</h3>
          <p className="text-sm text-foreground/55">Deal distribution ($k)</p>
          <div className="mt-6 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stageData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.88 0.01 80)" vertical={false} />
                <XAxis dataKey="stage" stroke="oklch(0.55 0.01 70)" fontSize={10} tickLine={false} axisLine={false} angle={-15} textAnchor="end" height={50} />
                <YAxis stroke="oklch(0.55 0.01 70)" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip
                  cursor={{ fill: "oklch(0.78 0.135 80 / 0.08)" }}
                  contentStyle={{
                    background: "oklch(0.18 0.008 60)",
                    border: "1px solid oklch(1 0 0 / 0.1)",
                    borderRadius: 12,
                    color: "oklch(0.972 0.012 85)",
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="value" fill="oklch(0.28 0.008 60)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Deals + Alerts */}
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display text-2xl">Top deals</h3>
              <p className="text-sm text-foreground/55">Sorted by value</p>
            </div>
            <button className="text-xs text-foreground/60 hover:text-foreground inline-flex items-center gap-1">
              View all <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>
          <div className="mt-5 space-y-2">
            {topDeals.map((d) => (
              <div key={d.id} className="group flex items-center gap-4 rounded-xl border border-transparent p-3 transition-all hover:border-border hover:bg-secondary/40">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-charcoal text-xs font-medium text-ivory">
                  {d.avatar}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm truncate">{d.company}</span>
                    <UrgencyBadge urgency={d.urgency} />
                  </div>
                  <div className="text-xs text-foreground/55 truncate">{d.name} · {d.stage}</div>
                </div>
                <div className="text-right">
                  <div className="font-display text-lg">${(d.value / 1000).toFixed(0)}k</div>
                  <div className="text-[10px] text-foreground/50">{d.probability}% confidence</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-gradient-charcoal text-ivory p-6 shadow-deep">
          <div className="flex items-center gap-2 text-xs text-gold">
            <Zap className="h-3.5 w-3.5" />
            <span className="uppercase tracking-widest">AI Alert Feed</span>
          </div>
          <div className="mt-4 space-y-3">
            {alerts.map((a) => (
              <div key={a.id} className="rounded-xl border border-ivory/10 bg-charcoal-soft/40 p-4">
                <div className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${a.type === "risk" ? "bg-ember" : a.type === "opportunity" ? "bg-mint" : "bg-gold"} pulse-glow`} />
                  <span className="text-xs text-ivory/50">{a.customer} · {a.time}</span>
                </div>
                <div className="mt-1.5 text-sm font-medium text-ivory">{a.title}</div>
                <p className="mt-1 text-xs text-ivory/60 leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, delta, icon: Icon, accent }: { label: string; value: string; delta: string; icon: any; accent: "gold" | "mint" | "ember" }) {
  const accentClass = accent === "gold" ? "text-gold bg-gold/10" : accent === "mint" ? "text-mint bg-mint/10" : "text-ember bg-ember/10";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:shadow-elegant"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs text-foreground/55">{label}</span>
        <div className={`grid h-7 w-7 place-items-center rounded-lg ${accentClass}`}>
          <Icon className="h-3.5 w-3.5" />
        </div>
      </div>
      <div className="mt-3 font-display text-4xl">{value}</div>
      <div className="mt-1 text-xs text-foreground/55">{delta}</div>
      <div className="absolute -bottom-8 -right-8 h-20 w-20 rounded-full bg-gold/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}

function UrgencyBadge({ urgency }: { urgency: "High" | "Medium" | "Low" }) {
  const cls = urgency === "High" ? "bg-ember/15 text-ember" : urgency === "Medium" ? "bg-gold/20 text-gold" : "bg-foreground/8 text-foreground/60";
  return <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${cls}`}>{urgency}</span>;
}
