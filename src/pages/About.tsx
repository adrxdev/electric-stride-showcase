import { useEffect } from 'react';
import { Leaf, Users, Award, Target } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
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

  const founders = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-Founder',
      bio: 'Former Tesla engineer with 10+ years in sustainable transportation. Passionate about revolutionizing urban mobility.',
      image: '/placeholder.svg',
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Apple product designer and Stanford graduate. Expert in IoT and smart vehicle technology.',
      image: '/placeholder.svg',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Head of Sustainability',
      bio: 'Environmental scientist dedicated to creating zero-emission transportation solutions for cities worldwide.',
      image: '/placeholder.svg',
    },
  ];

  const values = [
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Every decision we make prioritizes environmental impact and sustainability.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a global community of eco-conscious urban commuters.',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Premium materials and cutting-edge technology in every product.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Continuously pushing the boundaries of electric mobility.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in-up">
              About 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                EcoRide
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up">
              We're on a mission to transform urban transportation through innovative, 
              sustainable electric scooters that make cities cleaner and commutes better.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  EcoRide was founded in 2020 with a simple yet ambitious goal: to make urban 
                  transportation sustainable, accessible, and enjoyable for everyone.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  We believe that small changes in how we move around cities can create massive 
                  positive impacts on our environment and quality of life. Our electric scooters 
                  represent more than just a mode of transport—they're a statement about the future 
                  we want to build.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                    <div className="text-sm text-muted-foreground">CO2 Saved (tons)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">100K+</div>
                    <div className="text-sm text-muted-foreground">Happy Riders</div>
                  </div>
                </div>
              </div>
              
              <div className="fade-in-up">
                <div className="glass rounded-2xl p-8 text-center">
                  <Leaf className="h-16 w-16 text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Carbon Neutral by 2025</h3>
                  <p className="text-muted-foreground">
                    We're committed to achieving complete carbon neutrality across our entire 
                    supply chain and operations by 2025, setting new standards for the industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in-up">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in-up">
                These core principles guide everything we do at EcoRide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="fade-in-up glass text-center card-hover">
                  <CardContent className="p-6">
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in-up">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in-up">
                The visionaries behind EcoRide's innovative approach to urban mobility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {founders.map((founder, index) => (
                <Card key={index} className="fade-in-up glass text-center card-hover">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-2xl">
                        {founder.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{founder.name}</h3>
                    <p className="text-primary font-medium mb-4">{founder.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{founder.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="py-20 bg-gradient-to-r from-secondary/20 to-primary/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 fade-in-up">
              Environmental Impact
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="fade-in-up">
                <div className="text-4xl font-bold text-secondary mb-2">85%</div>
                <div className="text-lg font-medium mb-2">Emissions Reduction</div>
                <div className="text-muted-foreground">vs. traditional vehicles</div>
              </div>
              
              <div className="fade-in-up">
                <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                <div className="text-lg font-medium mb-2">Recyclable Materials</div>
                <div className="text-muted-foreground">in our manufacturing</div>
              </div>
              
              <div className="fade-in-up">
                <div className="text-4xl font-bold text-secondary mb-2">50+</div>
                <div className="text-lg font-medium mb-2">Cities Worldwide</div>
                <div className="text-muted-foreground">reducing carbon footprint</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;