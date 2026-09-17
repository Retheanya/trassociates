import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';

import gallery2 from '@/assets/gallery2.jpeg';
import gallery3 from '@/assets/gallery3.jpeg';
import gallery4 from '@/assets/gallery4.jpeg';
import gallery5 from '@/assets/gallery5.jpeg';
import gallery6 from '@/assets/gallery6.jpeg';
import gallery7 from '@/assets/gallery7.jpeg';
import gallery8 from '@/assets/gallery8.jpeg';
import gallery9 from '@/assets/gallery9.jpeg';

const projects = [
  {
    id: 1,
    src: gallery2,
    title: 'Contemporary Entrance',
    type: 'Sliding Gate',
    location: 'Coimbatore',
    year: '2024',
    size: 'large',
  },
  {
    id: 2,
    src: gallery3,
    title: 'Architectural Residence',
    type: 'Swing Gate',
    location: 'Chennai',
    year: '2024',
    size: 'portrait',
  },
  {
    id: 3,
    src: gallery4,
    title: 'Modern Estate',
    type: 'Pergola',
    location: 'Bengaluru',
    year: '2023',
    size: 'landscape',
  },
  {
    id: 4,
    src: gallery5,
    title: 'Private Residence',
    type: 'Bi-Folding Gate',
    location: 'Coimbatore',
    year: '2023',
    size: 'portrait',
  },
  {
    id: 5,
    src: gallery6,
    title: 'Minimal House',
    type: 'Wicket Gate',
    location: 'Chennai',
    year: '2023',
    size: 'landscape',
  },
  {
    id: 6,
    src: gallery7,
    title: 'Urban Residence',
    type: 'Cladding',
    location: 'Bengaluru',
    year: '2022',
    size: 'large',
  },
  {
    id: 7,
    src: gallery8,
    title: 'Garden Pavilion',
    type: 'Louvered Pergola',
    location: 'Coimbatore',
    year: '2022',
    size: 'portrait',
  },
  // {
  //   id: 8,
  //   src: gallery9,
  //   title: 'Private Villa',
  //   type: 'Telescopic Gate',
  //   location: 'Kerala',
  //   year: '2021',
  //   size: 'landscape',
  // },
  
];

const imageVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const GalleryOverview = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section className="bg-[#EAE7E0] text-[#1C1B19]">

        {/* =========================================================
            HEADER
        ========================================================= */}
        <div className="mx-auto max-w-[1800px] px-6 pt-24 sm:px-10 md:px-16 lg:px-20 lg:pt-36">

          <div className="grid grid-cols-1 gap-12 border-b border-black/15 pb-16 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-8">
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-10 bg-black/40" />

                <span className="font-['Inter',sans-serif] text-[10px] uppercase tracking-[0.28em] text-black/50">
                  Selected Portfolio
                </span>
              </div>

              <h2
                className="max-w-5xl text-[18vw] leading-[0.78] tracking-[-0.055em] sm:text-[11vw] lg:text-[9vw]"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontWeight: 500,
                }}
              >
                Selected
                <br />
                <span className="ml-[10vw]">Works.</span>
              </h2>
            </div>

            <div className="lg:col-span-4 lg:pb-2">
              <div className="max-w-[340px] lg:ml-auto">
                <p className="mb-8 font-['Inter',sans-serif] text-[14px] leading-[1.8] text-black/60">
                  A collection of architectural gates, pergolas,
                  cladding and exterior structures designed to
                  complement contemporary architecture.
                </p>

                <div className="flex items-center justify-between border-t border-black/15 pt-4">
                  <span className="font-['Inter',sans-serif] text-[10px] uppercase tracking-[0.2em] text-black/45">
                    Projects
                  </span>

                  <span className="font-['Inter',sans-serif] text-[12px]">
                    08
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* =========================================================
            MASONRY GALLERY
        ========================================================= */}
        <div className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 md:px-16 lg:px-20 lg:py-32">

          <div className="columns-1 gap-x-6 sm:columns-2 lg:columns-3 lg:gap-x-8">

            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.08,
                }}
                transition={{
                  delay: (index % 3) * 0.08,
                }}
                className={`
                  group mb-10 break-inside-avoid
                  sm:mb-12 lg:mb-16
                  ${index === 1 ? 'lg:mt-28' : ''}
                  ${index === 4 ? 'lg:mt-20' : ''}
                  ${index === 6 ? 'lg:mt-24' : ''}
                `}
              >

                {/* IMAGE */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="relative block w-full overflow-hidden bg-[#DCD8D0] text-left"
                >

                  <motion.img
                    src={project.src}
                    alt={project.title}
                    loading="lazy"
                    className="block h-auto w-full"
                    whileHover={{
                      scale: 1.035,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  {/* Dark hover layer */}
                  <div className="absolute inset-0 bg-black/0 transition-all duration-700 group-hover:bg-black/20" />

                  {/* Project number */}
                  <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/10 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                    <span className="font-['Inter',sans-serif] text-[10px] tracking-widest text-white">
                      {String(project.id).padStart(2, '0')}
                    </span>
                  </div>

                  {/* View button */}
                  <div className="absolute bottom-5 right-5 flex translate-y-3 items-center gap-2 rounded-full bg-[#F3F0E9] px-4 py-2.5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="font-['Inter',sans-serif] text-[9px] uppercase tracking-[0.2em]">
                      View
                    </span>

                    <ArrowUpRight size={13} strokeWidth={1.5} />
                  </div>

                </button>


                {/* CAPTION */}
                <div className="mt-5 flex items-start justify-between gap-5">

                  <div>
                    <h3
                      className="text-[22px] leading-none tracking-[-0.025em] sm:text-[25px]"
                      style={{
                        fontFamily: "'Fraunces', Georgia, serif",
                        fontWeight: 500,
                      }}
                    >
                      {project.title}
                    </h3>

                    <p className="mt-2 font-['Inter',sans-serif] text-[10px] uppercase tracking-[0.16em] text-black/45">
                      {project.type}
                    </p>
                  </div>

                  <div className="shrink-0 text-right">
                    <p className="font-['Inter',sans-serif] text-[9px] uppercase tracking-[0.15em] text-black/35">
                      {project.location}
                    </p>

                    <p className="mt-1 font-['Inter',sans-serif] text-[9px] text-black/35">
                      {project.year}
                    </p>
                  </div>

                </div>

              </motion.article>
            ))}

          </div>
        </div>


       

      </section>


      {/* =========================================================
          FULLSCREEN PROJECT VIEWER
      ========================================================= */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#161514]/95 p-4 sm:p-8"
            onClick={() => setSelectedProject(null)}
          >

            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
              aria-label="Close project"
            >
              <X size={18} strokeWidth={1.5} />
            </button>


            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex max-h-[90vh] max-w-[1500px] flex-col overflow-hidden bg-[#EAE7E0] lg:flex-row"
              onClick={(e) => e.stopPropagation()}
            >

              {/* Image */}
              <div className="flex min-h-[45vh] flex-1 items-center justify-center bg-[#D8D4CC] p-4 sm:p-8 lg:min-h-0">

                <img
                  src={selectedProject.src}
                  alt={selectedProject.title}
                  className="max-h-[75vh] max-w-full object-contain"
                />

              </div>


              {/* Information */}
              <div className="flex w-full flex-col justify-between p-7 sm:p-10 lg:w-[360px] lg:p-12">

                <div>

                  <div className="mb-10 flex items-center justify-between">

                    <span className="font-['Inter',sans-serif] text-[10px] uppercase tracking-[0.2em] text-black/40">
                      Project {String(selectedProject.id).padStart(2, '0')}
                    </span>

                    <span className="font-['Inter',sans-serif] text-[10px] text-black/40">
                      {selectedProject.year}
                    </span>

                  </div>


                  <h2
                    className="text-[42px] leading-[0.95] tracking-[-0.035em]"
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontWeight: 500,
                    }}
                  >
                    {selectedProject.title}
                  </h2>


                  <div className="mt-10 space-y-5 border-t border-black/15 pt-6">

                    <div className="flex justify-between">
                      <span className="font-['Inter',sans-serif] text-[9px] uppercase tracking-[0.18em] text-black/40">
                        Application
                      </span>

                      <span className="font-['Inter',sans-serif] text-[11px]">
                        {selectedProject.type}
                      </span>
                    </div>


                    <div className="flex justify-between">
                      <span className="font-['Inter',sans-serif] text-[9px] uppercase tracking-[0.18em] text-black/40">
                        Location
                      </span>

                      <span className="font-['Inter',sans-serif] text-[11px]">
                        {selectedProject.location}
                      </span>
                    </div>


                    <div className="flex justify-between">
                      <span className="font-['Inter',sans-serif] text-[9px] uppercase tracking-[0.18em] text-black/40">
                        Year
                      </span>

                      <span className="font-['Inter',sans-serif] text-[11px]">
                        {selectedProject.year}
                      </span>
                    </div>

                  </div>

                </div>


                <div className="mt-12 border-t border-black/15 pt-5">

                  <p className="max-w-[280px] font-['Inter',sans-serif] text-[11px] leading-[1.7] text-black/50">
                    A considered architectural solution where
                    proportion, material and precision work
                    together as one.
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};