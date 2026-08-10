// src/pages/Saved.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSaved } from '../context/SavedContext';
import { initialImages } from '../data/images';
import MasonryGrid from '../components/common/MasonryGrid';
import { IconHeart, IconCompass, IconSparkles } from '../components/common/Icons';

const Saved = () => {
  const { savedIds, clearAllSaved } = useSaved();

  useEffect(() => {
    document.title = "Saved Inspiration Library | Lumora";
  }, []);

  const savedImages = initialImages.filter(img => savedIds.includes(img.id));

  return (
    <div className="saved-page-layout">
      <header className="page-hero-header">
        <div className="main-content-container">
          <div className="hero-eyebrow">
            <IconHeart size={18} /> Personal Collection
          </div>
          <h1 className="page-hero-title">Saved Library</h1>
          <p className="page-hero-desc">
            Your personal sanctuary of bookmarked photographs, architectural ideas, and visual inspirations.
          </p>
        </div>
      </header>

      <main className="main-content-container saved-library-section">
        {savedImages.length > 0 ? (
          <>
            <div className="saved-toolbar">
              <span className="saved-count-text">
                <strong>{savedImages.length}</strong> saved visual items
              </span>
              <button className="clear-saved-btn" onClick={clearAllSaved}>
                Clear All Saved
              </button>
            </div>
            <MasonryGrid images={savedImages} />
          </>
        ) : (
          <div className="empty-saved-state">
            <div className="empty-heart-icon">
              <IconHeart size={48} />
            </div>
            <h2>No saved visuals yet</h2>
            <p>Explore our curated feeds and click the heart icon on any photo to save it to your personal library.</p>
            <Link to="/explore" className="start-exploring-btn">
              <IconCompass size={18} /> Start Exploring
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default Saved;
