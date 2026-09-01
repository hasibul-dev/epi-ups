import React from 'react';
import { motion } from 'framer-motion';
import logoImage from '../image/logo.png';
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ChevronRight,
  Factory,
  Globe2,
  MapPin,
  PhoneCall,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Zap,
} from 'lucide-react';

const stats = [
  { value: '25+', label: 'Years of expertise' },
  { value: '3.5k+', label: 'Critical sites' },
  { value: '99.9%', label: 'Uptime assurance' },
  { value: '24/7', label: 'Service support' },
];

const products = [
  {
    name: 'EPI Online UPS 10kVA',
    capacity: '10 kVA / 8 kW',
    description: 'High-efficiency business protection for offices, server rooms, and critical digital loads.',
    price: 'Tk 2,45,000',
    oldPrice: 'Tk 2,90,000',
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    accent: 'from-sky-500/20 via-sky-400/10 to-transparent',
  },
  {
    name: 'EPI Industrial UPS 30kVA',
    capacity: '30 kVA / 24 kW',
    description: 'Heavy-duty resilience for factories, process plants, and continuous industrial operations.',
    price: 'Tk 6,80,000',
    oldPrice: 'Tk 7,90,000',
    badge: 'High Demand',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80',
    accent: 'from-cyan-500/20 via-blue-500/10 to-transparent',
  },
  {
    name: 'EPI Data Center Rack UPS',
    capacity: '15 kVA modular',
    description: 'Compact, scalable power continuity designed for modern data centers and telecom racks.',
    price: 'Tk 4,25,000',
    oldPrice: 'Tk 4,95,000',
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1558494949ccf4f4af9d7b0dd7b0f1890?auto=format&fit=crop&w=900&q=80',
    accent: 'from-indigo-500/20 via-sky-500/10 to-transparent',
  },
  {
    name: 'EPI AVR + Stabilizer',
    capacity: '30 kVA / dual phase',
    description: 'Voltage regulation for commercial sites and unstable-grid environments needing stable power.',
    price: 'Tk 1,70,000',
    oldPrice: 'Tk 2,10,000',
    badge: 'Energy Saving',
    image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80',
    accent: 'from-blue-500/20 via-cyan-500/10 to-transparent',
  },
];

const solutionCards = [
  {
    title: 'Critical Load Protection',
    text: 'Reliable UPS deployment for hospitals, office networks, and mission-critical operational continuity.',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Data Center Infrastructure',
    text: 'Resilient power architecture for server rooms, edge facilities, and high-availability environments.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Industrial Power Continuity',
    text: 'Factory-ready power systems engineered to protect productivity and reduce operational downtime.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80',
  },
];

const industries = [
  { title: 'Manufacturing', icon: Factory },
  { title: 'Data Centers', icon: Building2 },
  { title: 'Healthcare', icon: ShieldCheck },
  { title: 'Banking & Finance', icon: BarChart3 },
  { title: 'Telecom', icon: Globe2 },
  { title: 'Commercial Buildings', icon: Sparkles },
];

const projectData = [
  {
    title: 'Commercial Tower Power Upgrade',
    meta: 'Dhaka · 2.5 MW UPS retrofit',
    text: 'Reimagined mission-critical power for a high-density commercial campus with zero-drama continuity.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Industrial Plant Energy Reliability',
    meta: 'Chattogram · Process continuity system',
    text: 'Delivered resilient industrial power systems for automation, production loads, and precision operations.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Hospital Backup Infrastructure',
    meta: 'Sylhet · Emergency power project',
    text: 'Built dependable emergency power frameworks for medical systems and life-support critical services.',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895977?auto=format&fit=crop&w=900&q=80',
  },
];

const officeHighlights = [
  'Fast support for installation, maintenance, and troubleshooting',
  'Local project coordination and responsive technical service',
  'Consultation for mission-critical and industrial environments',
];

const revealUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: 0.22 }}
      className="group relative overflow-hidden rounded-[1.7rem] border border-[#D8E1EC] bg-white shadow-[0_18px_55px_rgba(0,27,61,0.08)]"
    >
      <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(90deg,rgba(0,64,144,0.15),rgba(208,32,48,0.08),transparent)]" />
      <div className="relative overflow-hidden">
        <img src={product.image} alt={product.name} className="h-48 w-full object-cover transition duration-700 group-hover:scale-110" />
        <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-2">
          <span className="rounded-full border border-[#D02030]/40 bg-[#D02030] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm">
            {product.badge}
          </span>
          <div className="flex items-center gap-1 rounded-full border border-white/20 bg-[#001B3D]/70 px-2 py-1 text-[#F5F8FC] backdrop-blur-sm">
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <Star key={`${product.name}-star-${starIndex}`} className="h-3.5 w-3.5 fill-current" />
            ))}
          </div>
        </div>
      </div>

      <div className="relative space-y-3 p-4">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#004090]">Power solution</div>
          <h3 className="mt-2 text-lg font-bold leading-6 text-[#111827]">{product.name}</h3>
        </div>

        <div className="inline-flex rounded-full border border-[#D8E1EC] bg-[#F5F8FC] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#111827]">
          {product.capacity}
        </div>

        <p className="min-h-[52px] text-sm leading-6 text-[#5B6472]">{product.description}</p>

        <div className="flex items-end justify-between gap-3 border-t border-[#D8E1EC] pt-3">
          <div>
            <div className="text-[1.5rem] font-black tracking-tight text-[#111827]">{product.price}</div>
            <div className="text-sm text-[#5B6472] line-through">{product.oldPrice}</div>
          </div>
          <div className="rounded-full bg-[#FDE8EA] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D02030]">
            18% OFF
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#001B3D] px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-[#004090]">
            <ShoppingCart className="h-4 w-4" />
            Cart
          </button>
          <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-[#D8E1EC] bg-[#F5F8FC] px-3 py-2.5 text-sm font-semibold text-[#111827] transition hover:border-[#004090] hover:text-[#004090]">
            Details
          </a>
        </div>

        <button type="button" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#004090] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#003a7a]">
          Request Quote
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </motion.article>
  );
}

export const HomePage: React.FC = () => {
  return (
    <main className="bg-[#F5F8FC] text-[#111827]">
      <section id="home" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(0,64,144,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(208,32,48,0.08),transparent_18%),linear-gradient(180deg,#001B3D_0%,#08305f_35%,#F5F8FC_100%)] pb-16 pt-28 md:pt-32">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '76px 76px' }} />
        <div className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-[#004090]/15 blur-[120px]" />
        <div className="absolute right-10 top-20 h-64 w-64 rounded-full bg-[#D02030]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-8 xl:grid-cols-[1.03fr_0.97fr]">
            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-6 flex items-center justify-start">
                <img src={logoImage} alt="EPI UPS Bangladesh logo" className="h-16 w-auto object-contain drop-shadow-[0_8px_28px_rgba(0,64,144,0.3)] sm:h-20" />
              </div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D8E1EC]/30 bg-[#004090]/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#F5F8FC]">
                <Sparkles className="h-3.5 w-3.5" />
                Powering reliable growth
              </div>

              <h1 className="max-w-[760px] text-4xl font-black leading-[0.96] tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
                Mission-critical power. Built for Bangladesh’s next era.
              </h1>

              <p className="mt-6 max-w-[640px] text-lg leading-8 text-[#DDE7F4]">
                EPI UPS Bangladesh delivers advanced UPS systems, industrial power protection, and resilient infrastructure solutions designed for uptime, safety, and performance.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#004090] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_25px_60px_rgba(0,64,144,0.25)] transition hover:-translate-y-0.5 hover:bg-[#003976]">
                  Explore products
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-[#001B3D]/50 px-6 py-3.5 text-sm font-semibold text-[#F5F8FC] transition hover:border-[#004090] hover:text-white">
                  Request a consultation
                </a>
              </div>

              <motion.div variants={stagger} initial="hidden" animate="visible" className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => (
                  <motion.div key={stat.label} variants={revealUp} className="rounded-2xl border border-white/15 bg-white/10 p-4 shadow-[0_18px_50px_rgba(0,27,61,0.22)] backdrop-blur-md">
                    <div className="text-[1.75rem] font-black leading-none tracking-[-0.04em] text-black sm:text-[2rem]">{stat.value}</div>
                    <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.24em] text-black">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 26, scale: 0.97 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="relative">
              <div className="absolute -left-10 top-12 h-28 w-28 rounded-full border border-[#004090]/30 bg-[#004090]/10 blur-sm" />
              <div className="absolute -right-6 bottom-12 h-24 w-24 rounded-full border border-[#D02030]/30 bg-[#D02030]/10 blur-sm" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#001B3D]/80 p-3 shadow-[0_45px_100px_rgba(0,27,61,0.25)] backdrop-blur-lg">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,64,144,0.12),transparent_25%,transparent_70%,rgba(208,32,48,0.08))]" />
                <motion.img
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1600&q=80"
                  alt="UPS and power infrastructure in a modern data center"
                  className="relative h-[620px] w-full rounded-[1.5rem] object-cover"
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.1, ease: 'easeOut' }}
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-x-8 bottom-8 rounded-[1.5rem] border border-[#004090]/30 bg-[#001B3D]/70 p-5 shadow-[0_24px_80px_rgba(0,27,61,0.4)] backdrop-blur-md">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.26em] text-[#DDE7F4]">Critical load protection</div>
                      <div className="mt-2 text-3xl font-black text-white">99.9% uptime</div>
                    </div>
                    <div className="rounded-2xl border border-[#004090]/30 bg-[#004090]/10 p-3 text-[#F5F8FC]">
                      <ShieldCheck className="h-7 w-7" />
                    </div>
                  </div>
                </div>

                <div className="absolute left-6 top-8 rounded-2xl border border-white/10 bg-[#001B3D]/70 px-4 py-3 shadow-xl backdrop-blur-md">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#DDE7F4]">Live status</div>
                  <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#D02030] shadow-[0_0_18px_rgba(208,32,48,0.6)]" />
                    Power stable
                  </div>
                </div>

                <div className="absolute right-6 top-10 rounded-2xl border border-white/10 bg-[#001B3D]/70 px-4 py-3 shadow-xl backdrop-blur-md">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#DDE7F4]">System load</div>
                  <div className="mt-2 text-xl font-black text-white">82%</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="relative mx-auto max-w-[1700px] px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div variants={revealUp} className="relative overflow-hidden rounded-[2rem] border border-[#D8E1EC] bg-white p-4 shadow-[0_35px_80px_rgba(0,27,61,0.08)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,64,144,0.06),transparent_35%)]" />
            <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80" alt="Engineering team working on industrial power infrastructure" className="relative h-[540px] w-full rounded-[1.5rem] object-cover" />
          </motion.div>

          <motion.div variants={revealUp} className="relative z-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EAF1FB] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#004090]">
              <ChevronRight className="h-3.5 w-3.5" />
              About EPI
            </div>
            <h2 className="max-w-[740px] text-3xl font-black tracking-[-0.04em] text-[#111827] sm:text-5xl">
              Dependable power systems for the sectors that never stop.
            </h2>

            <p className="mt-6 max-w-[680px] text-lg leading-8 text-[#111827]">
              EPI UPS Bangladesh brings global engineering standards and local service intelligence to protect critical infrastructure across Bangladesh.
            </p>
            <p className="mt-4 max-w-[680px] text-base leading-8 text-[#5B6472]">
              We design, supply, and support resilient UPS, stabilization, and power conditioning solutions for data centers, industrial facilities, hospitals, telecom, and commercial operations that demand continuous performance.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Advanced UPS and stabilization technology',
                'End-to-end engineering and commissioning',
                'Local Bangladesh support and maintenance',
                'Built for mission-critical performance',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-[#D8E1EC] bg-[#F5F8FC] p-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#004090]" />
                  <span className="text-sm font-medium leading-6 text-[#111827]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section id="products" className="relative overflow-hidden bg-[#F5F8FC] py-24 text-[#111827]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,64,144,0.05),transparent_28%)]" />
        <div className="relative mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealUp} className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EAF1FB] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#004090]">
                <Zap className="h-3.5 w-3.5" />
                Products
              </div>
              <h2 className="max-w-[760px] text-3xl font-black tracking-[-0.05em] text-[#111827] sm:text-5xl">
                Trusted power products for every critical environment.
              </h2>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#004090]">
              Request a quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }} className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <motion.div key={product.name} variants={revealUp}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-[1700px] px-4 py-24 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealUp} className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#001B3D] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F5F8FC]">
            <ShieldCheck className="h-3.5 w-3.5" />
            Solutions
          </div>
          <h2 className="text-3xl font-black tracking-[-0.05em] text-[#111827] sm:text-5xl">
            Purpose-built solutions for resilient operations.
          </h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {solutionCards.map((solution, index) => (
            <motion.article
              key={solution.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[2rem] border border-[#D8E1EC] bg-white shadow-[0_30px_70px_rgba(0,27,61,0.04)]"
            >
              <div className="overflow-hidden">
                <img src={solution.image} alt={solution.title} className="h-64 w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF1FB] text-sm font-black text-[#004090]">{index + 1}</div>
                <h3 className="text-2xl font-bold text-[#111827]">{solution.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#5B6472]">{solution.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="industries" className="bg-[radial-gradient(circle_at_top_left,_rgba(0,64,144,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(208,32,48,0.05),transparent_22%),linear-gradient(135deg,#f8fbff_0%,#edf5ff_38%,#ffffff_100%)] py-24 text-[#111827]">
        <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealUp} className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#004090]/15 bg-[#EAF1FB] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#004090]">
              <Building2 className="h-3.5 w-3.5" />
              Industries
            </div>
            <h2 className="text-3xl font-black tracking-[-0.05em] text-[#111827] sm:text-5xl">
              Powering the sectors that shape Bangladesh.
            </h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {industries.map(({ title, icon: Icon }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-[1.8rem] border border-[#D8E1EC] bg-white/90 p-6 shadow-[0_25px_60px_rgba(0,27,61,0.08)] transition hover:-translate-y-1 hover:border-[#004090]/30"
              >
                <div className="mb-5 inline-flex rounded-2xl border border-[#004090]/15 bg-[#EAF1FB] p-3 text-[#004090]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#111827]">{title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-[1700px] px-4 py-24 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealUp} className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-700">
            <Globe2 className="h-3.5 w-3.5" />
            Projects & clients
          </div>
          <h2 className="text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-5xl">
            Proven delivery in high-stakes environments.
          </h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]"
            >
              <div className="overflow-hidden">
                <img src={project.image} alt={project.title} className="h-64 w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="mb-3 inline-flex rounded-full bg-sky-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700">{project.meta}</div>
                <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{project.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="global-presence" className="bg-slate-100 py-24">
        <div className="mx-auto grid max-w-[1700px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-700">
              <Globe2 className="h-3.5 w-3.5" />
              Global presence
            </div>
            <h2 className="text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-5xl">
              International expertise with local commitment.
            </h2>
            <p className="mt-6 max-w-[620px] text-lg leading-8 text-slate-600">
              Our engineering approach is shaped by international standards while remaining grounded in Bangladesh’s operational realities and service needs.
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Global engineering support and service reach',
                'Regional product portfolio aligned to local demand',
                'Trusted by critical sectors across fast-growing economies',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 text-sky-600" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
            <img src="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80" alt="Global technology and power infrastructure" className="h-full min-h-[430px] w-full rounded-[1.5rem] object-cover" />
          </motion.div>
        </div>
      </section>

      <section id="bangladesh" className="mx-auto max-w-[1700px] px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2.2rem] border border-[#D8E1EC] bg-[radial-gradient(circle_at_top_left,_rgba(0,64,144,0.10),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(208,32,48,0.06),transparent_20%),linear-gradient(135deg,#f8fbff_0%,#edf5ff_42%,#ffffff_100%)] p-8 text-[#111827] shadow-[0_30px_80px_rgba(0,27,61,0.08)] lg:grid-cols-[1fr_0.9fr] lg:p-12">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#004090]/15 bg-[#EAF1FB] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#004090]">
              <MapPin className="h-3.5 w-3.5" />
              Bangladesh office
            </div>
            <h2 className="max-w-[700px] text-3xl font-black tracking-[-0.05em] text-[#111827] sm:text-5xl">
              Local expertise, rapid support, and reliable execution.
            </h2>
            <p className="mt-6 max-w-[620px] text-lg leading-8 text-[#5B6472]">
              EPI UPS Bangladesh supports clients across Dhaka, Chattogram, Khulna, and beyond with technical guidance, on-site support, and after-sales service.
            </p>

            <div className="mt-8 space-y-4">
              {officeHighlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-[#D8E1EC] bg-white/90 p-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#004090]" />
                  <span className="text-[#111827]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.08 }} className="rounded-[1.8rem] border border-[#D8E1EC] bg-white/90 p-6 shadow-[0_25px_70px_rgba(0,27,61,0.08)]">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-[0.26em] text-[#004090]">Dhaka service area</div>
                <p className="mt-2 text-xl font-bold text-[#111827]">Bangladesh</p>
              </div>
              <div className="rounded-full border border-[#004090]/15 bg-[#EAF1FB] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#004090]">
                Active
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#D8E1EC] bg-[#F5F8FC] p-4">
              <svg viewBox="0 0 320 220" className="h-[240px] w-full" aria-label="Map highlighting Dhaka, Bangladesh" role="img">
                <path
                  d="M128 18L148 24L162 18L182 24L194 18L210 26L228 22L250 34L272 44L286 62L282 82L292 100L284 122L268 134L278 150L262 178L242 190L230 206L202 200L188 188L176 198L154 190L138 200L122 192L110 176L88 170L72 152L62 128L76 112L82 92L98 86L104 70L96 54L108 42L118 28L128 18Z"
                  fill="#EAF1FB"
                  stroke="#004090"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                />
                <path d="M150 95L172 88L182 98L170 112L154 108L146 100L150 95Z" fill="#D8E1EC" />
                <circle cx="170" cy="103" r="6" fill="#D02030" />
                <circle cx="170" cy="103" r="14" fill="rgba(208,32,48,0.12)" />
                <text x="188" y="106" fill="#001B3D" fontSize="16" fontWeight="700">Dhaka</text>
              </svg>
            </div>

            <div className="mt-6 space-y-5 text-sm text-[#111827]">
              <div>
                <div className="text-[10px] uppercase tracking-[0.26em] text-[#004090]">Office</div>
                <p className="mt-2 text-base font-medium text-[#111827]">Dhaka, Bangladesh</p>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.26em] text-[#004090]">Phone</div>
                <a href="tel:+8801700000000" className="mt-2 inline-block text-base font-medium text-[#001B3D]">+880 1700-000000</a>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.26em] text-[#004090]">Email</div>
                <a href="mailto:info@epiupsbd.com" className="mt-2 inline-block text-base font-medium text-[#001B3D]">info@epiupsbd.com</a>
              </div>
            </div>

            <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#004090] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#003a7a]">
              Talk to our team
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="bg-slate-100 py-24">
        <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-700">
                <PhoneCall className="h-3.5 w-3.5" />
                Contact
              </div>
              <h2 className="text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-5xl">
                Ready to secure your critical power infrastructure?
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Whether you need a UPS upgrade, a full industrial power solution, or a consultation for mission-critical continuity, our team is here to advise.
              </p>

              <div className="mt-8 space-y-4 text-base text-slate-700">
                <div className="flex items-center gap-3">
                  <PhoneCall className="h-5 w-5 text-sky-600" />
                  <a href="tel:+8801700000000">+880 1700-000000</a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-sky-600" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_25px_60px_rgba(15,23,42,0.06)] sm:p-8">
              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Full name</label>
                    <input type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Company</label>
                    <input type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100" placeholder="Company name" />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100" placeholder="you@company.com" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Project requirements</label>
                  <textarea rows={5} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100" placeholder="Tell us about your power protection needs" />
                </div>

                <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-600">
                  Send inquiry
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      
    </main>
  );
};
