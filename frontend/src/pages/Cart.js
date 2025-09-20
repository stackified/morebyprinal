import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateQuantity, clearCart, applyPromoCode, removePromoCode } from '../store/slices/cartSlice';
import { ShoppingBag, Trash2, Plus, Minus, Tag, CreditCard } from 'lucide-react';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalItems, subtotal, total, promoCode, discount } = useSelector(state => state.cart);
  const [promoInput, setPromoInput] = useState('');

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      dispatch(removeFromCart(itemId));
    } else {
      dispatch(updateQuantity({ itemId, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleApplyPromo = () => {
    if (promoInput.trim()) {
      dispatch(applyPromoCode(promoInput.trim()));
      setPromoInput('');
    }
  };

  const handleRemovePromo = () => {
    dispatch(removePromoCode());
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-warm-cream">
        {/* Empty Cart */}
        <div className="min-h-[90vh] flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center">

            <div className="space-y-6">
              <h1 className="text-3xl font-serif font-bold text-peacock-blue flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 mr-3" />
                Shopping Cart
              </h1>

              <div className="w-32 h-32 mx-auto bg-peacock-gradient rounded-full flex items-center justify-center shadow-peacock">
                <ShoppingBag className="w-16 h-16 text-white" />
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-peacock-blue">Your cart is empty</h2>
                <p className="text-charcoal max-w-md mx-auto">
                  Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
                </p>
                  <Link
                    to="/"
                    className="inline-block bg-peacock-blue text-warm-cream px-8 py-3 rounded-lg font-medium hover:bg-peacock-teal transition-all duration-200"
                  >
                    Start Shopping
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-cream">
      {/* Main Content */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">

          {/* Page Title */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-serif font-bold text-peacock-blue flex items-center">
              <ShoppingBag className="w-8 h-8 mr-3" />
              Shopping Cart
            </h1>
              <div className="bg-peacock-blue text-warm-cream px-4 py-2 rounded-full text-sm font-medium shadow-elegant">
                {totalItems} items
              </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {/* Cart Items Header */}
                <div className="bg-soft-white rounded-lg shadow-elegant p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-serif font-bold text-peacock-blue">Cart Items</h2>
                  <button
                    onClick={() => dispatch(clearCart())}
                    className="text-peacock-gold hover:text-peacock-blue text-sm font-medium transition-colors duration-200"
                  >
                    Clear Cart
                  </button>
                </div>

                {/* Cart Items List */}
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                      {/* Product Image */}
                      <div className="relative">
                        <img
                          src={item.image || '/images/placeholder-product.jpg'}
                          alt={item.name}
                          className="w-20 h-24 object-cover rounded"
                        />
                        <div className="absolute top-0 left-0 bg-peacock-blue text-white px-2 py-1 text-xs font-bold">
                          {item.name.toUpperCase()}
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 space-y-2">
                        <h3 className="font-serif font-semibold text-peacock-blue">{item.name}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-charcoal">Size:</span>
                          <span className="bg-peacock-blue/10 text-peacock-blue px-2 py-1 rounded text-sm font-medium">
                            {item.size}
                          </span>
                        </div>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="w-8 h-8 border border-peacock-blue rounded flex items-center justify-center hover:bg-peacock-blue hover:text-white transition-colors duration-200"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-12 text-center font-medium text-peacock-blue">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="w-8 h-8 border border-peacock-blue rounded flex items-center justify-center hover:bg-peacock-blue hover:text-white transition-colors duration-200"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="space-y-1">
                          <p className="text-lg font-bold text-peacock-blue">
                            ₹{item.totalPrice.toLocaleString()}
                          </p>
                          <p className="text-sm text-charcoal">
                            ₹{item.price.toLocaleString()} each
                          </p>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="w-8 h-8 bg-peacock-gold/20 text-peacock-gold rounded-full flex items-center justify-center hover:bg-peacock-gold hover:text-white transition-colors duration-200"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shopping Tips */}
              <div className="bg-gradient-to-r from-peacock-blue/10 to-peacock-teal/10 rounded-lg p-6 border border-peacock-blue/20">
                <h3 className="text-lg font-serif font-bold text-peacock-blue mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Shopping Tips
                </h3>
                <ul className="space-y-2 text-sm text-charcoal">
                  <li>• Free shipping on all orders!</li>
                  <li>• Secure checkout with multiple payment options.</li>
                  <li>• Not sure about your size? Check our size guide before checking out.</li>
                  <li>• Your payment and personal information are always safe with us.</li>
                </ul>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
                <div className="bg-soft-white rounded-lg shadow-elegant p-6 sticky top-8">
                <h2 className="text-xl font-serif font-bold text-peacock-blue mb-6">Order Summary</h2>
                
                {/* Summary Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-charcoal">Subtotal ({totalItems} items)</span>
                    <span className="font-medium text-peacock-blue">₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal">Shipping</span>
                    <span className="text-peacock-gold font-medium">FREE</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-peacock-gold">
                      <span>Discount ({promoCode})</span>
                      <span>-₹{discount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="border-t border-peacock-blue/20 pt-4">
                    <div className="flex justify-between text-lg font-bold text-peacock-blue">
                      <span>Total</span>
                      <span>₹{total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <Tag className="w-4 h-4 text-peacock-blue" />
                    <span className="text-sm font-medium text-charcoal">Have a promo code?</span>
                  </div>
                  
                  {promoCode ? (
                    <div className="flex items-center justify-between bg-peacock-gold/10 p-3 rounded-lg border border-peacock-gold/20">
                      <span className="text-peacock-gold text-sm font-medium">{promoCode}</span>
                      <button
                        onClick={handleRemovePromo}
                        className="text-peacock-blue hover:text-peacock-gold text-sm transition-colors duration-200"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        placeholder="Enter promo code"
                        value={promoInput}
                        onChange={(e) => setPromoInput(e.target.value)}
                        className="flex-1 px-3 py-2 border border-peacock-blue rounded-lg text-sm focus:ring-2 focus:ring-peacock-gold focus:border-transparent"
                      />
                      <button
                        onClick={handleApplyPromo}
                        className="px-4 py-2 bg-peacock-blue text-white rounded-lg text-sm font-medium hover:bg-peacock-teal transition-colors duration-200"
                      >
                        Apply
                      </button>
                    </div>
                  )}
                </div>

                {/* Checkout Button */}
                <button className="w-full bg-peacock-blue text-warm-cream py-4 px-6 rounded-lg font-medium hover:bg-peacock-teal transition-all duration-200 mb-4">
                  Proceed to Checkout
                </button>

                {/* Payment Info */}
                <div className="flex items-center justify-center space-x-2 text-sm text-charcoal">
                  <CreditCard className="w-4 h-4" />
                  <span>Multiple payment options accepted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
