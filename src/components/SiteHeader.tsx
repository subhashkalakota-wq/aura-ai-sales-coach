import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <div className="glass flex items-center justify-between rounded-full px-5 py-2.5 shadow-soft">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative grid h-7 w-7 place-items-center rounded-full bg-gradient-charcoal">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <div className="absolute inset-0 rounded-full bg-gold/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-display text-xl tracking-tight">Aura<span className="italic text-gold">CRM</span></span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm md:flex">
            <a href="#features" className="text-foreground/70 hover:text-foreground transition-colors">Features</a>
            <a href="#intelligence" className="text-foreground/70 hover:text-foreground transition-colors">Intelligence</a>
            <a href="#pricing" className="text-foreground/70 hover:text-foreground transition-colors">Pricing</a>
          </nav>
          <Link
            to="/dashboard"
            className="rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-elegant"
          >
            Open dashboard
          </Link>
        </div>
      </div>
    </header>
  );
}
