// src/pages/Categories.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { IconFolder, IconChevronRight } from '../components/common/Icons';

const Categories = () => {
  useEffect(() => {
    document.title = "Categories Directory | Lumora";
  }, []);

  return (
    <div className="categories-page-layout">
      <header className="page-hero-header">
        <div className="main-content-container">
          <div className="hero-eyebrow">
            <IconFolder size={18} /> Structured Themes
          </div>
          <h1 className="page-hero-title">Category Directory</h1>
          <p className="page-hero-desc">
            Explore curated photography and design across specialized visual domains.
          </p>
        </div>
      </header>

      <main className="main-content-container categories-directory-grid">
        {categories.map(cat => (
          <Link key={cat.id} to={`/category/${cat.slug}`} className="category-directory-card">
            <div className="category-card-media">
              <img src={cat.coverImage} alt={cat.name} loading="lazy" />
              <div className="category-card-overlay">
                <span className="category-count-badge">{cat.count} curated items</span>
                <h2 className="category-card-heading">{cat.name}</h2>
                <p className="category-card-text">{cat.description}</p>
                <div className="category-card-cta">
                  Explore Category <IconChevronRight size={18} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default Categories;
