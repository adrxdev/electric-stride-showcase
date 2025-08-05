import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Marketing Manager',
      image: '/placeholder.svg',
      rating: 5,
      text: 'The EcoRide scooter has completely transformed my daily commute. It\'s fast, reliable, and I love that I\'m contributing to a cleaner environment.',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Software Developer',
      image: '/placeholder.svg',
      rating: 5,
      text: 'Amazing build quality and performance! The battery lasts all day and the ride is incredibly smooth. Best purchase I\'ve made this year.',
    },
    {
      name: 'Emily Foster',
      role: 'College Student',
      image: '/placeholder.svg',
      rating: 5,
      text: 'Perfect for campus life! Lightweight, foldable, and gets me to class in style. My friends are all jealous of my EcoRide.',
    },
    {
      name: 'David Kim',
      role: 'Urban Planner',
      image: '/placeholder.svg',
      rating: 5,
      text: 'As someone who cares about sustainable transportation, this scooter exceeds all expectations. The technology is impressive.',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in-up">
            What Our 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ml-3">
              Riders Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in-up">
            Join thousands of satisfied customers who have revolutionized their daily commute.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="glass rounded-xl p-8 text-center mx-auto max-w-2xl">
                    {/* Stars */}
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl text-foreground mb-6 italic leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-lg">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full w-10 h-10 p-0 glass border-white/20"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full w-10 h-10 p-0 glass border-white/20"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
          {[
            { number: '10K+', label: 'Happy Customers' },
            { number: '4.9', label: 'Average Rating' },
            { number: '50+', label: 'Cities Served' },
            { number: '99%', label: 'Satisfaction Rate' },
          ].map((stat, index) => (
            <div key={index} className="text-center fade-in-up">
              <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;