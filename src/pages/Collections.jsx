// src/pages/Collections.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collections } from '../data/collections';
import { IconFolder, IconChevronRight } from '../components/common/Icons';

const Collections = () => {
  useEffect(() => {
    document.title = "Curated Collections | Lumora";
  }, []);

  return (
    <div className="collections-page-layout">
      <header className="page-hero-header">
        <div className="main-content-container">
          <div className="hero-eyebrow">
            <IconFolder size={18} /> Themed Anthologies
          </div>
          <h1 className="page-hero-title">Curated Collections</h1>
          <p className="page-hero-desc">
            Hand-curated visual stories and thematic anthologies curated by leading creators.
          </p>
        </div>
      </header>

      <main className="main-content-container collections-directory-grid">
        {collections.map(col => (
          <Link key={col.id} to={`/collection/${col.id}`} className="collection-directory-card">
            <div className="collection-card-media">
              <img src={col.coverImage} alt={col.title} loading="lazy" />
              <div className="collection-badge">
                <IconFolder size={16} /> {col.count} Visuals
              </div>
            </div>
            
            <div className="collection-card-body">
              <h2 className="collection-card-title">{col.title}</h2>
              <p className="collection-card-desc">{col.description}</p>
              
              <div className="collection-curator">
                <img src={col.curator.avatar} alt={col.curator.name} className="curator-avatar" />
                <span className="curator-name">Curated by {col.curator.name}</span>
              </div>

              <div className="collection-cta-link">
                Explore Collection <IconChevronRight size={18} />
              </div>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default Collections;
