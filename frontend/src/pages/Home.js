import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductGrid from '../components/product/ProductGrid';
import { APP_TAGLINE } from '../utils/constants';

const Home = () => {
  const allProducts = useSelector(state => state.products.products);

  return (
    <div className="min-h-screen bg-warm-cream">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-peacock-blue via-peacock-teal to-deep-teal py-20 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          {/* Brand Name */}
          <h1 className="text-6xl md:text-8xl font-display text-white mb-6 drop-shadow-lg">
            MoreByPrinal
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-3xl font-serif text-warm-cream mb-12 max-w-4xl mx-auto leading-relaxed">
            {APP_TAGLINE}
          </p>

          {/* Call-to-Action Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/#products"
              className="bg-warm-cream text-peacock-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-elegant hover:shadow-lg transform hover:-translate-y-1"
            >
              Explore Collection
            </Link>
            <Link
              to="/contact"
              className="border-2 border-warm-cream text-warm-cream px-8 py-4 rounded-lg font-semibold text-lg hover:bg-warm-cream hover:text-peacock-blue transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Filter and Sort Controls */}
      <section className="py-8 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-peacock-blue to-peacock-teal rounded-lg p-4 shadow-peacock">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <label className="text-white font-medium">Filter by:</label>
                <select className="px-4 py-2 border border-white rounded-lg bg-white text-peacock-blue focus:ring-2 focus:ring-peacock-gold focus:border-transparent">
                  <option value="all">All Products</option>
                  <option value="featured">Featured</option>
                  <option value="new">New Arrivals</option>
                  <option value="sale">On Sale</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-4">
                <label className="text-white font-medium">Sort by:</label>
                <select className="px-4 py-2 border border-white rounded-lg bg-white text-peacock-blue focus:ring-2 focus:ring-peacock-gold focus:border-transparent">
                  <option value="featured">Featured</option>
                  <option value="latest">Latest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A-Z</option>
                </select>
                <button className="text-white hover:text-peacock-gold transition-colors duration-200">
                  Clear all
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Products Section */}
      <section id="products" className="py-12">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-4">Our Products</h2>
              <p className="text-charcoal max-w-2xl mx-auto">
                Discover our complete collection of premium women's clothing, 
                designed with love and crafted for you.
              </p>
            </div>

          {/* Product Grid */}
          <ProductGrid products={allProducts} />
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="bg-gradient-to-br from-peacock-blue to-peacock-teal py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">Our Story</h2>
          <p className="text-lg text-warm-cream leading-relaxed mb-8">
            Born from love and friendship, MoreByPrinal reimagines Indian wear with care and intention. 
            We create clothing that feels personal, rooted, and quietly beautiful - designed with love, 
            crafted for you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-peacock-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-elegant">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-white mb-2">Made with Love</h3>
              <p className="text-warm-cream">Every piece is crafted with passion and attention to detail.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-peacock-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-elegant">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-white mb-2">Quality Assured</h3>
              <p className="text-warm-cream">Premium materials and craftsmanship in every garment.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-peacock-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-elegant">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-white mb-2">Indian Heritage</h3>
              <p className="text-warm-cream">Celebrating traditional craftsmanship with modern designs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
