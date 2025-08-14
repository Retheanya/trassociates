import { Button } from '@/components/ui/button';
import archInterior1 from '@/assets/arch-interior-1.jpg';
import archExterior1 from '@/assets/arch-exterior-1.jpg';
import archConcept1 from '@/assets/arch-concept-1.jpg';
import archInterior2 from '@/assets/arch-interior-2.jpg';

const projects = [
  {
    id: 1,
    image: archInterior1,
    title: 'Seascape Villa',
    location: 'Aqaba, Jordan',
    category: 'Residential'
  },
  {
    id: 2,
    image: archExterior1,
    title: 'European Land Station',
    location: 'Strasbourg, France',
    category: 'Commercial'
  },
  {
    id: 3,
    image: archConcept1,
    title: 'Yabroudi Villa',
    location: 'Dubai, United Arab Emirates',
    category: 'Residential'
  },
  {
    id: 4,
    image: archInterior2,
    title: 'Cultural Complex Centre',
    location: 'Muscat, Sultanate of Oman',
    category: 'Cultural'
  },
  {
    id: 5,
    image: archInterior1,
    title: 'Dalbourne Villa',
    location: 'Guangzhou, China',
    category: 'Residential'
  },
  {
    id: 6,
    image: archExterior1,
    title: 'Amman Rotana Hotel',
    location: 'Amman, Jordan',
    category: 'Hospitality'
  }
];

export const ProjectsSection = () => {
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
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-8">
                  <div className="arch-line mb-4 transition-all duration-300 group-hover:w-16" />
                  <h3 className="text-xl font-light tracking-wide text-arch-black mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm font-light tracking-wide text-arch-medium mb-4">
                    {project.location}
                  </p>
                  <span className="text-xs font-light tracking-widest uppercase text-arch-accent">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-arch-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    variant="arch" 
                    size="arch"
                    onClick={() => window.location.href = `/projects/${project.id}`}
                  >
                    VIEW PROJECT
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '900ms' }}>
          <Button variant="arch" size="arch-lg">
            VIEW ALL PROJECTS
          </Button>
        </div>
      </div>
    </section>
  );
};