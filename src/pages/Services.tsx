import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import {
  Ship, Plane, FileCheck, Truck, Warehouse, ScrollText, Globe2,
  ArrowRight, CheckCircle2, ChevronRight
} from "lucide-react";

const services = [
  {
    icon: FileCheck,
    gradient: "from-blue-500 to-blue-700",
    lightBg: "bg-blue-50",
    accentText: "text-blue-600",
    accentBorder: "border-blue-500",
    accentBg: "bg-blue-600",
    image: "/customs_clearance.png",
    number: "01",
    title: "Customs Clearance Services",
    tagline: "Seamless Customs Clearance for Smooth International Trade",
    paragraphs: [
      "Customs clearance is one of the most critical stages in the import and export process. Delays, documentation errors, or regulatory non-compliance can lead to increased costs and disruptions in the supply chain. At Umaapati International Business LLP, we provide comprehensive customs clearance solutions designed to ensure that your cargo moves efficiently through customs procedures while meeting all applicable regulations.",
      "Our experienced team works closely with importers, exporters, shipping lines, and government authorities to facilitate quick and compliant cargo clearance. We stay updated with changing customs regulations and trade policies to help businesses avoid unnecessary delays and penalties.",
      "By combining industry expertise with efficient processes, we help clients reduce turnaround times and maintain smooth international trade operations.",
    ],
    listHeading: "Our Customs Clearance Services Include:",
    points: [
      "Import Customs Clearance",
      "Export Customs Clearance",
      "Sea Cargo Clearance",
      "Air Cargo Clearance",
      "Project Cargo Clearance",
      "Customs Documentation Management",
      "Duty Assessment & Classification",
      "Customs Compliance Advisory",
      "Factory Stuffing & Examination Coordination",
      "SEZ & EOU Clearance Assistance",
      "Regulatory Documentation Support",
      "Cargo Release & Delivery Coordination",
    ],
  },
  {
    icon: Ship,
    gradient: "from-cyan-500 to-cyan-700",
    lightBg: "bg-cyan-50",
    accentText: "text-cyan-600",
    accentBorder: "border-cyan-500",
    accentBg: "bg-cyan-600",
    image: "/freight_forwarding.png",
    number: "02",
    title: "International Freight Forwarding",
    tagline: "Reliable Freight Solutions Connecting Global Markets",
    paragraphs: [
      "In today's interconnected world, businesses require dependable logistics partners capable of handling complex international shipments. Umaapati International Business LLP offers comprehensive freight forwarding services that connect businesses with customers and suppliers across the globe.",
      "Whether transporting cargo by sea, air, or multimodal routes, our team ensures efficient planning, documentation, tracking, and delivery management. We work with a trusted global network of carriers and logistics partners to provide cost-effective and timely shipping solutions.",
      "Our goal is to optimize transit times, reduce shipping costs, and provide complete visibility throughout the transportation process.",
    ],
    listHeading: "Our Freight Forwarding Solutions Include:",
    points: [
      "Ocean Freight Services",
      "Air Freight Services",
      "Full Container Load (FCL)",
      "Less than Container Load (LCL)",
      "Door-to-Door Delivery",
      "Multimodal Transportation",
      "Cargo Consolidation",
      "Cross-Border Logistics",
      "Time-Sensitive Cargo Handling",
      "Shipment Tracking & Monitoring",
      "Special Cargo Coordination",
      "International Shipping Documentation",
    ],
  },
  {
    icon: Globe2,
    gradient: "from-violet-500 to-violet-700",
    lightBg: "bg-violet-50",
    accentText: "text-violet-600",
    accentBorder: "border-violet-500",
    accentBg: "bg-violet-600",
    image: "/exim_consultancy.png",
    number: "03",
    title: "Export Import Consultancy",
    tagline: "Expert Guidance for International Business Growth",
    paragraphs: [
      "Entering global markets requires a thorough understanding of international trade regulations, documentation requirements, licensing procedures, and government policies. Our export-import consultancy services help businesses navigate these complexities with confidence.",
      "Whether you are a new exporter, an established importer, or a company exploring international expansion opportunities, our consultants provide strategic guidance tailored to your business objectives.",
      "Our team helps businesses make informed decisions, reduce compliance risks, and maximize opportunities in global markets.",
    ],
    listHeading: "Consultancy Services Include:",
    points: [
      "Export-Import Advisory",
      "International Trade Consultation",
      "IEC Registration Assistance",
      "DGFT Services",
      "Trade Documentation Support",
      "Product Classification Guidance",
      "Export Incentive Assistance",
      "Foreign Trade Policy Consultation",
      "Market Entry Strategy Support",
      "Regulatory Compliance Advisory",
      "Import-Export Process Optimization",
      "Business Expansion Consultation",
    ],
  },
  {
    icon: Truck,
    gradient: "from-orange-500 to-orange-700",
    lightBg: "bg-orange-50",
    accentText: "text-orange-600",
    accentBorder: "border-orange-500",
    accentBg: "bg-orange-600",
    image: "/logistics_transportation.png",
    number: "04",
    title: "Logistics & Transportation Services",
    tagline: "Efficient Cargo Movement Across Every Stage of the Supply Chain",
    paragraphs: [
      "Transportation plays a vital role in ensuring timely delivery of goods and maintaining operational efficiency. Umaapati International Business LLP provides integrated logistics and transportation solutions that support businesses across domestic and international supply chains.",
      "Our logistics experts carefully plan transportation routes, coordinate cargo movement, and monitor deliveries to ensure reliability, security, and cost efficiency.",
      "With a strong focus on operational excellence, we ensure your cargo reaches its destination safely and on schedule.",
    ],
    listHeading: "Our Logistics Solutions Include:",
    points: [
      "Domestic Transportation",
      "Container Transportation",
      "Port Connectivity Services",
      "Factory-to-Port Movement",
      "Last-Mile Delivery",
      "Cargo Distribution",
      "Dedicated Vehicle Solutions",
      "Supply Chain Coordination",
      "Project Cargo Transportation",
      "Heavy Cargo Movement",
      "Time-Bound Deliveries",
      "End-to-End Logistics Management",
    ],
  },
  {
    icon: ScrollText,
    gradient: "from-rose-500 to-rose-700",
    lightBg: "bg-rose-50",
    accentText: "text-rose-600",
    accentBorder: "border-rose-500",
    accentBg: "bg-rose-600",
    image: "/trade_compliance.png",
    number: "05",
    title: "Trade Compliance & Regulatory Services",
    tagline: "Ensuring Compliance in a Dynamic Global Trade Environment",
    paragraphs: [
      "International trade regulations are constantly evolving. Businesses must comply with various standards, certifications, registrations, and government requirements before products can be imported or exported successfully.",
      "Umaapati International Business LLP assists businesses in meeting regulatory obligations and maintaining full compliance with applicable laws and industry standards.",
      "Our compliance specialists help businesses reduce regulatory risks while ensuring smooth trade operations.",
    ],
    listHeading: "Compliance Services Include:",
    points: [
      "BIS Certification Assistance",
      "FSSAI Registration Support",
      "WPC Approval Assistance",
      "LMPC Registration",
      "EPR Registration Services",
      "Product Compliance Consultation",
      "Import Regulatory Documentation",
      "Trade Compliance Audits",
      "Product Approval Coordination",
      "Government Licensing Support",
      "Regulatory Risk Assessment",
      "Compliance Documentation Management",
    ],
  },
  {
    icon: Warehouse,
    gradient: "from-emerald-500 to-emerald-700",
    lightBg: "bg-emerald-50",
    accentText: "text-emerald-600",
    accentBorder: "border-emerald-500",
    accentBg: "bg-emerald-600",
    image: "/warehousing_distribution.png",
    number: "06",
    title: "Warehousing & Distribution Services",
    tagline: "Secure Storage and Efficient Inventory Management",
    paragraphs: [
      "Effective warehousing is essential for maintaining inventory control, supporting distribution networks, and ensuring timely order fulfillment. We provide warehousing and distribution solutions designed to improve supply chain performance and operational efficiency.",
      "Our warehousing services are suitable for manufacturers, importers, exporters, distributors, and trading companies seeking secure and flexible storage solutions.",
      "We help businesses improve inventory visibility, reduce storage challenges, and streamline product distribution.",
    ],
    listHeading: "Our Warehousing Services Include:",
    points: [
      "Short-Term Storage Solutions",
      "Long-Term Warehousing",
      "Inventory Management",
      "Cargo Consolidation",
      "Packaging & Repackaging",
      "Labeling Services",
      "Distribution Management",
      "Dispatch Coordination",
      "Order Fulfillment Support",
      "Cargo Handling Services",
      "Stock Monitoring",
      "Supply Chain Integration",
    ],
  },
  {
    icon: Plane,
    gradient: "from-sky-500 to-sky-700",
    lightBg: "bg-sky-50",
    accentText: "text-sky-600",
    accentBorder: "border-sky-500",
    accentBg: "bg-sky-600",
    image: "/dgft_services.png",
    number: "07",
    title: "DGFT Services",
    tagline: "Professional DGFT Consultancy for International Trade Success",
    paragraphs: [
      "The Directorate General of Foreign Trade (DGFT) plays a crucial role in regulating India's import and export activities. Businesses involved in international trade often require various registrations, licenses, and approvals to operate smoothly.",
      "Umaapati International Business LLP provides expert DGFT consultancy services to help businesses fulfill all regulatory requirements and access available trade benefits.",
      "Our experts simplify complex DGFT procedures and help businesses maximize available opportunities under government trade policies.",
    ],
    listHeading: "Our DGFT Services Include:",
    points: [
      "IEC Registration",
      "IEC Modification & Updates",
      "DGFT Licensing Support",
      "Export Promotion Scheme Assistance",
      "Advance Authorization Guidance",
      "EPCG Scheme Consultancy",
      "RoDTEP Assistance",
      "Foreign Trade Policy Compliance",
      "Registration & Certification Support",
      "Online DGFT Documentation",
      "Import Export Authorizations",
      "Trade Benefit Advisory",
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <Layout>
      <PageHeader
        eyebrow="Services"
        title="End-to-end EXIM & logistics"
        subtitle="One trusted partner for customs, freight, consultancy, transportation, compliance, warehousing and DGFT."
      />

      {/* ── Mobile: explicit prev/next service picker ── */}
      <div className="lg:hidden sticky top-0 z-20 bg-background/95 backdrop-blur border-b shadow-sm">
        {/* Current service display with arrows */}
        <div className="flex items-center gap-3 px-4 py-3">
          {/* Prev arrow */}
          <button
            onClick={() => setActive((prev) => Math.max(0, prev - 1))}
            disabled={active === 0}
            className="shrink-0 h-9 w-9 rounded-full border flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition hover:bg-muted active:scale-95"
            aria-label="Previous service"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
          </button>

          {/* Active service badge */}
          <div className={`flex-1 flex items-center gap-3 rounded-xl bg-gradient-to-r ${s.gradient} px-4 py-2.5 shadow-sm`}>
            <s.icon className="h-5 w-5 text-white shrink-0" />
            <div className="min-w-0">
              <p className="text-[10px] text-white/60 font-semibold uppercase tracking-wider">
                {s.number} of 07
              </p>
              <p className="text-sm font-bold text-white leading-tight truncate">{s.title}</p>
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={() => setActive((prev) => Math.min(services.length - 1, prev + 1))}
            disabled={active === services.length - 1}
            className="shrink-0 h-9 w-9 rounded-full border flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition hover:bg-muted active:scale-95"
            aria-label="Next service"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-muted mx-4 mb-3 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full ${s.accentBg} transition-all duration-300`}
            style={{ width: `${((active + 1) / services.length) * 100}%` }}
          />
        </div>
      </div>

      <section className="container-page py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* ── Desktop sidebar nav ── */}
          <aside className="hidden lg:block w-72 shrink-0 sticky top-24">
            <nav className="flex flex-col gap-1 rounded-2xl border bg-card p-3 shadow-sm">
              {services.map((item, i) => {
                const Icon = item.icon;
                const isActive = i === active;
                return (
                  <button
                    key={item.title}
                    onClick={() => setActive(i)}
                    className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200
                      ${isActive
                        ? `bg-gradient-to-r ${item.gradient} text-white shadow-md`
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-white" : ""}`} />
                    <span className="text-sm font-medium leading-tight">{item.title}</span>
                    {isActive && <ChevronRight className="ml-auto h-4 w-4 shrink-0 opacity-70" />}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* ── Content panel ── */}
          <div className="flex-1 min-w-0">
            <div className="rounded-2xl border bg-card shadow-sm overflow-hidden">

              {/* Coloured header strip */}
              <div className={`bg-gradient-to-r ${s.gradient} p-6 md:p-10 text-white`}>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 md:h-16 md:w-16 rounded-xl md:rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
                    <s.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold tracking-[0.2em] text-white/60 uppercase">
                      {s.number} / 07
                    </span>
                    <h2 className="text-xl md:text-3xl font-bold mt-1 leading-snug">
                      {s.title}
                    </h2>
                    <p className="mt-1.5 text-white/80 text-sm md:text-base">{s.tagline}</p>
                  </div>
                </div>
              </div>

              {/* Body — image right on desktop, image above on mobile */}
              <div className="p-5 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">

                  {/* ── Text — order-2 mobile (below image), order-1 desktop (left) ── */}
                  <div className="flex-1 min-w-0 space-y-5 order-2 md:order-1">
                    <div className="space-y-3 text-muted-foreground leading-relaxed text-sm md:text-base">
                      {s.paragraphs.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className={`h-0.5 w-8 rounded-full ${s.accentBg}`} />
                        <p className={`font-semibold text-xs md:text-sm uppercase tracking-wider ${s.accentText}`}>
                          {s.listHeading}
                        </p>
                      </div>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {s.points.map((p) => (
                          <li key={p} className="flex items-start gap-2.5">
                            <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${s.accentText}`} />
                            <span className="text-xs md:text-sm text-foreground">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Prev / Next navigation */}
                    <div className="flex items-center justify-between pt-5 border-t">
                      <button
                        onClick={() => setActive((prev) => Math.max(0, prev - 1))}
                        disabled={active === 0}
                        className="flex items-center gap-1.5 text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition"
                      >
                        <ChevronRight className="h-4 w-4 rotate-180" />
                        Previous
                      </button>
                      <div className="flex gap-1.5">
                        {services.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${i === active ? `w-5 md:w-6 ${s.accentBg}` : "w-1.5 md:w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"}`}
                          />
                        ))}
                      </div>
                      <button
                        onClick={() => setActive((prev) => Math.min(services.length - 1, prev + 1))}
                        disabled={active === services.length - 1}
                        className="flex items-center gap-1.5 text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition"
                      >
                        Next
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* ── Image — order-1 mobile (above text), order-2 desktop (right) ── */}
                  <div className="w-full md:w-64 lg:w-72 shrink-0 order-1 md:order-2">
                    <div className="relative rounded-2xl overflow-hidden shadow-md h-48 md:h-80">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className={`absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t ${s.gradient} opacity-40`} />
                      <div className="absolute bottom-3 left-3">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-black/30 backdrop-blur-sm rounded-full px-2.5 py-1">
                          {s.title}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-16 md:pb-20">
        <div className="rounded-2xl md:rounded-3xl gradient-brand p-8 md:p-14 text-white text-center">
          <h2 className="text-2xl md:text-4xl font-bold">Need a custom solution?</h2>
          <p className="mt-3 text-white/85 text-sm md:text-base">
            Tell us about your shipment or project — we'll design the right plan.
          </p>
          <Button asChild size="lg" className="mt-6 bg-white text-brand hover:bg-white/90">
            <Link to="/contact">
              Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
