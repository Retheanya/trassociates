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

export const ServicesSection = () => {
  return (
    <motion.section
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-12 md:py-20 bg-content-light"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-10 md:mb-16">
          <p className="text-xs sm:text-sm font-light tracking-widest uppercase text-arch-medium mb-3 sm:mb-4">
            WE STAND FOR
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-wide text-arch-black leading-tight">
            Having an idea. Creating spaces.
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className="group cursor-pointer"
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <div className="relative overflow-hidden bg-white rounded-[2rem] shadow-lg border border-arch-light/80">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Icon Overlay */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg group-hover:bg-white group-hover:scale-110 arch-transition">
                      <IconComponent className="w-6 h-6 text-arch-accent" />
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="arch-line mb-4 transition-all duration-300 group-hover:w-16" />
                    <h3 className="text-xl font-light tracking-wide text-arch-black mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm font-light tracking-wide text-arch-medium mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-arch-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="arch"
                      size="arch"
                      onClick={() => window.location.href = `/services/${project.id}`}
                    >
                      View Service
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Load More Button */}
        {/* <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '900ms' }}>
          <Button variant="arch" size="arch-lg">
            VIEW ALL PROJECTS
          </Button>
        </div> */}
      </div>
    </motion.section>
  );
};