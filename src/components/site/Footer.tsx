import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-brand text-brand-foreground mt-20">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Star Group" className="h-10 w-10" width={40} height={40} loading="lazy" />
            <span className="font-display text-xl font-bold">STAR GROUP</span>
          </div>
          <p className="text-sm text-brand-foreground/70 leading-relaxed">
            Integrated EXIM consultancy & logistics ecosystem trusted by 100+ MNCs and corporates across India since 2000.
          </p>
          <div className="flex gap-3 mt-5">
            {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-brand-foreground/80">
            {[["/about","About Us"],["/services","Services"],["/companies","Group Companies"],["/clientele","Clientele"],["/career","Career"]].map(([to,label])=>(
              <li key={to}><Link to={to} className="hover:text-accent transition">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-brand-foreground/80">
            <li><Link to="/notifications" className="hover:text-accent">DGFT Updates</Link></li>
            <li><Link to="/notifications" className="hover:text-accent">Customs Notifications</Link></li>
            <li><Link to="/blog" className="hover:text-accent">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Get a Quote</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-brand-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent" /> Mumbai · Pune · Delhi</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-accent" /> +91 9892575304</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-accent" /> sales1@stargroup.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-brand-foreground/60">
          <p>© 2025–26 Star Group. All rights reserved.</p>
          <p>Designed with care for global trade.</p>
        </div>
      </div>
    </footer>
  );
}
