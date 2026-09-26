# More by Prinal

Storefront front end for More by Prinal, a women's clothing label focused on traditional Indian
wear (sarees, kurtis, dresses, tops and ethnic sets). Built with React, Redux Toolkit and
Tailwind CSS.

**Live site:** https://stackified.github.io/morebyprinal/

Built for More by Prinal by [Stackified](https://github.com/stackified).

## Features

- **Home page** - hero with the brand tagline, the full product grid and a brand story section
- **Product detail pages** (`/product/:id`) - image gallery with thumbnails, price and original
  price, size selection (required before adding to cart), quantity selector, description and
  reviews tabs, and related products
- **Cart** (`/cart`) - line items per product and size, quantity controls, remove item, subtotal
  and total, free shipping, a demo promo code, and an empty-cart state
- **Contact page** (`/contact`) - email and phone details, support hours, store information,
  quick answers and a contact form with a success message
- **Terms & Conditions** (`/terms`) - payment, size, return and exchange, and cancellation and
  refund policies
- **Toast notifications** for cart actions and validation messages
- **Responsive layout** with a mobile navigation menu and a live cart count in the header

### What is and is not implemented

This is a **front-end only** site. There is no backend, no database, no user accounts and no
payment integration:

- Products are sample data defined in `frontend/src/models/Product.js` and loaded into the Redux
  store at startup.
- The cart lives in Redux memory only. It is not saved to `localStorage` or a server, so it
  resets when the page is reloaded.
- The **Proceed to Checkout** button has no handler: there is no checkout flow, order creation or
  payment gateway.
- The contact form does not send anything. It logs the entered values to the browser console and
  shows a confirmation message.
- The promo code is a hard-coded demo value applied in `cartSlice.js`.

The models in `frontend/src/models/` (`Order`, `User`, `Cart`) describe data shapes for a future
backend and are not connected to any API.

## Tech stack

- [React 19](https://react.dev/) (Create React App, `react-scripts` 5)
- [Redux Toolkit](https://redux-toolkit.js.org/) and React Redux for cart, product and UI state
- [React Router 7](https://reactrouter.com/) with the `/morebyprinal` base name
- [Tailwind CSS 3](https://tailwindcss.com/) with PostCSS and Autoprefixer
- [Lucide React](https://lucide.dev/) icons
- Google Fonts

## Project structure

```
morebyprinal/
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── images/products/      # Product photos
│   ├── src/
│   │   ├── App.js                # Router, Redux provider, toast provider
│   │   ├── components/
│   │   │   ├── common/           # Header, Footer, Toast, ToastContainer
│   │   │   └── product/          # ProductCard, ProductGrid
│   │   ├── contexts/ToastContext.js
│   │   ├── models/               # Product (sample data), Cart, Order, User
│   │   ├── pages/                # Home, ProductDetail, Cart, Contact, Terms
│   │   ├── store/                # store.js and cart, product and UI slices
│   │   └── utils/                # constants.js, pathUtils.js (asset paths)
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
└── .github/workflows/            # GitHub Pages deployment and CodeQL scanning
```

## Getting started

Requires Node.js 18 or newer. All commands run inside `frontend/`.

```bash
git clone https://github.com/stackified/morebyprinal.git
cd morebyprinal/frontend
npm install
npm start
```

The dev server opens at `http://localhost:3000/morebyprinal/` (the path comes from the
`homepage` field in `package.json` and the router base name).

To create a production build in `frontend/build/`:

```bash
npm run build
```

## Deployment

The site deploys to GitHub Pages through GitHub Actions. Every push to `main` runs
`.github/workflows/deploy.yml`, which runs `npm ci` and `npm run build` in `frontend/` on
Node.js 18 and publishes `frontend/build/`.

The app uses browser-history routing and the repository has no `404.html` fallback, so opening a
deep link such as `/morebyprinal/cart` directly (or refreshing on it) is served by GitHub Pages'
404 page. Navigation from the home page works normally.

## License

Proprietary. Copyright (c) 2025 More by Prinal. All rights reserved. Designed and developed by
[Stackified](https://github.com/stackified). See [LICENSE](LICENSE).
