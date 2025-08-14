import { Award, Trophy, Star, Medal } from 'lucide-react';

const awards = [
  {
    icon: Trophy,
    year: '2024',
    title: 'World Architecture Festival',
    category: 'Best Residential Project',
    project: 'Seascape Villa'
  },
  {
    icon: Award,
    year: '2023',
    title: 'International Design Awards',
    category: 'Gold Winner - Architecture',
    project: 'Cultural Complex Centre'
  },
  {
    icon: Star,
    year: '2023',
    title: 'European Architecture Prize',
    category: 'Innovation in Design',
    project: 'European Land Station'
  },
  {
    icon: Medal,
    year: '2022',
    title: 'Global Architecture Review',
    category: 'Emerging Practice Award',
    project: 'TR Associates'
  }
];

export const AwardsSection = () => {
  return (
    <section className="py-20 bg-content-bg">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm font-light tracking-widest uppercase text-arch-medium mb-4">
            RECOGNITION
          </p>
          <h2 className="text-5xl md:text-6xl font-light tracking-wide text-arch-black">
            Awards & Achievements
          </h2>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <div 
                key={award.title}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white border border-border p-8 transition-all duration-300 group-hover:shadow-lg">
                  <div className="mb-6">
                    <IconComponent className="h-12 w-12 mx-auto text-arch-accent" />
                  </div>
                  
                  <div className="arch-line mx-auto mb-6 transition-all duration-300 group-hover:w-16" />
                  
                  <div className="text-xs font-light tracking-widest uppercase text-arch-accent mb-2">
                    {award.year}
                  </div>
                  
                  <h3 className="text-lg font-light tracking-wide text-arch-black mb-2">
                    {award.title}
                  </h3>
                  
                  <p className="text-sm font-light text-arch-medium mb-2">
                    {award.category}
                  </p>
                  
                  <p className="text-xs font-light tracking-wide text-arch-light">
                    {award.project}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};