import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProprietorSection } from '@/components/ProprietorSection';
import { 
  Target, 
  Award, 
  Users, 
  ShieldCheck, 
  History, 
  ChevronRight, 
  CheckCircle2,
  Calendar,
  Briefcase
} from 'lucide-react';
import aboutHeroImg from '@/assets/abouthero.jpg';
import aboutImg from '@/assets/about.jpg';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision",
      description: "Delivering engineering solutions with unmatched accuracy and technical depth."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Integrity",
      description: "Adhering to the highest standards of ethics and statutory compliance."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Partnering closely with clients to transform visions into structural reality."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Striving for perfection in every blueprint, survey, and consultation."
    }
  ];

  const timeline = [
    {
      year: "2012",
      title: "Foundation",
      description: "TR Associates was established with a focus on civil engineering consultancy."
    },
    {
      year: "2016",
      title: "Statutory Expansion",
      description: "Registered as approved consultants for government and local planning authorities."
    },
    {
      year: "2020",
      title: "Technological Leap",
      description: "Adopted LiDAR surveying and advanced structural simulation software."
    },
    {
      year: "2024",
      title: "Industry Leader",
      description: "Recognized as a premier consultancy for large-scale industrial and residential projects."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutHeroImg}
            alt="Engineering Excellence"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-arch-black/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="flex items-center space-x-3 mb-6">
              <span className="w-12 h-0.5 bg-orange-500"></span>
              <p className="text-sm font-bold tracking-[0.4em] uppercase text-orange-500">
                THE LEGACY OF EXCELLENCE
              </p>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Engineering Your <br />
              <span className="text-green-500 italic">Future Growth</span>
            </h1>
            <p className="text-lg text-gray-300 font-light leading-relaxed max-w-xl">
              Specialized in Civil Engineering, Statutory Planning, and Structural Consultancy with over a decade of proven expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-50 rounded-full -z-10 blur-3xl"></div>
              <h2 className="text-sm font-bold text-green-600 tracking-[0.3em] uppercase mb-4">WHO WE ARE</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-arch-black mb-8 leading-tight">
                Pioneering Precision in <br />
                <span className="text-green-600">Engineering Consultancy</span>
              </h3>
              <div className="space-y-6 text-lg text-arch-medium font-light leading-relaxed">
                <p>
                  Founded in 2012, TR Associates has emerged as a trusted name in the engineering landscape, specializing in civil design, structural auditing, and government statutory approvals.
                </p>
                <p>
                  Our multidisciplinary team combines deep technical knowledge with local regulatory expertise to deliver projects that are safe, sustainable, and compliant with all planning standards.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <p className="text-4xl font-bold text-orange-500 mb-2">12+</p>
                  <p className="text-sm font-bold text-arch-black uppercase tracking-widest">Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-orange-500 mb-2">100+</p>
                  <p className="text-sm font-bold text-arch-black uppercase tracking-widest">Projects Delivered</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img src={aboutImg} alt="TR Associates Workspace" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-orange-500/10 rounded-full -z-0 blur-3xl"></div>
              {/* Floating Badge */}
              <div className="absolute -left-10 bottom-20 bg-white p-8 rounded-2xl shadow-xl z-20 hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white">
                    <History className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-arch-black">Registered</p>
                    <p className="text-xs font-medium text-arch-medium">Government Consultants</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-green-600 tracking-[0.3em] uppercase mb-4">OUR VALUES</h2>
            <h3 className="text-4xl font-bold text-arch-black">The Principles That Build Our Foundation</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-8 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 mx-auto">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-arch-black mb-4">{value.title}</h4>
                <p className="text-arch-medium font-light leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <h2 className="text-sm font-bold text-green-600 tracking-[0.3em] uppercase mb-4">OUR JOURNEY</h2>
            <h3 className="text-4xl font-bold text-arch-black">Decades of Structural Innovation</h3>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 -translate-x-1/2"></div>
            
            <div className="space-y-16">
              {timeline.map((item, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white border-4 border-green-600 rounded-full z-10 -translate-x-1/2 shadow-sm"></div>
                  
                  {/* Content */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                    <div className={`bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <p className="text-2xl font-bold text-green-600 mb-2">{item.year}</p>
                      <h4 className="text-xl font-bold text-arch-black mb-3">{item.title}</h4>
                      <p className="text-arch-medium font-light leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proprietor Section */}
      <div className="pt-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center mb-12">
          <h2 className="text-sm font-bold text-green-600 tracking-[0.3em] uppercase mb-4">LEADERSHIP</h2>
          <h3 className="text-4xl font-bold text-arch-black">Meet Our Proprietor</h3>
        </div>
      </div>
      <ProprietorSection />

      {/* Why Choose Us */}
      <section className="py-24 bg-arch-black text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-green-600/10 -skew-x-12 translate-x-1/4"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-sm font-bold text-orange-500 tracking-[0.3em] uppercase mb-4">WHY CHOOSE US</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-10 leading-tight">
                Specialized Expertise in <br />
                <span className="text-green-500 italic">Civil Engineering</span>
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-orange-500">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Government Registered</h4>
                    <p className="text-gray-400 font-light leading-relaxed">Approved consultants for DTCP, CMDA, and various local planning authorities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-orange-500">
                    <Briefcase className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Multidisciplinary Team</h4>
                    <p className="text-gray-400 font-light leading-relaxed">In-house experts for structural design, surveying, and statutory clearances.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-orange-500">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Timely Deliveries</h4>
                    <p className="text-gray-400 font-light leading-relaxed">Optimized workflows ensuring quick statutory approvals and design cycles.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 relative">
              <div className="space-y-6">
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                  <p className="text-5xl font-bold text-green-500 mb-2">13+</p>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Total Years</p>
                </div>
                <div className="bg-green-600 p-8 rounded-3xl shadow-xl">
                  <History className="w-10 h-10 mb-4 text-white" />
                  <p className="text-lg font-bold leading-tight">Building Legacy Since 2012</p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-orange-500 p-8 rounded-3xl shadow-xl">
                  <Users className="w-10 h-10 mb-4 text-white" />
                  <p className="text-lg font-bold leading-tight">Satisfied Partners Globally</p>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                  <p className="text-5xl font-bold text-green-500 mb-2">40+</p>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;