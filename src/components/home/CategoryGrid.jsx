// src/components/home/CategoryGrid.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';
import { IconChevronRight } from '../common/Icons';

const CategoryGrid = () => {
  return (
    <section className="section-block category-section">
      <div className="section-header-row">
        <div>
          <span className="section-eyebrow">Browse by Theme</span>
          <h2 className="section-main-title">Explore Categories</h2>
        </div>
        <Link to="/categories" className="view-all-link">
          View All Categories <IconChevronRight size={18} />
        </Link>
      </div>

      <div className="categories-card-grid">
        {categories.slice(0, 6).map(cat => (
          <Link 
            key={cat.id} 
            to={`/category/${cat.slug}`} 
            className="category-card-link"
          >
            <div className="category-card-media">
              <img src={cat.coverImage} alt={cat.name} loading="lazy" />
              <div className="category-card-overlay">
                <span className="category-item-count">{cat.count} visual items</span>
                <h3 className="category-card-title">{cat.name}</h3>
                <p className="category-card-desc">{cat.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
