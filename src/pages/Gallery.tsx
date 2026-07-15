import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { EnquiryDialog } from '@/components/EnquiryDialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
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
import g1 from '@/assets/g1.jpeg';
import g2 from '@/assets/g2.jpeg';
import g3 from '@/assets/g3.jpeg';
import g4 from '@/assets/g4.jpeg';
import g5 from '@/assets/g5.jpeg';
import g6 from '@/assets/g6.jpeg';
import pdf1 from '@/assets/pdf1.jpg';
import pdf2 from '@/assets/pdf2.jpg';
import g7 from '@/assets/g7.jpeg';
import g8 from '@/assets/g8.jpeg';
import g9 from '@/assets/g9.jpeg';
import g11 from '@/assets/g11.jpeg';
import g12 from '@/assets/g12.jpeg';
import g13 from '@/assets/g13.jpeg';
import g16 from '@/assets/g16.jpeg';
import g17 from '@/assets/g17.jpeg';

const Gallery = () => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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
    { src: gallery19, title: 'Civil Engineering' },
    { src: g1, title: 'Modern Villa Design' },
    { src: g2, title: 'Luxury Residential Project' },
    { src: g3, title: 'Urban Infrastructure' },
    { src: g4, title: 'Contemporary Architecture' },
    { src: g5, title: 'Commercial Development' },
    { src: g6, title: 'Industrial Facility' },
    { src: pdf1, title: 'Architectural Blueprint' },
    { src: pdf2, title: 'Structural Layout' },
    { src: g7, title: 'Modern Exterior' },
    { src: g8, title: 'Residential Interior' },
    { src: g9, title: 'Urban Space' },
    { src: g11, title: 'Industrial Framework' },
    { src: g12, title: 'Commercial Design' },
    { src: g13, title: 'Building Structure' },
    { src: g16, title: 'Sustainable Architecture' },
    { src: g17, title: 'Urban Planning Project' }
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
                className="relative aspect-[4/3] overflow-hidden group cursor-pointer rounded-[1.75rem] shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <button
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6"
                >
                  <div className="bg-white/10 backdrop-blur-xl rounded-3xl px-5 py-4 max-w-xs">
                    <p className="text-sm uppercase tracking-[0.35em] text-[hsl(var(--brand-orange))] mb-2">View Project</p>
                    <h3 className="text-xl font-semibold text-white leading-snug">{image.title}</h3>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6">
          <div className="relative max-w-6xl w-full">
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                className="w-full h-auto max-h-[80vh] object-cover"
              />
              <div className="p-6 bg-[#111111]">
                <h3 className="text-3xl font-semibold text-white">{galleryImages[selectedImage].title}</h3>
                <p className="mt-3 text-white/75 max-w-2xl">
                  Explore this project in more detail. Click the enquiry button below to get a quote or ask about our process.
                </p>
                <div className="mt-6">
                  <Button variant="arch" onClick={() => setEnquiryOpen(true)}>
                    Enquire Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      
      <EnquiryDialog
        open={enquiryOpen}
        onOpenChange={setEnquiryOpen}
      />
    </div>
  );
};

export default Gallery;
