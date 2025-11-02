import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { EnquiryDialog } from '@/components/EnquiryDialog';
import { Building2, HardHat, FileText, MapPin, TestTube, Home, Shield, Factory, ClipboardCheck, DollarSign } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'RCC Design Detailing Services',
    description: 'Comprehensive RCC design and detailing services for residential and commercial structures.',
  },
  {
    icon: HardHat,
    title: 'Steel Detailing Services',
    description: 'Professional steel detailing and structural engineering services for industrial projects.',
  },
  {
    icon: FileText,
    title: 'Import Export License Consultants',
    description: 'Expert consultation for import-export licensing and regulatory compliance.',
  },
  {
    icon: MapPin,
    title: 'Land Surveyors',
    description: 'Accurate land surveying services using advanced technology and methodologies.',
  },
  {
    icon: TestTube,
    title: 'Soil Testing',
    description: 'Comprehensive soil analysis and testing for construction site preparation.',
  },
  {
    icon: Home,
    title: 'Building Plan',
    description: 'Complete building planning and architectural design services.',
  },
  {
    icon: Shield,
    title: 'Structural Stability Certificates',
    description: 'Official structural stability certification and compliance documentation.',
  },
  {
    icon: Factory,
    title: 'Industrial Structural Designing',
    description: 'Specialized structural design services for industrial and manufacturing facilities.',
  },
  {
    icon: ClipboardCheck,
    title: 'Structural Stability Assessment',
    description: 'Thorough assessment of structural stability and soundness of existing buildings.',
  },
  {
    icon: DollarSign,
    title: 'Property Valuers',
    description: 'Professional property valuation services for residential and commercial properties.',
  },
];

export const ServicesSection = () => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleEnquiry = (serviceName: string) => {
    setSelectedService(serviceName);
    setEnquiryOpen(true);
  };

  return (
    <>
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/uploads/servicebg.jpg')`
        }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-sm font-light tracking-widest uppercase text-white/80 mb-4">
              OUR SERVICES INCLUDE
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-white">
              This is what we do.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="bg-white/5 backdrop-blur-sm p-8 hover:bg-white/10 arch-transition group animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Icon className="w-12 h-12 text-white mb-6 group-hover:scale-110 arch-transition" />
                  <h3 className="text-xl font-light tracking-wide text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-white/70 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button 
                    variant="arch-outline" 
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

      <EnquiryDialog
        open={enquiryOpen}
        onOpenChange={setEnquiryOpen}
        serviceName={selectedService}
      />
    </>
  );
};
