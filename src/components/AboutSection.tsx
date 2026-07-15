import { Award, Target, Users, Heart, TrendingUp, Clock, IndianRupee, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, staggerContainer } from '@/lib/motion';
import archInterior1 from '@/assets/gallery7.jpeg';

const features = [
  { icon: Target, title: 'Quality', description: 'ISI-certified materials and expert craftsmanship in every project' },
  { icon: Heart, title: 'Integrity', description: 'Transparent pricing with no hidden costs throughout the process' },
  { icon: TrendingUp, title: 'Innovation', description: 'Modern construction techniques and contemporary designs' },
  { icon: Users, title: 'Transparency', description: 'Regular updates and open communication at every stage' }
];

const stats = [
  { number: '10+', label: 'Years Experience' },
  { number: '25+', label: 'Projects Completed' },
  { number: '16', label: 'New Buildings' },
  { number: '9', label: 'Renovations' }
];

export const AboutSection = () => {
  return (
    <motion.section
      variants={staggerContainer(0.15)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-arch-black">About <span className="inline-flex items-baseline gap-0">
            
            <span className="ml-2 font-bold">TR Associates</span>
          </span></h2>
          <p className="text-lg text-arch-medium mt-3">10+ years of expertise in residential, commercial, and hill station construction across Coimbatore, Ooty, Coonoor, Tiruppur & Pollachi.</p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-10 h-1 bg-arch-accent rounded" />
            <div className="w-6 h-1 bg-green-500 rounded" />
          </div>
        </motion.div>

        {/* Main two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: description + features */}
          <div className="space-y-6">
            <div className="prose max-w-none text-arch-medium">
              <p>
                <span className="font-bold">TR ASSOCIATES</span> is a Coimbatore-based construction company with over 10 years of experience delivering residential, commercial, and renovation projects. With 25+ completed projects including 16 new buildings and 9 renovations, we have built a strong reputation for quality and reliability.
              </p>
              <p className="leading-relaxed">
                We specialize in high-risk hill station construction across the Nilgiris — including bungalow renovations, school buildings in Ooty, Wellington and Kothagiri. Our notable projects include major clients like NKP Textile and Velammal Ology School.
              </p>
              <p className="leading-relaxed">
                From residential homes to commercial spaces, renovation to waterproofing solutions — <span className="font-bold">TR ASSOCIATES</span> provides end-to-end construction services with transparent pricing and quality craftsmanship.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    variants={fadeIn}
                    className="flex items-start gap-4 rounded-3xl border border-arch-light/70 bg-[#fffaf0] p-4 shadow-sm"
                  >
                      <div className="flex-shrink-0 bg-white p-3 rounded-2xl shadow-sm">
                        <Icon className="w-6 h-6 text-[hsl(var(--brand-green))]" />
                      </div>
                      <div>
                        <div className="font-semibold text-arch-black text-base">{f.title}</div>
                        <div className="text-base text-arch-medium">{f.description}</div>
                      </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Stats grid + video */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={fadeInUp}
                  className="bg-[#f6efe9] rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--brand-orange))]">{s.number}</div>
                  <div className="text-sm md:text-base text-arch-medium mt-2">{s.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={archInterior1}
                  alt="TR Associates construction work"
                  className="w-full h-56 md:h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Callout / mission */}
        <motion.div variants={fadeInUp} className="mt-12 text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-arch-black italic">
            "We Believe In Serving You The Safe And Aesthetic Infrastructure Development"
          </blockquote>
          <p className="text-sm text-arch-medium text-black mt-2">— <span className="font-bold"><span className="font-bold text-black">T</span><span className="font-bold text-black">R</span> Associates</span></p>
        </motion.div>
      </div>
    </motion.section>
  );
};

