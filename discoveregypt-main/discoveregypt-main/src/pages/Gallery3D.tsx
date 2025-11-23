import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import images
import pyramidsImg from '@/assets/hero-pyramids.jpg';
import luxorTempleImg from '@/assets/luxor-temple.jpg';
import abuSimbelImg from '@/assets/abu-simbel.jpg';
import nileSunsetImg from '@/assets/nile-sunset.jpg';

interface ImageCardProps {
  imageUrl: string;
  position: [number, number, number];
  rotation?: [number, number, number];
}

function ImageCard({ imageUrl, position, rotation = [0, 0, 0] }: ImageCardProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = new THREE.TextureLoader().load(imageUrl);

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <planeGeometry args={[3, 2]} />
      <meshStandardMaterial 
        map={texture} 
        side={THREE.DoubleSide}
        emissive="#ff7a00"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <OrbitControls 
        enableZoom={true}
        enablePan={true}
        minDistance={3}
        maxDistance={15}
        autoRotate
        autoRotateSpeed={0.5}
      />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ff7a00" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      <pointLight position={[0, 0, 5]} intensity={1} color="#ff7a00" distance={20} />
      
      <Environment preset="night" />
      
      {/* Place images in 3D space */}
      <ImageCard imageUrl={pyramidsImg} position={[0, 0, 0]} />
      <ImageCard imageUrl={luxorTempleImg} position={[-4, 1, -2]} rotation={[0, 0.3, 0]} />
      <ImageCard imageUrl={abuSimbelImg} position={[4, 1, -2]} rotation={[0, -0.3, 0]} />
      <ImageCard imageUrl={nileSunsetImg} position={[0, -2, -1]} rotation={[0.2, 0, 0]} />
      
      {/* Background sphere */}
      <mesh position={[0, 0, -10]}>
        <sphereGeometry args={[15, 32, 32]} />
        <meshStandardMaterial 
          color="#000000" 
          side={THREE.BackSide}
          emissive="#ff7a00"
          emissiveIntensity={0.1}
        />
      </mesh>
    </>
  );
}

const Gallery3D = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 mystical-bg"></div>
          <div className="container mx-auto px-4 relative z-10">
            <Button 
              variant="ghost" 
              className="mb-6 text-primary hover:text-primary hover:bg-primary/10"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2" size={20} />
              Back
            </Button>
            
            <h1 className="text-5xl md:text-6xl font-display text-foreground mb-6 text-glow">
              3D Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Experience Egypt's landmarks in an immersive 3D environment. Use your mouse to rotate, zoom, and explore the ancient wonders from every angle.
            </p>
            
            <div className="mt-8 p-4 bg-secondary/50 backdrop-blur-sm border border-border rounded-lg inline-block">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-semibold">Controls:</span> Click and drag to rotate • Scroll to zoom • Right-click and drag to pan
              </p>
            </div>
          </div>
        </section>

        {/* 3D Canvas Section */}
        <section className="relative h-[600px] md:h-[800px] border-y border-border">
          <Suspense fallback={
            <div className="h-full flex items-center justify-center bg-secondary/20">
              <div className="text-center space-y-4">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
                <p className="text-muted-foreground">Loading 3D Gallery...</p>
              </div>
            </div>
          }>
            <Canvas className="bg-background">
              <Scene />
            </Canvas>
          </Suspense>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="text-primary text-4xl">🏛️</div>
                <h3 className="text-xl font-display text-foreground">Interactive Exploration</h3>
                <p className="text-sm text-muted-foreground">
                  Rotate and zoom into each landmark to see intricate details from multiple perspectives.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="text-primary text-4xl">🌅</div>
                <h3 className="text-xl font-display text-foreground">Atmospheric Lighting</h3>
                <p className="text-sm text-muted-foreground">
                  Experience Egypt's landmarks bathed in warm, mystical lighting that captures their timeless beauty.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="text-primary text-4xl">🔄</div>
                <h3 className="text-xl font-display text-foreground">Auto-Rotate Mode</h3>
                <p className="text-sm text-muted-foreground">
                  Sit back and watch as the gallery automatically rotates to showcase each magnificent view.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery3D;
