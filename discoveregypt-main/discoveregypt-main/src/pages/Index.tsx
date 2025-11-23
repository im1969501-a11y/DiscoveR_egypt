import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import LandmarksSection from '@/components/LandmarksSection';
import CoursesSection from '@/components/CoursesSection';
import VideosSection from '@/components/VideosSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <LandmarksSection />
        <CoursesSection />
        <VideosSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
