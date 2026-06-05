import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ShieldCheck, Sparkles, HeartHandshake, Lightbulb, Target, Ship, Plane, FileCheck, Truck, Warehouse, ScrollText, Globe2, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import heroPort from "@/assets/hero-port.jpg";
import heroAir from "@/assets/hero-air.jpg";
import heroCustoms from "@/assets/hero-customs.jpg";
import aboutImg from "@/assets/about.jpg";

const slides = [
  { img: heroPort, eyebrow: "Global Trade Made Simple", title: "Global Trade. Simple, Fast & Compliant.", subtitle: "Customs clearance, freight forwarding, logistics & EXIM consultancy — delivered with reliability and transparency." },
  { img: heroAir, eyebrow: "Air & Sea Freight", title: "Move Cargo Across Borders, Seamlessly.", subtitle: "One partner for documentation, regulatory compliance and end-to-end supply chain management." },
  { img: heroCustoms, eyebrow: "DGFT & Trade Compliance", title: "Your Business. Our Expertise. One Global Solution.", subtitle: "Experienced professionals helping importers, exporters and manufacturers navigate global markets with confidence." },
];

const services = [
  { icon: FileCheck, title: "Customs Clearance", desc: "Sea, air & project cargo clearance — accurate, compliant, on time." },
  { icon: Ship, title: "Freight Forwarding", desc: "Ocean, air & multimodal freight with a trusted global carrier network." },
  { icon: Globe2, title: "EXIM Consultancy", desc: "Strategic guidance on documentation, licensing and trade policy." },
  { icon: Truck, title: "Logistics & Transport", desc: "Domestic transportation, port connectivity and last-mile delivery." },
  { icon: ScrollText, title: "Trade Compliance", desc: "BIS, FSSAI, WPC, LMPC, EPR and product compliance support." },
  { icon: Warehouse, title: "Warehousing & Distribution", desc: "Secure storage, inventory management and order fulfillment." },
  { icon: Plane, title: "DGFT Services", desc: "IEC, Advance Authorization, EPCG, RoDTEP and licensing support." },
];

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "Every transaction conducted with honesty, transparency and accountability." },
  { icon: Sparkles, title: "Excellence", desc: "Continuous improvement to deliver superior service quality." },
  { icon: HeartHandshake, title: "Customer Focus", desc: "Our clients' success is at the center of every solution we provide." },
  { icon: Lightbulb, title: "Innovation", desc: "Technology and modern practices to improve efficiency." },
  { icon: Target, title: "Commitment", desc: "We stand by our promises and deliver consistent results." },
];

const industries = [
  "Chemicals & Petrochemicals", "Pharmaceuticals", "Engineering Goods", "Textiles & Garments",
  "FMCG Products", "Food & Agriculture", "Metals & Minerals", "Automotive Components",
  "Consumer Electronics", "Industrial Machinery",
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
            <Link to="/contact">Get Started Today <ArrowRight className="ml-2 h-4 w-4" /></Link>
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

export default function Home() {
  return (
    <Layout>
      <Hero />

      {/* Intro strip */}
      <section className="bg-secondary/40 py-10">
        <div className="container-page grid gap-4 sm:grid-cols-2 lg:grid-cols-5 text-sm font-medium text-center">
          {["Customs Clearance","Freight Forwarding","DGFT & EXIM Consultancy","Logistics & Transportation","Trade Compliance"].map((t) => (
            <div key={t} className="px-4 py-3 rounded-full bg-background border border-border">{t}</div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="container-page py-20 grid gap-12 lg:grid-cols-2 items-center">
        <div className="relative">
          <img src={aboutImg} alt="International trade and logistics" className="rounded-2xl shadow-elev w-full" width={1200} height={900} loading="lazy" />
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-card border border-border rounded-2xl shadow-card p-5 w-60">
            <p className="text-2xl font-bold text-gradient-brand">One Global Solution</p>
            <p className="text-sm text-muted-foreground mt-1">Your Business. Our Expertise.</p>
          </div>
        </div>
        <div>
          <p className="text-accent text-sm font-semibold tracking-widest uppercase">About Us</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Building Stronger Global Trade Connections</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Umaapati International Business LLP is a dynamic international trade and logistics solutions provider committed to simplifying complex import-export operations for businesses across industries.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            With a customer-first approach and deep industry expertise, we deliver end-to-end solutions covering customs clearance, freight forwarding, trade consultancy, regulatory compliance, transportation, and documentation support.
          </p>
          <Button asChild className="mt-6 gradient-brand text-white border-0">
            <Link to="/about">Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="bg-secondary/40 py-20">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <Card className="hover:shadow-card transition">
            <CardContent className="p-8">
              <p className="text-accent text-xs font-bold tracking-widest uppercase">Our Vision</p>
              <h3 className="mt-2 font-display text-2xl font-bold">A globally recognized trade facilitation partner.</h3>
              <p className="mt-3 text-muted-foreground">Known for reliability, innovation, transparency, and customer success.</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-card transition">
            <CardContent className="p-8">
              <p className="text-accent text-xs font-bold tracking-widest uppercase">Our Mission</p>
              <h3 className="mt-2 font-display text-2xl font-bold">Integrated logistics &amp; trade solutions.</h3>
              <p className="mt-3 text-muted-foreground">Simplifying international business operations while creating long-term value for our clients.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="container-page py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase">What We Stand For</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Our Core Values</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v) => (
            <Card key={v.title} className="hover:border-accent hover:shadow-card transition group">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-xl gradient-brand flex items-center justify-center text-white mb-4 group-hover:scale-110 transition">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary/40 py-20">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase">Our Services</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">End-to-end EXIM &amp; Logistics</h2>
            <p className="mt-4 text-muted-foreground">A single partner across the full international trade lifecycle.</p>
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
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link to="/services">View All Services <ChevronRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="container-page py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase">Industries We Serve</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Trusted across diverse sectors</h2>
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {industries.map((i) => (
            <div key={i} className="px-4 py-4 rounded-xl border border-border text-center text-sm font-medium hover:border-accent hover:text-brand transition">
              {i}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-20">
        <div className="rounded-3xl gradient-brand p-10 md:p-16 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.72 0.18 50 / 0.6), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.55 0.18 220 / 0.6), transparent 40%)" }} />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold">Ready to simplify your global trade?</h2>
            <p className="mt-4 text-white/85 max-w-2xl mx-auto">Speak with our experts for tailored trade, customs and logistics solutions.</p>
            <Button asChild size="lg" className="mt-8 bg-white text-brand hover:bg-white/90">
              <Link to="/contact">Talk to an Expert <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
