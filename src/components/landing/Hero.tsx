import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, TrendingUp, Zap, AlertTriangle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 grain">
      {/* Ambient glow */}
      <div aria-hidden className="absolute inset-x-0 -top-40 h-[600px] bg-[radial-gradient(ellipse_at_center,oklch(0.78_0.135_80/0.15),transparent_60%)]" />
      <div aria-hidden className="absolute right-[-10%] top-20 h-[400px] w-[400px] rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            <span className="text-foreground/70">AI Sales Intelligence · Live</span>
          </div>

          <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-[88px]">
            Your AI sales coach,
            <br />
            <span className="italic text-gradient-gold">always one step ahead.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/65 sm:text-lg">
            AuraCRM analyzes every conversation, flags pipeline risk in real time, and turns scattered signals into closed revenue.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/dashboard"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-elegant transition-all hover:shadow-deep"
            >
              Open the dashboard
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="#intelligence"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-6 py-3 text-sm font-medium backdrop-blur transition-all hover:bg-background/70"
            >
              See how it works
            </a>
          </div>
        </motion.div>

        {/* Floating cards preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <div className="relative rounded-3xl border border-border/60 bg-gradient-charcoal p-2 shadow-deep">
            <div className="rounded-[20px] bg-charcoal p-6 sm:p-10">
              <div className="grid gap-5 sm:grid-cols-3">
                <PreviewCard
                  icon={<TrendingUp className="h-4 w-4" />}
                  label="Pipeline Velocity"
                  value="+34%"
                  hint="vs last quarter"
                  accent="mint"
                />
                <PreviewCard
                  icon={<AlertTriangle className="h-4 w-4" />}
                  label="At-Risk Deals"
                  value="3"
                  hint="competitor surge"
                  accent="ember"
                />
                <PreviewCard
                  icon={<Sparkles className="h-4 w-4" />}
                  label="AI Suggestions"
                  value="12"
                  hint="ready to send"
                  accent="gold"
                />
              </div>

              <div className="mt-6 rounded-2xl border border-ivory/10 bg-charcoal-soft/40 p-5">
                <div className="flex items-center gap-2 text-xs text-ivory/50">
                  <Zap className="h-3.5 w-3.5 text-gold" />
                  AURA · Real-time alert
                </div>
                <p className="mt-2 font-display text-2xl text-ivory">
                  "Acme Corp opened your proposal 4 times today — schedule follow-up within 24h to convert."
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <button className="rounded-full bg-gold px-4 py-1.5 text-xs font-medium text-charcoal">Schedule now</button>
                  <button className="rounded-full border border-ivory/15 px-4 py-1.5 text-xs text-ivory/80">Dismiss</button>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute -bottom-10 left-1/2 h-32 w-3/4 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl" />
        </motion.div>

        {/* Logo strip */}
        <div className="mt-24 overflow-hidden">
          <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-foreground/40">Trusted by revenue teams at</p>
          <div className="relative flex">
            <div className="flex shrink-0 items-center gap-16 marquee">
              {["Linear", "Notion", "Vercel", "Stripe", "Figma", "Ramp", "Linear", "Notion", "Vercel", "Stripe", "Figma", "Ramp"].map((n, i) => (
                <span key={i} className="font-display text-2xl text-foreground/30">{n}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PreviewCard({ icon, label, value, hint, accent }: { icon: React.ReactNode; label: string; value: string; hint: string; accent: "gold" | "mint" | "ember" }) {
  const accentColor = accent === "gold" ? "text-gold" : accent === "mint" ? "text-mint" : "text-ember";
  return (
    <div className="rounded-2xl border border-ivory/10 bg-charcoal-soft/30 p-5">
      <div className={`flex items-center gap-2 text-xs text-ivory/50 ${accentColor}`}>
        {icon}
        <span className="text-ivory/60">{label}</span>
      </div>
      <div className="mt-3 font-display text-4xl text-ivory">{value}</div>
      <div className="mt-1 text-xs text-ivory/40">{hint}</div>
    </div>
  );
}
