import { Layout, PageHeader } from "@/components/site/Layout";

const sectors = [
  { name: "Engineering Goods", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" },
  { name: "Agro Chemicals", image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800" },
  { name: "Chemical", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800" },
  { name: "Steel Industry & Auto Components", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=800" },
  { name: "Over Dimension Cargo", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800" },
  { name: "Pharmaceutical Industry", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=800" },
];

export default function Clientele() {
  return (
    <Layout>
      <PageHeader eyebrow="Industries We Serve" title="Trusted across diverse industries" subtitle="We proudly support businesses across multiple industry verticals with tailored trade, customs and logistics solutions." />
      <section className="container-page py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s) => (
            <div key={s.name} className="group relative overflow-hidden rounded-2xl border bg-background shadow-sm transition-all hover:shadow-xl h-72 md:h-80">
              <img 
                src={s.image} 
                alt={s.name} 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              {/* Gradient Overlay to make top text readable */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/10"></div>
              
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-start">
                <span className="text-white/80 text-sm font-medium tracking-wide mb-1">
                  Industries We Serve
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow-md">
                  {s.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
