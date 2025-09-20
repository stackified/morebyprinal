# MoreByPrinal

Premium women's clothing e-commerce website built with React, Redux, and Tailwind CSS. Features elegant product catalog, shopping cart, responsive design, and modern UI/UX. Showcasing traditional Indian wear with contemporary styling, complete with product filtering, cart management, and professional toast notifications.


## 🚀 Features

- **Complete E-commerce Functionality**: Product listing, detail pages, shopping cart, checkout flow
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, elegant design with warm earthy color palette
- **State Management**: Redux Toolkit for cart and product management
- **Routing**: React Router for seamless navigation
- **Component Architecture**: MVC pattern with reusable components

## 🎨 Design

- **Color Palette**: Deep burgundy (#8B4513), warm beige (#F5E6D3), light cream (#FEFCF8)
- **Typography**: Inter for body text, Dancing Script for brand elements
- **Layout**: Card-based design with elegant spacing and shadows
- **Responsive**: Mobile-first approach with Tailwind CSS breakpoints

## 📁 Project Structure

```
frontend/
├── public/
│   ├── index.html
│   └── images/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.js
│   │   │   └── Footer.js
│   │   ├── product/
│   │   │   ├── ProductCard.js
│   │   │   └── ProductGrid.js
│   │   ├── cart/
│   │   └── forms/
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Shop.js
│   │   ├── ProductDetail.js
│   │   ├── Cart.js
│   │   ├── Contact.js
│   │   └── Terms.js
│   ├── models/
│   │   ├── Product.js
│   │   ├── Cart.js
│   │   ├── User.js
│   │   └── Order.js
│   ├── store/
│   │   ├── store.js
│   │   └── slices/
│   │       ├── cartSlice.js
│   │       ├── productSlice.js
│   │       └── uiSlice.js
│   ├── utils/
│   │   └── constants.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd morebyprinal/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📱 Pages & Features

### 1. Home Page (`/`)
- Hero section with brand name and tagline
- Featured products grid
- Brand story section
- Filter and sort options

### 2. Shop Page (`/shop`)
- Complete product listing
- Advanced filtering (category, price, availability)
- Sorting options (price, name, featured, latest)
- Responsive product grid

### 3. Product Detail Page (`/product/:id`)
- High-quality product images with thumbnail gallery
- Detailed product information
- Size selection (XS, S, M, L, XL)
- Quantity selector
- Add to cart functionality
- Product description and reviews tabs
- Related products section

### 4. Shopping Cart Page (`/cart`)
- Cart items with images and details
- Quantity controls (increase/decrease/remove)
- Price summary (subtotal, shipping, total)
- Promo code application
- Empty cart state
- Continue shopping functionality

### 5. Contact Us Page (`/contact`)
- Contact form with validation
- Contact information cards
- Support hours and response times
- Store information
- Quick answers section
- Policy page links

### 6. Terms & Conditions Page (`/terms`)
- Payment policy (no COD)
- Size information guidelines
- Return & exchange policy
- Cancellation and refund policy
- Additional terms and conditions

## 🛒 State Management

### Redux Store Structure
- **Cart Slice**: Manages cart items, quantities, totals, promo codes
- **Product Slice**: Handles product data, filtering, sorting
- **UI Slice**: Manages loading states, notifications, modals

### Key Actions
- `addToCart`: Add product to cart with size and quantity
- `removeFromCart`: Remove item from cart
- `updateQuantity`: Update item quantity
- `applyPromoCode`: Apply discount code
- `setFilters`: Apply product filters
- `setSortBy`: Sort products

## 🎯 API Integration Points

The frontend is prepared for backend integration with these endpoints:

```javascript
// Product endpoints
GET /api/products - Fetch all products
GET /api/products/:id - Fetch single product

// Cart endpoints
POST /api/cart - Add item to cart
PUT /api/cart/:id - Update cart item
DELETE /api/cart/:id - Remove cart item

// Order endpoints
POST /api/orders - Create new order

// Contact endpoints
POST /api/contact - Submit contact form

// User endpoints
GET /api/users - Get user profile
PUT /api/users - Update user profile
```

## 📊 Data Models

### Product Model
```javascript
{
  id: string,
  name: string,
  price: number,
  originalPrice: number,
  images: array,
  sizes: array,
  description: string,
  shortDescription: string,
  category: string,
  tags: array,
  inStock: boolean,
  rating: number,
  reviews: array,
  featured: boolean
}
```

### Cart Item Model
```javascript
{
  id: string,
  productId: string,
  name: string,
  price: number,
  originalPrice: number,
  image: string,
  size: string,
  quantity: number,
  totalPrice: number
}
```

## 🎨 Styling & Design

### Tailwind CSS Configuration
- Custom color palette matching brand identity
- Custom fonts (Inter, Dancing Script)
- Custom shadows and spacing
- Responsive breakpoints

### Component Classes
- `.btn-primary`: Primary burgundy buttons
- `.btn-secondary`: Secondary beige buttons
- `.card`: Standard card styling
- `.input-field`: Form input styling

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Optimized for touch interactions
- **Flexible Layouts**: Grid and flexbox layouts adapt to screen size

## 🔧 Development Commands

```bash
# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build

# Analyze bundle size
npm run build && npx serve -s build
```

## 🚀 Deployment

### Build Process
1. Run `npm run build` to create production build
2. Deploy the `build` folder to your hosting service
3. Configure environment variables if needed

## 🤝 Backend Integration

### API Integration Steps
1. Update API endpoints in `utils/constants.js`
2. Implement API calls in `utils/api.js`
3. Connect Redux actions to API calls
4. Add error handling and loading states
5. Implement authentication if required

### Database Schema
The frontend expects these data structures from the backend:
- Products with images, sizes, pricing
- User profiles and addresses
- Order management system
- Cart persistence
- Contact form submissions

## 📞 Contact Information

- **Phone**: +91 88067 61322
- **Email**: morebyprinal.shop@gmail.com
- **Business Hours**: 9 AM - 6 PM IST (Mon-Fri)
- **Response Time**: 24-48 hours

## 📄 License

This project is proprietary software for MoreByPrinal. All rights reserved.

## 👥 Credits

Made with ❤️ by Hiral Kotwani and Lavesh Paryani

---

For technical support or questions about this frontend implementation, please contact the development team.