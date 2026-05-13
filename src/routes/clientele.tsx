import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/clientele")({
  head: () => ({
    meta: [
      { title: "Clientele — Star Group" },
      { name: "description", content: "Trusted by 100+ MNCs, corporates and MSMEs across diverse industries." },
      { property: "og:title", content: "Our Clientele — Star Group" },
      { property: "og:description", content: "Industries we serve — electrical, engineering, food, chemicals, automobile and more." },
    ],
  }),
  component: Clientele,
});

const sectors = [
  "Electrical", "Engineering", "Entertainment", "Food & Beverage",
  "Furniture", "General Trade", "Agro", "Air Conditioning",
  "Automobile", "Chemical", "Cosmetics", "Pharmaceutical",
  "Textile", "IT & Hardware", "Machinery", "Retail",
];

function Clientele() {
  return (
    <Layout>
      <PageHeader eyebrow="Clientele" title="Trusted by industry leaders" subtitle="100+ MNCs, corporates and MSMEs across 16+ industry verticals partner with us." />
      <section className="container-page py-20">
        <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4">
          {sectors.map((s) => (
            <Card key={s} className="hover:border-accent transition group">
              <CardContent className="p-6 flex items-center justify-center min-h-32">
                <div className="text-center">
                  <div className="h-10 w-10 rounded-full gradient-accent mx-auto group-hover:scale-110 transition" />
                  <p className="mt-3 font-display font-semibold">{s}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
}
