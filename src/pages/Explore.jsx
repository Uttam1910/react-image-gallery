// src/pages/Explore.jsx
import React, { useState, useEffect } from 'react';
import MasonryGrid from '../components/common/MasonryGrid';
import { initialImages } from '../data/images';
import { categories } from '../data/categories';
import { IconCompass, IconFilter, IconSliders } from '../components/common/Icons';

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');
  const [displayImages, setDisplayImages] = useState(initialImages);

  useEffect(() => {
    document.title = "Explore Visual Inspiration | Lumora";
  }, []);

  useEffect(() => {
    let filtered = [...initialImages];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(img => img.category === selectedCategory);
    }

    if (sortBy === 'trending') {
      filtered.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0) || b.likes - a.likes);
    } else if (sortBy === 'newest') {
      filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (sortBy === 'popular') {
      filtered.sort((a, b) => b.likes - a.likes);
    } else if (sortBy === 'random') {
      filtered.sort(() => Math.random() - 0.5);
    }

    setDisplayImages(filtered);
  }, [selectedCategory, sortBy]);

  return (
    <div className="explore-page-layout">
      <header className="page-hero-header">
        <div className="main-content-container">
          <div className="hero-eyebrow">
            <IconCompass size={18} /> Endless Visual Feed
          </div>
          <h1 className="page-hero-title">Explore Visual Inspiration</h1>
          <p className="page-hero-desc">
            Filter through high-resolution photography, architectural designs, space photography, and conceptual abstract art.
          </p>

          {/* Filter Bar */}
          <div className="explore-filter-bar">
            {/* Category Filter Pills */}
            <div className="category-filter-scroll">
              <button 
                className={`filter-pill ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                All Visuals
              </button>
              {categories.map(cat => (
                <button 
                  key={cat.id}
                  className={`filter-pill ${selectedCategory === cat.slug ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.slug)}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Sort Selector */}
            <div className="sort-selector-wrapper">
              <IconSliders size={18} className="sort-icon" />
              <select 
                value={sortBy} 
                onChange={e => setSortBy(e.target.value)} 
                className="sort-dropdown"
                aria-label="Sort visual content"
              >
                <option value="trending">🔥 Trending</option>
                <option value="popular">❤️ Most Popular</option>
                <option value="newest">✨ Newest First</option>
                <option value="random">🎲 Random Discovery</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Main Grid Section */}
      <main className="main-content-container explore-grid-section">
        <div className="results-count-bar">
          Showing <span>{displayImages.length}</span> inspiration items
        </div>
        <MasonryGrid images={displayImages} />
      </main>
    </div>
  );
};

export default Explore;
