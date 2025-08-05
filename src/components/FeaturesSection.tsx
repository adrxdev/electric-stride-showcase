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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in-up">
            Why Choose 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ml-3">
              EcoRide
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in-up">
            Our electric scooters combine cutting-edge technology with sustainable design 
            to deliver the perfect urban mobility solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card fade-in-up card-hover glass rounded-xl p-6 text-center group cursor-pointer"
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional tech specs */}
        <div className="mt-20 glass rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Technical Excellence</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
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
                <div className="text-2xl font-bold text-primary mb-1">{spec.value}</div>
                <div className="text-sm text-muted-foreground">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;