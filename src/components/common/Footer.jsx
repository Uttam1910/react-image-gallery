// src/components/common/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { IconSparkles } from './Icons';

const Footer = () => {
  return (
    <footer className="product-footer">
      <div className="footer-container">
        <div className="footer-brand-column">
          <Link to="/" className="brand-logo footer-logo">
            <div className="logo-icon-wrapper">
              <IconSparkles size={20} className="brand-sparkle" />
            </div>
            <span className="brand-name">LUMORA</span>
          </Link>
          <p className="footer-tagline">
            Visual Discovery & Inspiration Platform. Curating high-resolution photography, architectural designs, cosmic wonders, and creative inspiration.
          </p>
        </div>

        <div className="footer-links-grid">
          <div className="footer-column">
            <h4 className="footer-column-title">Platform</h4>
            <Link to="/explore">Explore Feed</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/collections">Curated Collections</Link>
            <Link to="/saved">Saved Library</Link>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Categories</h4>
            <Link to="/category/nature">Nature & Alps</Link>
            <Link to="/category/architecture">Architecture</Link>
            <Link to="/category/space">Space & Cosmos</Link>
            <Link to="/category/ocean">Ocean Seascapes</Link>
            <Link to="/category/urban">Urban Life</Link>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">About</h4>
            <Link to="/about">Product Story</Link>
            <a href="https://github.com/uttam1910/react-image-gallery" target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
            <span className="footer-status-pill">● System Operational</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          <p>© {new Date().getFullYear()} LUMORA Visual Discovery Platform. All rights reserved.</p>
          <p className="footer-credit">Built with React, Vite & Modern Web Standards</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
