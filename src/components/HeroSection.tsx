import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Zap } from 'lucide-react';
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

    const elements = document.querySelectorAll('.fade-in-up, .fade-in-scale');
    elements.forEach((el) => observer.observe(el));

    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Futuristic overlay with animated particles */}
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      
      {/* Floating neon particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full float-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Bold hero heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 fade-in-up">
            <span className="text-neon">
              RIDE
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              THE FUTURE
            </span>
          </h1>

          {/* Powerful subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 fade-in-up max-w-4xl mx-auto font-light leading-relaxed">
            Experience the next generation of urban mobility. Our premium electric scooters combine 
            <span className="text-primary font-medium"> cutting-edge technology</span>, 
            <span className="text-accent font-medium"> sustainable design</span>, and 
            <span className="text-secondary font-medium"> unmatched performance</span> 
            for the modern innovator.
          </p>

          {/* Futuristic CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 fade-in-scale">
            <Button size="lg" className="btn-neon-primary text-lg px-12 py-6 font-medium relative overflow-hidden group">
              <Zap className="mr-3 h-5 w-5 group-hover:animate-pulse" />
              EXPERIENCE NOW
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-primary hover:text-primary text-lg px-12 py-6 font-medium backdrop-blur-sm transition-all duration-300"
              variant="outline"
            >
              <Play className="mr-3 h-5 w-5" />
              WATCH DEMO
            </Button>
          </div>

          {/* Performance metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 fade-in-up">
            {[
              { number: '50+', label: 'RANGE', unit: 'KM', color: 'primary' },
              { number: '45', label: 'TOP SPEED', unit: 'KM/H', color: 'secondary' },
              { number: '15', label: 'WEIGHT', unit: 'KG', color: 'accent' },
              { number: '3', label: 'CHARGE TIME', unit: 'HRS', color: 'primary' },
            ].map((stat, index) => (
              <div key={index} className="card-premium rounded-xl p-6 backdrop-blur-sm text-center group">
                <div className={`text-3xl md:text-4xl font-bold text-${stat.color} mb-2 group-hover:scale-110 transition-transform`}>
                  {stat.number}
                  <span className="text-lg text-white/70 ml-1">{stat.unit}</span>
                </div>
                <div className="text-sm text-white/80 font-medium tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Futuristic scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/80 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse shadow-neon-primary"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;