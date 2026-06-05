import { Layout, PageHeader } from "@/components/site/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  return (
    <Layout>
      <PageHeader eyebrow="Contact" title="Let's start a conversation" subtitle="Speak with our team for a free assessment of your international trade and logistics needs." />

      <section className="container-page py-20 grid gap-6 md:grid-cols-3">
        <Card className="hover:shadow-card transition">
          <CardContent className="p-6">
            <div className="h-12 w-12 rounded-xl gradient-brand flex items-center justify-center text-white">
              <User className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display font-semibold text-lg">Contact Person</h3>
            <p className="mt-2 text-sm text-muted-foreground">Deepanshu Jharodia</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-card transition">
          <CardContent className="p-6">
            <div className="h-12 w-12 rounded-xl gradient-brand flex items-center justify-center text-white">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display font-semibold text-lg">Phone</h3>
            <a href="tel:+919029079890" className="mt-2 block text-sm text-brand hover:text-accent">+91 90290 79890</a>
          </CardContent>
        </Card>
        <Card className="hover:shadow-card transition">
          <CardContent className="p-6">
            <div className="h-12 w-12 rounded-xl gradient-brand flex items-center justify-center text-white">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display font-semibold text-lg">Email</h3>
            <a href="mailto:Deepanshu@Umaapati.com" className="mt-2 block text-sm text-brand hover:text-accent break-all">Deepanshu@Umaapati.com</a>
          </CardContent>
        </Card>
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
                  <p className="flex items-center gap-3"><User className="h-4 w-4 text-accent" /> Deepanshu Jharodia</p>
                  <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-accent" /> +91 90290 79890</p>
                  <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-accent" /> Deepanshu@Umaapati.com</p>
                  <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-accent" /> India</p>
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
                    <SelectItem value="customs">Customs Clearance</SelectItem>
                    <SelectItem value="freight">Freight Forwarding</SelectItem>
                    <SelectItem value="exim">Export-Import Consultancy</SelectItem>
                    <SelectItem value="logistics">Logistics &amp; Transportation</SelectItem>
                    <SelectItem value="compliance">Trade Compliance</SelectItem>
                    <SelectItem value="warehousing">Warehousing &amp; Distribution</SelectItem>
                    <SelectItem value="dgft">DGFT Services</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div><Label>Message</Label><Textarea className="mt-1.5" rows={4} placeholder="How can we help?" /></div>
              <Button type="submit" disabled={loading} className="gradient-brand text-white border-0">
                {loading ? "Sending..." : <><Send className="mr-2 h-4 w-4" />Send Message</>}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
}
