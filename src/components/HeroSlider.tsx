import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeIn, fadeInUp, staggerContainer } from '@/lib/motion';
import heroSlide1 from '@/assets/hero-slide-1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';
import heroSlide4 from '@/assets/hero-slide-4.jpg';

// Updated slides data structure to match the new design
const slides = [
  {
    id: 1,
    image: heroSlide1,
    topSubheading: '10+ YEARS OF CONSTRUCTION EXCELLENCE — COIMBATORE & NILGIRIS',
    title: 'Building Dreams Into Reality',
    bottomSubheading: 'Love begins at home'
  },
  {
    id: 2,
    image: heroSlide2,
    topSubheading: 'INNOVATIVE DESIGN & QUALITY CRAFTSMANSHIP',
    title: 'Modern Living, Redefined',
    bottomSubheading: 'Where architecture meets art'
  },
  {
    id: 3,
    image: heroSlide3,
    topSubheading: 'SUSTAINABLE & ECO-FRIENDLY SOLUTIONS',
    title: 'Future-Forward Spaces',
    bottomSubheading: 'Building a greener tomorrow'
  },
  {
    id: 4,
    image: heroSlide4,
    topSubheading: 'COMMERCIAL & RESIDENTIAL PROJECTS',
    title: 'Architecture That Inspires',
    bottomSubheading: 'From concept to completion'
  }
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Set transition state based on slide changes
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 600); // Animation duration
    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Ken Burns Effect */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={`h-full w-full object-cover transition-transform duration-[7000ms] ease-out ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full items-center justify-start">
        <motion.div
          key={currentSlide}
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.08)}
          className="max-w-4xl px-8 md:px-16 lg:px-24 text-left text-white"
        >
          <motion.div variants={fadeInUp} className="overflow-hidden">
            <p className="text-sm font-semibold tracking-wider text-amber-400 mb-4">
              {slides[currentSlide].topSubheading}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="overflow-hidden">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-4">
              {slides[currentSlide].title}
            </h1>
          </motion.div>

          <motion.div variants={fadeInUp} className="overflow-hidden">
            <p className="text-xl italic font-light text-gray-200 mb-8">
              {slides[currentSlide].bottomSubheading}
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* NOTE: You may need to create these button variants or style them with classes */}
            <Button
            className="bg-gradient-to-r from-accent to-orange-500 text-white px-8 py-3 rounded-3xl font-semibold transition-transform duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl"
          >
            View Our Projects
          </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex animate-bounce flex-col items-center gap-2">
        <span className="text-xs font-light tracking-widest text-white/80">SCROLL</span>
        <ChevronDown className="h-4 w-4 text-white/80" />
      </div>
    </section>
  );
};
