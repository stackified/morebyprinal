import React from 'react';
import { Wallet, RefreshCw, Ruler, Package, AlertTriangle, CheckCircle, Clock, Headphones } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-warm-cream">
      {/* Page Header */}
        <section className="bg-peacock-blue py-12 shadow-peacock">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold text-warm-cream mb-4">Terms & Conditions</h1>
          <p className="text-lg text-warm-cream mb-6">
            Please review our policies carefully before making a purchase
          </p>
          <div className="w-24 h-1 bg-peacock-gold mx-auto"></div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-peacock-blue/10 to-peacock-teal/10 border border-peacock-blue/20 rounded-lg p-6 mb-8">
            <p className="text-charcoal leading-relaxed">
              At MoreByPrinal, we are committed to providing a transparent and satisfying shopping experience. 
              Please review our store policies carefully before placing an order. By making a purchase, 
              you agree to these terms and conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Payment Policy */}
            <div className="bg-soft-white rounded-lg shadow-elegant p-6">
              <div className="flex items-center mb-4">
                <Wallet className="w-6 h-6 text-peacock-blue mr-3" />
                <h3 className="text-xl font-bold text-charcoal">Payment Policy</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">No Cash on Delivery (COD)</h4>
                    <p className="text-sm text-charcoal">
                      We do not offer Cash on Delivery. All orders must be prepaid using:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-charcoal">
                      <li>• Credit/Debit Cards</li>
                      <li>• UPI Payments</li>
                      <li>• Net Banking</li>
                      <li>• Digital Wallets</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Size Information */}
            <div className="bg-soft-white rounded-lg shadow-elegant p-6">
              <div className="flex items-center mb-4">
                <Ruler className="w-6 h-6 text-peacock-blue mr-3" />
                <h3 className="text-xl font-bold text-charcoal">Size Information</h3>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-charcoal">Important Size Guidelines</h4>
                <ul className="space-y-2 text-sm text-charcoal">
                  <li>• Please refer to our size chart before placing an order</li>
                  <li>• All sizes are measured in inches</li>
                  <li>• Take accurate measurements for the perfect fit</li>
                  <li>• Size exchanges are not available unless it's a store error</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Return & Exchange Policy */}
          <div className="bg-soft-white rounded-lg shadow-elegant p-6 mb-8">
            <div className="flex items-center mb-6">
              <RefreshCw className="w-6 h-6 text-peacock-blue mr-3" />
              <h3 className="text-xl font-bold text-charcoal">Return & Exchange Policy</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-charcoal mb-3">General Policy</h4>
                <p className="text-sm text-charcoal mb-4">
                  Returns, refunds, or exchanges are only accepted if the error is from the store's side. 
                  Please double-check your order details before confirming your purchase.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-charcoal mb-3">Returns Accepted Only For Store Errors</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-charcoal mb-2">Conditions for Returns:</h5>
                    <ul className="space-y-1 text-sm text-charcoal">
                      <li>• Wrong item received</li>
                      <li>• Wrong size received</li>
                      <li>• Defective product</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-charcoal mb-2">Required Documentation:</h5>
                    <ul className="space-y-1 text-sm text-charcoal">
                      <li>• Full, uncut, and continuous unboxing video</li>
                      <li>• Order number and details</li>
                      <li>• Photos of the issue</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-charcoal mb-2">Return Process:</h5>
                    <ul className="space-y-1 text-sm text-charcoal">
                      <li>• Initiate return within 2-3 days of receiving the order</li>
                      <li>• Returns requested after this window are not accepted</li>
                      <li>• Refunds processed after item is received and inspected</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Terms */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-soft-white rounded-lg shadow-elegant p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-5 h-5 text-peacock-blue mr-3" />
                <h3 className="text-lg font-bold text-charcoal">Order Confirmation</h3>
              </div>
              <p className="text-sm text-charcoal">
                All orders are subject to availability and confirmation of the order price.
              </p>
            </div>

            <div className="bg-soft-white rounded-lg shadow-elegant p-6">
              <div className="flex items-center mb-4">
                <Package className="w-5 h-5 text-peacock-blue mr-3" />
                <h3 className="text-lg font-bold text-charcoal">Product Images</h3>
              </div>
              <p className="text-sm text-charcoal">
                Colors may vary slightly due to screen settings and lighting conditions.
              </p>
            </div>

            <div className="bg-soft-white rounded-lg shadow-elegant p-6">
              <div className="flex items-center mb-4">
                <Headphones className="w-5 h-5 text-peacock-blue mr-3" />
                <h3 className="text-lg font-bold text-charcoal">Customer Support</h3>
              </div>
              <p className="text-sm text-charcoal">
                Contact our support team for any queries before placing an order.
              </p>
            </div>
          </div>

          {/* Cancellation and Refunds */}
          <div className="bg-soft-white rounded-lg shadow-elegant p-6 mb-8">
            <div className="flex items-center mb-6">
              <Clock className="w-6 h-6 text-peacock-blue mr-3" />
              <h3 className="text-xl font-bold text-charcoal">Cancellation and Refunds</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-charcoal mb-3">Order Cancellation</h4>
                <p className="text-sm text-charcoal">
                  Orders cannot be canceled once payment is confirmed. Please double-check your order 
                  details before proceeding with payment.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-charcoal mb-3">Refund Policy</h4>
                <ul className="space-y-2 text-sm text-charcoal">
                  <li>• Refunds are processed only for store errors</li>
                  <li>• Processing time: 5-7 business days after item return</li>
                  <li>• Refunds are credited to the original payment method</li>
                  <li>• No refunds for change of mind or size preferences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appreciation Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
            <div className="bg-soft-white rounded-lg shadow-elegant p-8 text-center">
            <div className="space-y-4">
              <p className="text-lg text-charcoal">
                We appreciate your understanding and cooperation.
              </p>
              <p className="text-charcoal">
                For any queries, feel free to contact our support team before placing your order.
              </p>
              <p className="text-charcoal">
                Thank you for choosing MoreByPrinal for your fashion needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
