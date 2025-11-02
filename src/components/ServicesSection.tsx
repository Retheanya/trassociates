import { Button } from '@/components/ui/button';
import servicesData from '@/data/services.json';
import { getImageFromName } from '@/utils/imageMapper';
import { Building2, HardHat, FileText, MapPin, TestTube, Home, Shield, Factory, ClipboardCheck, DollarSign } from 'lucide-react';

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
  'Property Valuers': DollarSign,
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
    <section className="py-20 bg-content-light">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm font-light tracking-widest uppercase text-arch-medium mb-4">
            WE STAND FOR
          </p>
          <h2 className="text-5xl md:text-6xl font-light tracking-wide text-arch-black">
            Having an idea. Creating spaces.
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={project.id}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden bg-white">
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
              </div>
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
    </section>
  );
};