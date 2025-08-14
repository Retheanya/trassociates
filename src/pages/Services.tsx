import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import archConcept1 from '@/assets/arch-concept-1.jpg';
import archInterior2 from '@/assets/arch-interior-2.jpg';

const services = [
  {
    title: 'Planning',
    description: 'Our master plans provide a comprehensive look at where an organization is today.',
    link: '/planning'
  },
  {
    title: 'Interior',
    description: 'You may engage your architect to provide an interior design service, advising on loose furniture.',
    link: '/interior'
  },
  {
    title: 'Exterior',
    description: 'Working together with your architect, you will share your project needs, dreams and goals.',
    link: '/exterior'
  },
  {
    title: 'Restoration',
    description: 'Describes a particular treatment approach and philosophy within the field of architectural conservation',
    link: '/restoration'
  },
  {
    title: 'Building',
    description: 'When the design concepts have been decided, the architect prepares working drawings and specifications.',
    link: '/building'
  },
  {
    title: 'Consultation',
    description: 'We provide expert consultation services for all phases of architectural development.',
    link: '/consultation'
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={archConcept1}
          alt="Services Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-arch-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white animate-fade-in-up">
            <p className="text-sm font-light tracking-widest uppercase mb-4">
              WE PROPOSE
            </p>
            <h1 className="text-5xl md:text-6xl font-light tracking-wide">
              Best services
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-content-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-20">
            <div className="text-center animate-fade-in-up">
              <p className="text-sm font-light tracking-widest uppercase text-arch-medium mb-4">
                OUR BASICS
              </p>
              <h2 className="text-4xl md:text-5xl font-light tracking-wide text-arch-black mb-8">
                Transform knowledge into creative potential.
              </h2>
              <div className="text-lg font-light leading-relaxed text-arch-medium">
                <p>
                  The company principle of Prague is the collective conception. From the very beginning,
                  the practice has believed in the virtues of exchange, crossing ideas, common effort,
                  shared knowledge and enthusiasm. Prague studio believes in a socially engaged
                  architecture. This approach is nourished by the numerous worldwide achievements made
                  over the last forty years, and by a constant attention to the quality of public spaces
                  and new uses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Banner */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={archInterior2}
          alt="Services Middle Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-arch-black/40" />
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-content-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-sm font-light tracking-widest uppercase text-arch-medium mb-4">
              SERVICES
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-arch-black">
              This is what we do.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="arch-line mb-6" />
                <h3 className="text-xl font-light tracking-wide text-arch-black mb-4">
                  {service.title}
                </h3>
                <p className="text-arch-medium font-light leading-relaxed mb-6">
                  {service.description}
                </p>
                <Button variant="arch-minimal">
                  READ
                </Button>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20 animate-fade-in" style={{ animationDelay: '900ms' }}>
            <Button variant="arch" size="arch-lg">
              GET CONSULTATION
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;