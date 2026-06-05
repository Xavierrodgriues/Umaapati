import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-brand text-brand-foreground mt-20">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Umaapati International Business LLP" className="h-10 w-10" width={40} height={40} loading="lazy" />
            <span className="font-display text-lg font-bold">UMAAPATI<span className="text-accent">.</span></span>
          </div>
          <p className="text-sm text-brand-foreground/70 leading-relaxed">
            Umaapati International Business LLP — your trusted partner for international trade, customs clearance, freight forwarding, logistics, and EXIM consultancy.
          </p>
          <div className="flex gap-3 mt-5">
            {[Linkedin, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-brand-foreground/80">
            {([["/about","About Us"],["/services","Services"],["/clientele","Industries"],["/contact","Contact"]] as const).map(([to,label])=>(
              <li key={to}><Link to={to} className="hover:text-accent transition">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-brand-foreground/80">
            <li>Customs Clearance</li>
            <li>Freight Forwarding</li>
            <li>DGFT Consultancy</li>
            <li>Logistics &amp; Transportation</li>
            <li>Trade Compliance</li>
            <li>Warehousing &amp; Distribution</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-brand-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent" /> India</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-accent" /> Deepanshu Jharodia · +91 90290 79890</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-accent" /> Deepanshu@Umaapati.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-brand-foreground/60">
          <p>© {new Date().getFullYear()} Umaapati International Business LLP. All rights reserved.</p>
          <p>Your Business. Our Expertise. One Global Solution.</p>
        </div>
      </div>
    </footer>
  );
}
