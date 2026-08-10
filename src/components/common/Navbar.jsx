// src/components/common/Navbar.jsx
import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useSaved } from '../../context/SavedContext';
import { IconSearch, IconHeart, IconMenu, IconX, IconSparkles } from './Icons';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { savedIds } = useSaved();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand Identity */}
        <Link to="/" className="brand-logo" onClick={closeMobileMenu}>
          <div className="logo-icon-wrapper">
            <IconSparkles size={22} className="brand-sparkle" />
          </div>
          <span className="brand-name">LUMORA</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
            Home
          </NavLink>
          <NavLink to="/explore" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
            Explore
          </NavLink>
          <NavLink to="/categories" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
            Categories
          </NavLink>
          <NavLink to="/collections" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
            Collections
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
            About
          </NavLink>
        </nav>

        {/* Action Controls */}
        <div className="navbar-actions">
          <button 
            className="search-trigger-btn"
            onClick={() => { closeMobileMenu(); navigate('/search'); }}
            aria-label="Open Search"
          >
            <IconSearch size={18} />
            <span className="search-placeholder-text">Search inspiration...</span>
            <kbd className="search-kbd">⌘K</kbd>
          </button>

          <Link to="/saved" className="saved-badge-link" aria-label="Saved Images">
            <IconHeart size={20} filled={savedIds.length > 0} className={savedIds.length > 0 ? "active-heart" : ""} />
            {savedIds.length > 0 && (
              <span className="saved-count-pill">{savedIds.length}</span>
            )}
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <IconX size={24} /> : <IconMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={closeMobileMenu}>
          <div className="mobile-drawer-content" onClick={e => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <span className="mobile-brand-title">LUMORA</span>
              <button className="close-drawer-btn" onClick={closeMobileMenu} aria-label="Close menu">
                <IconX size={22} />
              </button>
            </div>
            
            <nav className="mobile-nav-list">
              <NavLink to="/" onClick={closeMobileMenu} className={({ isActive }) => (isActive ? 'mobile-nav-item active' : 'mobile-nav-item')}>
                Home
              </NavLink>
              <NavLink to="/explore" onClick={closeMobileMenu} className={({ isActive }) => (isActive ? 'mobile-nav-item active' : 'mobile-nav-item')}>
                Explore
              </NavLink>
              <NavLink to="/search" onClick={closeMobileMenu} className={({ isActive }) => (isActive ? 'mobile-nav-item active' : 'mobile-nav-item')}>
                Search
              </NavLink>
              <NavLink to="/categories" onClick={closeMobileMenu} className={({ isActive }) => (isActive ? 'mobile-nav-item active' : 'mobile-nav-item')}>
                Categories
              </NavLink>
              <NavLink to="/collections" onClick={closeMobileMenu} className={({ isActive }) => (isActive ? 'mobile-nav-item active' : 'mobile-nav-item')}>
                Collections
              </NavLink>
              <NavLink to="/saved" onClick={closeMobileMenu} className={({ isActive }) => (isActive ? 'mobile-nav-item active' : 'mobile-nav-item')}>
                Saved Library ({savedIds.length})
              </NavLink>
              <NavLink to="/about" onClick={closeMobileMenu} className={({ isActive }) => (isActive ? 'mobile-nav-item active' : 'mobile-nav-item')}>
                About Lumora
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
