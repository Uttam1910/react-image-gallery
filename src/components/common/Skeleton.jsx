// src/components/common/Skeleton.jsx
import React from 'react';

export const SkeletonCard = () => (
  <div className="skeleton-card">
    <div className="skeleton-image"></div>
    <div className="skeleton-text-group">
      <div className="skeleton-line title"></div>
      <div className="skeleton-line sub"></div>
    </div>
  </div>
);

export const SkeletonGrid = ({ count = 8 }) => (
  <div className="masonry-grid-container">
    {Array.from({ length: count }).map((_, idx) => (
      <SkeletonCard key={idx} />
    ))}
  </div>
);
