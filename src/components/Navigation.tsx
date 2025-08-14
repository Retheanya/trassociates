import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Clients', href: '/clients' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-content-bg/95 backdrop-blur-sm border-b border-arch-light/50">
      <div className="flex items-center justify-between px-8 py-6">
        {/* Logo */}
        <a href='/'>
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/5544ea7d-e270-4c60-a5ed-eadbd2c1a17c.png" 
              alt="TR Associates" 
              className="h-8 w-8 object-contain"
            />
            <h1 className="text-xl font-extralight tracking-widest text-arch-black">
              TR Associates
            </h1>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-light tracking-wide text-arch-medium hover:text-arch-black arch-transition"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-arch-black hover:text-arch-accent arch-transition"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-content-bg border-t border-arch-light/50">
          <div className="px-8 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm font-light tracking-wide text-arch-medium hover:text-arch-black arch-transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};