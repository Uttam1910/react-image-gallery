// src/components/home/CollectionsGrid.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { collections } from '../../data/collections';
import { IconChevronRight, IconFolder } from '../common/Icons';

const CollectionsGrid = () => {
  return (
    <section className="section-block collections-section">
      <div className="section-header-row">
        <div>
          <span className="section-eyebrow">Hand-Picked Stories</span>
          <h2 className="section-main-title">Popular Collections</h2>
        </div>
        <Link to="/collections" className="view-all-link">
          Explore All Collections <IconChevronRight size={18} />
        </Link>
      </div>

      <div className="collections-card-grid">
        {collections.map(col => (
          <Link 
            key={col.id} 
            to={`/collection/${col.id}`} 
            className="collection-card-link"
          >
            <div className="collection-card-media">
              <img src={col.coverImage} alt={col.title} loading="lazy" />
              <div className="collection-badge">
                <IconFolder size={16} /> {col.count} Photos
              </div>
            </div>
            
            <div className="collection-card-body">
              <h3 className="collection-card-title">{col.title}</h3>
              <p className="collection-card-desc">{col.description}</p>

              <div className="collection-curator">
                <img src={col.curator.avatar} alt={col.curator.name} className="curator-avatar" />
                <span className="curator-name">Curated by {col.curator.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CollectionsGrid;
