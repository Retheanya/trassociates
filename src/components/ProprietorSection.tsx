import { Award, ShieldCheck } from 'lucide-react';
import bgImage from '@/assets/bgimage.jpg';
import proprietorImage from '@/assets/tilak.jpg';


export const ProprietorSection = () => {
  return (
    <section className="relative py-20 lg:h-screen lg:min-h-[700px] overflow-hidden flex items-center bg-arch-black/5">
      {/* Background Image - updated to bgimage.jpg with improved visibility */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-white/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/60" />
      </div>





      <div className="container mx-auto px-6 relative z-10">
        {/* Card visual like client testimonial */}
        <div className="max-w-6xl mx-auto bg-white shadow-xl p-6 md:p-12 lg:p-16 animate-fade-in-up">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            
            {/* Left Side: Real Color Image */}
            <div className="w-full lg:w-[40%] flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-arch-accent/5 -z-10" />
                <img
                  src={proprietorImage}
                  alt="Tilak Ranjit"
                  className="w-full max-w-[320px] md:max-w-[380px] aspect-[4/5] object-cover shadow-2xl border border-white"
                />
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="w-full lg:w-[60%] flex flex-col">
              <p className="text-sm font-light tracking-widest uppercase text-arch-medium mb-2">
                THE PROPRIETOR
              </p>
              
              <h2 className="text-3xl md:text-5xl font-light tracking-wide text-arch-black mb-6">
                Tilak Ranjit
              </h2>

              <div className="flex flex-wrap gap-2 mb-6">


                {['M.E (STR)', 'AIV', 'FICC', 'MIE', 'MISE', 'C.ENGG'].map((tag) => (
                  <span key={tag} className="text-[10px] tracking-widest uppercase text-arch-medium/70 px-3 py-1 bg-arch-black/5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                <p className="text-sm md:text-base font-light leading-relaxed text-arch-medium max-w-xl text-justify">
                  <span className="font-medium text-arch-black">TR ASSOCIATES</span> has over 13 years of experience in engineering and construction, 
                  including obtaining planning permissions from <span className="italic">DTCP, Municipal Corporations, Panchayats, CMDA, and LPA</span> for projects, 
                  as well as securing all statutory clearances required to start infrastructure projects in Tamil Nadu.
                </p>

                <p className="text-xs md:text-base font-light leading-relaxed text-arch-medium max-w-xl text-justify">
                  He is experienced in civil structural engineering, surveying, geotechnical design, and liaising with government departments to ensure 
                  hassle free permission procedures. He has successfully delivered <span className="text-arch-accent font-normal">500+ projects</span> in engineering and consultancy. 
                  He has also been empaneled with almost all government departments for his competence in civil engineering.
                </p>
              </div>



              <div className="grid grid-cols-2 gap-4 md:gap-8 pt-8">
                <div className="flex items-center gap-3 md:gap-4">
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-arch-accent" />
                  <div className="text-[10px] md:text-xs tracking-widest uppercase text-arch-black font-light">
                    Structural<br />Specialist
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-arch-accent" />
                  <div className="text-[10px] md:text-xs tracking-widest uppercase text-arch-black font-light">
                    Registered<br />Engineer
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};






