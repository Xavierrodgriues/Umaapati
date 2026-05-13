import { Header } from "./Header";
import { Footer } from "./Footer";
import type { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-brand text-brand-foreground">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.72 0.18 50 / 0.4), transparent 50%), radial-gradient(circle at 80% 80%, oklch(0.55 0.18 220 / 0.4), transparent 50%)" }} />
      <div className="container-page relative py-20 md:py-28">
        {eyebrow && <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3 animate-fade-up">{eyebrow}</p>}
        <h1 className="text-4xl md:text-6xl font-bold animate-fade-up" style={{ animationDelay: "0.1s" }}>{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-brand-foreground/80 animate-fade-up" style={{ animationDelay: "0.2s" }}>{subtitle}</p>}
      </div>
    </section>
  );
}
