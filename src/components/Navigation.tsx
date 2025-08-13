import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Projects', href: '#' },
    { label: 'Studio', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-content-bg/95 backdrop-blur-sm border-b border-arch-light/50">
      <div className="flex items-center justify-between px-8 py-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="arch-line-vertical" />
          <h1 className="text-xl font-extralight tracking-widest text-arch-black">
            ARCH STUDIO
          </h1>
        </div>

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