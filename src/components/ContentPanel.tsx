import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';


export const ContentPanel = () => {
  return (
    <div className="min-h-screen lg:h-screen bg-content-bg flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-24 py-20 lg:py-0 relative">
      <div className="max-w-xl">
        {/* Project Label */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="arch-line" />
          <span className="text-xs font-light tracking-widest uppercase text-arch-medium">
            Featured Project
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="arch-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Minimal
          <br />
          Architecture
        </h1>

        {/* Subheading */}
        <h2 className="arch-heading text-xl lg:text-2xl text-arch-accent mb-8 animate-slide-in-left" style={{ animationDelay: '400ms' }}>
          Contemporary Design Studio
        </h2>

        {/* Description */}
        <p className="arch-body text-base lg:text-lg mb-12 max-w-md animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          Creating spaces that blend functionality with aesthetic excellence.
          Our architectural approach emphasizes clean lines, natural materials,
          and the harmony between form and environment.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <Button variant="arch" size="arch">
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="arch-outline" size="arch">
            Contact Studio
          </Button>
        </div>

      </div>


      {/* Scroll Indicator - Positioned precisely to avoid overlap */}

      <div className="absolute bottom-12 left-6 md:left-12 lg:left-16 xl:left-24 flex items-end space-x-4 h-24">
        <div className="w-px h-full bg-arch-light" />
        <span className="text-[10px] font-light tracking-widest uppercase text-arch-medium -rotate-90 origin-bottom-left translate-y-2">
          Scroll
        </span>
      </div>
    </div>
  );
};
