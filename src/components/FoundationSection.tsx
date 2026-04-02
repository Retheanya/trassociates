import { Quote } from 'lucide-react';
import foundationImg from '@/assets/foundation.jpg';

export const FoundationSection = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative group animate-fade-in">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={foundationImg}
                alt="Foundation Project"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-arch-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center space-y-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              <Quote className="w-12 h-12 text-arch-accent/20 absolute -top-6 -left-6" />
              <div className="arch-line mb-6" />
              <h2 className="text-4xl md:text-5xl font-light tracking-wide text-arch-black mb-6">
                Foundation redesigned & restructured for our residence
              </h2>
              <p className="text-base font-light leading-relaxed text-arch-medium mb-6 max-w-xl">
                We seek an advice to the conversion of our old buildings for better functional requirements as of current trends to fetch good income for our property in a prime location, really thoughtful engineer, sense of creativeness, good
              </p>
            </div>
            
            <div className="pt-4">
              <p className="text-sm font-light tracking-widest uppercase text-arch-medium">
                — PROJECT TESTIMONIAL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
