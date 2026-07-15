import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { fadeIn, fadeInUp, staggerContainer } from '@/lib/motion';

// --- Placeholder Images ---
// Replace these with your actual project images.
// Use images with different heights to see the masonry effect clearly.
import gallery1 from '@/assets/gallery1.jpeg';
import gallery2 from '@/assets/gallery2.jpeg';
import gallery3 from '@/assets/gallery3.jpeg';
import gallery4 from '@/assets/gallery4.jpeg';
import gallery5 from '@/assets/gallery5.jpeg';
import gallery6 from '@/assets/gallery6.jpeg';
import gallery7 from '@/assets/gallery7.jpeg';
import gallery8 from '@/assets/gallery8.jpeg';
import gallery9 from '@/assets/gallery9.jpeg';

const galleryImages = [
  {
    id: 1,
    src: gallery1,
    title: 'Modern Villa',
    category: 'Residential',
  },
  {
    id: 2,
    src: gallery2,
    title: 'Downtown Office Complex',
    category: 'Commercial',
  },
  {
    id: 3,
    src: gallery3,
    title: 'Lakeview Summer Home',
    category: 'Residential',
  },
  {
    id: 4,
    src: gallery4,
    title: 'Coastal Restaurant',
    category: 'Commercial',
  },
  {
    id: 5,
    src: gallery5,
    title: 'Minimalist Interior',
    category: 'Interior Design',
  },
  {
    id: 6,
    src: gallery6,
    title: 'Suburban Family House',
    category: 'Residential',
  },
  {
    id: 7,
    src: gallery7,
    title: 'Modern Office Building',
    category: 'Commercial',
  },
  {
    id: 8,
    src: gallery8,
    title: 'Beachfront Condo',
    category: 'Residential',
  },
  {
    id: 9,
    src: gallery9,
    title: 'Urban Park Design',
    category: 'Landscape Architecture',
  }
];

export const GalleryOverview = () => {
  return (
    <motion.section
      variants={staggerContainer(0.16)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white py-16 sm:py-24"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Our Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            A glimpse into our craftsmanship and the dreams we've brought to life.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={fadeInUp}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              whileHover={{ y: -5 }}
              className="mb-4 sm:mb-6 break-inside-avoid group relative overflow-hidden rounded-3xl shadow-2xl"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6 text-center">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white">{image.title}</h3>
                  <p className="text-sm text-amber-300 tracking-wider">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div variants={fadeIn} className="mt-12 text-center">
          <Button asChild size="lg" className="bg-amber-600 text-white hover:bg-amber-700 rounded-full font-semibold group px-8 py-4 shadow-xl shadow-amber-500/10">
            <Link to="/gallery">
              View Full Gallery
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};
