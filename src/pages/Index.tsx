import { Navigation } from '@/components/Navigation';
import { ImageSlider } from '@/components/ImageSlider';
import { ContentPanel } from '@/components/ContentPanel';
import { HeroSlider } from '@/components/HeroSlider';
import { ServicesSection } from '@/components/ServicesSection';
import { VideoSection } from '@/components/VideoSection';
import { AboutSection } from '@/components/AboutSection';
import { AmbitiousClients } from '@/components/AmbitiousClients';
import { AwardsSection } from '@/components/AwardsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FoundationSection } from '@/components/FoundationSection';
import { ClientStories } from '@/components/ClientStories';
import { SurveyorTeam } from '@/components/SurveyorTeam';
import { Footer } from '@/components/Footer';
import { ProprietorSection } from '@/components/ProprietorSection';
import client1 from '@/assets/client1.jpg';
import client2 from '@/assets/client2.jpg';

const Index = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Revolution Slider */}
      <HeroSlider />

      {/* Projects Section */}
      <ServicesSection />
      {/* Split Screen Layout */}
      <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen">
        {/* Left Half - Image Slider */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-full relative">
          <ImageSlider />
        </div>
        
        {/* Right Half - Content Panel */}
        <div className="w-full lg:w-1/2 min-h-[50vh] lg:h-full relative">
          <ContentPanel />
        </div>
      </div>

      {/* Video Section */}
      <VideoSection />

      {/* About Section */}
      <AboutSection />

      {/* Awards Section */}
      <AwardsSection />

      {/* Proprietor Section */}
      <ProprietorSection />

      {/* Certificates Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto shadow-2xl">
            <img 
              src={client1} 
              alt="Proprietor Certificates" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Foundation Section */}

      <FoundationSection />

      {/* Client Success Stories */}
      {/* <ClientStories /> */}

      {/* Surveyor Team Section */}
      <SurveyorTeam />

      {/* Ambitious Clients Section */}
      {/* <AmbitiousClients /> */}

      {/* Clients Logo Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto shadow-2xl">
            <img 
              src={client2} 
              alt="Worked Companies" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
