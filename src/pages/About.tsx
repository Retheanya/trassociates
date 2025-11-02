import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AboutSection } from '@/components/AboutSection';
import archExterior1 from '@/assets/arch-exterior-1.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={archExterior1}
          alt="About Us Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-arch-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white animate-fade-in-up">
            <p className="text-sm font-light tracking-widest uppercase mb-4">
              ABOUT US
            </p>
            <h1 className="text-5xl md:text-6xl font-light tracking-wide">
              Leading Consultants & Planning Today
            </h1>
          </div>
        </div>
      </section>

      <AboutSection />

      <Footer />
    </div>
  );
};

export default About;