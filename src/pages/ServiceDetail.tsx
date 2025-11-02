import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2, Calendar, MapPin, Tag, User, Check } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import projectsData from '@/data/services.json';
import { getImageFromName, getImagesFromNames } from '@/utils/imageMapper';

const ServiceDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [copied, setCopied] = useState(false);

  // Find the project from JSON data
  const projectId = id ? parseInt(id, 10) : null;
  const project = projectsData.projects.find(p => p.id === projectId);
  const allProjects = projectsData.projects;

  // Get next project
  const currentIndex = project ? allProjects.findIndex(p => p.id === project.id) : -1;
  const nextProject = currentIndex >= 0 && currentIndex < allProjects.length - 1
    ? allProjects[currentIndex + 1]
    : allProjects[0]; // Loop back to first if at the end

  // If project not found, redirect to projects page
  useEffect(() => {
    if (!project && projectId) {
      navigate('/services');
    }
  }, [project, projectId, navigate]);

  if (!project) {
    return null; // Or show a loading/error state
  }

  // Map project data to use actual images
  const projectData = {
    ...project,
    image: getImageFromName(project.imageName),
    images: getImagesFromNames(project.imageNames),
  };

  // Share functionality
  const handleShare = async () => {
    const shareData = {
      title: projectData.title,
      text: `Check out ${projectData.title} by TR Associates`,
      url: window.location.href,
    };

    try {
      // Check if Web Share API is supported
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (error) {
      // User cancelled or error occurred
      console.error('Error sharing:', error);
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (clipboardError) {
        console.error('Error copying to clipboard:', clipboardError);
      }
    }
  };

  const handleNextProject = () => {
    navigate(`/services/${nextProject.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={projectData.image}
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
          onClick={() => navigate('/services')}
          className="absolute top-28 left-8 text-white border-white hover:bg-white hover:text-arch-black"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Services
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
                      <p className="text-sm font-light tracking-wide text-arch-medium uppercase">TYPE</p>
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
                  <Button 
                    variant="arch" 
                    size="arch" 
                    className="w-full mb-4"
                    onClick={handleShare}
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 mr-2" />
                        COPIED!
                      </>
                    ) : (
                      <>
                        <Share2 className="h-4 w-4 mr-2" />
                        SHARE PROJECT
                      </>
                    )}
                  </Button>
                  <Button 
                    variant="arch-outline" 
                    size="arch" 
                    className="w-full"
                    onClick={handleNextProject}
                  >
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

export default ServiceDetail;