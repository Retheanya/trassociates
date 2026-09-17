
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

import heroSlide1 from '@/assets/hero-slide-1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';
import heroSlide4 from '@/assets/hero-slide-4.jpg';

const slides = [
  {
    id: '01',
    image: heroSlide1,
    eyebrow: 'CLASSICAL GATES · COIMBATORE',
    title: 'Spaces',
    accent: 'with character.',
    description:
      'Architectural environments shaped by proportion, material and enduring craftsmanship.',
    category: 'Residential Architecture',
  },
  {
    id: '02',
    image: heroSlide2,
    eyebrow: 'DESIGN · CRAFT · DETAIL',
    title: 'Architecture',
    accent: 'with intention.',
    description:
      'Contemporary forms designed to belong naturally within their surroundings.',
    category: 'Architectural Design',
  },
  {
    id: '03',
    image: heroSlide3,
    eyebrow: 'MATERIAL · PERFORMANCE · FORM',
    title: 'Built for',
    accent: 'the future.',
    description:
      'Precision-engineered solutions where performance meets timeless architectural expression.',
    category: 'Sustainable Design',
  },
  {
    id: '04',
    image: heroSlide4,
    eyebrow: 'FROM CONCEPT · TO COMPLETION',
    title: 'Made to',
    accent: 'last.',
    description:
      'Thoughtful spaces brought to life through meticulous execution and refined detailing.',
    category: 'Complete Projects',
  },
];

const slideVariants = {
  initial: {
    opacity: 0,
    scale: 1.08,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      opacity: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
      scale: {
        duration: 7,
        ease: 'easeOut',
      },
    },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    transition: {
      opacity: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  },
};

const contentVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.35,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
};

const lineVariants = {
  initial: {
    y: '110%',
  },
  animate: {
    y: '0%',
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    y: '-110%',
    transition: {
      duration: 0.45,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const heroRef = useRef(null);

  const slide = slides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  /* ------------------------------------------------------------
     AUTO SLIDER
  ------------------------------------------------------------ */

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, [isPaused]);

  /* ------------------------------------------------------------
     KEYBOARD NAVIGATION
  ------------------------------------------------------------ */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      }

      if (event.key === 'ArrowLeft') {
        previousSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  /* ------------------------------------------------------------
     MOUSE PARALLAX
  ------------------------------------------------------------ */

  const handleMouseMove = (event) => {
    if (!heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width - 0.5) * 10;

    const y =
      ((event.clientY - rect.top) / rect.height - 0.5) * 10;

    heroRef.current.style.setProperty('--mouse-x', `${x}px`);
    heroRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsPaused(false)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-[#151515] text-white"
    >

      {/* ==========================================================
          IMAGE STAGE
      ========================================================== */}

      <div className="absolute inset-0">

        <AnimatePresence mode="sync">

          <motion.div
            key={slide.id}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0"
          >

            <motion.img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
              style={{
                transform:
                  'translate3d(var(--mouse-x), var(--mouse-y), 0) scale(1.03)',
              }}
              transition={{
                type: 'spring',
                stiffness: 35,
                damping: 25,
              }}
            />

            {/* Architectural cinematic overlay */}
            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-black/10" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

          </motion.div>

        </AnimatePresence>

      </div>


      {/* ==========================================================
          TOP LEFT BRAND MARK
      ========================================================== */}

      <div className="absolute left-6 top-6 z-30 sm:left-10 sm:top-10 lg:left-16 lg:top-12">

        <Link
          to="/"
          className="group flex items-center gap-3"
        >

          <span className="h-2 w-2 rounded-full bg-white transition-transform duration-500 group-hover:scale-150" />

          <span className="font-['Inter',sans-serif] text-[10px] uppercase tracking-[0.32em] text-white/90">
            Classical Gates
          </span>

        </Link>

      </div>


      {/* ==========================================================
          TOP RIGHT INDEX
      ========================================================== */}

      <div className="absolute right-6 top-6 z-30 sm:right-10 sm:top-10 lg:right-16 lg:top-12">

        <span className="font-['Inter',sans-serif] text-[10px] uppercase tracking-[0.25em] text-white/60">
          Architecture · 2024
        </span>

      </div>


      {/* ==========================================================
          MAIN CONTENT
      ========================================================== */}

      <div className="relative z-20 flex h-full items-end">

        <AnimatePresence mode="wait">

          <motion.div
            key={slide.id}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full px-6 pb-28 sm:px-10 sm:pb-32 lg:px-16 lg:pb-24 xl:px-24"
          >

            <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-10">

              {/* LEFT INDEX */}

              <div className="mb-8 hidden lg:col-span-2 lg:block">

                <div className="flex items-center gap-3">

                  <span className="h-px w-8 bg-white/50" />

                  <span className="font-['Inter',sans-serif] text-[10px] uppercase tracking-[0.25em] text-white/60">
                    {slide.category}
                  </span>

                </div>

              </div>


              {/* MAIN TITLE */}

              <div className="lg:col-span-7">

                <motion.div variants={lineVariants} className="overflow-hidden">
                  <p className="mb-5 font-['Inter',sans-serif] text-[9px] uppercase tracking-[0.28em] text-white/65 sm:text-[10px]">
                    {slide.eyebrow}
                  </p>
                </motion.div>


                <div className="overflow-hidden">

                  <motion.h1
                    variants={lineVariants}
                    className="max-w-[900px] text-[17vw] leading-[0.78] tracking-[-0.055em] sm:text-[12vw] lg:text-[8vw]"
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontWeight: 400,
                    }}
                  >
                    {slide.title}
                  </motion.h1>

                </div>


                <div className="overflow-hidden">

                  <motion.h1
                    variants={lineVariants}
                    className="max-w-[900px] text-[17vw] leading-[0.78] tracking-[-0.055em] sm:text-[12vw] lg:text-[8vw]"
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontWeight: 400,
                    }}
                  >
                    <span className="italic text-white/75">
                      {slide.accent}
                    </span>
                  </motion.h1>

                </div>

              </div>


              {/* DESCRIPTION */}

              <div className="mt-8 lg:col-span-3 lg:mt-0 lg:flex lg:items-end">

                <motion.div
                  variants={lineVariants}
                  className="max-w-[290px] overflow-hidden"
                >

                  <p className="font-['Inter',sans-serif] text-[12px] leading-[1.75] text-white/65">
                    {slide.description}
                  </p>

                  <Link
                    to="/gallery"
                    className="group mt-7 inline-flex items-center gap-3 border-b border-white/35 pb-2 font-['Inter',sans-serif] text-[9px] uppercase tracking-[0.24em] transition-colors duration-500 hover:border-white"
                  >
                    Explore Projects

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1}
                      className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>

                </motion.div>

              </div>

            </div>

          </motion.div>

        </AnimatePresence>

      </div>


      {/* ==========================================================
          SLIDE NAVIGATION
      ========================================================== */}

      <div className="absolute bottom-7 right-6 z-30 sm:right-10 lg:bottom-10 lg:right-16">

        <div className="flex items-center gap-5">

          {/* PREVIOUS */}

          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous project"
            className="group hidden sm:block"
          >

            <span className="font-['Inter',sans-serif] text-[9px] uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 group-hover:text-white">
              Prev
            </span>

          </button>


          {/* NUMBERS */}

          <div className="flex items-center gap-3">

            {slides.map((item, index) => (

              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className="group flex items-center gap-2"
                aria-label={`Go to slide ${index + 1}`}
              >

                <span
                  className={`font-['Inter',sans-serif] text-[9px] tracking-[0.15em] transition-colors duration-300 ${
                    currentSlide === index
                      ? 'text-white'
                      : 'text-white/30 group-hover:text-white/70'
                  }`}
                >
                  {item.id}
                </span>

                <span
                  className={`h-px transition-all duration-500 ${
                    currentSlide === index
                      ? 'w-8 bg-white'
                      : 'w-0 bg-white/50 group-hover:w-4'
                  }`}
                />

              </button>

            ))}

          </div>


          {/* NEXT */}

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next project"
            className="group hidden sm:block"
          >

            <span className="font-['Inter',sans-serif] text-[9px] uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 group-hover:text-white">
              Next
            </span>

          </button>

        </div>

      </div>


      {/* ==========================================================
          VERTICAL PROGRESS
      ========================================================== */}

      <div className="absolute bottom-0 left-0 z-30 h-[2px] w-full bg-white/10">

        <motion.div
          key={currentSlide}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{
            duration: 7,
            ease: 'linear',
          }}
          className="h-full bg-white/80"
        />

      </div>


      {/* ==========================================================
          SCROLL INDICATOR
      ========================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-7 left-6 z-30 sm:left-10 lg:left-16"
      >

        <div className="flex items-center gap-4">

          <div className="relative h-12 w-px overflow-hidden bg-white/20">

            <motion.span
              animate={{
                y: ['-100%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute left-0 top-0 h-1/2 w-full bg-white/80"
            />

          </div>

          <span className="font-['Inter',sans-serif] text-[8px] uppercase tracking-[0.3em] text-white/50 [writing-mode:vertical-rl]">
            Scroll to explore
          </span>

        </div>

      </motion.div>


      {/* ==========================================================
          MOBILE CATEGORY
      ========================================================== */}

      <div className="absolute left-6 top-24 z-30 sm:left-10 lg:hidden">

        <span className="font-['Inter',sans-serif] text-[8px] uppercase tracking-[0.25em] text-white/50">
          {slide.category}
        </span>

      </div>

    </section>
  );
};