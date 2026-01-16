import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import Blog from './pages/Blog';
import Confirmation from './pages/Confirmation';
import ProductDetail from './pages/ProductDetail';
import TailorMade from './pages/TailorMade';
import Collection from './pages/Collection';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/tailor-made" element={<TailorMade />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </HashRouter>
  );
};

export default App;