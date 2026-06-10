import { Link } from "react-router-dom";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Sparkles, HeartHandshake, Lightbulb, Target, ArrowRight, CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about.jpg";

const values = [
  { icon: ShieldCheck, gradient: "from-blue-500 to-blue-700", title: "Integrity", desc: "We conduct every transaction with honesty, transparency and accountability." },
  { icon: Sparkles, gradient: "from-amber-500 to-orange-600", title: "Excellence", desc: "We continuously improve our processes to deliver superior service quality." },
  { icon: HeartHandshake, gradient: "from-rose-500 to-pink-600", title: "Customer Focus", desc: "Our clients' success is at the center of every solution we provide." },
  { icon: Lightbulb, gradient: "from-violet-500 to-violet-700", title: "Innovation", desc: "We embrace technology and modern practices to improve efficiency." },
  { icon: Target, gradient: "from-emerald-500 to-emerald-700", title: "Commitment", desc: "We stand by our promises and deliver consistent results." },
];

const whyUs = [
  { gradient: "from-blue-500 to-blue-700", title: "End-to-End Trade Solutions", desc: "From documentation and licensing to customs clearance and freight movement, we manage the complete process." },
  { gradient: "from-violet-500 to-violet-700", title: "Experienced Professionals", desc: "Our team possesses extensive knowledge of international trade regulations and logistics operations." },
  { gradient: "from-rose-500 to-rose-700", title: "Compliance-Focused Approach", desc: "We ensure every transaction adheres to the latest regulatory requirements." },
  { gradient: "from-emerald-500 to-emerald-700", title: "Global Network", desc: "Strong partnerships with shipping lines, airlines, customs authorities and logistics providers." },
  { gradient: "from-orange-500 to-orange-700", title: "Personalized Support", desc: "Every client receives customized solutions tailored to their business requirements." },
  { gradient: "from-cyan-500 to-cyan-700", title: "Timely Execution", desc: "We prioritize speed, efficiency and reliability to minimize delays." },
];

const commitments = [
  "Delivering exceptional customer service",
  "Ensuring regulatory compliance at every stage",
  "Building long-term business relationships based on trust",
  "Leveraging technology to improve efficiency and transparency",
  "Continuously enhancing our service capabilities",
];

export default function About() {
  return (
    <Layout>
      <PageHeader eyebrow="About Us" title="Empowering global trade through expertise, reliability & innovation" subtitle="Welcome to Umaapati International Business LLP — a single point of contact for your import-export, logistics and trade compliance requirements." />

      {/* ── Introduction Section ── */}
      <section className="container-page py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          <p className="text-accent text-sm font-semibold tracking-widest uppercase text-center mb-4">
            Welcome to Umaapati International Business LLP
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center leading-tight mb-10">
            Your Trusted Partner for Global Commerce
          </h2>

          {/* 3-paragraph intro with left accent bar */}
          <div className="space-y-6">
            <div className="flex gap-5">
              <div className="w-1 shrink-0 rounded-full bg-gradient-to-b from-accent to-accent/20 self-stretch" />
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Umaapati International Business LLP is a professionally managed international trade facilitation and logistics solutions company dedicated to helping businesses navigate the complexities of global commerce with confidence and ease.
              </p>
            </div>

            <div className="flex gap-5">
              <div className="w-1 shrink-0 rounded-full bg-gradient-to-b from-accent to-accent/20 self-stretch" />
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                In today's fast-paced business environment, successful international trade requires more than just transportation. It demands a thorough understanding of customs regulations, trade policies, documentation requirements, compliance standards, and supply chain management. At Umaapati International Business LLP, we bring all these capabilities together under one roof, offering businesses a single point of contact for their import-export, logistics, and trade compliance requirements.
              </p>
            </div>

            <div className="flex gap-5">
              <div className="w-1 shrink-0 rounded-full bg-gradient-to-b from-accent to-accent/20 self-stretch" />
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Our organization was established with a vision to simplify international business operations and provide clients with reliable, transparent, and efficient trade solutions. Through our industry expertise, strong professional network, and customer-centric approach, we help businesses overcome operational challenges and unlock new growth opportunities across domestic and international markets.
              </p>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-12 grid grid-cols-3 gap-4 md:gap-6">
            {[
              { value: "7+", label: "Core Services" },
              { value: "10+", label: "Industries Served" },
              { value: "1", label: "Stop Solution" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border bg-card p-5 md:p-6 text-center shadow-sm hover:shadow-md transition"
              >
                <p className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</p>
                <p className="mt-1 text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 grid gap-12 lg:grid-cols-2 items-center">
        <img src={aboutImg} alt="Umaapati team" className="rounded-2xl shadow-elev w-full" width={1200} height={900} loading="lazy" />
        <div>
          <p className="text-accent text-sm font-semibold tracking-widest uppercase">Who We Are</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">A trusted partner for international trade</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Umaapati International Business LLP is a professionally managed international trade facilitation and logistics solutions company dedicated to helping businesses navigate the complexities of global commerce with confidence and ease.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We provide comprehensive support across every stage of the import and export process — combining practical industry experience with a proactive approach to deliver solutions that are both efficient and compliant.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We serve manufacturing, engineering, chemicals, pharmaceuticals, agriculture, consumer goods, automotive, textiles, metals, minerals, food products and industrial equipment.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <Card className="hover:shadow-card transition">
            <CardContent className="p-8">
              <p className="text-accent text-xs font-bold tracking-widest uppercase">Our Vision</p>
              <h3 className="mt-2 font-display text-2xl font-bold">A globally respected trade &amp; logistics solutions provider.</h3>
              <p className="mt-3 text-muted-foreground">Recognized for excellence, integrity, innovation and customer success — building long-term partnerships with businesses worldwide.</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-card transition">
            <CardContent className="p-8">
              <p className="text-accent text-xs font-bold tracking-widest uppercase">Our Mission</p>
              <h3 className="mt-2 font-display text-2xl font-bold">Simplify international trade.</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {commitments.map((c) => (
                  <li key={c} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />{c}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase">Core Values</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">What we stand for</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v) => (
            <Card key={v.title} className="hover:shadow-card transition group">
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
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Why Umaapati International Business LLP</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w) => (
              <Card key={w.title} className="hover:border-accent transition group">
                <CardContent className="p-6">
                  <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${w.gradient} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition shadow-md`}>
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="mt-1 font-display font-semibold text-lg">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="rounded-3xl gradient-brand p-10 md:p-14 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold">Let's grow your global trade.</h2>
            <p className="mt-2 text-white/85">Speak with our consultants today.</p>
          </div>
          <Button asChild size="lg" className="bg-white text-brand hover:bg-white/90">
            <Link to="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
