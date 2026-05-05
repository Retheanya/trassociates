import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import client2 from '@/assets/client2.jpg';

const Clients = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-32 bg-content-light">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <p className="text-sm font-light tracking-widest uppercase text-arch-medium mb-4">
              AMBITIOUS CLIENTS
            </p>
            <h1 className="text-5xl md:text-6xl font-light tracking-wide text-arch-black">
              We have worked with great people.
            </h1>
          </div>
        </div>
      </section>

      {/* Clients Image Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto shadow-2xl animate-fade-in">
            <img 
              src={client2} 
              alt="Our Prestigious Clients" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clients;