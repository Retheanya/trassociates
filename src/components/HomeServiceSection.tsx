
import { useMemo, useState } from 'react';
import {
  Award,
  Building2,
  ClipboardCheck,
  Compass,
  Factory,
  FileCheck2,
  FileText,
  FlaskConical,
  Landmark,
  Ruler,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

type Service = {
  title: string;
  description: string;
  category: string;
  icon: typeof Compass;
};

const CATEGORIES = [
  'All',
  'Design & Detailing',
  'Site Investigation',
  'Certification & Compliance',
  'Licensing & Panels',
] as const;

const cardHeights = [
  300, 380, 330, 360, 340, 400, 325, 360, 335, 390, 340, 410,
] as const;

const services: Service[] = [
  {
    title: 'RCC Design Detailing',
    description:
      'RCC design and detailing for residential and commercial structures, ready for site execution.',
    category: 'Design & Detailing',
    icon: Building2,
  },
  {
    title: 'Steel Detailing',
    description:
      'Structural steel detailing and engineering drawings for industrial projects.',
    category: 'Design & Detailing',
    icon: Factory,
  },
  {
    title: 'Building Plan',
    description:
      'Building plans and architectural drawings, prepared for approval and construction.',
    category: 'Design & Detailing',
    icon: Ruler,
  },
  {
    title: 'Industrial Structural Designing',
    description:
      'Structural design for industrial and manufacturing facilities, built to load and code.',
    category: 'Design & Detailing',
    icon: Compass,
  },
  {
    title: 'Land Surveyors',
    description:
      'Land surveys carried out with modern instruments, accurate to the centimetre.',
    category: 'Site Investigation',
    icon: Compass,
  },
  {
    title: 'Soil Testing',
    description:
      'Soil analysis and bearing-capacity testing before you break ground.',
    category: 'Site Investigation',
    icon: FlaskConical,
  },
  {
    title: 'Structural Stability Certificates',
    description:
      'Official stability certification and compliance documentation for your structure.',
    category: 'Certification & Compliance',
    icon: FileCheck2,
  },
  {
    title: 'Structural Stability Assessment',
    description:
      'Condition assessment of existing buildings, with a clear report on what needs attention.',
    category: 'Certification & Compliance',
    icon: ClipboardCheck,
  },
  {
    title: 'Import Export License Consultants',
    description:
      'Guidance through import-export licensing and the regulatory paperwork that comes with it.',
    category: 'Licensing & Panels',
    icon: FileText,
  },
  {
    title: 'Property Valuers',
    description:
      'Property valuation for residential and commercial holdings, documented for official use.',
    category: 'Licensing & Panels',
    icon: Landmark,
  },
  {
    title: 'Competent Engineer, DISH Tamil Nadu',
    description:
      'Authorised competent-engineer services, approved by DISH, Government of Tamil Nadu.',
    category: 'Licensing & Panels',
    icon: ShieldCheck,
  },
  {
    title: "District Collector's Panel — Class 1A",
    description:
      "Engineering services delivered under the District Collector's Class 1A registered panel.",
    category: 'Licensing & Panels',
    icon: Award,
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
  const Icon = service.icon;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{
        duration: 0.65,
        delay: index * 0.045,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8, scale: 1.01 }}
      style={{ minHeight: `${cardHeights[index] ?? 340}px` }}
      className="group relative overflow-hidden border border-[#352f2a] bg-[#120f0d] p-6 shadow-[0_22px_55px_rgba(0,0,0,0.22)] transition-all duration-500 md:p-7"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(184,144,95,0.22),transparent_36%),linear-gradient(180deg,_rgba(255,255,255,0.02),rgba(0,0,0,0.12))]" />

      <motion.div
        initial={{ y: '100%' }}
        whileHover={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(184,144,95,0.26),rgba(18,15,13,0.96))]"
      />

      <div className="relative z-10 flex items-start justify-between">
        <span className="font-mono text-[10px] tracking-[0.3em] text-[#b7ada2] transition-colors duration-500 group-hover:text-[#f8e8cf]">
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#564c45] bg-[#191612] transition-all duration-500 group-hover:border-[#d9b786] group-hover:bg-[#d9b786]/10">
          <Icon className="h-5 w-5 text-[#f5efe8] transition-colors duration-500 group-hover:text-[#f1d3a3]" />
        </div>
      </div>

      <div className="relative z-10 mt-14">
        <div className="mb-4 h-px w-10 bg-[#9d8572] transition-all duration-500 group-hover:w-16 group-hover:bg-[#f1d3a3]" />

        <h3 className="max-w-[300px] font-serif text-[clamp(1.5rem,2.2vw,2.4rem)] leading-[1] tracking-[-0.05em] text-[#f6efe7] transition-colors duration-500 group-hover:text-white">
          {service.title}
        </h3>

        <p className="mt-4 max-w-[300px] text-sm leading-6 text-[#cdc3b8] transition-colors duration-500 group-hover:text-[#f8ebdd]">
          {service.description}
        </p>
      </div>

      <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between md:bottom-6 md:left-6 md:right-6">
        <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#b8aea4] transition-colors duration-500 group-hover:text-[#f8e8cf]">
          {service.category}
        </span>

        <motion.div
          whileHover={{ rotate: 45 }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#5a4a41] bg-[#1a1613] transition-all duration-500 group-hover:border-[#f1d3a3] group-hover:bg-[#f1d3a3]/10"
        >
          <ArrowUpRight className="h-4 w-4 text-[#f7f2ec] transition-colors duration-500 group-hover:text-[#f1d3a3]" />
        </motion.div>
      </div>

      <div className="absolute right-0 top-0 h-16 w-16 border-l border-b border-[#453d37] transition-colors duration-500 group-hover:border-[#d9b786]/40" />
    </motion.article>
  );
};

export const HomeServiceSection = () => {
  const [active, setActive] =
    useState<(typeof CATEGORIES)[number]>('All');

  const shouldReduceMotion = useReducedMotion();

  const filtered = useMemo(
    () =>
      active === 'All'
        ? services
        : services.filter((service) => service.category === active),
    [active],
  );

  return (
    <section className="relative overflow-hidden bg-[#0b0a09] py-24 text-[#f5efe8] md:py-32 lg:py-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(217,183,134,0.14) 1px, transparent 1px),
            linear-gradient(90deg, rgba(217,183,134,0.14) 1px, transparent 1px)
          `,
          backgroundSize: '94px 94px',
        }}
      />

      <div className="pointer-events-none absolute left-[7%] top-0 hidden h-full w-px bg-[#d9b786]/15 lg:block" />

      <div className="relative mx-auto max-w-[1420px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="mb-7 flex items-center gap-4"
            >
              <span className="h-px w-12 bg-[#d9b786]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.38em] text-[#b9aaa0]">
                04 — Our Expertise
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                initial={shouldReduceMotion ? undefined : { y: '100%' }}
                whileInView={shouldReduceMotion ? undefined : { y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-serif text-[clamp(4.2rem,9vw,8.8rem)] leading-[0.8] tracking-[-0.07em] text-[#f7f1ea]"
              >
                Services
              </motion.h2>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:pb-1"
          >
            <p className="max-w-xl text-base leading-8 text-[#c6bcb3] md:text-lg">
              From structural design and detailing to site investigation,
              certification and statutory consultancy — we bring technical
              precision to every stage of the built environment.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 origin-left border-t border-[#3d322d]"
        />

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#a18d81]">
              Explore
            </span>

            <div className="h-px w-8 bg-[#625750]" />
          </div>

          <div className="flex flex-wrap gap-2.5">
            {CATEGORIES.map((category) => {
              const isActive = active === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(category)}
                  className={`group relative rounded-full border px-4 py-2.5 text-left transition-all duration-300 ${
                    isActive
                      ? 'border-[#d9b786] bg-[#d9b786] text-[#14110f] shadow-[0_18px_35px_rgba(217,183,134,0.15)]'
                      : 'border-[#362f2c] bg-[#171412] text-[#d0cac3] hover:border-[#d9b786] hover:text-[#f6efe7]'
                  }`}
                >
                  <span className="text-[10px] uppercase tracking-[0.18em]">
                    {category}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          layout
          className="mt-14 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

       
      </div>
    </section>
  );
};
