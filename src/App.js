// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Context Providers
import { SavedProvider } from './context/SavedContext';
import { ToastProvider } from './context/ToastContext';

// Common Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Pages
import Home from './pages/Home';
import Explore from './pages/Explore';
import Search from './pages/Search';
import ImageDetail from './pages/ImageDetail';
import Categories from './pages/Categories';
import CategoryDetail from './pages/CategoryDetail';
import Collections from './pages/Collections';
import CollectionDetail from './pages/CollectionDetail';
import Saved from './pages/Saved';
import About from './pages/About';

import './App.css';

// Scroll to top helper component on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <SavedProvider>
      <ToastProvider>
        <Router>
          <ScrollToTop />
          <div className="app-wrapper">
            <Navbar />
            <div className="app-main-body">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/search" element={<Search />} />
                <Route path="/image/:id" element={<ImageDetail />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/category/:category" element={<CategoryDetail />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/collection/:id" element={<CollectionDetail />} />
                <Route path="/saved" element={<Saved />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </ToastProvider>
    </SavedProvider>
  );
};

export default App;
