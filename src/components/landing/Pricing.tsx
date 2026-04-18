import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";

const tiers = [
  {
    name: "Starter",
    price: "$29",
    desc: "For solo founders and small teams.",
    features: ["Up to 100 contacts", "AI inbox & alerts", "Basic forecasting", "Email integrations"],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$89",
    desc: "Most popular — everything you need.",
    features: ["Unlimited contacts", "Full AI engine", "Smart scheduler", "Proposal generator", "Pipeline analytics", "Priority support"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Custom AI models and SSO.",
    features: ["Custom AI tuning", "SSO & SCIM", "Dedicated success manager", "Audit logs", "SOC2 + DPA"],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">Pricing</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl leading-tight">
            Simple plans.<br />
            <span className="italic text-foreground/60">Compounding returns.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-3xl border p-8 transition-all ${
                t.highlight
                  ? "border-charcoal bg-charcoal text-ivory shadow-deep scale-[1.02]"
                  : "border-border bg-card hover:shadow-elegant"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-charcoal">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-2xl">{t.name}</h3>
              <p className={`mt-1 text-sm ${t.highlight ? "text-ivory/60" : "text-foreground/60"}`}>{t.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl">{t.price}</span>
                {t.price !== "Custom" && <span className={`text-sm ${t.highlight ? "text-ivory/50" : "text-foreground/50"}`}>/mo</span>}
              </div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`h-4 w-4 shrink-0 mt-0.5 ${t.highlight ? "text-gold" : "text-foreground/70"}`} />
                    <span className={t.highlight ? "text-ivory/85" : "text-foreground/75"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/dashboard"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  t.highlight
                    ? "bg-gradient-gold text-charcoal hover:opacity-90"
                    : "bg-foreground text-background hover:opacity-90"
                }`}
              >
                {t.price === "Custom" ? "Talk to sales" : "Start free trial"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
