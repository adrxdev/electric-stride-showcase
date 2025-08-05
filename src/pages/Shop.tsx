import { useState, useEffect } from 'react';
import { Search, Filter, Grid, List, Star, ShoppingCart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import scooterProduct from '@/assets/scooter-product-1.jpg';

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      id: 1,
      name: 'EcoRide Pro X1',
      price: 1299,
      originalPrice: 1499,
      image: scooterProduct,
      rating: 4.9,
      reviews: 127,
      features: ['50km Range', '45km/h Speed', '15kg Weight'],
      category: 'Premium',
      inStock: true,
      isNew: true,
    },
    {
      id: 2,
      name: 'EcoRide City Cruiser',
      price: 899,
      originalPrice: 999,
      image: scooterProduct,
      rating: 4.7,
      reviews: 89,
      features: ['35km Range', '35km/h Speed', '13kg Weight'],
      category: 'Standard',
      inStock: true,
      isNew: false,
    },
    {
      id: 3,
      name: 'EcoRide Urban Lite',
      price: 649,
      originalPrice: null,
      image: scooterProduct,
      rating: 4.5,
      reviews: 156,
      features: ['25km Range', '25km/h Speed', '11kg Weight'],
      category: 'Basic',
      inStock: true,
      isNew: false,
    },
    {
      id: 4,
      name: 'EcoRide Elite Max',
      price: 1899,
      originalPrice: null,
      image: scooterProduct,
      rating: 5.0,
      reviews: 67,
      features: ['70km Range', '55km/h Speed', '18kg Weight'],
      category: 'Premium',
      inStock: false,
      isNew: true,
    },
  ];

  const filteredProducts = products.filter(product => {
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      if (max && (product.price < min || product.price > max)) return false;
      if (!max && product.price < min) return false;
    }
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  useEffect(() => {
    // Scroll animations
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
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 bg-muted/10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-in-up">
              Shop 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ml-3">
                EcoRide
              </span>
            </h1>
            <p className="text-xl text-muted-foreground fade-in-up">
              Discover our complete range of premium electric scooters
            </p>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search scooters..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filters */}
              <div className="flex items-center gap-4">
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="w-40">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="0-800">Under $800</SelectItem>
                    <SelectItem value="800-1200">$800 - $1200</SelectItem>
                    <SelectItem value="1200-1600">$1200 - $1600</SelectItem>
                    <SelectItem value="1600">Over $1600</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Toggle */}
                <div className="flex border border-border rounded-lg">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm text-muted-foreground">
              Showing {sortedProducts.length} of {products.length} products
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1 max-w-4xl mx-auto'
            }`}>
              {sortedProducts.map((product, index) => (
                <Card 
                  key={product.id} 
                  className={`fade-in-up card-hover glass ${
                    viewMode === 'list' ? 'flex flex-row' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={viewMode === 'list' ? 'w-1/3' : ''}>
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.isNew && (
                        <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
                          New
                        </Badge>
                      )}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <Badge variant="destructive">Out of Stock</Badge>
                        </div>
                      )}
                    </div>
                  </div>

                  <CardContent className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      <Badge variant="outline">{product.category}</Badge>
                    </div>

                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm font-medium">{product.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({product.reviews} reviews)
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-lg text-muted-foreground line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>

                      <Button 
                        disabled={!product.inStock}
                        className="btn-primary-gradient"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;