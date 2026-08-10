// src/pages/CollectionDetail.jsx
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MasonryGrid from '../components/common/MasonryGrid';
import { initialImages } from '../data/images';
import { collections } from '../data/collections';
import { IconArrowLeft, IconFolder } from '../components/common/Icons';

const CollectionDetail = () => {
  const { id } = useParams();

  const collectionObj = collections.find(c => c.id === id) || collections[0];

  const collectionImages = initialImages.filter(img => collectionObj.imageIds.includes(img.id));

  useEffect(() => {
    document.title = `${collectionObj.title} Collection | Lumora`;
    if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      window.scrollTo(0, 0);
    }
  }, [id, collectionObj.title]);

  return (
    <div className="collection-detail-page">
      <header className="collection-hero-header" style={{ backgroundImage: `linear-gradient(rgba(9, 10, 15, 0.8), rgba(9, 10, 15, 0.95)), url(${collectionObj.coverImage})` }}>
        <div className="main-content-container">
          <Link to="/collections" className="back-link">
            <IconArrowLeft size={18} /> All Collections
          </Link>
          <div className="collection-badge-row">
            <IconFolder size={18} /> Curated Collection • {collectionImages.length} Visuals
          </div>
          <h1 className="collection-hero-title">{collectionObj.title}</h1>
          <p className="collection-hero-desc">{collectionObj.description}</p>
          
          <div className="curator-hero-pill">
            <img src={collectionObj.curator.avatar} alt={collectionObj.curator.name} className="curator-avatar" />
            <span>Curated by <strong>{collectionObj.curator.name}</strong></span>
          </div>
        </div>
      </header>

      <main className="main-content-container collection-grid-section">
        <MasonryGrid images={collectionImages} />
      </main>
    </div>
  );
};

export default CollectionDetail;
