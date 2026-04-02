import { Quote } from 'lucide-react';

export const ClientStories = () => {
  return (
    <section className="relative py-24 bg-black/40 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Section Header */}
          <h2 className="text-5xl font-light tracking-wide text-white mb-4">
            Client Success Stories
          </h2>
          <p className="text-sm font-light text-white/60 mb-16">
            Real impact, measured by results
          </p>

          <div className="relative arch-line mx-auto mb-16" />

          {/* Story Content Card */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="relative inline-block">
              <Quote className="w-12 h-12 text-white/10 absolute -top-8 -left-8" />
              <h3 className="text-2xl md:text-3xl font-light tracking-wide text-white mb-6">
                factory design and drawings
              </h3>
            </div>
            
            <p className="text-xl font-light tracking-wide text-white max-w-2xl mx-auto italic">
              "Good design and simple fixing with steel plates for our factory purposes, unwanted things neglected in our factory, easy access provided by engineer for our routine activity and monitoring in our factory"
            </p>
            
            <div className="pt-8">
              <div className="arch-line mx-auto opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
