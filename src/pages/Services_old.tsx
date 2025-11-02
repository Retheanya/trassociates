import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { EnquiryDialog } from '@/components/EnquiryDialog';
import archConcept1 from '@/assets/arch-concept-1.jpg';
import archInterior2 from '@/assets/arch-interior-2.jpg';
import { Building2, HardHat, FileText, MapPin, TestTube, Home, Shield, Factory, ClipboardCheck, DollarSign } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'RCC Design Detailing Services',
    description: 'Comprehensive RCC design and detailing services for residential and commercial structures with precise calculations and compliance.',
  },
  {
    icon: HardHat,
    title: 'Steel Detailing Services',
    description: 'Professional steel detailing and structural engineering services for industrial projects with advanced 3D modeling.',
  },
  {
    icon: FileText,
    title: 'Import Export License Consultants',
    description: 'Expert consultation for import-export licensing and regulatory compliance with government agencies.',
  },
  {
    icon: MapPin,
    title: 'Land Surveyors',
    description: 'Accurate land surveying services using advanced technology and methodologies for precise measurements.',
  },
  {
    icon: TestTube,
    title: 'Soil Testing',
    description: 'Comprehensive soil analysis and testing for construction site preparation and foundation design.',
  },
  {
    icon: Home,
    title: 'Building Plan',
    description: 'Complete building planning and architectural design services from concept to construction documentation.',
  },
  {
    icon: Shield,
    title: 'Structural Stability Certificates',
    description: 'Official structural stability certification and compliance documentation for existing and new structures.',
  },
  {
    icon: Factory,
    title: 'Industrial Structural Designing',
    description: 'Specialized structural design services for industrial and manufacturing facilities including heavy equipment support.',
  },
  {
    icon: ClipboardCheck,
    title: 'Assessment of Structural Stability & Soundness',
    description: 'Thorough assessment of structural stability and soundness of existing buildings with detailed reports.',
  },
  {
    icon: DollarSign,
    title: 'Property Valuers',
    description: 'Professional property valuation services for residential and commercial properties with market analysis.',
  },
];

const Services = () => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleEnquiry = (serviceName: string) => {
    setSelectedService(serviceName);
    setEnquiryOpen(true);
  };

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
              OUR SERVICES INCLUDE
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-arch-black">
              This is what we do.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Icon className="w-12 h-12 text-arch-accent mb-6" />
                  <h3 className="text-xl font-light tracking-wide text-arch-black mb-4">
                    {service.title}
                  </h3>
                  <p className="text-arch-medium font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button 
                    variant="arch"
                    onClick={() => handleEnquiry(service.title)}
                  >
                    ENQUIRE NOW
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      
      <EnquiryDialog
        open={enquiryOpen}
        onOpenChange={setEnquiryOpen}
        serviceName={selectedService}
      />
    </div>
  );
};

export default Services;