import { Sparkles } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-charcoal text-ivory">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-gold">
                <Sparkles className="h-4 w-4 text-charcoal" />
              </div>
              <span className="font-display text-2xl">Aura<span className="italic text-gold">CRM</span></span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-ivory/60 leading-relaxed">
              The intelligent sales coach. Real-time pipeline insights, automated outreach, and AI-driven deal forecasting — built for modern revenue teams.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-ivory/40">Product</h4>
            <ul className="mt-4 space-y-2 text-sm text-ivory/70">
              <li><a href="#features" className="hover:text-gold transition">Features</a></li>
              <li><a href="#intelligence" className="hover:text-gold transition">AI Engine</a></li>
              <li><a href="#pricing" className="hover:text-gold transition">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-ivory/40">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-ivory/70">
              <li><a href="#" className="hover:text-gold transition">About</a></li>
              <li><a href="#" className="hover:text-gold transition">Customers</a></li>
              <li><a href="#" className="hover:text-gold transition">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ivory/10 pt-6 text-xs text-ivory/40 md:flex-row">
          <p>© {new Date().getFullYear()} AuraCRM. Crafted for revenue teams.</p>
          <p className="font-mono">v1.0 · Pipeline intelligence</p>
        </div>
      </div>
    </footer>
  );
}
