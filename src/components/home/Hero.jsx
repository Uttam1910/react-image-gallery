// src/components/home/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../common/SearchBar';
import { IconSparkles, IconCompass } from '../common/Icons';

const Hero = () => {
  const quickTags = ['Nature', 'Architecture', 'Ocean', 'Space', 'Wildlife', 'Urban', 'Minimal'];

  return (
    <section className="hero-section">
      <div className="hero-backdrop-gradient"></div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <IconSparkles size={16} />
          <span>Curated Visual Discovery & Inspiration</span>
        </div>

        <h1 className="hero-title">
          Discover visuals that <span className="title-gradient">spark ideas.</span>
        </h1>

        <p className="hero-subtitle">
          Explore thousands of high-resolution photographs, architectural wonders, cosmic landscapes, and artistic compositions curated for creators worldwide.
        </p>

        {/* Hero Search Bar */}
        <SearchBar />

        {/* Quick Tag Pills */}
        <div className="hero-popular-tags">
          <span className="tags-label">
            <IconCompass size={16} /> Popular searches:
          </span>
          <div className="tags-pill-list">
            {quickTags.map(tag => (
              <Link 
                key={tag} 
                to={`/search?q=${encodeURIComponent(tag.toLowerCase())}`} 
                className="tag-pill-link"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
