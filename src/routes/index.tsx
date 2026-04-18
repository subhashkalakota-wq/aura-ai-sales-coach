import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Intelligence } from "@/components/landing/Intelligence";
import { Pricing } from "@/components/landing/Pricing";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <Intelligence />
        <Pricing />
      </main>
      <SiteFooter />
    </div>
  );
}
