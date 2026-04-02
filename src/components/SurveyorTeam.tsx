import surveyorImg from '@/assets/surveyteam.jpg';

export const SurveyorTeam = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative group animate-fade-in">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={surveyorImg}
                alt="Surveyor Team"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-arch-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center space-y-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              <div className="arch-line mb-6" />
              <h2 className="text-4xl md:text-5xl font-light tracking-wide text-arch-black mb-6">
                Land surveyors
              </h2>
              <p className="text-base font-light leading-relaxed text-arch-medium mb-6 max-w-xl">
                "Surveyor team done good job in our property measurements, they cleared our confusions and found out our boundaries & they matched in their drawings with the survey record and site boundaries promptly,"
              </p>
            </div>
            
            <div className="pt-4">
              <p className="text-sm font-light text-arch-medium">
                — Project testimonial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
