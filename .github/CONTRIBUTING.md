# Contributing to More by Prinal

This is a client project: the code is owned by More by Prinal and is designed, built and
maintained by the [Stackified](https://github.com/stackified) team. The repository is public for
portfolio purposes, so outside pull requests are not part of the normal workflow. Bug reports
through [issues](https://github.com/stackified/morebyprinal/issues) are welcome, and security
problems should be reported privately (see [SECURITY.md](SECURITY.md)).

The notes below are for Stackified team members working on the site.

## Getting set up

The app is a Create React App project in the `frontend/` folder. You need Node.js 18 or newer
and npm.

1. Clone the repository:
   ```bash
   git clone https://github.com/stackified/morebyprinal.git
   cd morebyprinal/frontend
   ```
2. Install dependencies and start the dev server:
   ```bash
   npm install
   npm start
   ```
   Then open `http://localhost:3000/morebyprinal/`.
3. Check a production build:
   ```bash
   npm run build
   ```
   The output is written to `frontend/build/`.

## Project structure

- `frontend/src/App.js` - router (base name `/morebyprinal`), Redux provider and toast provider
- `frontend/src/pages/` - Home, ProductDetail, Cart, Contact, Terms
- `frontend/src/components/common/` - Header, Footer, Toast, ToastContainer
- `frontend/src/components/product/` - ProductCard, ProductGrid
- `frontend/src/store/` - Redux store and the cart, product and UI slices
- `frontend/src/models/` - sample product data (`Product.js`) and data shapes for Cart, Order
  and User
- `frontend/src/contexts/ToastContext.js` - toast notifications
- `frontend/src/utils/` - `constants.js` (brand, contact and navigation data) and `pathUtils.js`
  (asset paths for development and GitHub Pages)
- `frontend/public/images/products/` - product photos
- `frontend/tailwind.config.js` - brand colour palette and fonts
- `.github/workflows/` - GitHub Pages deployment and CodeQL scanning

## Branches and deployment

- `main` is the only long-lived branch and the deployment branch. Every push to `main` runs
  `.github/workflows/deploy.yml`, which runs `npm ci` and `npm run build` in `frontend/` and
  publishes `frontend/build/` to GitHub Pages at https://stackified.github.io/morebyprinal/.

Because a merge to `main` goes live straight away, do all work on a feature branch.

## Making changes

1. Create a branch from `main`: `git checkout -b fix/short-description`
2. Keep changes focused. One feature or fix per pull request.
3. Match the existing style: functional React components, Redux Toolkit slices for shared state,
   and Tailwind utility classes using the palette in `tailwind.config.js`.
4. Load images through `getImagePath()` in `utils/pathUtils.js` so they resolve both in
   development and under the `/morebyprinal` path on GitHub Pages.
5. The site is front-end only (no backend, checkout or payment integration). Do not add copy that
   suggests otherwise unless the feature is actually built.
6. Run `npm run build` and click through the home page, a product page, the cart, contact and
   terms pages before opening a pull request. `npm ci` in CI requires `package-lock.json` to
   stay in sync with `package.json`.

## Pull requests

1. Push your branch and open a pull request against `main`.
2. Fill in the pull request template: what changed, why, and how you tested it.
3. Link any related issue (for example, `Closes #12`).
4. CodeQL runs on every pull request to `main`; resolve any new alerts before merging.

For security issues, follow [SECURITY.md](SECURITY.md) instead of opening a public issue.
