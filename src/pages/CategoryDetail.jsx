// src/pages/CategoryDetail.jsx
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MasonryGrid from '../components/common/MasonryGrid';
import { initialImages } from '../data/images';
import { categories } from '../data/categories';
import { IconArrowLeft } from '../components/common/Icons';

const CategoryDetail = () => {
  const { category } = useParams();

  const categoryObj = categories.find(c => c.slug === category) || {
    name: category.charAt(0).toUpperCase() + category.slice(1),
    description: `Curated visual collection for ${category}`,
    coverImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80'
  };

  const filteredImages = initialImages.filter(img => img.category === category);

  useEffect(() => {
    document.title = `${categoryObj.name} Photography & Visuals | Lumora`;
    if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      window.scrollTo(0, 0);
    }
  }, [category, categoryObj.name]);

  return (
    <div className="category-detail-page">
      <header className="category-hero-header" style={{ backgroundImage: `linear-gradient(rgba(9, 10, 15, 0.75), rgba(9, 10, 15, 0.95)), url(${categoryObj.coverImage})` }}>
        <div className="main-content-container">
          <Link to="/categories" className="back-link">
            <IconArrowLeft size={18} /> All Categories
          </Link>
          <span className="category-hero-eyebrow">Category Collection</span>
          <h1 className="category-hero-title">{categoryObj.name}</h1>
          <p className="category-hero-desc">{categoryObj.description}</p>
        </div>
      </header>

      <main className="main-content-container category-grid-section">
        <div className="results-count-bar">
          Showing <span>{filteredImages.length}</span> items in {categoryObj.name}
        </div>
        <MasonryGrid images={filteredImages} emptyMessage={`No visual items currently found in ${categoryObj.name}.`} />
      </main>
    </div>
  );
};

export default CategoryDetail;
