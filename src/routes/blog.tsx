import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Star Group" },
      { name: "description", content: "Insights on import-export, customs, DGFT schemes, and global logistics best practices." },
      { property: "og:title", content: "Blog — Star Group" },
      { property: "og:description", content: "Latest insights on EXIM, customs and logistics in India." },
    ],
  }),
  component: Blog,
});

const posts = [
  { title: "Understanding RoDTEP: A Complete Guide for Indian Exporters", date: "10 May 2026", author: "Star Group Team", excerpt: "RoDTEP is reshaping export incentives in India. Here's everything you need to know to claim it correctly." },
  { title: "How to Choose the Right Freight Forwarder", date: "28 Apr 2026", author: "Logistics Desk", excerpt: "5 signals that separate world-class forwarders from the rest — and why it matters for your bottom line." },
  { title: "DGFT Advance Authorization — A Practical Walkthrough", date: "12 Apr 2026", author: "DGFT Desk", excerpt: "From application to redemption — a step-by-step roadmap for Advance Authorization scheme." },
  { title: "Customs Audit Readiness: 7 Documents You Should Always Have", date: "01 Apr 2026", author: "Customs Desk", excerpt: "An audit-ready exporter is a stress-free exporter. Here's the checklist we use with our clients." },
  { title: "Sea vs Air Freight: Picking the Right Mode in 2026", date: "20 Mar 2026", author: "Freight Desk", excerpt: "Cost, speed, sustainability — how to weigh the trade-offs between sea and air shipping." },
  { title: "ICDs in India: A Practical Map for Importers", date: "08 Mar 2026", author: "Star Group Team", excerpt: "An overview of ICDs across India and how to choose the most efficient one for your shipment." },
];

function Blog() {
  return (
    <Layout>
      <PageHeader eyebrow="Blog" title="Insights for global trade" subtitle="Practical guides, regulatory deep-dives and logistics best practices." />
      <section className="container-page py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Card key={p.title} className="overflow-hidden hover:shadow-elev transition group">
              <div className="h-44 gradient-brand relative overflow-hidden">
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.72 0.18 50 / 0.6), transparent 50%)" }} />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{p.date}</span>
                  <span className="flex items-center gap-1"><User className="h-3 w-3" />{p.author}</span>
                </div>
                <h3 className="mt-3 font-display font-semibold text-lg leading-snug group-hover:text-brand transition">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
}
