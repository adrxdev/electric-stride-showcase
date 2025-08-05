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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in-up text-foreground">
            Why Choose 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ml-2">
              EcoRide
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto fade-in-up leading-relaxed">
            Our electric scooters combine cutting-edge technology with sustainable design 
            to deliver the perfect urban mobility solution for today's professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card fade-in-up rounded-xl p-8 text-center group cursor-pointer"
            >
              <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-200`}>
                <feature.icon className={`h-7 w-7 ${feature.color}`} />
              </div>
              
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical specifications */}
        <div className="mt-24 bg-card border border-border rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-center mb-10 text-foreground">Technical Specifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Motor Power', value: '500W' },
              { label: 'Top Speed', value: '45 km/h' },
              { label: 'Range', value: '50 km' },
              { label: 'Charge Time', value: '3 hours' },
              { label: 'Max Load', value: '120 kg' },
              { label: 'Weight', value: '15 kg' },
              { label: 'IP Rating', value: 'IPX4' },
              { label: 'Warranty', value: '2 years' },
            ].map((spec, index) => (
              <div key={index} className="fade-in-up">
                <div className="text-xl font-semibold text-primary mb-2">{spec.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;