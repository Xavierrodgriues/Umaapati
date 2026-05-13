import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Users, Globe2, Briefcase, ArrowRight } from "lucide-react";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Star Group" },
      { name: "description", content: "25+ years of EXIM consultancy and logistics excellence. Discover our story, vision, and team." },
      { property: "og:title", content: "About Star Group" },
      { property: "og:description", content: "Trusted import-export consultancy and logistics partner since 2000." },
    ],
  }),
  component: About,
});

const values = [
  { icon: CheckCircle2, title: "Transparency", desc: "Clear documentation, honest timelines, no surprises." },
  { icon: Award, title: "Compliance First", desc: "Deep DGFT & customs expertise keeps you audit-ready." },
  { icon: Users, title: "Customer Focus", desc: "Tailored advisory for every client, of every scale." },
  { icon: Globe2, title: "Global Reach", desc: "Coverage across major Indian gateways and worldwide partners." },
];

const memberships = ["F.E.F.A.", "E.I.D.A.", "B.C.B.A.", "Indo-German Chambers of Commerce"];

function About() {
  return (
    <Layout>
      <PageHeader eyebrow="About Us" title="Powering global trade for 25+ years" subtitle="From a single office in Mumbai to a four-company ecosystem trusted by India's largest corporates." />

      <section className="container-page py-20 grid gap-12 lg:grid-cols-2 items-center">
        <img src={aboutImg} alt="Star Group team" className="rounded-2xl shadow-elev w-full" width={1200} height={900} loading="lazy" />
        <div>
          <p className="text-accent text-sm font-semibold tracking-widest uppercase">Our Story</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">A vision born in Mumbai, scaled across India</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Founded in January 2000 by Mr. Shashikant Mali as <em>Star Exim India</em>, our mission was simple — make global trade simpler for Indian businesses. Today, we operate as an integrated EXIM consultancy and logistics ecosystem with 100+ professionals.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Whether you're a first-time exporter or a Fortune 500 importer, our four specialized companies bring deep DGFT, customs, and freight expertise — all under one roof.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {memberships.map((m) => (
              <span key={m} className="px-3 py-1.5 rounded-full bg-secondary text-sm font-medium">{m}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Core Values</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card key={v.title} className="hover:shadow-card transition">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-xl gradient-accent flex items-center justify-center text-white mb-4">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-semibold text-lg">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center">
        {[
          { icon: Award, value: "25+", label: "Years of Experience" },
          { icon: Users, value: "100+", label: "Professionals" },
          { icon: Briefcase, value: "500+", label: "Satisfied Clients" },
          { icon: Globe2, value: "3", label: "Offices in India" },
        ].map((s) => (
          <div key={s.label} className="p-8 rounded-2xl border border-border">
            <s.icon className="h-8 w-8 mx-auto text-accent" />
            <p className="mt-4 text-4xl font-bold text-gradient-brand">{s.value}</p>
            <p className="mt-1 text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </section>

      <section className="container-page pb-20">
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
