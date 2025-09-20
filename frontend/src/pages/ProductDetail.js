import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import { setSelectedProduct } from '../store/slices/productSlice';
import { SIZE_OPTIONS } from '../utils/constants';
import { ShoppingCart, Star } from 'lucide-react';
import { useToast } from '../contexts/ToastContext';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);
  const { showSuccess, showError } = useToast();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  const product = products.find(p => p.id === id);

  useEffect(() => {
    if (product) {
      dispatch(setSelectedProduct(product));
    }
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [product, dispatch]);

  if (!product) {
    return (
      <div className="min-h-screen bg-light-cream flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <Link to="/#products" className="text-burgundy hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      showError('Please select a size before adding to cart', 'Size Required');
      return;
    }
    
    dispatch(addToCart({
      product,
      size: selectedSize,
      quantity
    }));
    
    showSuccess(
      `${product.name} (Size: ${selectedSize}) has been added to your cart`,
      'Added to Cart!'
    );
  };


  return (
    <div className="min-h-screen bg-warm-cream">
      {/* Breadcrumbs */}
      <div className="bg-warm-cream py-4">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-peacock-blue">Home</Link>
            <span>/</span>
            <Link to="/#products" className="hover:text-peacock-blue">Products</Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative">
                <img
                  src={product.images[selectedImage] || '/images/placeholder-product.jpg'}
                  alt={product.name}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-card"
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative overflow-hidden rounded-lg ${
                      selectedImage === index ? 'ring-2 ring-burgundy' : ''
                    }`}
                  >
                    <img
                      src={image || '/images/placeholder-product.jpg'}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              {/* Product Name */}
              <h1 className="text-3xl font-serif font-bold text-charcoal">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  ({product.reviews?.length || 0} customer reviews)
                </span>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <p className="text-3xl font-bold text-charcoal">
                  ₹{product.price.toLocaleString()}
                </p>
              </div>

              {/* Stock Status */}
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-green-600 font-medium">✓ In Stock</span>
              </div>

              {/* Short Description */}
              <p className="text-gray-600 leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Size Selection */}
              <div className="space-y-3">
                <label className="text-lg font-medium text-charcoal">Size:</label>
                <div className="flex space-x-3">
                  {SIZE_OPTIONS.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border-2 rounded-lg font-medium transition-all duration-200 ${
                        selectedSize === size
                          ? 'border-peacock-blue bg-peacock-blue text-white'
                          : 'border-gray-300 text-gray-700 hover:border-peacock-blue'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-3">
                <label className="text-lg font-medium text-charcoal">Quantity:</label>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="w-16 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className={`w-full py-4 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                  selectedSize
                    ? 'bg-peacock-blue text-warm-cream hover:bg-peacock-teal'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!selectedSize}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>{selectedSize ? 'ADD TO CART' : 'SELECT SIZE'}</span>
              </button>

              {/* Size Chart Link */}
              <div className="pt-4">
                <Link
                  to="#"
                  className="text-peacock-blue hover:underline flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Size chart</span>
                </Link>
              </div>

              {/* Categories and Tags */}
              <div className="space-y-2 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Categories:</span> {product.category}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Tags:</span> {product.tags.join(', ')}
                </p>
              </div>

              {/* Share Product */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <span className="text-sm font-medium text-gray-700">Share this product:</span>
                <div className="flex space-x-2">
                  <button className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700">
                    <span className="text-xs font-bold">f</span>
                  </button>
                  <button className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                  <button className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full flex items-center justify-center hover:from-pink-600 hover:to-purple-700">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description Tabs */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Tabs */}
          <div className="flex space-x-1 mb-8">
            <button
              onClick={() => setActiveTab('description')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'description'
                  ? 'bg-peacock-blue text-warm-cream'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'reviews'
                  ? 'bg-peacock-blue text-warm-cream'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Reviews ({product.reviews?.length || 0})
            </button>
          </div>

          {/* Tab Content */}
          <div className="prose max-w-none">
            {activeTab === 'description' && (
              <div className="text-gray-600 leading-relaxed">
                <p className="text-lg mb-4">{product.description}</p>
                <p>
                  This beautiful piece combines traditional craftsmanship with modern design, 
                  making it perfect for special occasions and everyday elegance. The intricate 
                  details and premium materials ensure both comfort and style.
                </p>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div className="space-y-6">
                {product.reviews?.length > 0 ? (
                  product.reviews.map((review, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="font-medium">{review.name}</span>
                        <span className="text-gray-500 text-sm">{review.date}</span>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-8 text-center">
            Related Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map(relatedProduct => (
                <div key={relatedProduct.id} className="bg-white rounded-lg shadow-card overflow-hidden">
                  <Link to={`/product/${relatedProduct.id}`}>
                    <img
                      src={relatedProduct.images[0] || '/images/placeholder-product.jpg'}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                  <div className="p-4">
                    <h3 className="font-semibold text-charcoal mb-2">{relatedProduct.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{relatedProduct.category}</p>
                    <p className="text-lg font-bold text-charcoal mb-3">
                      ₹{relatedProduct.price.toLocaleString()}
                    </p>
                    <Link
                      to={`/product/${relatedProduct.id}`}
                      className="block w-full bg-peacock-blue text-warm-cream py-2 px-4 rounded-lg text-center font-medium hover:bg-peacock-teal transition-all duration-200"
                    >
                      View Product
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
