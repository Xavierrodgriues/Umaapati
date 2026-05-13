import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ship, Plane, FileCheck, Truck, Warehouse, FileText, ScrollText, Globe2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Import-Export, Customs & Logistics | Star Group" },
      { name: "description", content: "Customs clearance, freight forwarding, DGFT consultancy, logistics & warehousing — end-to-end EXIM solutions." },
      { property: "og:title", content: "Services — Star Group" },
      { property: "og:description", content: "Comprehensive import-export and logistics services across India." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: FileCheck, title: "DGFT Consultancy", desc: "Advance Authorization, EPCG, MEIS/RoDTEP, IEC code, licensing & policy advisory." },
  { icon: Ship, title: "Sea Customs Clearance", desc: "Import & export clearance at JNPT, Nhava Sheva, Mundra and all major Indian ports." },
  { icon: Plane, title: "Air Customs Clearance", desc: "Fast-track air freight clearance at Mumbai, Delhi, Pune and Bangalore airports." },
  { icon: Globe2, title: "Freight Forwarding", desc: "International air & sea freight with door-to-door visibility and competitive rates." },
  { icon: Truck, title: "Transportation", desc: "ODC, container & FTL/LTL transport — pan-India coverage with vetted partners." },
  { icon: Warehouse, title: "Warehousing", desc: "Bonded and free warehousing with inventory management." },
  { icon: ScrollText, title: "Compliance Support", desc: "FSSAI, BIS, FCRA, drug license, plant quarantine and more." },
  { icon: FileText, title: "Documentation", desc: "Bill of entry, shipping bill, COO, LUT — accurate and on time." },
];

function Services() {
  return (
    <Layout>
      <PageHeader eyebrow="Services" title="End-to-end EXIM & logistics" subtitle="One partner for licensing, clearance, freight, transport and compliance." />
      <section className="container-page py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Card key={s.title} className="group hover:-translate-y-1 hover:shadow-card transition">
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
      </section>
      <section className="container-page pb-20">
        <div className="rounded-3xl gradient-brand p-10 md:p-14 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Need a custom solution?</h2>
          <p className="mt-3 text-white/85">Tell us about your shipment or project — we'll design the right plan.</p>
          <Button asChild size="lg" className="mt-6 bg-white text-brand hover:bg-white/90">
            <Link to="/contact">Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
