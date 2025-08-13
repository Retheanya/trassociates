import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export const ContentPanel = () => {
  return (
    <div className="h-screen bg-content-bg flex flex-col justify-center px-12 lg:px-16 xl:px-24">
      <div className="max-w-xl">
        {/* Project Label */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="arch-line" />
          <span className="text-xs font-light tracking-widest uppercase text-arch-medium">
            Featured Project
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="arch-title text-5xl lg:text-6xl xl:text-7xl mb-6">
          Minimal
          <br />
          Architecture
        </h1>

        {/* Subheading */}
        <h2 className="arch-heading text-xl lg:text-2xl text-arch-accent mb-8">
          Contemporary Design Studio
        </h2>

        {/* Description */}
        <p className="arch-body text-base lg:text-lg mb-12 max-w-md">
          Creating spaces that blend functionality with aesthetic excellence. 
          Our architectural approach emphasizes clean lines, natural materials, 
          and the harmony between form and environment.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-16">
          <Button variant="arch" size="arch">
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="arch-outline" size="arch">
            Contact Studio
          </Button>
        </div>

        {/* Secondary Actions */}
        <div className="flex items-center space-x-8">
          <button className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-full border border-arch-light flex items-center justify-center group-hover:border-arch-black group-hover:bg-arch-black arch-transition">
              <Play className="h-4 w-4 text-arch-medium group-hover:text-white arch-transition ml-0.5" />
            </div>
            <span className="text-sm font-light tracking-wide text-arch-medium group-hover:text-arch-black arch-transition">
              Watch Process
            </span>
          </button>

          <div className="flex items-center space-x-4">
            <div className="w-px h-8 bg-arch-light" />
            <div className="text-xs font-light tracking-wide text-arch-medium">
              <span className="block">2024</span>
              <span className="block">Portfolio</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-12 lg:left-16 xl:left-24 flex items-center space-x-4">
        <div className="w-px h-16 bg-arch-light" />
        <span className="text-xs font-light tracking-wide text-arch-medium -rotate-90 origin-left">
          Scroll
        </span>
      </div>
    </div>
  );
};