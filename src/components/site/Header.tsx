import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, Menu, X, Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/companies", label: "Companies" },
  { to: "/clientele", label: "Clientele" },
  { to: "/notifications", label: "Notifications" },
  { to: "/blog", label: "Blog" },
  { to: "/career", label: "Career" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* top bar */}
      <div className="hidden md:block bg-brand text-brand-foreground/90 text-sm">
        <div className="container-page flex h-10 items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="mailto:sales1@stargroup.in" className="flex items-center gap-2 hover:text-accent transition">
              <Mail className="h-3.5 w-3.5" /> sales1@stargroup.in
            </a>
            <a href="tel:+919892575304" className="flex items-center gap-2 hover:text-accent transition">
              <Phone className="h-3.5 w-3.5" /> +91 9892575304
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Twitter" className="hover:text-accent"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-accent"><Linkedin className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-accent"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-accent"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>
      </div>

      {/* main nav */}
      <div className="bg-background/90 backdrop-blur border-b border-border">
        <div className="container-page flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Star Group" className="h-10 w-10" width={40} height={40} />
            <span className="font-display text-xl font-bold tracking-tight text-brand">STAR GROUP</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => {
              const active = path === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition relative ${
                    active ? "text-brand" : "text-foreground/80 hover:text-brand"
                  }`}
                >
                  {n.label}
                  {active && (
                    <span className="absolute -bottom-0.5 left-3 right-3 h-0.5 gradient-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <button
            className="lg:hidden p-2 rounded-md hover:bg-secondary"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-background animate-fade-in">
            <nav className="container-page py-3 flex flex-col">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={`py-2.5 px-2 text-sm font-medium rounded ${
                    path === n.to ? "text-brand bg-secondary" : "text-foreground/80"
                  }`}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
