import { Navigation } from '@/components/Navigation';
import { ProjectsSection } from '@/components/ProjectsSection';
import { Footer } from '@/components/Footer';
import archInterior1 from '@/assets/arch-interior-1.jpg';

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={archInterior1}
          alt="Projects Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-arch-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white animate-fade-in-up">
            <p className="text-sm font-light tracking-widest uppercase mb-4">
              OUR PORTFOLIO
            </p>
            <h1 className="text-5xl md:text-6xl font-light tracking-wide">
              Projects
            </h1>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      <Footer />
    </div>
  );
};

export default Projects;