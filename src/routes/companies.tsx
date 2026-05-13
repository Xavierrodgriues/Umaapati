import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/companies")({
  head: () => ({
    meta: [
      { title: "Group of Companies — Star Group" },
      { name: "description", content: "Four specialized companies forming an integrated EXIM and logistics ecosystem." },
      { property: "og:title", content: "Star Group of Companies" },
      { property: "og:description", content: "Star Exim, Star India Logistic, Tisha & Alisha Enterprises — one ecosystem." },
    ],
  }),
  component: Companies,
});

const items = [
  {
    id: "star-exim",
    name: "Star Exim Management Consultancy & Services Pvt. Ltd.",
    tag: "DGFT & EXIM Advisory",
    desc: "Our flagship consultancy arm offering DGFT licensing, advance authorization, EPCG, RoDTEP, IEC and end-to-end policy advisory. Backed by 25+ years of policy expertise.",
    points: ["DGFT Licensing & Schemes", "Policy Advisory", "Documentation Support", "Audit & Compliance"],
  },
  {
    id: "star-logistic",
    name: "Star India Logistic",
    tag: "Customs Clearance & Freight",
    desc: "Sea & air customs clearance at all major Indian ports and airports. Door-to-door international freight forwarding with full visibility.",
    points: ["Sea & Air Customs Clearance", "Freight Forwarding", "Cargo Insurance", "Port Operations"],
  },
  {
    id: "tisha",
    name: "Tisha Enterprises",
    tag: "Trade Support",
    desc: "Specialized import-export trade support, sourcing assistance and back-office documentation services for SMEs and MNCs alike.",
    points: ["Trade Documentation", "Sourcing Support", "Order Management", "Back-office Operations"],
  },
  {
    id: "alisha",
    name: "Alisha Enterprises",
    tag: "Transport & Logistics",
    desc: "Pan-India transportation, ODC movement, FTL/LTL services and last-mile delivery with reliable execution.",
    points: ["Pan-India Transport", "ODC Movement", "FTL & LTL", "Last-mile Delivery"],
  },
];

function Companies() {
  return (
    <Layout>
      <PageHeader eyebrow="Group Companies" title="Four companies. One ecosystem." subtitle="Integrated capabilities across consultancy, customs, freight and logistics." />
      <section className="container-page py-20 space-y-10">
        {items.map((c, i) => (
          <Card key={c.id} id={c.id} className="overflow-hidden hover:shadow-elev transition">
            <CardContent className="p-0 grid md:grid-cols-[200px_1fr]">
              <div className="gradient-brand text-white p-8 flex flex-col justify-center">
                <p className="text-accent text-xs font-bold tracking-widest">0{i + 1}</p>
                <p className="mt-1 text-sm uppercase tracking-wider text-white/80">{c.tag}</p>
              </div>
              <div className="p-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold">{c.name}</h2>
                <p className="mt-3 text-muted-foreground">{c.desc}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {c.points.map((p) => (
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
    </Layout>
  );
}
