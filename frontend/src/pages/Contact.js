import React, { useState } from 'react';
import { Mail, Phone, Clock, MapPin, MessageCircle, CheckCircle, Truck, FileText, Ruler } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    orderNumber: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    
    // Show success message
    setShowSuccessMessage(true);
    
    // Auto-dismiss after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      orderNumber: ''
    });
  };

  return (
    <div className="min-h-screen bg-warm-cream">
      {/* Page Header */}
        <section className="bg-peacock-blue py-12 shadow-peacock">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold text-warm-cream mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-warm-cream mb-6">
            We're here to help you with any questions or concerns
          </p>
          <div className="w-24 h-1 bg-peacock-gold mx-auto"></div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-peacock-blue/10 to-peacock-teal/10 border border-peacock-blue/20 rounded-lg p-6 mb-8">
            <p className="text-charcoal leading-relaxed">
              At MoreByPrinal, we value your feedback and are always ready to assist you. 
              Whether you have questions about our products, need help with an order, or want to share your experience, 
              we're here to help. Please don't hesitate to reach out to us.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Email Support */}
            <div className="bg-soft-white rounded-lg shadow-elegant p-6">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-peacock-blue mr-3" />
                <h3 className="text-xl font-bold text-charcoal">Email Support</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-peacock-blue" />
                  <span className="text-sm text-charcoal">Email Address</span>
                </div>
                <p className="text-peacock-blue font-medium">morebyprinal.shop@gmail.com</p>
                
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-peacock-blue" />
                  <span className="text-sm text-charcoal">Response Time</span>
                </div>
                <p className="text-peacock-blue font-medium">24-48 hours</p>
              </div>
            </div>

            {/* Phone Support */}
            <div className="bg-soft-white rounded-lg shadow-elegant p-6">
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 text-peacock-blue mr-3" />
                <h3 className="text-xl font-bold text-charcoal">Phone Support</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-peacock-blue" />
                  <span className="text-sm text-charcoal">Phone Number</span>
                </div>
                <p className="text-peacock-blue font-medium">(+91) 88067 61322</p>
                
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-peacock-blue" />
                  <span className="text-sm text-charcoal">Available Hours</span>
                </div>
                <p className="text-peacock-blue font-medium">9 AM - 6 PM IST (Mon-Fri)</p>
              </div>
            </div>
          </div>

          {/* Contact Information and Response Times */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Contact Information */}
            <div className="bg-soft-white rounded-lg shadow-elegant p-6">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-6 h-6 text-peacock-blue mr-3" />
                <h3 className="text-xl font-bold text-charcoal">Contact Information</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">What to Include in Your Message</h4>
                  <ul className="space-y-1 text-sm text-charcoal">
                    <li>• Order number (if applicable)</li>
                    <li>• Registered email address</li>
                    <li>• Detailed description of your query</li>
                    <li>• Relevant photos or screenshots</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Preferred Contact Methods</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-peacock-blue" />
                      <span className="text-sm text-charcoal">Email for detailed queries and order support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-peacock-blue" />
                      <span className="text-sm text-charcoal">Phone for urgent inquiries during business hours</span>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <p className="text-sm text-yellow-800">
                    <strong>Tip:</strong> For faster resolution, email us with all relevant details first.
                  </p>
                </div>
              </div>
            </div>

            {/* Response Times */}
            <div className="bg-soft-white rounded-lg shadow-elegant p-6">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-peacock-blue mr-3" />
                <h3 className="text-xl font-bold text-charcoal">Response Times</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Email Support Hours</h4>
                  <div className="space-y-1 text-sm text-charcoal">
                    <p>Monday - Friday (9 AM - 6 PM IST)</p>
                    <p>Saturday (10 AM - 4 PM IST)</p>
                    <p>Sunday (Closed)</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Response Commitment</h4>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> We respond to all emails within 24-48 hours, even on weekends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Store Information */}
          <div className="bg-soft-white rounded-lg shadow-elegant p-6 mb-6">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-peacock-blue mr-3" />
              <h3 className="text-xl font-bold text-charcoal">Store Information</h3>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-charcoal">MoreByPrinal Store</h4>
              <ul className="space-y-2 text-sm text-charcoal">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Online Store Based in India</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>morebyprinal.shop@gmail.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>(+91) 88067 61322</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Handpicked Women's Fashion</span>
                </li>
              </ul>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-4">
                <p className="text-sm text-yellow-800">
                  <strong>Quality Promise:</strong> We're committed to providing excellent customer service and high-quality products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before You Contact Us */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-charcoal mb-6 flex items-center">
            <MessageCircle className="w-6 h-6 text-peacock-blue mr-3" />
            Before You Contact Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Quick Answers */}
            <div className="bg-soft-white rounded-lg shadow-elegant p-6">
              <h3 className="text-lg font-bold text-charcoal mb-4">Quick Answers</h3>
              <div className="space-y-3 text-sm text-charcoal">
                <div>
                  <strong className="text-charcoal">Delivery Time:</strong> 5-7 business days
                </div>
                <div>
                  <strong className="text-charcoal">Payment:</strong> Credit/Debit cards, UPI, Net Banking
                </div>
                <div>
                  <strong className="text-charcoal">Returns:</strong> Only for store errors within 2-3 days
                </div>
                <div>
                  <strong className="text-charcoal">Shipping:</strong> Free shipping on all orders
                </div>
              </div>
            </div>

            {/* Policy Pages */}
            <div className="bg-soft-white rounded-lg shadow-elegant p-6">
              <h3 className="text-lg font-bold text-charcoal mb-4">Policy Pages</h3>
              <div className="space-y-3">
                <a href="/terms" className="flex items-center space-x-2 text-peacock-blue hover:text-peacock-teal">
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-medium">Terms & Conditions</span>
                </a>
                <a href="/shipping" className="flex items-center space-x-2 text-peacock-blue hover:text-peacock-teal">
                  <Truck className="w-4 h-4" />
                  <span className="font-medium">Shipping Policy</span>
                </a>
                <a href="/privacy" className="flex items-center space-x-2 text-peacock-blue hover:text-peacock-teal">
                  <FileText className="w-4 h-4" />
                  <span className="font-medium">Privacy Policy</span>
                </a>
                <a href="/size-chart" className="flex items-center space-x-2 text-peacock-blue hover:text-peacock-teal">
                  <Ruler className="w-4 h-4" />
                  <span className="font-medium">Size Chart</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
            <div className="bg-soft-white rounded-lg shadow-elegant p-8">
            <h2 className="text-2xl font-bold text-charcoal mb-6 text-center">Send us a Message</h2>
            
            {/* Success Message */}
            {showSuccessMessage && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 relative">
                <button
                  onClick={() => setShowSuccessMessage(false)}
                  className="absolute top-2 right-2 text-green-600 hover:text-green-800"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <p className="text-green-800 font-medium">Thank you! We'll get back to you soon.</p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Order Number (if applicable)</label>
                  <input
                    type="text"
                    name="orderNumber"
                    value={formData.orderNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent"
                ></textarea>
              </div>

              <div className="text-center">
                  <button
                    type="submit"
                    className="bg-peacock-blue text-warm-cream px-8 py-3 rounded-lg font-medium hover:bg-peacock-teal transition-all duration-200"
                  >
                    Send Message
                  </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Closing Section */}
        <section className="py-12 bg-peacock-blue">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-warm-cream mb-6">
            We're here to help you with any questions or concerns. Get in touch with us today!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
