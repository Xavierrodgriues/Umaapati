import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/notifications")({
  head: () => ({
    meta: [
      { title: "DGFT & Customs Notifications — Star Group" },
      { name: "description", content: "Stay updated with the latest DGFT and customs notifications, instructions and circulars." },
      { property: "og:title", content: "DGFT & Customs Updates" },
      { property: "og:description", content: "Latest regulatory updates affecting Indian importers and exporters." },
    ],
  }),
  component: Notifications,
});

const items = [
  { date: "02 May 2026", tag: "Customs", title: "Instruction No.06/2026 dt. 27.04.2026", excerpt: "Drawback for re-export of duty paid goods supplied to SEZ and EOU units…" },
  { date: "25 Apr 2026", tag: "Customs", title: "Instruction No.5/2026 dt. 23.04.2026", excerpt: "Time-bound processing of RoDTEP and related claims to ensure faster disbursal…" },
  { date: "25 Apr 2026", tag: "Customs", title: "Instruction No.4/2026 dt. 20.04.2026", excerpt: "Authorised Officers under Section 25 read with Section 28 — clarifications issued…" },
  { date: "25 Apr 2026", tag: "Customs", title: "Notification No.39/2026 (N.T.) dt. 20.04.2026", excerpt: "De-notification of ICD at Coimbatore (Thudiyalur) effective immediately…" },
  { date: "18 Apr 2026", tag: "DGFT", title: "Public Notice No.12/2024-25 dt. 18.04.2026", excerpt: "Amendments to Appendix 4R of HBP — RoDTEP rate revisions for chapters 28-38…" },
  { date: "10 Apr 2026", tag: "DGFT", title: "Notification No.07/2024-25 dt. 10.04.2026", excerpt: "Extension of validity of MEIS scrips till December 2026 — read circular…" },
];

function Notifications() {
  return (
    <Layout>
      <PageHeader eyebrow="Notifications" title="DGFT & Customs Updates" subtitle="The latest regulatory notifications and circulars — curated for your business." />
      <section className="container-page py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {items.map((u) => (
            <Card key={u.title} className="hover:shadow-card transition group">
              <CardContent className="p-6 flex gap-4">
                <div className="h-12 w-12 shrink-0 rounded-xl gradient-brand flex items-center justify-center text-white">
                  <FileText className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-0.5 rounded-full bg-accent/15 text-accent font-semibold">{u.tag}</span>
                    <span className="text-muted-foreground">{u.date}</span>
                  </div>
                  <h3 className="mt-2 font-display font-semibold leading-snug group-hover:text-brand transition">{u.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{u.excerpt}</p>
                  <a href="#" className="mt-3 inline-flex items-center text-brand text-sm font-medium">
                    Read details <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
}
