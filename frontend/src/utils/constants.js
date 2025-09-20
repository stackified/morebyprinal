// App constants
export const APP_NAME = 'MoreByPrinal';
export const APP_TAGLINE = 'Where elegance meets tradition, like a peacock\'s dance';

// Contact information
export const CONTACT_INFO = {
  phone: '+91 88067 61322',
  email: 'morebyprinal.shop@gmail.com',
  businessHours: '9 AM - 6 PM IST (Mon-Fri)',
  responseTime: '24-48 hours'
};

// Social media links
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/morebyprinal',
  facebook: 'https://facebook.com/morebyprinal',
  twitter: 'https://twitter.com/morebyprinal'
};

// Navigation menu items
export const NAVIGATION_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Terms & Conditions', path: '/terms' },
  { name: 'Contact Us', path: '/contact' }
];

// Footer quick links
export const FOOTER_LINKS = {
  quickLinks: [
    { name: 'Cart', path: '/cart' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Shipping Policy', path: '/shipping' },
    { name: 'Returns and Exchange', path: '/returns' }
  ]
};

// Product categories
export const PRODUCT_CATEGORIES = [
  'All',
  'Tops',
  'Kurtis',
  'Dresses',
  'Accessories'
];

// Size options
export const SIZE_OPTIONS = ['XS', 'S', 'M', 'L', 'XL'];

// Sort options
export const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'latest', label: 'Latest' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'name', label: 'Name A-Z' }
];

// Filter options
export const FILTER_OPTIONS = [
  { value: 'all', label: 'All Products' },
  { value: 'in-stock', label: 'In Stock' },
  { value: 'on-sale', label: 'On Sale' },
  { value: 'featured', label: 'Featured' }
];

// API endpoints (for backend integration)
export const API_ENDPOINTS = {
  PRODUCTS: '/api/products',
  PRODUCT_DETAIL: '/api/products/:id',
  CART: '/api/cart',
  ORDERS: '/api/orders',
  CONTACT: '/api/contact',
  USERS: '/api/users'
};

// Payment methods
export const PAYMENT_METHODS = [
  'Credit Card',
  'Debit Card',
  'UPI',
  'Net Banking',
  'Digital Wallet'
];

// Shipping information
export const SHIPPING_INFO = {
  freeShippingThreshold: 0, // Free shipping on all orders
  standardShippingDays: '5-7 business days',
  expressShippingDays: '2-3 business days'
};

// Return policy
export const RETURN_POLICY = {
  returnWindow: '2-3 days',
  returnConditions: [
    'Wrong item received',
    'Wrong size received',
    'Defective product',
    'Store error only'
  ],
  requiredDocumentation: [
    'Full unboxing video',
    'Order number',
    'Product photos'
  ]
};
