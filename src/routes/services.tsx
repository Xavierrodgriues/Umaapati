import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ship, Plane, FileCheck, Truck, Warehouse, ScrollText, Globe2, FileText, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Umaapati International Business LLP" },
      { name: "description", content: "Customs clearance, freight forwarding, EXIM consultancy, logistics, trade compliance, warehousing & DGFT services." },
      { property: "og:title", content: "Services — Umaapati International Business LLP" },
      { property: "og:description", content: "End-to-end international trade and logistics services." },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: FileCheck,
    title: "Customs Clearance Services",
    tagline: "Seamless customs clearance for smooth international trade.",
    desc: "Our experienced team works closely with importers, exporters, shipping lines and government authorities to facilitate quick and compliant cargo clearance.",
    points: [
      "Import & Export Customs Clearance",
      "Sea & Air Cargo Clearance",
      "Project Cargo Clearance",
      "Customs Documentation Management",
      "Duty Assessment & Classification",
      "Factory Stuffing & Examination Coordination",
      "SEZ & EOU Clearance Assistance",
      "Cargo Release & Delivery Coordination",
    ],
  },
  {
    icon: Ship,
    title: "International Freight Forwarding",
    tagline: "Reliable freight solutions connecting global markets.",
    desc: "Whether transporting cargo by sea, air or multimodal routes, our team ensures efficient planning, documentation, tracking and delivery management.",
    points: [
      "Ocean & Air Freight Services",
      "FCL & LCL Shipments",
      "Door-to-Door Delivery",
      "Multimodal Transportation",
      "Cargo Consolidation",
      "Cross-Border Logistics",
      "Shipment Tracking & Monitoring",
      "International Shipping Documentation",
    ],
  },
  {
    icon: Globe2,
    title: "Export–Import Consultancy",
    tagline: "Expert guidance for international business growth.",
    desc: "Our consultants provide strategic guidance tailored to your business objectives — for new exporters, established importers and global expansion plans.",
    points: [
      "Export-Import Advisory",
      "International Trade Consultation",
      "IEC Registration Assistance",
      "DGFT Services",
      "Product Classification Guidance",
      "Export Incentive Assistance",
      "Market Entry Strategy Support",
      "Regulatory Compliance Advisory",
    ],
  },
  {
    icon: Truck,
    title: "Logistics & Transportation",
    tagline: "Efficient cargo movement across every stage of the supply chain.",
    desc: "Integrated logistics solutions that support businesses across domestic and international supply chains.",
    points: [
      "Domestic & Container Transportation",
      "Port Connectivity Services",
      "Factory-to-Port Movement",
      "Last-Mile Delivery & Distribution",
      "Dedicated Vehicle Solutions",
      "Project & Heavy Cargo Movement",
      "Time-Bound Deliveries",
      "End-to-End Logistics Management",
    ],
  },
  {
    icon: ScrollText,
    title: "Trade Compliance & Regulatory",
    tagline: "Ensuring compliance in a dynamic global trade environment.",
    desc: "We assist businesses in meeting regulatory obligations and maintaining full compliance with applicable laws and industry standards.",
    points: [
      "BIS Certification Assistance",
      "FSSAI Registration Support",
      "WPC Approval Assistance",
      "LMPC Registration",
      "EPR Registration Services",
      "Product Compliance Consultation",
      "Trade Compliance Audits",
      "Government Licensing Support",
    ],
  },
  {
    icon: Warehouse,
    title: "Warehousing & Distribution",
    tagline: "Secure storage and efficient inventory management.",
    desc: "Warehousing and distribution solutions designed to improve supply chain performance and operational efficiency.",
    points: [
      "Short & Long-Term Storage",
      "Inventory Management",
      "Cargo Consolidation",
      "Packaging, Repackaging & Labeling",
      "Distribution & Dispatch Coordination",
      "Order Fulfillment Support",
      "Stock Monitoring",
      "Supply Chain Integration",
    ],
  },
  {
    icon: Plane,
    title: "DGFT Services",
    tagline: "Professional DGFT consultancy for international trade success.",
    desc: "Expert DGFT consultancy services to help businesses fulfill regulatory requirements and access trade benefits.",
    points: [
      "IEC Registration, Modification & Updates",
      "DGFT Licensing Support",
      "Export Promotion Scheme Assistance",
      "Advance Authorization Guidance",
      "EPCG Scheme Consultancy",
      "RoDTEP Assistance",
      "Foreign Trade Policy Compliance",
      "Trade Benefit Advisory",
    ],
  },
];

function Services() {
  return (
    <Layout>
      <PageHeader eyebrow="Services" title="End-to-end EXIM & logistics" subtitle="One partner for customs, freight, consultancy, transportation, compliance, warehousing and DGFT." />

      <section className="container-page py-20 space-y-10">
        {services.map((s, i) => (
          <Card key={s.title} className="overflow-hidden hover:shadow-elev transition">
            <CardContent className="p-0 grid md:grid-cols-[240px_1fr]">
              <div className="gradient-brand text-white p-8 flex flex-col justify-center">
                <p className="text-accent text-xs font-bold tracking-widest">0{i + 1}</p>
                <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mt-3">
                  <s.icon className="h-6 w-6" />
                </div>
                <p className="mt-4 text-sm text-white/85">{s.tagline}</p>
              </div>
              <div className="p-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold">{s.title}</h2>
                <p className="mt-3 text-muted-foreground">{s.desc}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
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
