// src/components/common/MasonryGrid.jsx
import React from 'react';
import ImageCard from './ImageCard';
import { SkeletonGrid } from './Skeleton';

const MasonryGrid = ({ images = [], loading = false, emptyMessage = "No visual content found." }) => {
  if (loading) {
    return <SkeletonGrid count={8} />;
  }

  if (!images || images.length === 0) {
    return (
      <div className="empty-grid-state">
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="masonry-grid-container">
      {images.map(image => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default MasonryGrid;
