import React from "react";
import { motion } from "framer-motion";

const CustomerLogos = () => {
  const customers = [
    { name: "TATA", logo: "/customerlogos/tata.png" },
    { name: "Isha Foundation", logo: "/customerlogos/isha.png" },
    { name: "SREC", logo: "/customerlogos/srec.png" },
    { name: "Sanbrix", logo: "/customerlogos/sanbrix.png" },
    { name: "Pinnacle", logo: "/customerlogos/pinnacle.png" },
    { name: "Katerra", logo: "/customerlogos/katerra.png" },
    { name: "CMDA", logo: "/customerlogos/cmda.png" },
    { name: "DTCP", logo: "/customerlogos/dtcp.png" },
    { name: "VGM Hospital", logo: "/customerlogos/vgm.png" },
    { name: "Hindustan Textiles", logo: "/customerlogos/hindustan.png" },
    { name: "Supreme Mobiles", logo: "/customerlogos/supreme.png" },
    { name: "Karunya", logo: "/customerlogos/karunya.png" },
    { name: "Little Millennium", logo: "/customerlogos/millennium.png" },
    { name: "Sreevatsa Realty", logo: "/customerlogos/sreevatsa.png" },
    { name: "ECI", logo: "/customerlogos/eci.png" },
    { name: "CLPA", logo: "/customerlogos/clpa.png" },
  ];

  // We duplicate the list to ensure the loop is seamless visually
  const carouselContent = [...customers, ...customers];

  return (
    <section className="py-24 bg-white border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <span className="text-sm font-bold tracking-[0.3em] uppercase text-primary">
          Trusted by Industry Leaders & Govt. Bodies
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-arch-black sm:text-4xl">
          Empowering 100+ projects across Industrial, Residential, and Institutional sectors.
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full">

        {/* Gradient Masks (Fade Effect on Edges) */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        {/* The Moving Track */}
        <div className="flex overflow-hidden group">
          <motion.div
            className="flex gap-16 items-center flex-nowrap pr-16"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40, // Adjust speed: higher number = slower
                ease: "linear",
              },
            }}
            style={{ width: "fit-content" }}
          >
            {carouselContent.map((customer, index) => (
              <div
                key={`${customer.name}-${index}`}
                className="relative flex-shrink-0 flex items-center justify-center h-28 w-40"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={customer.logo}
                    alt={customer.name}
                    className="max-h-16 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      const label = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                      if (label) {
                        label.style.opacity = '0.4';
                        label.style.pointerEvents = 'auto';
                        label.style.position = 'static';
                      }
                    }}
                  />
                  <div className="text-arch-black font-bold text-lg opacity-0 hover:opacity-100 transition-opacity duration-300 absolute pointer-events-none">
                    {customer.name}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="text-center mt-10">
        <p className="text-sm font-medium text-arch-medium uppercase tracking-widest">
          Approved Government Registered Consultants & Peer Reviewers
        </p>
      </div>
    </section>
  );
};

export default CustomerLogos;
