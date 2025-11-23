import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star } from 'lucide-react';
import luxorTemple from '@/assets/luxor-temple.jpg';
import abuSimbel from '@/assets/abu-simbel.jpg';
import nileSunset from '@/assets/nile-sunset.jpg';

const landmarks = [
  {
    id: 1,
    name: 'Luxor Temple',
    location: 'Luxor, Upper Egypt',
    description: 'Marvel at the grand columns and intricate hieroglyphics of this ancient temple complex built by Amenhotep III.',
    image: luxorTemple,
    duration: '2-3 hours',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Abu Simbel Temples',
    location: 'Aswan, Southern Egypt',
    description: 'Witness the colossal statues of Ramesses II carved into solid rock, a UNESCO World Heritage masterpiece.',
    image: abuSimbel,
    duration: '3-4 hours',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Nile River Cruise',
    location: 'Aswan to Luxor',
    description: 'Experience the timeless beauty of Egypt aboard a traditional felucca, sailing through history.',
    image: nileSunset,
    duration: '3-7 days',
    rating: 4.9,
  },
];

const LandmarksSection = () => {
  return (
    <section id="landmarks" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-secondary px-4 py-2 rounded-full">
            <span className="text-primary text-lg">𓉔</span>
            <span className="text-sm font-medium text-muted-foreground">Ancient Wonders</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display text-foreground">
            Iconic <span className="text-primary">Landmarks</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore Egypt's most magnificent archaeological sites and UNESCO World Heritage treasures
          </p>
        </div>

        {/* Landmarks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {landmarks.map((landmark, index) => (
            <Card 
              key={landmark.id} 
              className="group bg-card border-border hover:border-primary transition-all duration-500 overflow-hidden hover:shadow-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={landmark.image} 
                  alt={`Historic ${landmark.name} in Egypt`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <span className="text-sm font-semibold text-foreground">{landmark.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-display text-foreground mb-2 group-hover:text-primary transition-colors">
                    {landmark.name}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4 mr-1 text-primary" />
                    {landmark.location}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {landmark.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1 text-primary" />
                    {landmark.duration}
                  </div>
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary-foreground hover:bg-primary transition-all"
                  >
                    Learn More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground font-semibold px-8"
          >
            View All Landmarks
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LandmarksSection;
