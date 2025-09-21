import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
      <div 
        className="bg-soft-white rounded-lg shadow-elegant overflow-hidden hover:shadow-peacock transition-all duration-300 transform hover:-translate-y-1 border border-peacock-blue/10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      {/* Product Image */}
      <div className="relative overflow-hidden group">
        <Link to={`/product/${product.id}`}>
          <div className="relative w-full h-80 overflow-hidden">
            {/* Main Image */}
            <img
              src={product.images[0] || './images/placeholder-product.jpg'}
              alt={product.name}
              className={`w-full h-80 object-cover transition-all duration-700 transform group-hover:scale-110 ${
                isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
              }`}
            />
            {/* Hover Image */}
            {product.images[1] && (
              <img
                src={product.images[1]}
                alt={product.name}
                className={`absolute inset-0 w-full h-80 object-cover transition-all duration-700 transform group-hover:scale-110 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              />
            )}
          </div>
        </Link>

        {/* Sold Out Badge */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-peacock-gold text-white px-4 py-2 rounded font-medium">
              Sold Out
            </span>
          </div>
        )}

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-peacock-blue/20 via-transparent to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      {/* Product Details */}
      <div className="p-6">
        <div className="space-y-3">
          {/* Product Name */}
          <h3 className="text-lg font-serif font-semibold text-peacock-blue">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-medium-gray line-clamp-2">
            {product.shortDescription}
          </p>

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-peacock-blue">
              ₹{product.price.toLocaleString()}
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-peacock-gold'
                      : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-medium-gray">
              ({product.reviews?.length || 0} reviews)
            </span>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            {product.inStock ? (
                <Link
                  to={`/product/${product.id}`}
                  className="w-full bg-peacock-blue text-warm-cream py-3 px-4 rounded-lg font-medium hover:bg-peacock-teal transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>View Details</span>
                </Link>
            ) : (
              <button
                disabled
                className="w-full bg-gray-300 text-gray-500 py-3 px-4 rounded-lg font-medium cursor-not-allowed"
              >
                Sold Out
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
