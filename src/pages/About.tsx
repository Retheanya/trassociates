import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import archExterior1 from '@/assets/arch-exterior-1.jpg';
import archInterior1 from '@/assets/arch-interior-1.jpg';

const teamMembers = [
  {
    name: 'Marry Hopkins',
    role: 'Architectural Technician',
    image: archInterior1
  },
  {
    name: 'Alfred Howard',
    role: 'Architectural Drafter',
    image: archExterior1
  },
  {
    name: 'Thomas Fress',
    role: 'Art Director',
    image: archInterior1
  },
  {
    name: 'Hank Howard',
    role: 'Art Director',
    image: archExterior1
  },
  {
    name: 'Emily Ratajkovski',
    role: 'Architect',
    image: archInterior1
  },
  {
    name: 'Julia Traplin',
    role: 'Architectural Technician',
    image: archExterior1
  }
];

const services = [
  {
    title: 'Planning',
    description: 'Our master plans provide a comprehensive look at where an organization is today.'
  },
  {
    title: 'Interior',
    description: 'You may engage your architect to provide an interior design service, advising on loose furniture.'
  },
  {
    title: 'Exterior',
    description: 'Working together with your architect, you will share your project needs, dreams and goals.'
  },
  {
    title: 'Restoration',
    description: 'Describes a particular treatment approach and philosophy within the field of architectural conservation'
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={archExterior1}
          alt="About Us Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-arch-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white animate-fade-in-up">
            <p className="text-sm font-light tracking-widest uppercase mb-4">
              ABOUT OUR ARCHITECTS
            </p>
            <h1 className="text-5xl md:text-6xl font-light tracking-wide">
              We are based on collective work and shared knowledge
            </h1>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-arch-black text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '157', label: 'PROJECTS DONE' },
              { number: '86', label: 'HAPPY CLIENTS' },
              { number: '924', label: 'WORKING HOURS' },
              { number: '13', label: 'AWARDS' }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <h3 className="text-4xl md:text-5xl font-light mb-2">{stat.number}</h3>
                <p className="text-xs font-light tracking-widest uppercase text-white/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-content-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <p className="text-sm font-light tracking-widest uppercase text-arch-medium mb-4">
                NUMBERS
              </p>
              <h2 className="text-4xl md:text-5xl font-light tracking-wide text-arch-black mb-8">
                Make with love all what we do.
              </h2>
              <div className="space-y-6 text-lg font-light leading-relaxed text-arch-medium">
                <p>
                  Our team takes over everything, from an idea and concept development to realization.
                  We believe in traditions and incorporate them within our innovations. All our
                  projects incorporate a unique artistic image and functional solutions.
                </p>
                <p>
                  Client is the soul of the project. Our main goal is to illustrate his/hers values
                  and individuality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-content-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-sm font-light tracking-widest uppercase text-arch-medium mb-4">
              TEAM
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-arch-black">
              Experts ready to serve.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-square overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs font-light tracking-widest uppercase text-arch-medium mb-2">
                  {member.role}
                </p>
                <h3 className="text-xl font-light tracking-wide text-arch-black">
                  {member.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-content-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-sm font-light tracking-widest uppercase text-arch-medium mb-4">
              SERVICES
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-arch-black">
              This is what we do.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="text-xl font-light tracking-wide text-arch-black mb-4">
                  {service.title}
                </h3>
                <p className="text-arch-medium font-light leading-relaxed mb-6">
                  {service.description}
                </p>
                <Button variant="arch-minimal">
                  READ MORE
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;