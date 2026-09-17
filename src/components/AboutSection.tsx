import {
  Target,
  Heart,
  TrendingUp,
  Users,
  ArrowUpRight,
  Plus,
  ChevronDown,
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import archInterior1 from '@/assets/gallery7.jpeg';

const features = [
  {
    icon: Target,
    number: '01',
    title: 'Precision',
    description:
      'Every project is executed with disciplined planning, certified materials, and uncompromising attention to detail.',
  },
  {
    icon: Heart,
    number: '02',
    title: 'Integrity',
    description:
      'Transparent communication, honest pricing, and dependable execution from concept through completion.',
  },
  {
    icon: TrendingUp,
    number: '03',
    title: 'Innovation',
    description:
      'Contemporary construction methods combined with practical architectural thinking for lasting results.',
  },
  {
    icon: Users,
    number: '04',
    title: 'Collaboration',
    description:
      'Working closely with clients, architects, engineers, and craftsmen to bring every vision to life.',
  },
];

const stats = [
  { number: '10+', label: 'Years of Experience' },
  { number: '25+', label: 'Projects Delivered' },
  { number: '16', label: 'New Buildings' },
  { number: '09', label: 'Renovations' },
];

const AnimatedStat = ({ stat }: { stat: { number: string; label: string } }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const target = Number.parseInt(stat.number.replace(/[^\d]/g, ''), 10) || 0;
    const duration = 1400;
    let animationFrame = 0;
    const startTime = performance.now();

    const animateValue = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;

      setDisplayValue(Math.round(target * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateValue);
      }
    };

    animationFrame = requestAnimationFrame(animateValue);

    return () => cancelAnimationFrame(animationFrame);
  }, [stat.number]);

  const hasPlus = stat.number.includes('+');

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group relative border-b border-[#d5d1ca] px-5 py-10 lg:border-b-0 lg:py-12"
    >
      <div className="flex items-start justify-between">
        <span className="text-[clamp(2.5rem,5vw,5rem)] font-light leading-none tracking-[-0.06em]">
          {displayValue}
          {hasPlus && '+'}
        </span>

        <Plus
          className="h-4 w-4 text-[#aaa] transition-transform duration-300 group-hover:rotate-90"
        />
      </div>

      <p className="mt-8 max-w-[150px] text-[10px] font-semibold uppercase leading-relaxed tracking-[0.22em] text-[#888]">
        {stat.label}
      </p>
    </motion.div>
  );
};

export const AboutSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <section className="relative overflow-hidden bg-[#f5f3ef] text-[#171717]">

      {/* =====================================================
          INTRO
      ===================================================== */}
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 lg:px-16 lg:py-32">

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.7fr]"
        >

          {/* Small editorial label */}
          <motion.div variants={fadeInUp} className="flex items-start">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#171717]" />

              <span className="text-xl font-semibold uppercase tracking-[0.35em] text-[#777]">
                About TR Associates
              </span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={fadeInUp}>
            <h2 className="max-w-5xl text-[clamp(3rem,7vw,7rem)] font-light leading-[0.9] tracking-[-0.055em]">
              Building spaces
              <br />

              <span className="italic text-[#777]">
                that stand apart.
              </span>
            </h2>

            <div className="mt-10 max-w-3xl">
              <p className="text-lg font-light leading-relaxed text-[#555] md:text-xl">
                TR ASSOCIATES is a Coimbatore-based construction company
                delivering residential, commercial, renovation, and
                hill-station projects across Tamil Nadu.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
          IMAGE + STORY
      ===================================================== */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.45fr_0.75fr]">

          {/* Large architectural image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.15 }}
            className="relative h-[500px] overflow-hidden md:h-[650px]"
          >
            <motion.img
              src={archInterior1}
              alt="TR Associates architectural construction project"
              style={{
                y: imageY,
                scale: imageScale,
              }}
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Image label */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white md:bottom-8 md:left-8 md:right-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] opacity-70">
                  Selected Work
                </p>

                <p className="mt-2 text-lg font-light">
                  Architecture & Construction
                </p>
              </div>

              <motion.div
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.3 }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/50 backdrop-blur-sm"
              >
                <ArrowUpRight className="h-5 w-5" />
              </motion.div>
            </div>
          </motion.div>

          {/* Story */}
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-between"
          >

            <div>
              <motion.div variants={fadeInUp}>
                <p className="text-xl font-semibold uppercase tracking-[0.3em] text-black">
                  Our Approach
                </p>

                <div className="mt-8 space-y-7 text-[15px] leading-[1.9] text-[#5b5b5b]">
                  <p>
                    With more than a decade of experience, TR ASSOCIATES has
                    developed a reputation for dependable construction,
                    thoughtful execution, and quality craftsmanship.
                  </p>

                  <p>
                    Our experience extends into the challenging environments
                    of the Nilgiris, including bungalow renovations and
                    institutional buildings across Ooty, Wellington, and
                    Kothagiri.
                  </p>

                  <p>
                    From new homes and commercial spaces to renovation and
                    waterproofing solutions, our team manages projects with a
                    focus on quality, transparency, and long-term performance.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Location */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 border-t border-[#d5d1ca] pt-6"
            >
              <div className="flex justify-between gap-6 text-xs uppercase tracking-[0.2em] text-[#888]">
                <span>Based in</span>
                <span className="text-right text-[#222]">
                  Coimbatore, Tamil Nadu
                </span>
              </div>

              <div className="mt-4 flex justify-between gap-6 text-xs uppercase tracking-[0.2em] text-[#888]">
                <span>Serving</span>
                <span className="text-right text-[#222]">
                  Coimbatore · Ooty · Coonoor
                  <br />
                  Tiruppur · Pollachi
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          STATS
      ===================================================== */}
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 lg:px-16 lg:py-32">

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 border-t border-[#d5d1ca] lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={index !== 0 ? 'lg:border-l lg:border-[#d5d1ca]' : ''}
            >
              <AnimatedStat stat={stat} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* =====================================================
          VALUES
      ===================================================== */}
      <div className="bg-[#171717] text-white">

        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 lg:px-16 lg:py-32">

          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >

            {/* Header */}
            <motion.div
              variants={fadeInUp}
              className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
            >
              <div>
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/40">
                  What Defines Us
                </p>

                <h3 className="max-w-3xl text-[clamp(2.5rem,5vw,5rem)] font-light leading-[0.95] tracking-[-0.05em]">
                  Principles behind
                  <br />
                  <span className="italic text-white/40">
                    every project.
                  </span>
                </h3>
              </div>

              <p className="max-w-sm text-sm leading-7 text-white/50">
                A construction approach built around quality, accountability,
                communication, and a continuous pursuit of better solutions.
              </p>
            </motion.div>

            {/* Feature accordion */}
            <Accordion type="single" collapsible className="border-t border-white/10">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <AccordionItem
                    key={feature.title}
                    value={feature.title}
                    className="border-b border-white/10"
                  >
                    <AccordionTrigger className="group w-full items-center gap-5 px-0 py-5 text-left hover:no-underline md:py-7">
                      <div className="flex w-full items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-xs text-white/30">
                            {feature.number}
                          </span>

                          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.02]">
                            <Icon className="h-4 w-4 text-white/70" />
                          </div>
                        </div>

                        <div className="flex flex-1 items-center justify-between gap-4">
                          <h4 className="text-xl font-light md:text-2xl">
                            {feature.title}
                          </h4>

                          <ChevronDown className="h-4 w-4 text-white/60 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                        </div>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="px-0 pb-8 md:pb-10">
                      <div className="pl-14 md:pl-16">
                        <p className="max-w-2xl text-sm leading-7 text-white/60 md:text-[15px]">
                          {feature.description}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          MOTTO
      ===================================================== */}
      <div className="bg-[#f5f3ef]">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-[1200px] px-6 py-28 text-center md:px-10 lg:py-40"
        >

          <p className="mb-8 text-base font-semibold uppercase tracking-[0.4em] text-[#999]">
            Our Motto
          </p>

          <blockquote className="text-[clamp(2.2rem,5vw,5.5rem)] font-light leading-[1] tracking-[-0.045em]">
            Serving you with <span className="italic text-[#888]">
           safe & aesthetic
            </span>
         

            

            <br />

            infrastructure.
          </blockquote>

          
        </motion.div>
      </div>

    </section>
  );
};