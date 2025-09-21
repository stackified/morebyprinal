import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

// Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ToastContainer from './components/common/ToastContainer';

// Contexts
import { ToastProvider, useToast } from './contexts/ToastContext';

// Pages
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Terms from './pages/Terms';

const AppContent = () => {
  const { toasts, removeToast } = useToast();

  return (
    <Router basename="/morebyprinal">
      <div className="min-h-screen bg-light-cream">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer toasts={toasts} onClose={removeToast} />
      </div>
    </Router>
  );
};

function App() {
  return (
    <Provider store={store}>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </Provider>
  );
}

export default App;