import { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import feature1 from '@/assets/feature1.jpg';
import feature2 from '@/assets/feature2.jpg';
import feature3 from '@/assets/feature3.jpg';
import feature4 from '@/assets/feature4.jpg';

const slides = [
  {
    id: 1,
    image: feature1,
    title: 'Monolithic Edge',
    type: 'ARCHITECTURE'
  },
  {
    id: 2,
    image: feature2,
    title: 'Shadow Axis',
    type: 'EXTERIOR DESIGN'
  },
  {
    id: 3,
    image: feature3,
    title: 'Material Warmth',
    type: 'CONCEPT DESIGN'
  },
  {
    id: 4,
    image: feature4,
    title: 'Fluid Space',
    type: 'INTERIOR DESIGN'
  }
];

export const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-arch-black">
      {/* Image Container */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-800 ease-out ${
              index === currentSlide ? 'opacity-100 animate-scale-in' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-arch-black/20" />
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-4">
        <button
          onClick={prevSlide}
          className="group p-2 text-white/70 hover:text-white arch-transition disabled:opacity-50"
          disabled={isTransitioning}
        >
          <ChevronUp className="h-5 w-5" />
        </button>
        
        {/* Page Indicators */}
        <div className="flex flex-col space-y-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group flex items-center"
              disabled={isTransitioning}
            >
              <div className="flex items-center space-x-2">
                <div
                  className={`h-px transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-8 bg-white'
                      : 'w-4 bg-white/50 group-hover:bg-white/70'
                  }`}
                />
                <span
                  className={`text-xs font-light transition-colors duration-300 ${
                    index === currentSlide
                      ? 'text-white'
                      : 'text-white/50 group-hover:text-white/70'
                  }`}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="group p-2 text-white/70 hover:text-white arch-transition disabled:opacity-50"
          disabled={isTransitioning}
        >
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>

      {/* Slide Info Overlay */}
      <div className="absolute bottom-8 left-8 text-white">
        <div className="arch-line mb-4" />
        <p className="text-sm font-light tracking-wider uppercase text-white/70 mb-1">
          {slides[currentSlide].type}
        </p>
        <h3 className="text-lg font-light tracking-wide">
          {slides[currentSlide].title}
        </h3>
      </div>
    </div>
  );
};