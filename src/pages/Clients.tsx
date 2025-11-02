import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ExternalLink } from 'lucide-react';

// Using placeholder logos as the original client logos aren't available
const clients = [
  {
    name: 'HP',
    logo: 'HP',
    website: 'http://www8.hp.com/'
  },
  {
    name: 'Adidas',
    logo: 'adidas',
    website: 'http://www.global.adidas.com/'
  },
  {
    name: 'Apple',
    logo: 'Apple',
    website: 'http://www.apple.com/'
  },
  {
    name: 'Jeep',
    logo: 'Jeep',
    website: 'http://www.jeep.com/'
  },
  {
    name: 'DreamWorks',
    logo: 'DreamWorks',
    website: 'http://www.dreamworksanimation.com/'
  },
  {
    name: 'Intel',
    logo: 'Intel',
    website: 'http://www.intel.com/'
  },
  {
    name: 'Burger King',
    logo: 'BK',
    website: 'https://www.bk.com/'
  },
  {
    name: 'YouTube',
    logo: 'YouTube',
    website: 'http://www.youtube.com/'
  },
  {
    name: 'Puma',
    logo: 'PUMA',
    website: 'http://puma.com/'
  },
  {
    name: 'Lexus',
    logo: 'LEXUS',
    website: 'http://www.lexus.com/'
  },
  {
    name: 'WordPress',
    logo: 'WordPress',
    website: 'https://wordpress.com/'
  },
  {
    name: 'Panasonic',
    logo: 'Panasonic',
    website: 'http://www.panasonic.com/'
  }
];

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

      {/* Clients Grid */}
      <section className="py-20 bg-content-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div 
                key={client.name}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white border border-border p-12 text-center transition-all duration-300 hover:shadow-lg">
                  {/* Logo placeholder */}
                  <div className="h-24 flex items-center justify-center mb-6">
                    <span className="text-2xl font-light text-arch-black">
                      {client.logo}
                    </span>
                  </div>
                  
                  {/* Visit Site Link */}
                  <a
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-light tracking-widest uppercase text-arch-medium hover:text-arch-black arch-transition"
                  >
                    <span>VISIT SITE</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20 animate-fade-in" style={{ animationDelay: '1200ms' }}>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light tracking-wide text-arch-black mb-6">
                Ready to join our prestigious client list?
              </h2>
              <p className="text-arch-medium font-light leading-relaxed mb-8">
                We're always looking for ambitious clients who value exceptional design and innovative solutions.
              </p>
              <div className="space-x-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-arch-black text-white font-light tracking-wider uppercase text-xs px-8 py-4 hover:bg-arch-dark arch-transition border-none h-12"
                >
                  START PROJECT
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-arch-black text-arch-black bg-transparent font-light tracking-wider uppercase text-xs px-8 py-4 hover:bg-arch-black hover:text-white arch-transition h-12"
                >
                  VIEW SERVICES
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clients;