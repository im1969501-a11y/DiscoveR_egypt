import { Button } from '@/components/ui/button';
import { Play, MapPin, BookOpen } from 'lucide-react';
import heroPyramids from '@/assets/hero-pyramids.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroPyramids} 
          alt="The Great Pyramids of Giza at sunset"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Mystical Glow Overlay */}
      <div className="absolute inset-0 z-0 mystical-bg"></div>

      {/* Egyptian Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(90deg, hsl(var(--primary)) 0px, transparent 1px, transparent 40px),
                           repeating-linear-gradient(0deg, hsl(var(--primary)) 0px, transparent 1px, transparent 40px)`
        }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center mt-20">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
            <span className="text-primary text-lg">𓋹</span>
            <span className="text-sm font-medium text-foreground">Explore 5000 Years of History</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-foreground leading-tight">
            Journey Through
            <span className="block text-primary text-glow mt-2">Ancient Egypt</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover legendary landmarks, learn from expert historians, and book unforgettable tours through the land of pharaohs
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold text-lg px-8 py-6 glow-effect group"
            >
              <MapPin className="mr-2 group-hover:animate-bounce" />
              Explore Landmarks
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6 hover:shadow-glow"
            >
              <Play className="mr-2" />
              Watch Videos
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-display text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Historic Sites</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-display text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Expert Courses</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-display text-primary">20+</div>
              <div className="text-sm text-muted-foreground">Expert Teachers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
