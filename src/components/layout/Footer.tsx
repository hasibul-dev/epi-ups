import React, { useState } from 'react';
import { ArrowUpRight, Facebook, Linkedin, Mail, MapPin, Phone, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';
import logoImage from '../../image/logo.png';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Contact', href: '#contact' },
  ];

  const companyLinks = [
    { label: 'Industries Served', href: '#industries' },
    { label: 'Featured Projects', href: '#projects' },
    { label: 'Global Presence', href: '#global-presence' },
    { label: 'Bangladesh Hub', href: '#bangladesh' },
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: Linkedin },
    { label: 'Facebook', href: 'https://www.facebook.com', icon: Facebook },
  ];

  return (
    <footer className="relative bg-[#020B18] text-slate-300 overflow-hidden font-sans border-t border-white/10">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(0,64,144,0.15)_0%,transparent_50%),radial-gradient(circle_at_90%_80%,rgba(208,32,48,0.08)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Desktop Max-Width Container adjusted to 1700px */}
      <div className="relative mx-auto max-w-[1700px] px-6 pt-20 pb-12 lg:px-12">
        
        {/* Top Newsletter Card */}
        <div className="mb-16 rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md xl:p-12 xl:flex xl:items-center xl:justify-between gap-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-medium text-blue-400">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              Stay Informed
            </span>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl xl:text-4xl">
              Power insights, straight to your inbox.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">
              Subscribe to receive technical updates, uptime strategies, and enterprise power infrastructure news.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="mt-6 xl:mt-0 flex-1 max-w-md">
            <div className="relative flex items-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your corporate email"
                className="w-full rounded-2xl border border-white/15 bg-white/5 py-4 pl-5 pr-36 text-sm text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="absolute right-2 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-500 active:scale-95"
              >
                {subscribed ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Joined
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Main Grid for 1700px Desktop view */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 xl:gap-16">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 xl:col-span-4">
            <a href="#home" className="inline-block focus:outline-none">
              <img src={logoImage} alt="EPI UPS Bangladesh logo" className="h-12 w-auto object-contain" />
            </a>
            <p className="mt-6 text-sm leading-relaxed text-slate-400 max-w-md xl:text-base">
              Engineered for absolute reliability. Delivering mission-critical UPS systems, power conditioning, and resilient infrastructure solutions across Bangladesh.
            </p>
            
            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="group flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition duration-300 hover:border-blue-500/50 hover:bg-blue-600/10 hover:text-white"
                >
                  <Icon className="h-5 w-5 transition duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Quick Links</h4>
            <ul className="mt-6 space-y-3.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="group inline-flex items-center gap-1 text-slate-400 transition hover:text-white">
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-1 translate-x-1 transition duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Company</h4>
            <ul className="mt-6 space-y-3.5 text-sm">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="group inline-flex items-center gap-1 text-slate-400 transition hover:text-white">
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-1 translate-x-1 transition duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 xl:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Contact Us</h4>
            <ul className="mt-6 space-y-4 text-sm text-slate-400">
              <li>
                <a href="mailto:info@epiupsbd.com" className="flex items-center gap-3 transition hover:text-white group">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 group-hover:border-blue-500/50 group-hover:text-blue-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  info@epiupsbd.com
                </a>
              </li>
              <li>
                <a href="tel:+8801700000000" className="flex items-center gap-3 transition hover:text-white group">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 group-hover:border-blue-500/50 group-hover:text-blue-400">
                    <Phone className="h-4 w-4" />
                  </div>
                  +880 1700-000000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300">
                  <MapPin className="h-4 w-4" />
                </div>
                Dhaka, Bangladesh
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                Service & Maintenance Support
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row text-xs text-slate-500">
          <p>© {currentYear} EPI UPS Bangladesh. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="transition hover:text-slate-300">Privacy Policy</a>
            <a href="#terms" className="transition hover:text-slate-300">Terms of Service</a>
            <a href="#home" className="inline-flex items-center gap-1.5 font-medium text-slate-300 transition hover:text-white">
              Back to top
              <ArrowUpRight className="h-3.5 w-3.5 -rotate-45" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};