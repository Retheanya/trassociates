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
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Revolution Slider */}
      <HeroSlider />

      {/* Projects Section */}
      <ServicesSection />
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

      {/* Video Section */}
      <VideoSection />

      {/* About Section */}
      <AboutSection />

      {/* Awards Section */}
      <AwardsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Ambitious Clients Section */}
      <AmbitiousClients />

      <Footer />
    </div>
  );
};

export default Index;
