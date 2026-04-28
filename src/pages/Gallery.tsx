import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { EnquiryDialog } from '@/components/EnquiryDialog';
import { Button } from '@/components/ui/button';
import galleryImg from '@/assets/gallery.jpg';
import gallery1 from '@/assets/gallery1.jpeg';
import gallery2 from '@/assets/gallery2.jpeg';
import gallery3 from '@/assets/gallery3.jpeg';
import gallery4 from '@/assets/gallery4.jpeg';
import gallery5 from '@/assets/gallery5.jpeg';
import gallery6 from '@/assets/gallery6.jpeg';
import gallery7 from '@/assets/gallery7.jpeg';
import gallery8 from '@/assets/gallery8.jpeg';
import gallery9 from '@/assets/gallery9.jpeg';
import gallery10 from '@/assets/gallery10.jpeg';
import gallery11 from '@/assets/gallery11.jpeg';
import gallery12 from '@/assets/gallery12.jpeg';
import gallery13 from '@/assets/gallery13.jpeg';
import gallery14 from '@/assets/gallery14.jpeg';
import gallery15 from '@/assets/gallery15.jpeg';
import gallery16 from '@/assets/gallery16.jpeg';
import gallery17 from '@/assets/gallery17.jpeg';
import gallery18 from '@/assets/gallery18.jpeg';
import gallery19 from '@/assets/gallery19.jpeg';

const Gallery = () => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const galleryImages = [
    { src: gallery1, title: 'Architectural Planning' },
    { src: gallery2, title: 'Structural Design' },
    { src: gallery3, title: 'Exterior Elevation' },
    { src: gallery4, title: 'Interior Concept' },
    { src: gallery5, title: 'Site Inspection' },
    { src: gallery6, title: 'Industrial Structure' },
    { src: gallery7, title: 'Commercial Complex' },
    { src: gallery8, title: 'Residential Project' },
    { src: gallery9, title: 'Modern Architecture' },
    { src: gallery10, title: 'RCC Framework' },
    { src: gallery11, title: 'Foundation Work' },
    { src: gallery12, title: 'Land Surveying' },
    { src: gallery13, title: 'Building Assessment' },
    { src: gallery14, title: 'Project Management' },
    { src: gallery15, title: 'Quality Control' },
    { src: gallery16, title: 'Sustainable Design' },
    { src: gallery17, title: 'Urban Planning' },
    { src: gallery18, title: 'Steel Fabrication' },
    { src: gallery19, title: 'Civil Engineering' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={galleryImg}
          alt="Gallery Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-arch-black/60" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl font-light tracking-wide text-white mb-4 animate-fade-in">
            Gallery
          </h1>
          <p className="text-xl text-white/80 font-light tracking-wide animate-fade-in" style={{ animationDelay: '200ms' }}>
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
