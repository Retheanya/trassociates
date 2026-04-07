import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import archInterior1 from '@/assets/arch-interior-1.jpg';
import architextureImg from '@/assets/architexture.png';
import { 
  ChevronRight, Building2, HardHat, FileText, MapPin, TestTube, Home, 
  Shield, Factory, ClipboardCheck, ChevronDown, Grid, List, Search, Heart, LayoutGrid, Menu
} from 'lucide-react';

const capabilities = [
  { title: "Architectural Design Service", id: 6, icon: Home },
  { title: "Chartered Engineer Certifications", id: 7, icon: Shield },
  { title: "Chartered Engineer Certifications Civil / Structure / Panel Engineer", id: 7, icon: Shield },
  { title: "Civil Engineering Design Service", id: 1, icon: Building2 },
  { title: "Consulting For Renovation And Restoration", id: 9, icon: ClipboardCheck },
  { title: "Interior Design Services", id: 6, icon: Home },
  { title: "Pre-Design Service", id: 6, icon: Home },
  { title: "Soil Testing Services", id: 5, icon: TestTube },
  { title: "Structural Design And Detail Drawing of Steel Structure", id: 2, icon: HardHat },
  { title: "Structural Design Service", id: 8, icon: Factory },
];

const Capabilities = () => {
  const navigate = useNavigate();
  const [isFirstItemOpen, setIsFirstItemOpen] = useState(false);

  const toggleFirstItem = () => {
    setIsFirstItemOpen(!isFirstItemOpen);
  };

  return (
    <div className="min-h-screen bg-background text-arch-black">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={archInterior1}
          alt="Capabilities Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-arch-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white animate-fade-in-up">
            <p className="text-sm font-light tracking-widest uppercase mb-4">
              Our Expertise
            </p>
            <h1 className="text-5xl md:text-6xl font-light tracking-wide">
              CAPABILITIES
            </h1>
          </div>
        </div>
      </section>

      {/* Capabilities List */}
      <section className="py-24 bg-content-bg">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 gap-4">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              const isFirst = index === 0;
              
              return (
                <div key={index} className="flex flex-col gap-4">
                  <div 
                    onClick={() => isFirst ? toggleFirstItem() : navigate(`/capabilities/${item.id}`)}
                    className="group flex items-center justify-between p-8 bg-white border border-arch-light/20 hover:border-arch-accent transition-all duration-500 cursor-pointer animate-fade-in shadow-sm hover:shadow-md"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center space-x-6">
                      <div className="p-3 bg-content-light group-hover:bg-arch-accent/10 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-arch-accent" />
                      </div>
                      <h3 className="text-lg md:text-xl font-light tracking-wide text-arch-black group-hover:text-arch-accent transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>
                    {isFirst ? (
                      <ChevronDown className={`w-5 h-5 text-arch-light group-hover:text-arch-accent transition-transform duration-300 ${isFirstItemOpen ? 'rotate-180' : ''}`} />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-arch-light group-hover:text-arch-accent group-hover:translate-x-1 transition-all duration-300" />
                    )}
                  </div>

                  {/* Toggle UI for First Item */}
                  {isFirst && isFirstItemOpen && (
                    <div className="animate-fade-in-up bg-[#F8F9FB] rounded-lg border border-arch-light/20 overflow-hidden mt-2">
                      {/* Breadcrumbs */}
                      <div className="px-6 py-4 border-b border-arch-light/10 text-xs font-light tracking-wider text-arch-medium flex items-center space-x-2">
                        <span>Home</span>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-arch-black">Architectural Design Service</span>
                      </div>

                      <div className="flex flex-col lg:flex-row min-h-[500px]">
                        {/* Sidebar Filters */}
                        <aside className="w-full lg:w-64 bg-white p-6 border-r border-arch-light/10">
                          <h4 className="text-sm font-semibold tracking-wider text-arch-black mb-6 uppercase">Filters</h4>
                          
                          <div className="space-y-6">
                            <div>
                              <p className="text-xs font-medium text-arch-medium uppercase mb-4 tracking-widest">Category</p>
                              <div className="flex items-center space-x-3 group cursor-pointer">
                                <div className="w-4 h-4 border border-arch-accent rounded flex items-center justify-center bg-arch-accent/5">
                                  <div className="w-2 h-2 bg-arch-accent rounded-sm" />
                                </div>
                                <span className="text-sm font-light text-arch-black group-hover:text-arch-accent transition-colors">
                                  Architectural Design Service
                                </span>
                              </div>
                            </div>
                          </div>
                        </aside>

                        {/* Main Content Area */}
                        <main className="flex-1 p-6 lg:p-8">
                          {/* Top Bar */}
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b border-arch-light/10 gap-4">
                            <h2 className="text-sm font-light text-arch-black">
                              Architectural Design Service <span className="text-arch-medium ml-1">(Showing 1 - 1 of 1 items)</span>
                            </h2>
                            
                            <div className="flex items-center space-x-6">
                              <div className="flex items-center space-x-2">
                                <span className="text-xs font-light text-arch-medium uppercase tracking-wider whitespace-nowrap">Sort By</span>
                                <div className="flex items-center space-x-2 bg-white px-3 py-1.5 border border-arch-light/20 rounded-md cursor-pointer hover:border-arch-accent transition-colors">
                                  <span className="text-xs font-light text-arch-black">Popularity</span>
                                  <ChevronDown className="w-3 h-3 text-arch-medium" />
                                </div>
                              </div>
                              
                              <div className="flex items-center space-x-3 border-l border-arch-light/20 pl-6">
                                <LayoutGrid className="w-4 h-4 text-arch-accent cursor-pointer" />
                                <Menu className="w-4 h-4 text-arch-medium cursor-pointer hover:text-arch-accent" />
                              </div>
                            </div>
                          </div>

                          {/* Item Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                            <div className="group bg-white border border-arch-light/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm">
                              <div className="relative aspect-[4/5] overflow-hidden bg-[#FFF0F5]">
                                <img 
                                  src={architextureImg} 
                                  alt="Architectural Design Service"
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md cursor-pointer hover:bg-white arch-transition group">
                                  <Heart className="w-4 h-4 text-arch-medium group-hover:text-arch-accent group-hover:fill-arch-accent transition-colors" />
                                </div>
                              </div>
                              <div className="p-6">
                                <div className="h-0.5 bg-arch-accent/20 w-8 mb-4 group-hover:w-16 transition-all duration-300" />
                                <h3 
                                  onClick={() => navigate('/capabilities/6')}
                                  className="text-base font-light tracking-wide text-arch-black group-hover:text-arch-accent cursor-pointer transition-colors"
                                >
                                  Architectural Design Service
                                </h3>
                                <p className="mt-2 text-xs font-light text-arch-medium uppercase tracking-widest">
                                  View Details
                                </p>
                              </div>
                            </div>
                          </div>
                        </main>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Capabilities;
