import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Star Group" },
      { name: "description", content: "Get in touch with Star Group for EXIM consultancy, customs clearance and logistics support across Mumbai, Pune & Delhi." },
      { property: "og:title", content: "Contact Star Group" },
      { property: "og:description", content: "Talk to our experts in Mumbai, Pune or Delhi." },
    ],
  }),
  component: Contact,
});

const offices = [
  { city: "Mumbai (HO)", addr: "Andheri East, Mumbai, Maharashtra", phone: "+91 9892575304", email: "sales1@stargroup.in" },
  { city: "Pune", addr: "Hinjewadi, Pune, Maharashtra", phone: "+91 9892575304", email: "pune@stargroup.in" },
  { city: "Delhi", addr: "Connaught Place, New Delhi", phone: "+91 9892575304", email: "delhi@stargroup.in" },
];

function Contact() {
  const [loading, setLoading] = useState(false);
  return (
    <Layout>
      <PageHeader eyebrow="Contact" title="Let's start a conversation" subtitle="Speak to our consultants for a free assessment of your EXIM and logistics needs." />

      <section className="container-page py-20 grid gap-6 md:grid-cols-3">
        {offices.map((o) => (
          <Card key={o.city} className="hover:shadow-card transition">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-xl gradient-brand flex items-center justify-center text-white">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-lg">{o.city}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{o.addr}</p>
              <div className="mt-3 space-y-1 text-sm">
                <a className="flex items-center gap-2 text-brand hover:text-accent" href={`tel:${o.phone}`}><Phone className="h-4 w-4" />{o.phone}</a>
                <a className="flex items-center gap-2 text-brand hover:text-accent" href={`mailto:${o.email}`}><Mail className="h-4 w-4" />{o.email}</a>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="container-page pb-20">
        <Card className="overflow-hidden shadow-elev">
          <CardContent className="p-0 grid lg:grid-cols-2">
            <div className="gradient-brand text-white p-10 md:p-14 relative overflow-hidden">
              <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, oklch(0.72 0.18 50 / 0.6), transparent 50%)" }} />
              <div className="relative">
                <p className="text-accent text-sm font-semibold tracking-widest uppercase">Quick Quote</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold">Get a tailored quote</h2>
                <p className="mt-4 text-white/85">Share a few details and our team will reach out within 1 business day.</p>
                <div className="mt-10 space-y-4 text-sm">
                  <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-accent" /> +91 9892575304</p>
                  <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-accent" /> sales1@stargroup.in</p>
                  <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-accent" /> Mumbai · Pune · Delhi</p>
                </div>
              </div>
            </div>
            <form
              className="p-10 md:p-14 grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  toast.success("Thanks! We'll be in touch shortly.");
                  (e.target as HTMLFormElement).reset();
                }, 800);
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label>Name *</Label><Input required className="mt-1.5" /></div>
                <div><Label>Company *</Label><Input required className="mt-1.5" /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label>Phone *</Label><Input required className="mt-1.5" /></div>
                <div><Label>Email *</Label><Input required type="email" className="mt-1.5" /></div>
              </div>
              <div>
                <Label>Service Interested In</Label>
                <Select>
                  <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select a service" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="exim">Import-Export Consultation</SelectItem>
                    <SelectItem value="customs">Customs Clearance (Air / Sea)</SelectItem>
                    <SelectItem value="freight">Freight Forwarding (Air / Sea)</SelectItem>
                    <SelectItem value="logistics">Logistics & Transportation</SelectItem>
                    <SelectItem value="dgft">DGFT Licensing & Compliance</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div><Label>Message</Label><Textarea className="mt-1.5" rows={4} placeholder="How can we help?" /></div>
              <Button type="submit" disabled={loading} className="gradient-brand text-white border-0">
                {loading ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
}
