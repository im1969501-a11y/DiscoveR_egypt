import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Eye, Clock } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'Inside the Great Pyramid: Hidden Chambers Revealed',
    duration: '15:42',
    views: '2.4M',
    category: 'Exploration',
    thumbnail: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&h=450&fit=crop',
  },
  {
    id: 2,
    title: 'Valley of the Kings: Tutankhamun\'s Tomb Discovery',
    duration: '22:18',
    views: '1.8M',
    category: 'History',
    thumbnail: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&h=450&fit=crop',
  },
  {
    id: 3,
    title: 'Egyptian Hieroglyphics: Learning the Ancient Language',
    duration: '18:30',
    views: '945K',
    category: 'Education',
    thumbnail: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800&h=450&fit=crop',
  },
  {
    id: 4,
    title: 'Nile River Journey: From Source to Sea',
    duration: '28:15',
    views: '1.2M',
    category: 'Travel',
    thumbnail: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&h=450&fit=crop',
  },
];

const VideosSection = () => {
  return (
    <section id="videos" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-secondary px-4 py-2 rounded-full">
            <span className="text-primary text-lg">𓂻</span>
            <span className="text-sm font-medium text-muted-foreground">Visual Journey</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display text-foreground">
            Watch & <span className="text-primary">Explore</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Immerse yourself in Egypt's wonders through our curated collection of educational videos
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {videos.map((video, index) => (
            <Card 
              key={video.id}
              className="group bg-card border-border hover:border-primary transition-all duration-500 overflow-hidden hover:shadow-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={video.thumbnail} 
                  alt={`Video thumbnail for ${video.title}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-glow">
                    <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground ml-1" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-primary">{video.category}</span>
                </div>

                {/* Duration */}
                <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-2 py-1 rounded">
                  <span className="text-xs font-semibold text-foreground">{video.duration}</span>
                </div>
              </div>

              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-display text-foreground group-hover:text-primary transition-colors leading-tight">
                  {video.title}
                </h3>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <Eye className="w-4 h-4 mr-1 text-primary" />
                  <span>{video.views} views</span>
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
            <Play className="mr-2" />
            Watch All Videos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
