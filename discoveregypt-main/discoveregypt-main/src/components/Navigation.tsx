import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import eyeOfHorusLogo from '@/assets/eye-of-horus-logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Landmarks', href: '#landmarks' },
    { label: 'Courses', href: '#courses' },
    { label: 'Videos', href: '#videos' },
    { label: '3D Gallery', href: '/3d-gallery' },
    { label: 'Flags', href: '/flags' },
    { label: 'History', href: '#history' },
    { label: 'Teachers', href: '#teachers' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <img src={eyeOfHorusLogo} alt="Eye of Horus" className="w-12 h-12 glow-effect" />
            <span className="text-2xl font-display text-foreground">
              Discover <span className="text-primary text-glow">Egypt</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button variant="default" className="bg-gradient-primary hover:opacity-90 glow-effect">
              Book a Tour
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-border animate-in slide-in-from-top duration-300">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="default" className="w-full bg-gradient-primary hover:opacity-90 glow-effect">
              Book a Tour
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
