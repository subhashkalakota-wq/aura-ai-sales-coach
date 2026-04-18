import { motion } from "framer-motion";
import { Brain, Zap, Target, ShieldCheck } from "lucide-react";

const steps = [
  { icon: Brain, title: "Ingest", body: "Conversations, emails, meetings, and CRM signals stream into Aura's contextual memory." },
  { icon: Target, title: "Analyze", body: "Per-deal risk scoring, sentiment tracking, and competitor monitoring — updated in real time." },
  { icon: Zap, title: "Act", body: "Aura drafts replies, schedules touchpoints, and sends meeting invites without you lifting a finger." },
  { icon: ShieldCheck, title: "Close", body: "Forecast accuracy improves with every interaction. Predict outcomes before pipeline stalls." },
];

export function Intelligence() {
  return (
    <section id="intelligence" className="relative overflow-hidden bg-charcoal py-32 text-ivory">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.78_0.135_80/0.18),transparent_50%)]" />
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,oklch(0.78_0.13_165/0.1),transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">The AI engine</p>
            <h2 className="mt-3 font-display text-5xl leading-tight md:text-6xl">
              Built to think like<br />
              <span className="italic text-gradient-gold">your best rep.</span>
            </h2>
            <p className="mt-6 max-w-md text-ivory/60 leading-relaxed">
              Aura combines proprietary signal analysis with frontier LLMs to turn raw activity into the next best action. Every alert has reasoning. Every action has context.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
              <Stat value="98%" label="Forecast accuracy" />
              <Stat value="3.4x" label="Faster follow-up" />
              <Stat value="42m" label="Saved per rep / day" />
              <Stat value="<200ms" label="Alert latency" />
            </div>
          </div>

          <div className="space-y-3">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-dark group relative flex items-start gap-4 rounded-2xl p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-ivory/30">0{i + 1}</span>
                    <h3 className="font-display text-xl text-ivory">{s.title}</h3>
                  </div>
                  <p className="mt-1 text-sm text-ivory/60 leading-relaxed">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l-2 border-gold/40 pl-4">
      <div className="font-display text-4xl text-ivory">{value}</div>
      <div className="text-xs text-ivory/50 mt-1">{label}</div>
    </div>
  );
}
