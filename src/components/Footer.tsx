import { MapPin, Phone, Mail, Heart } from 'lucide-react';
import trLogo from '@/assets/tr-logo.png';

export const Footer = () => {
  return (
    <footer className="bg-arch-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src={trLogo} 
                alt="TR Associates" 
                className="h-12 w-12 object-contain"
              />
              <h3 className="text-xl font-extralight tracking-widest">
                TR Associates
              </h3>
            </div>
            <p className="text-arch-light font-light leading-relaxed mb-6 max-w-md">
              Creating spaces that blend functionality with aesthetic excellence. 
              Our architectural approach emphasizes clean lines, natural materials, 
              and the harmony between form and environment.
            </p>
            <div className="arch-line bg-white/30" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-light tracking-wide mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Services', href: '/services' },
                { label: 'About', href: '/about' },
                { label: 'Clients', href: '/clients' },
                { label: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-arch-light hover:text-white arch-transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-light tracking-wide mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-arch-accent flex-shrink-0 mt-0.5" />
                <address className="text-arch-light font-light not-italic">
                  No 404, West Side to Kalyan Jewellers,<br />
                  6th Street Extension,<br />
                  Gandhipuram, Coimbatore,<br />
                  Tamil Nadu - 641012
                </address>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-arch-accent" />
                <a 
                  href="tel:+919042514845"
                  className="text-arch-light hover:text-white arch-transition"
                >
                  +91 - 9042514845
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-arch-accent" />
                <a 
                  href="mailto:tn.trassociates@gmail.com"
                  className="text-arch-light hover:text-white arch-transition"
                >
                  tn.trassociates@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col justify-center items-center space-y-4">
          <p className="text-arch-light font-light text-sm">
            © 2025 TR Associates. All rights reserved.
          </p>
          <div className="flex items-center space-x-1.5 text-arch-light font-light text-sm">
            <span>Made with</span>
            <Heart className="h-3.5 w-3.5 text-white fill-white animate-pulse" />
            <span>by</span>
            <a 
              href="https://technovuz.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-arch-accent transition-colors duration-300 font-normal"
            >
              Technovuz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};