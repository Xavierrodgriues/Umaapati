import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Briefcase, Users, Globe2, Award, Ship, Plane, FileCheck, Truck, Quote, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import heroPort from "@/assets/hero-port.jpg";
import heroAir from "@/assets/hero-air.jpg";
import heroCustoms from "@/assets/hero-customs.jpg";
import aboutImg from "@/assets/about.jpg";
import mdImg from "@/assets/md.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Star Group — Import-Export Consultancy & Logistics in India" },
      { name: "description", content: "25+ years of trusted EXIM consultancy, customs clearance, freight forwarding & DGFT support in Mumbai, Pune & Delhi." },
      { property: "og:title", content: "Star Group — Import-Export Consultancy & Logistics" },
      { property: "og:description", content: "Integrated EXIM consultancy & logistics for MNCs, corporates, and MSMEs across India." },
    ],
  }),
  component: Home,
});

const slides = [
  { img: heroPort, eyebrow: "Global Trade, Simplified", title: "Your Gateway to Seamless Import-Export", subtitle: "End-to-end EXIM consultancy, customs clearance, and freight forwarding — trusted by 100+ MNCs since 2000." },
  { img: heroAir, eyebrow: "Air & Sea Freight", title: "Move Faster. Clear Smarter. Grow Globally.", subtitle: "From documentation to delivery — one team, one accountability, complete transparency." },
  { img: heroCustoms, eyebrow: "DGFT & Customs Experts", title: "Compliance Without Compromise", subtitle: "100+ professionals, memberships at FEFA, EIDA, BCBA & Indo-German Chambers." },
];

const companies = [
  { name: "Star Exim Management Consultancy & Services Pvt. Ltd.", desc: "DGFT consultancy, licensing & EXIM advisory for compliant global trade." },
  { name: "Star India Logistic", desc: "Customs clearance and freight forwarding across air & sea — Mumbai, Pune, Delhi." },
  { name: "Tisha Enterprises", desc: "Specialized import-export trade support and documentation services." },
  { name: "Alisha Enterprises", desc: "Logistics and transportation support across India with reliable execution." },
];

const services = [
  { icon: FileCheck, title: "DGFT Consultancy", desc: "Licensing, schemes, advance authorization & compliance support." },
  { icon: Ship, title: "Customs Clearance", desc: "Sea & air customs clearance with accurate documentation." },
  { icon: Plane, title: "Freight Forwarding", desc: "Door-to-door air & sea freight with real-time tracking." },
  { icon: Truck, title: "Logistics & Transport", desc: "Pan-India transportation, warehousing and last-mile delivery." },
];

const highlights = [
  { icon: Award, value: "25+", label: "Years of Experience" },
  { icon: Users, value: "100+", label: "Professional Staff" },
  { icon: Briefcase, value: "500+", label: "Satisfied Clients" },
  { icon: Globe2, value: "3", label: "Offices Across India" },
];

const updates = [
  { date: "02 May 2026", title: "Customs Instruction No.06/2026 dt. 27.04.2026", excerpt: "Drawback for re-export of duty paid goods supplied…" },
  { date: "25 Apr 2026", title: "Customs Instruction No.5/2026 dt. 23.04.2026", excerpt: "Time-bound processing of RoDTEP and related claims…" },
  { date: "25 Apr 2026", title: "Customs Instruction No.4/2026 dt. 20.04.2026", excerpt: "Authorised Officers under Section 25 read with Sec…" },
  { date: "25 Apr 2026", title: "Notification No.39/2026 Customs (N.T.) dt. 20.04.2026", excerpt: "De-notification of ICD at Coimbatore (Thudiyalur)…" },
];

const testimonials = [
  { name: "R. Sharma", role: "Procurement Head, MNC Electronics", quote: "Star Group's customs team has been our backbone for 8 years. Reliable, transparent, and always ahead on compliance." },
  { name: "P. Mehta", role: "Director, Engineering Exports", quote: "From DGFT licensing to last-mile delivery, they handle it all. Truly an integrated partner." },
  { name: "A. Khan", role: "CEO, Food Imports Co.", quote: "Their advisory saved us months of regulatory back-and-forth. Highly recommended." },
];

function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative h-[78vh] min-h-[560px] w-full overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`}
        >
          <img src={s.img} alt="" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, oklch(0.18 0.04 250 / 0.85) 0%, oklch(0.18 0.04 250 / 0.4) 60%, transparent 100%)" }} />
        </div>
      ))}
      <div className="container-page relative z-10 flex h-full flex-col justify-center text-white">
        <p key={`e-${idx}`} className="text-accent text-sm font-semibold tracking-widest uppercase mb-3 animate-fade-up">{slides[idx].eyebrow}</p>
        <h1 key={`t-${idx}`} className="max-w-3xl text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
          {slides[idx].title}
        </h1>
        <p key={`s-${idx}`} className="mt-5 max-w-2xl text-lg text-white/85 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {slides[idx].subtitle}
        </p>
        <div className="mt-8 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button asChild size="lg" className="gradient-accent text-accent-foreground border-0 hover:opacity-90">
            <Link to="/contact">Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20">
            <Link to="/services">Explore Services</Link>
          </Button>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-accent" : "w-2 bg-white/50"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <Layout>
      <Hero />

      {/* About */}
      <section className="container-page py-20 grid gap-12 lg:grid-cols-2 items-center">
        <div className="relative">
          <img src={aboutImg} alt="Customs clearance team" className="rounded-2xl shadow-elev w-full" width={1200} height={900} loading="lazy" />
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-card border border-border rounded-2xl shadow-card p-5 w-56">
            <p className="text-3xl font-bold text-gradient-brand">25+</p>
            <p className="text-sm text-muted-foreground mt-1">Years driving global trade across India</p>
          </div>
        </div>
        <div>
          <p className="text-accent text-sm font-semibold tracking-widest uppercase">Welcome To</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Star Group</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Founded in January 2000 in Mumbai under the vision of Mr. Shashikant Mali, Star Group has grown into an integrated Import–Export (EXIM) consultancy and logistics ecosystem — designed to simplify global trade through transparent, customer-focused execution and expert advisory.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            With a strong presence in Mumbai, Pune & Delhi and associate support across India, the group operates as a unified ecosystem of four specialized companies. Backed by 25+ years of experience and a 100+ professional team, we are trusted by 100+ MNCs, Corporates, and MSMEs.
          </p>
          <Button asChild className="mt-6 gradient-brand text-white border-0">
            <Link to="/about">Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary/40 py-20">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Our Core Services</h2>
            <p className="mt-4 text-muted-foreground">Comprehensive EXIM and logistics solutions, delivered with precision.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Card key={s.title} className="group border-border hover:border-accent transition-all hover:-translate-y-1 hover:shadow-card">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-xl gradient-brand flex items-center justify-center text-white mb-4 group-hover:scale-110 transition">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-semibold text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Group of Companies */}
      <section className="container-page py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase">Our Companies</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Star Group of Companies</h2>
          <p className="mt-4 text-muted-foreground">Four specialized entities working as one ecosystem to power your global trade.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {companies.map((c, i) => (
            <Card key={c.name} className="overflow-hidden group hover:shadow-elev transition">
              <CardContent className="p-0 flex">
                <div className="w-2 gradient-accent" />
                <div className="p-6 flex-1">
                  <p className="text-xs text-accent font-bold mb-1">0{i + 1}</p>
                  <h3 className="font-display font-semibold text-xl">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                  <Link to="/companies" className="mt-4 inline-flex items-center text-brand text-sm font-medium hover:gap-2 transition-all">
                    Read More <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* MD desk */}
      <section className="bg-brand text-brand-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, oklch(0.72 0.18 50 / 0.5), transparent 50%)" }} />
        <div className="container-page relative grid gap-12 lg:grid-cols-[300px_1fr] items-center">
          <div className="mx-auto">
            <img src={mdImg} alt="Shashikant Mali, MD" className="h-72 w-72 object-cover rounded-2xl shadow-elev" width={800} height={1000} loading="lazy" />
          </div>
          <div>
            <p className="text-accent text-sm font-semibold tracking-widest uppercase">From the Desk of MD</p>
            <h2 className="text-4xl font-bold mt-2">Shashikant Mali</h2>
            <p className="text-brand-foreground/70 mt-1">Managing Director</p>
            <Quote className="h-10 w-10 text-accent mt-6" />
            <p className="mt-3 text-lg leading-relaxed text-brand-foreground/90 max-w-3xl">
              A visionary and optimistic leader continuously striving to deliver better services to our clients. We invest considerable time consulting individually to understand specific requirements and craft customized solutions — a philosophy that helps us grow at 30% year over year.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="container-page py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Our Key Highlights</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.label} className="text-center p-8 rounded-2xl border border-border hover:border-accent hover:shadow-card transition group">
              <div className="h-16 w-16 mx-auto rounded-2xl gradient-brand flex items-center justify-center text-white group-hover:scale-110 transition">
                <h.icon className="h-8 w-8" />
              </div>
              <p className="mt-5 text-5xl font-bold text-gradient-brand">{h.value}</p>
              <p className="mt-2 text-muted-foreground font-medium">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Updates */}
      <section className="bg-secondary/40 py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-accent text-sm font-semibold tracking-widest uppercase">Latest</p>
              <h2 className="text-4xl md:text-5xl font-bold mt-2">Updates & Notifications</h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/notifications">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {updates.map((u) => (
              <Card key={u.title} className="hover:shadow-card transition group">
                <CardContent className="p-6">
                  <p className="text-xs text-accent font-semibold">{u.date}</p>
                  <h3 className="mt-2 font-display font-semibold leading-snug group-hover:text-brand transition">{u.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{u.excerpt}</p>
                  <Link to="/notifications" className="mt-4 inline-flex items-center text-brand text-sm font-medium">
                    Read More <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-page py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">What Our Clients Say</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="hover:shadow-elev transition">
              <CardContent className="p-7">
                <Quote className="h-8 w-8 text-accent" />
                <p className="mt-4 text-foreground/90 italic leading-relaxed">"{t.quote}"</p>
                <div className="mt-5 pt-5 border-t border-border">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-20">
        <div className="rounded-3xl gradient-brand p-10 md:p-16 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.72 0.18 50 / 0.6), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.55 0.18 220 / 0.6), transparent 40%)" }} />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold">Ready to simplify your global trade?</h2>
            <p className="mt-4 text-white/85 max-w-2xl mx-auto">Get expert EXIM consultancy and end-to-end logistics support — tailored to your business.</p>
            <Button asChild size="lg" className="mt-8 bg-white text-brand hover:bg-white/90">
              <Link to="/contact">Talk to an Expert <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
