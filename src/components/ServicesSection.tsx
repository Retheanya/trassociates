import { Button } from '@/components/ui/button';
import { Users, Lightbulb, Layers } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Planning',
    description: 'Our master plans provide a comprehensive look at where an organization is today.'
  },
  {
    icon: Lightbulb,
    title: 'Interior',
    description: 'You may engage your architect to provide an interior design service, advising on loose furniture.'
  },
  {
    icon: Layers,
    title: 'Exterior',
    description: 'Working together with your architect, you will share your project needs, dreams and goals.'
  }
];

export const ServicesSection = () => {
  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/95807c52-0bd6-45f8-993f-c17c64093047.png')`
      }}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm font-light tracking-widest uppercase text-white/80 mb-4">
            SERVICES
          </p>
          <h2 className="text-5xl md:text-6xl font-light tracking-wide text-white">
            This is what we do.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.title}
                className="bg-white p-12 text-center group hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-8">
                  <IconComponent className="h-16 w-16 mx-auto text-arch-black stroke-1" />
                </div>
                
                <h3 className="text-2xl font-light tracking-wide text-arch-black mb-6">
                  {service.title}
                </h3>
                
                <p className="text-arch-medium font-light leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <Button variant="outline" size="arch" className="group-hover:bg-arch-black group-hover:text-white">
                  READ
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};