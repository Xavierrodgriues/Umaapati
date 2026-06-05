import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Beaker, Pill, Cog, Shirt, ShoppingBag, Wheat, Mountain, Car, Cpu, Factory } from "lucide-react";

export const Route = createFileRoute("/clientele")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — Umaapati International Business LLP" },
      { name: "description", content: "Supporting businesses across chemicals, pharma, engineering, textiles, FMCG, food, metals, automotive, electronics and machinery." },
      { property: "og:title", content: "Industries We Serve — Umaapati" },
      { property: "og:description", content: "Trusted by clients across diverse industries." },
    ],
  }),
  component: Industries,
});

const sectors = [
  { icon: Beaker, name: "Chemicals & Petrochemicals" },
  { icon: Pill, name: "Pharmaceuticals" },
  { icon: Cog, name: "Engineering Goods" },
  { icon: Shirt, name: "Textiles & Garments" },
  { icon: ShoppingBag, name: "FMCG Products" },
  { icon: Wheat, name: "Food & Agriculture" },
  { icon: Mountain, name: "Metals & Minerals" },
  { icon: Car, name: "Automotive Components" },
  { icon: Cpu, name: "Consumer Electronics" },
  { icon: Factory, name: "Industrial Machinery" },
];

function Industries() {
  return (
    <Layout>
      <PageHeader eyebrow="Industries We Serve" title="Trusted across diverse industries" subtitle="We proudly support businesses across multiple industry verticals with tailored trade, customs and logistics solutions." />
      <section className="container-page py-20">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {sectors.map((s) => (
            <Card key={s.name} className="hover:border-accent hover:shadow-card transition group">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-2xl gradient-brand text-white flex items-center justify-center group-hover:scale-110 transition">
                  <s.icon className="h-7 w-7" />
                </div>
                <p className="mt-4 font-display font-semibold text-sm">{s.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
}
