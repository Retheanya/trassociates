import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/tr-logo.png'; // Make sure this path is correct

// Kept your original navigation items as requested
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Clients', href: '/clients' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function for dynamic nav link classes
  const navLinkClasses = (href: string) => {
    const isActive = location.pathname === href;
    let classes = 'transition-colors duration-300 font-medium ';

    if (scrolled) {
      // Styles for the white, scrolled navbar
      classes += isActive
        ? 'text-amber-600' // Active link color from the example
        : 'text-gray-700 hover:text-amber-600';
    } else {
      // Styles for the transparent navbar at the top
      classes += isActive
        ? 'text-amber-500'
        : 'text-white/90 hover:text-white';
    }
    return classes;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-white shadow-md' : 'bg-black/20 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="TR Associates Logo" className="h-[5rem] w-24 object-contain" />
          <div className="hidden sm:flex flex-col">
            <h1 className={`text-xl font-bold tracking-tight leading-tight transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              TR ASSOCIATES
            </h1>
            <span className={`text-[10px] uppercase tracking-widest transition-colors duration-300 ${scrolled ? 'text-gray-500' : 'text-gray-200'}`}>
              Engineering & Consultation
            </span>
          </div>
        </Link>

        {/* Centered Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link key={item.label} to={item.href} className={navLinkClasses(item.href)}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right side: CTA + Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hidden md:inline-flex bg-accent text-white hover:bg-accent/90 px-6 py-2.5 text-sm font-semibold"
          >
            <Link to="/contact">Get Free Estimate</Link>
          </Button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 transition-colors duration-300 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 transition-colors duration-300 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.href
                    ? 'bg-amber-50 text-amber-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full mt-2 bg-amber-600 text-white hover:bg-amber-700"
            >
              <Link to="/contact" onClick={() => setIsOpen(false)}>Get Free Estimate</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
