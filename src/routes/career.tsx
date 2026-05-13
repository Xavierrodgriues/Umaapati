import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Briefcase, Clock } from "lucide-react";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Careers — Star Group" },
      { name: "description", content: "Join Star Group — a 100+ professional team driving global trade for India's leading businesses." },
      { property: "og:title", content: "Careers at Star Group" },
      { property: "og:description", content: "Open roles in EXIM, customs, freight, logistics and operations." },
    ],
  }),
  component: Career,
});

const openings = [
  { title: "DGFT Consultant", location: "Mumbai", type: "Full-time" },
  { title: "Customs Clearance Executive", location: "Pune", type: "Full-time" },
  { title: "Freight Operations Manager", location: "Delhi", type: "Full-time" },
  { title: "Documentation Specialist", location: "Mumbai", type: "Full-time" },
  { title: "Sales Executive — EXIM", location: "Mumbai", type: "Full-time" },
  { title: "Logistics Coordinator", location: "Pune", type: "Full-time" },
];

function Career() {
  return (
    <Layout>
      <PageHeader eyebrow="Careers" title="Build your career with Star Group" subtitle="Join a 100+ professional team that's been shaping India's EXIM landscape for 25+ years." />

      <section className="container-page py-20">
        <h2 className="text-3xl font-bold mb-8">Current Openings</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {openings.map((o) => (
            <Card key={o.title} className="hover:shadow-card transition group">
              <CardContent className="p-6 flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-display font-semibold text-lg group-hover:text-brand transition">{o.title}</h3>
                  <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{o.location}</span>
                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{o.type}</span>
                  </div>
                </div>
                <Button size="sm" className="gradient-brand text-white border-0">Apply</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container-page pb-20">
        <Card className="overflow-hidden">
          <CardContent className="p-8 md:p-12 grid lg:grid-cols-[1fr_1.5fr] gap-10">
            <div>
              <Briefcase className="h-10 w-10 text-accent" />
              <h2 className="mt-4 text-3xl font-bold">Don't see the right role?</h2>
              <p className="mt-3 text-muted-foreground">Send us your resume — we're always interested in great talent.</p>
            </div>
            <form className="grid gap-4 sm:grid-cols-2">
              <div><Label>Full Name</Label><Input className="mt-1.5" placeholder="Your name" /></div>
              <div><Label>Email</Label><Input className="mt-1.5" type="email" placeholder="you@email.com" /></div>
              <div><Label>Phone</Label><Input className="mt-1.5" placeholder="+91" /></div>
              <div><Label>Position</Label><Input className="mt-1.5" placeholder="Role of interest" /></div>
              <div className="sm:col-span-2"><Label>Why Star Group?</Label><Textarea className="mt-1.5" rows={4} placeholder="Tell us about yourself..." /></div>
              <Button className="sm:col-span-2 gradient-brand text-white border-0">Submit Application</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
}
