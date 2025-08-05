import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ShoppingCart, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { to: '/', label: 'Home', section: 'hero' },
    { label: 'Features', section: 'features' },
    { label: 'Specs', section: 'specs' },
    { label: 'Testimonials', section: 'testimonials' },
    { to: '/shop', label: 'Buy Now' },
  ];

  return (
    <>
      {/* Futuristic Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-neon backdrop-blur-xl border-b border-primary/20' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <NavLink to="/" className="text-2xl font-bold text-neon hover:text-primary-glow transition-all duration-300">
              EcoRide
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                link.to ? (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `font-medium transition-all duration-300 hover:text-primary ${
                        isActive ? 'text-primary' : 'text-foreground'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ) : (
                  <button
                    key={link.section}
                    onClick={() => scrollToSection(link.section!)}
                    className="font-medium transition-all duration-300 hover:text-primary text-foreground"
                  >
                    {link.label}
                  </button>
                )
              ))}
              
              <Button className="btn-neon-primary relative overflow-hidden">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center animate-pulse">
                  0
                </span>
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden glass-neon backdrop-blur-xl border-t border-primary/20 mt-4 rounded-lg">
              <div className="px-6 py-6 space-y-4">
                {navLinks.map((link) => (
                  link.to ? (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className={({ isActive }) =>
                        `block font-medium transition-all duration-300 hover:text-primary ${
                          isActive ? 'text-primary' : 'text-foreground'
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  ) : (
                    <button
                      key={link.section}
                      onClick={() => scrollToSection(link.section!)}
                      className="block font-medium transition-all duration-300 hover:text-primary text-foreground text-left"
                    >
                      {link.label}
                    </button>
                  )
                ))}
                <Button className="w-full mt-6 btn-neon-primary">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart (0)
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Neon Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full w-14 h-14 btn-neon-secondary shadow-neon-secondary"
          size="sm"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </>
  );
};

export default Navigation;