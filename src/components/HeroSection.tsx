import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-scooter.jpg';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Professional overlay */}
      <div className="absolute inset-0 hero-gradient opacity-80"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ride the Future
            </span>
            <br />
            <span className="text-white">
              Go Electric
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-12 fade-in-up max-w-3xl mx-auto font-light leading-relaxed">
            Transform your daily commute with our premium electric scooters. 
            Combining cutting-edge technology, sustainable design, and unmatched performance 
            for the modern professional.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 fade-in-up">
            <Button size="lg" className="btn-primary-gradient text-base px-10 py-4 font-medium">
              Explore Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/40 text-white hover:bg-white/20 hover:border-white/60 text-base px-10 py-4 font-medium backdrop-blur-sm"
            >
              <Play className="mr-2 h-4 w-4" />
              View Demo
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 fade-in-up">
            {[
              { number: '50+', label: 'km Range', unit: 'km' },
              { number: '45', label: 'Max Speed', unit: 'km/h' },
              { number: '15', label: 'Weight', unit: 'kg' },
              { number: '3', label: 'Charge Time', unit: 'hrs' },
            ].map((stat, index) => (
              <div key={index} className="glass rounded-lg p-6 backdrop-blur-sm border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {stat.number}
                  <span className="text-lg text-white/70 ml-1">{stat.unit}</span>
                </div>
                <div className="text-sm text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;