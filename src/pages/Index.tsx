import { Navigation } from '@/components/Navigation';
import { ImageSlider } from '@/components/ImageSlider';
import { ContentPanel } from '@/components/ContentPanel';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />
      
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
    </div>
  );
};

export default Index;
