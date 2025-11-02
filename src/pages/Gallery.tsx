import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { EnquiryDialog } from '@/components/EnquiryDialog';
import { Button } from '@/components/ui/button';
import archConcept1 from '@/assets/arch-concept-1.jpg';
import archExterior1 from '@/assets/arch-exterior-1.jpg';
import archInterior1 from '@/assets/arch-interior-1.jpg';
import archInterior2 from '@/assets/arch-interior-2.jpg';
import heroSlide1 from '@/assets/hero-slide-1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';
import heroSlide4 from '@/assets/hero-slide-4.jpg';

const Gallery = () => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const galleryImages = [
    { src: archConcept1, title: 'Architectural Concept' },
    { src: archExterior1, title: 'Exterior Design' },
    { src: archInterior1, title: 'Interior Design' },
    { src: archInterior2, title: 'Modern Interior' },
    { src: heroSlide1, title: 'Project View 1' },
    { src: heroSlide2, title: 'Project View 2' },
    { src: heroSlide3, title: 'Project View 3' },
    { src: heroSlide4, title: 'Project View 4' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[400px] bg-arch-black flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl font-light tracking-wide text-white mb-4">
            Gallery
          </h1>
          <p className="text-xl text-white/80 font-light tracking-wide">
            Explore our portfolio of architectural excellence
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
                onMouseEnter={() => setHoveredImage(index)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-white text-2xl font-light tracking-wide mb-4">
                      {image.title}
                    </h3>
                    <Button
                      variant="arch-outline"
                      onClick={() => setEnquiryOpen(true)}
                    >
                      Enquire Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      
      <EnquiryDialog
        open={enquiryOpen}
        onOpenChange={setEnquiryOpen}
      />
    </div>
  );
};

export default Gallery;
