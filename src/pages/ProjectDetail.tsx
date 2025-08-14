import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2, Calendar, MapPin, Tag, User } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import archInterior1 from '@/assets/arch-interior-1.jpg';
import archInterior2 from '@/assets/arch-interior-2.jpg';
import archExterior1 from '@/assets/arch-exterior-1.jpg';

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const projectData = {
    title: 'Dalbourne Villa',
    category: 'ENVIRONMENT',
    year: '2011',
    location: 'Guangzhou, China',
    type: 'House',
    director: 'Harmony Soulth',
    description: `The Round Mountain House references local precedents by combining
modernist ideals with vernacular strategies to integrate seamlessly
into the Ozark Mountain landscape.

The form of the house is treated as two pieces that separate public
and private spaces. The "main frame" consists of public spaces: the
carport, outdoor breezeway, the guest loft, and main living area;
the "lean-to" or "saddle bag" contains private spaces: the laundry,
bathrooms, closets, and bedrooms.`,
    images: [archInterior1, archInterior2, archExterior1, archInterior1]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={archInterior1}
          alt={projectData.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-arch-black/30" />
        <div className="absolute bottom-8 left-8 text-white">
          <p className="text-sm font-light tracking-widest uppercase mb-2">
            {projectData.category}
          </p>
          <h1 className="text-5xl md:text-6xl font-light tracking-wide">
            {projectData.title}
          </h1>
        </div>
        
        {/* Back Button */}
        <Button
          variant="arch-outline"
          size="arch"
          onClick={() => navigate('/projects')}
          className="absolute top-8 left-8 text-white border-white hover:bg-white hover:text-arch-black"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Projects
        </Button>
      </section>

      {/* Project Content */}
      <section className="py-20 bg-content-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="animate-fade-in-up">
                <p className="text-lg font-light text-arch-medium leading-relaxed mb-8">
                  {projectData.description}
                </p>
              </div>

              {/* Project Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                {projectData.images.map((image, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="relative overflow-hidden bg-white">
                      <img
                        src={image}
                        alt={`${projectData.title} ${index + 1}`}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-arch-black/0 group-hover:bg-arch-black/20 arch-transition" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Details Sidebar */}
            <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="bg-white p-8 sticky top-8">
                <h3 className="text-2xl font-light tracking-wide text-arch-black mb-8">
                  Project Details
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Calendar className="h-5 w-5 text-arch-accent" />
                    <div>
                      <p className="text-sm font-light tracking-wide text-arch-medium uppercase">YEAR</p>
                      <p className="text-arch-black font-light">{projectData.year}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <MapPin className="h-5 w-5 text-arch-accent" />
                    <div>
                      <p className="text-sm font-light tracking-wide text-arch-medium uppercase">LOCATION</p>
                      <p className="text-arch-black font-light">{projectData.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Tag className="h-5 w-5 text-arch-accent" />
                    <div>
                      <p className="text-sm font-light tracking-wide text-arch-medium uppercase">CATEGORY</p>
                      <p className="text-arch-black font-light">{projectData.type}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <User className="h-5 w-5 text-arch-accent" />
                    <div>
                      <p className="text-sm font-light tracking-wide text-arch-medium uppercase">CREATIVE DIRECTOR</p>
                      <p className="text-arch-black font-light">{projectData.director}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-arch-light/50">
                  <Button variant="arch" size="arch" className="w-full mb-4">
                    <Share2 className="h-4 w-4 mr-2" />
                    SHARE PROJECT
                  </Button>
                  <Button variant="arch-outline" size="arch" className="w-full">
                    VIEW NEXT PROJECT
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;