import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ShieldCheck, Sparkles, HeartHandshake, Lightbulb, Target, Ship, Plane, FileCheck, Truck, Warehouse, ScrollText, Globe2, ChevronRight, Beaker, Pill, Cog, Shirt, ShoppingBag, Wheat, Mountain, Car, Cpu, Factory } from "lucide-react";
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
  { icon: FileCheck, gradient: "from-blue-500 to-blue-700", title: "Customs Clearance", desc: "Sea, air & project cargo clearance — accurate, compliant, on time." },
  { icon: Ship, gradient: "from-cyan-500 to-cyan-700", title: "Freight Forwarding", desc: "Ocean, air & multimodal freight with a trusted global carrier network." },
  { icon: Globe2, gradient: "from-violet-500 to-violet-700", title: "EXIM Consultancy", desc: "Strategic guidance on documentation, licensing and trade policy." },
  { icon: Truck, gradient: "from-orange-500 to-orange-700", title: "Logistics & Transport", desc: "Domestic transportation, port connectivity and last-mile delivery." },
  { icon: ScrollText, gradient: "from-rose-500 to-rose-700", title: "Trade Compliance", desc: "BIS, FSSAI, WPC, LMPC, EPR and product compliance support." },
  { icon: Warehouse, gradient: "from-emerald-500 to-emerald-700", title: "Warehousing & Distribution", desc: "Secure storage, inventory management and order fulfillment." },
  { icon: Plane, gradient: "from-sky-500 to-sky-700", title: "DGFT Services", desc: "IEC, Advance Authorization, EPCG, RoDTEP and licensing support." },
];

const values = [
  { icon: ShieldCheck, gradient: "from-blue-500 to-blue-700", title: "Integrity", desc: "Every transaction conducted with honesty, transparency and accountability." },
  { icon: Sparkles, gradient: "from-amber-500 to-orange-600", title: "Excellence", desc: "Continuous improvement to deliver superior service quality." },
  { icon: HeartHandshake, gradient: "from-rose-500 to-pink-600", title: "Customer Focus", desc: "Our clients' success is at the center of every solution we provide." },
  { icon: Lightbulb, gradient: "from-violet-500 to-violet-700", title: "Innovation", desc: "Technology and modern practices to improve efficiency." },
  { icon: Target, gradient: "from-emerald-500 to-emerald-700", title: "Commitment", desc: "We stand by our promises and deliver consistent results." },
];

const strengths = [
  {
    icon: Lightbulb,
    title: "Industry Expertise",
    desc: "With extensive experience in international trade and logistics, we understand the operational, regulatory, and commercial challenges faced by businesses. Our expertise allows us to provide practical and effective solutions tailored to each client's requirements.",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: HeartHandshake,
    title: "Customer-Centric Approach",
    desc: "Every business is unique. We take the time to understand our clients' objectives, operational needs, and growth plans before recommending customized solutions that deliver measurable value.",
    gradient: "from-violet-500 to-violet-700",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Excellence",
    desc: "Global trade regulations continue to evolve. Our team remains updated with the latest industry developments, customs requirements, and government policies to ensure that our clients remain compliant and avoid unnecessary risks.",
    gradient: "from-rose-500 to-rose-700",
  },
  {
    icon: Target,
    title: "Strong Professional Network",
    desc: "Our extensive network of logistics partners, transportation providers, shipping lines, customs professionals, and industry stakeholders enables us to deliver seamless services across multiple geographies.",
    gradient: "from-emerald-500 to-emerald-700",
  },
  {
    icon: Sparkles,
    title: "Operational Efficiency",
    desc: "We focus on reducing delays, minimizing operational bottlenecks, and improving overall supply chain performance through streamlined processes and proactive coordination.",
    gradient: "from-orange-500 to-orange-700",
  },
  {
    icon: Globe2,
    title: "Transparent Communication",
    desc: "We believe transparency is the foundation of successful business relationships. Our clients receive regular updates, clear communication, and responsive support throughout every stage of the process.",
    gradient: "from-cyan-500 to-cyan-700",
  },
];

const industries = [
  { icon: Beaker, gradient: "from-blue-500 to-blue-700", name: "Chemicals & Petrochemicals" },
  { icon: Pill, gradient: "from-rose-500 to-rose-700", name: "Pharmaceuticals" },
  { icon: Cog, gradient: "from-slate-500 to-slate-700", name: "Engineering Goods" },
  { icon: Shirt, gradient: "from-violet-500 to-violet-700", name: "Textiles & Garments" },
  { icon: ShoppingBag, gradient: "from-orange-500 to-orange-700", name: "FMCG Products" },
  { icon: Wheat, gradient: "from-emerald-500 to-emerald-700", name: "Food & Agriculture" },
  { icon: Mountain, gradient: "from-amber-600 to-amber-800", name: "Metals & Minerals" },
  { icon: Car, gradient: "from-cyan-500 to-cyan-700", name: "Automotive Components" },
  { icon: Cpu, gradient: "from-sky-500 to-sky-700", name: "Consumer Electronics" },
  { icon: Factory, gradient: "from-teal-500 to-teal-700", name: "Industrial Machinery" },
];

const introServices = [
  { icon: FileCheck, gradient: "from-blue-500 to-blue-700", label: "Customs Clearance" },
  { icon: Ship, gradient: "from-cyan-500 to-cyan-700", label: "Freight Forwarding" },
  { icon: Globe2, gradient: "from-violet-500 to-violet-700", label: "DGFT & EXIM Consultancy" },
  { icon: Truck, gradient: "from-orange-500 to-orange-700", label: "Logistics & Transportation" },
  { icon: ScrollText, gradient: "from-rose-500 to-rose-700", label: "Trade Compliance" },
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
        <div className="container-page grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {introServices.map((item) => (
            <div key={item.label} className="group flex items-center gap-3 rounded-2xl bg-background border border-border px-4 py-3.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <div className={`h-9 w-9 shrink-0 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform`}>
                <item.icon className="h-4 w-4" />
              </div>
              <span className="text-sm font-semibold leading-tight">{item.label}</span>
            </div>
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

      {/* Our Strengths */}
      <section className="container-page py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase">Why Work With Us</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Our Strengths</h2>
          <p className="mt-4 text-muted-foreground">What sets us apart in delivering world-class international trade and logistics solutions.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((st) => (
            <div
              key={st.title}
              className="group relative rounded-2xl border bg-card p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* subtle gradient top-left glow */}
              <div className={`absolute -top-8 -left-8 h-24 w-24 rounded-full bg-gradient-to-br ${st.gradient} opacity-10 group-hover:opacity-20 transition-opacity blur-2xl`} />
              {/* Icon */}
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${st.gradient} flex items-center justify-center text-white mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <st.icon className="h-6 w-6" />
              </div>
              {/* Content */}
              <h3 className="font-display font-bold text-lg mb-2">{st.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-secondary/40 py-20">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase">What We Stand For</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Our Core Values</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v) => (
              <Card key={v.title} className="hover:border-accent hover:shadow-card transition group">
                <CardContent className="p-6">
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${v.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition shadow-md`}>
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition shadow-md`}>
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
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase">Industries We Serve</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Trusted across diverse sectors</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="group relative rounded-2xl border bg-card p-5 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* ambient glow */}
              <div className={`absolute -top-6 left-1/2 -translate-x-1/2 h-16 w-16 rounded-full bg-gradient-to-br ${ind.gradient} opacity-10 group-hover:opacity-25 blur-xl transition-opacity`} />
              <div className={`mx-auto h-12 w-12 rounded-xl bg-gradient-to-br ${ind.gradient} flex items-center justify-center text-white mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <ind.icon className="h-6 w-6" />
              </div>
              <p className="text-sm font-semibold leading-snug">{ind.name}</p>
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
