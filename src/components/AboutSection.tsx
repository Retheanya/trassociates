import { Award, Target, Users, Heart, TrendingUp, Clock } from 'lucide-react';
import archExterior1 from '@/assets/arch-exterior-1.jpg';
import archInterior1 from '@/assets/arch-interior-1.jpg';

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for perfection in every project, delivering superior quality and outstanding results.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Building strong relationships with clients, partners, and communities to achieve shared success.'
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Operating with honesty, transparency, and ethical practices in all our endeavors.'
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'Embracing cutting-edge technologies and creative solutions to stay ahead of the curve.'
  }
];

const stats = [
  { number: '10+', label: 'Years Experience' },
  { number: '400+', label: 'Projects Completed' },
  { number: '120+', label: 'Happy Clients' },
  { number: '30+', label: 'Expert Team Members' }
];

export const AboutSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-content-light to-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Side - Image with Overlay Text */}
          <div className="relative group">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={archExterior1}
                alt="About Us"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-arch-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-white shadow-2xl p-8 w-64 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-4 mb-4">
                <Clock className="w-8 h-8 text-arch-accent" />
                <div>
                  <div className="text-3xl font-light text-arch-black">10+</div>
                  <div className="text-xs font-light tracking-widest uppercase text-arch-medium">Years</div>
                </div>
              </div>
              <div className="arch-line" />
              <p className="text-sm font-light text-arch-medium mt-4">
                Delivering excellence since 2012
              </p>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center space-y-8 animate-fade-in-up">
            <div>
              <p className="text-sm font-light tracking-widest uppercase text-arch-medium mb-4">
                ABOUT US
              </p>
              <div className="arch-line mb-6" />
              <h2 className="text-4xl md:text-5xl font-light tracking-wide text-arch-black mb-6">
                Leading Consultants &
                <span className="block text-arch-accent">Planning Today</span>
              </h2>
              <p className="text-base font-light leading-relaxed text-arch-medium mb-6">
                T.R Associates, Chennai & Coimbatore is a top player in the category of  Consultants for planning, designing & certifications utmost care &  understands the complete requirement of clients and provide the satisfactory services with professional excellence, we have completed  423 + Projects  for our customers in the span of 10 years
              </p>
              <p className="text-base font-light leading-relaxed text-arch-medium">
                We the consultants registered with the government for the services we offered for our clients  the and you can trust/rely on our efficient services. From initiation of the project to successful completion of the projects, we assure our expert workforce/team  provides best suitable possible infrastructure development of all your needs.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white/50 backdrop-blur-sm border border-arch-black/10 hover:border-arch-accent/30 arch-transition animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-light text-arch-black mb-2">
                {stat.number}
              </div>
              <div className="text-xs font-light tracking-widest uppercase text-arch-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
      </div>
      
      <div className="relative bg-content-light py-16 md:py-20">
        <div className="container mx-auto px-6">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-10">
            <img
              src={archInterior1}
              alt="Values"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative bg-white/80 backdrop-blur-sm p-12 md:p-16">
            <div className="text-center mb-12">
              <p className="text-sm font-light tracking-widest uppercase text-arch-medium mb-4">
                OUR VALUES
              </p>
              <h3 className="text-3xl md:text-4xl font-light tracking-wide text-arch-black">
                What Drives Us Forward
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="group text-center animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-arch-accent/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                        <div className="relative bg-white p-6 rounded-full shadow-lg group-hover:shadow-xl arch-transition">
                          <Icon className="w-8 h-8 text-arch-accent group-hover:scale-110 arch-transition" />
                        </div>
                      </div>
                    </div>
                    <h4 className="text-xl font-light tracking-wide text-arch-black mb-3">
                      {value.title}
                    </h4>
                    <p className="text-sm font-light leading-relaxed text-arch-medium">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="container mx-auto px-6">
        <div className="mt-20 text-center max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="inline-block mb-8">
            <Award className="w-16 h-16 text-arch-accent mx-auto mb-4" />
            <div className="arch-line mx-auto" />
          </div>
          <blockquote className="text-2xl md:text-3xl font-light tracking-wide text-arch-black italic mb-6">
            "Our mission is to transform architectural visions into reality through innovative design, 
            meticulous engineering, and unwavering commitment to quality."
          </blockquote>
          <p className="text-sm font-light tracking-widest uppercase text-arch-medium">
            — TR Associates
          </p>
        </div>
      </div>
    </section>
  );
};

