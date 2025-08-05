import { useEffect } from 'react';
import { Zap, Battery, Feather, Leaf } from 'lucide-react';

const FeaturesSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate');
            }, index * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.feature-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Zap,
      title: 'Lightning Speed',
      description: 'Reach up to 45 km/h with our powerful motor system for thrilling urban adventures.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Battery,
      title: 'Long Range',
      description: 'Travel up to 50km on a single charge with our advanced lithium-ion battery technology.',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
    },
    {
      icon: Feather,
      title: 'Ultra Light',
      description: 'Only 15kg weight makes it easy to carry and store anywhere you go.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Zero emissions and sustainable materials for a cleaner planet and future.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
  ];

  return (
    <section id="features" className="section-padding-lg bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 fade-in-up text-foreground">
            FUTURISTIC 
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent ml-3">
              FEATURES
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto fade-in-up leading-relaxed">
            Revolutionary technology meets sustainable innovation. Every component engineered 
            for the next generation of urban mobility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-premium fade-in-scale rounded-2xl p-8 text-center group cursor-pointer"
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground tracking-wide">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical specifications section */}
        <div id="specs" className="mt-32 card-premium rounded-3xl p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-neon">TECH SPECS</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: 'MOTOR POWER', value: '500W', icon: '⚡' },
                { label: 'TOP SPEED', value: '45 KM/H', icon: '🚀' },
                { label: 'RANGE', value: '50 KM', icon: '🔋' },
                { label: 'CHARGE TIME', value: '3 HRS', icon: '⏱️' },
                { label: 'MAX LOAD', value: '120 KG', icon: '💪' },
                { label: 'WEIGHT', value: '15 KG', icon: '🪶' },
                { label: 'WATER RESIST', value: 'IPX4', icon: '💧' },
                { label: 'WARRANTY', value: '2 YEARS', icon: '🛡️' },
              ].map((spec, index) => (
                <div key={index} className="fade-in-up group">
                  <div className="text-2xl mb-2">{spec.icon}</div>
                  <div className="text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{spec.value}</div>
                  <div className="text-sm text-muted-foreground font-medium tracking-wider">{spec.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;