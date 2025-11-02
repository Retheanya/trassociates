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
    { src: "https://image3.jdomni.in/banner/27072021/37/E2/78/909345AA70B7459BFD7C99907D_1627329100838.jpg?output-format=webp", title: 'Architectural Concept' },
    { src: "https://image2.jdomni.in/banner/27072021/E5/63/89/ED99E7F10FEAE3BDA17F10C25B_1627329083575.png?output-format=webp", title: 'Exterior Design' },
    { src: "https://image1.jdomni.in/banner/27072021/60/D2/05/4F43230D2B2FFCD4178B78F59B_1627329084246.jpg?output-format=webp", title: 'Interior Design' },
    { src: "https://image3.jdomni.in/banner/27072021/35/49/90/F5F89F3611D396AD7F76AEAF7E_1627328990054.jpeg?output-format=webp", title: 'Modern Interior' },
    { src: "https://image2.jdomni.in/banner/27072021/A1/DC/09/EAF8201D542A24C262C74F465A_1627328990396.jpg?output-format=webp", title: 'Project View 1' },
    { src: "https://image1.jdomni.in/banner/27072021/08/6B/D4/BB9CED18328DB081DC4D347B8F_1627328991271.jpeg?output-format=webp", title: 'Project View 2' },
    { src: "https://image3.jdomni.in/banner/27072021/BD/21/7C/50B3EFB4E329A4DED1819C4667_1627328991434.jpeg?output-format=webp", title: 'Project View 3' },
    { src: "https://image2.jdomni.in/banner/27072021/0F/78/91/9988A4D56EA1614B80D6F103DC_1627328937855.jpg?output-format=webp", title: 'Project View 4' },
    { src: "https://image2.jdomni.in/banner/27072021/0F/78/91/9988A4D56EA1614B80D6F103DC_1627328937855.jpg?output-format=webp", title: 'Project View 4' },
    { src: "https://image1.jdomni.in/banner/27072021/C6/D8/E8/1327A85C105C8C49CC7D6AB856_1627328836317.jpeg?output-format=webp", title: "Project view 5"}
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
