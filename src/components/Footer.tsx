import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const footerLinks = {
    company: [
      { label: 'About Us', to: '/about' },
      { label: 'Careers', to: '#' },
      { label: 'Press', to: '#' },
      { label: 'Blog', to: '#' },
    ],
    support: [
      { label: 'Help Center', to: '#' },
      { label: 'Safety Guide', to: '#' },
      { label: 'Warranty', to: '#' },
      { label: 'Repairs', to: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', to: '#' },
      { label: 'Terms of Service', to: '#' },
      { label: 'Cookie Policy', to: '#' },
      { label: 'Disclaimer', to: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary to-secondary py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Stay Updated with EcoRide
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get the latest news, updates, and exclusive offers delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
            />
            <Button variant="secondary" className="btn-secondary-gradient px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <NavLink to="/" className="text-2xl font-bold text-primary mb-4 block">
              EcoRide
            </NavLink>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Revolutionizing urban mobility with premium electric scooters. 
              Sustainable, efficient, and designed for the modern world.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Innovation Street, Tech City, TC 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@ecoride.com</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <NavLink 
                    to={link.to} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <NavLink 
                    to={link.to} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <NavLink 
                    to={link.to} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2024 EcoRide. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors group"
                >
                  <social.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>

            {/* Operating Hours */}
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
              <div>Sat - Sun: 10:00 AM - 4:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;