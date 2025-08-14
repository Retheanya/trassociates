import { Navigation } from '@/components/Navigation';
import { ImageSlider } from '@/components/ImageSlider';
import { ContentPanel } from '@/components/ContentPanel';
import { HeroSlider } from '@/components/HeroSlider';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { AmbitiousClients } from '@/components/AmbitiousClients';
import { AwardsSection } from '@/components/AwardsSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Revolution Slider */}
      <HeroSlider />
      
      {/* Split Screen Layout */}
      <div className="flex h-screen">
        {/* Left Half - Image Slider */}
        <div className="w-1/2 relative">
          <ImageSlider />
        </div>
        
        {/* Right Half - Content Panel */}
        <div className="w-1/2 relative">
          <ContentPanel />
        </div>
      </div>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Awards Section */}
      <AwardsSection />

      {/* Ambitious Clients Section */}
      <AmbitiousClients />

      <Footer />
    </div>
  );
};

export default Index;
