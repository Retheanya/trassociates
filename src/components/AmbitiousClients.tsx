const clients = [
  { name: 'HP', logo: 'HP' },
  { name: 'DreamWorks', logo: 'DreamWorks' },
  { name: 'YouTube', logo: 'YouTube' },
  { name: 'Burger King', logo: 'BK' },
  { name: 'Apple', logo: 'Apple' },
  { name: 'Adidas', logo: 'adidas' },
  { name: 'Intel', logo: 'Intel' },
  { name: 'Puma', logo: 'PUMA' }
];

export const AmbitiousClients = () => {
  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/ad722359-5950-4909-93ab-9ac4f0c8c2ee.png')`
      }}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm font-light tracking-widest uppercase text-white/80 mb-4">
            AMBITIOUS CLIENTS
          </p>
          <h2 className="text-5xl md:text-6xl font-light tracking-wide text-white">
            We have worked with great people.
          </h2>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <div 
              key={client.name}
              className="bg-white p-12 text-center group hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-16 flex items-center justify-center">
                <span className="text-2xl font-light text-arch-black">
                  {client.logo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};