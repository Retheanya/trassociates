import { useState } from 'react';
import { Phone, Mail, Headphones, X, Minus, Settings, BrickWall, Download } from 'lucide-react';
import bro1 from '@/assets/bro1.jpeg';
import bro2 from '@/assets/bro2.jpeg';

export const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {/* Contact Panel */}
      {isOpen && (
        <div className="mb-4 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-xl overflow-hidden flex w-[320px] animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Left Dark Section */}
          <div className="w-1/3 bg-[#4A4A4A] flex items-center justify-center py-10 relative">
            <Headphones className="w-12 h-12 text-white/90" />

            {/* Minimal Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
            >
              <Minus className="w-3 h-3 text-[#4A4A4A]" />
            </button>
          </div>

          {/* Right Info Section */}
          <div className="w-2/3 p-6 flex flex-col space-y-6">
            <div>
              <h4 className="text-[#333333] text-lg font-medium mb-3">Contact Us</h4>
              <div className="space-y-2">
                <a href="tel:04224950533" className="flex items-center gap-2 text-[#777777] hover:text-arch-accent transition-colors text-sm">
                  <Phone className="w-3.5 h-3.5" />
                  0422 4950533
                </a>
                <a href="tel:9042514845" className="flex items-center gap-2 text-[#777777] hover:text-arch-accent transition-colors text-sm">
                  <Phone className="w-3.5 h-3.5" />
                  9042514845
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[#333333] text-lg font-medium mb-3">Mail Us</h4>
              <a href="mailto:design@tr-associates.in" className="flex items-center gap-2 text-[#777777] hover:text-arch-accent transition-colors text-sm">
                <Mail className="w-3.5 h-3.5" />
                design@tr-associates.in
              </a>
            </div>

            <div>
              <h4 className="text-[#333333] text-lg font-medium mb-3">Brochures</h4>
              <div className="space-y-2">
                <a
                  href={bro1}
                  download="TR-Associates-Brochure-1.jpg"
                  className="flex items-center gap-2 text-[#777777] hover:text-arch-accent transition-colors text-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Brochure 1
                </a>
                <a
                  href={bro2}
                  download="TR-Associates-Brochure-2.jpg"
                  className="flex items-center gap-2 text-[#777777] hover:text-arch-accent transition-colors text-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Brochure 2
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Trigger Button - Construction Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex items-center justify-center w-14 h-14 bg-transparent transition-all duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
        aria-label="Contact support"
      >
        <div className="relative w-8 h-8 flex flex-col items-center justify-end">
          {/* Top part: Gear-like shape */}
          <Settings className={`w-6 h-6 text-arch-accent mb-[-3px] animate-spin-slow ${isOpen ? 'opacity-100' : 'opacity-100'}`} />
          {/* Bottom part: Bricks */}
          {/* <div className="flex flex-col gap-0.5 w-full">
            <div className="flex gap-0.5 justify-center">
              <div className="w-3.5 h-1.5 bg-arch-black rounded-sm" />
              <div className="w-3.5 h-1.5 bg-arch-black rounded-sm" />
            </div>
            <div className="flex gap-0.5 justify-center">
              <div className="w-2 h-1.5 bg-arch-black rounded-sm" />
              <div className="w-3.5 h-1.5 bg-arch-black rounded-sm" />
              <div className="w-2 h-1.5 bg-arch-black rounded-sm" />
            </div>
          </div> */}
        </div>
      </button>
    </div>
  );
};
