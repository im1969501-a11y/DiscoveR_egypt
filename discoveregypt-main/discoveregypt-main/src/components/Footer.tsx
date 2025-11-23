import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import eyeOfHorusLogo from '@/assets/eye-of-horus-logo.png';

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={eyeOfHorusLogo} alt="Eye of Horus" className="w-10 h-10 glow-effect" />
              <span className="text-xl font-display text-foreground">
                Discover <span className="text-primary text-glow">Egypt</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your gateway to exploring ancient wonders and modern adventures in the land of pharaohs.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-display text-foreground mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#landmarks" className="hover:text-primary transition-colors">Landmarks</a></li>
              <li><a href="#courses" className="hover:text-primary transition-colors">Courses</a></li>
              <li><a href="#videos" className="hover:text-primary transition-colors">Videos</a></li>
              <li><a href="#history" className="hover:text-primary transition-colors">History</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display text-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Book Tours</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Travel Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Teachers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-display text-foreground mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary transition-colors flex items-center justify-center text-foreground hover:text-primary-foreground">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary transition-colors flex items-center justify-center text-foreground hover:text-primary-foreground">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary transition-colors flex items-center justify-center text-foreground hover:text-primary-foreground">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary transition-colors flex items-center justify-center text-foreground hover:text-primary-foreground">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© 2025 Discover Egypt. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
