import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroSlide1 from '@/assets/hero-slide-1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';
import heroSlide4 from '@/assets/hero-slide-4.jpg';

const slides = [
  {
    id: 1,
    image: heroSlide1,
    location: 'CASABLANCA, MOROCCO',
    title: 'Incredible Small Green Homes That Live Large',
    subtitle: 'Sustainable Architecture'
  },
  {
    id: 2,
    image: heroSlide2,
    location: 'MIAMI, FLORIDA',
    title: 'Contemporary Ocean Views',
    subtitle: 'Residential Design'
  },
  {
    id: 3,
    image: heroSlide3,
    location: 'TOKYO, JAPAN',
    title: 'Future Museum Complex',
    subtitle: 'Cultural Architecture'
  },
  {
    id: 4,
    image: heroSlide4,
    location: 'NEW YORK, USA',
    title: 'Urban Skyscraper Design',
    subtitle: 'Commercial Architecture'
  }
];

export const HeroSlider = () => {
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
    }, 6000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-arch-black/40" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <div className="overflow-hidden">
            <p 
              className={`text-sm font-light tracking-widest uppercase mb-4 transition-transform duration-800 delay-300 ${
                isTransitioning ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
              }`}
            >
              {slides[currentSlide].location}
            </p>
          </div>
          
          <div className="overflow-hidden">
            <h1 
              className={`text-6xl md:text-7xl font-light tracking-wide leading-tight mb-6 transition-transform duration-800 delay-500 ${
                isTransitioning ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
              }`}
            >
              {slides[currentSlide].title}
            </h1>
          </div>

          <div className="overflow-hidden">
            <p 
              className={`text-lg font-light tracking-wide mb-8 transition-transform duration-800 delay-700 ${
                isTransitioning ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
              }`}
            >
              {slides[currentSlide].subtitle}
            </p>
          </div>

          <div className={`transition-all duration-800 delay-900 ${
            isTransitioning ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'
          }`}>
            <Button variant="arch-outline" size="arch">
              EXPLORE IT
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={prevSlide}
          className="p-3 text-white/70 hover:text-white arch-transition disabled:opacity-50"
          disabled={isTransitioning}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={nextSlide}
          className="p-3 text-white/70 hover:text-white arch-transition disabled:opacity-50"
          disabled={isTransitioning}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group flex items-center space-x-2"
            disabled={isTransitioning}
          >
            <span className="text-white/70 text-xs font-light">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div
              className={`h-px transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-white'
                  : 'w-4 bg-white/50 group-hover:bg-white/70'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 left-8 text-white z-20">
        <div className="flex items-center space-x-4">
          <div className="arch-line bg-white/70" />
          <span className="text-xs font-light tracking-wider">
            {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  );
};