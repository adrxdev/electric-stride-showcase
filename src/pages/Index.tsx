import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import scooterLifestyle from '@/assets/scooter-lifestyle.jpg';

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        
        {/* Video Section */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in-up">
                See EcoRide in 
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ml-3">
                  Action
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 fade-in-up">
                Watch how our electric scooters are transforming urban transportation.
              </p>
              
              <div className="relative rounded-2xl overflow-hidden glass fade-in-up group cursor-pointer">
                <img 
                  src={scooterLifestyle} 
                  alt="EcoRide in action" 
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button size="lg" className="btn-primary-gradient rounded-full w-20 h-20 hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
