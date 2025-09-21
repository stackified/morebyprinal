import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../../utils/constants';

const Header = () => {
  const location = useLocation();
  const totalItems = useSelector(state => state.cart.totalItems);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`bg-peacock-blue text-white shadow-peacock fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-2 shadow-lg' : 'py-4'
    }`}>
      {/* Single Main Navigation */}
      <nav className="bg-peacock-blue px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className={`flex items-center justify-center transition-all duration-300 ${
                isScrolled ? 'w-10 h-10' : 'w-14 h-14'
              }`}>
                <img 
                  src="./images/logo-removebg-preview.png" 
                  alt="MoreByPrinal Logo" 
                  className={`object-contain transition-all duration-300 ${
                    isScrolled ? 'w-10 h-10' : 'w-14 h-14'
                  }`}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="text-warm-cream font-bold text-2xl hidden">M</span>
              </div>
              <span className={`text-warm-cream font-display font-semibold transition-all duration-300 ${
                isScrolled ? 'text-lg' : 'text-xl'
              }`}>MoreByPrinal</span>
            </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-warm-cream hover:text-white transition-colors duration-200 px-3 py-2 rounded-md font-medium ${
                  location.pathname === item.path 
                    ? 'bg-warm-cream bg-opacity-60 text-peacock-blue hover:bg-opacity-80' 
                    : 'hover:bg-warm-cream hover:bg-opacity-20'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative bg-warm-cream text-peacock-blue px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-200 flex items-center space-x-2 shadow-elegant"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="font-medium">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-peacock-gold text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-warm-cream hover:text-white"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-peacock-blue border-t border-warm-cream">
          <div className="px-4 py-2 space-y-2">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block text-warm-cream hover:text-white transition-colors duration-200 px-3 py-2 rounded-md font-medium ${
                  location.pathname === item.path ? 'bg-warm-cream bg-opacity-60 text-peacock-blue hover:bg-opacity-80' : 'hover:bg-warm-cream hover:bg-opacity-20'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
