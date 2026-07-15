import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import servicesData from '@/data/services.json';
import { getImageFromName } from '@/utils/imageMapper';
import { Building2, HardHat, FileText, MapPin, TestTube, Home, Shield, Factory, ClipboardCheck, IndianRupee as RupeeIcon, ShieldCheck, Award } from 'lucide-react';
import { fadeIn, fadeInUp, staggerContainer } from '@/lib/motion';

// Map service titles to icons
const iconMap: Record<string, typeof Building2> = {
  'RCC Design Detailing Services': Building2,
  'Steel Detailing Services': HardHat,
  'Import Export License Consultants': FileText,
  'Land Surveyors': MapPin,
  'Soil Testing': TestTube,
  'Building Plan': Home,
  'Structural Stability Certificates': Shield,
  'Industrial Structural Designing': Factory,
  'Structural Stability Assessment': ClipboardCheck,
  'Property Valuers': RupeeIcon,
  'COMPETENT ENGINEER/DISH, GOVT OF TAMILNADU': ShieldCheck,
  'DISTRICT COLLECTOR’S PANEL OF ENGINEERS – CLASS 1A': Award,
};

const projects = servicesData.projects.map(project => ({
  id: project.id,
  image: getImageFromName(project.imageName),
  title: project.title,
  description: project.serviceDescription,
  icon: iconMap[project.title] || Building2,
}));

export const HomeServices = () => {
  return (
    <motion.section
      variants={staggerContainer(0.14)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-12 md:py-20 bg-[#fbf6f1]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-arch-black">Our Services</h2>
          <p className="mt-3 text-lg text-arch-medium">Comprehensive construction solutions tailored to your needs</p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-10 h-1 bg-arch-accent rounded" />
            <div className="w-6 h-1 bg-green-500 rounded" />
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className="h-full"
              >
                <div className="bg-white rounded-3xl p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl arch-transition h-full flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg mb-4">
                      <IconComponent className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-arch-black mb-2">{project.title}</h3>
                    <p className="text-sm text-arch-medium mb-4">{project.description}</p>
                  </div>

                  <div>
                    <a href={`/services/${project.id}`} className="text-[hsl(var(--brand-orange))] font-medium hover:underline">
                      Learn More →
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};