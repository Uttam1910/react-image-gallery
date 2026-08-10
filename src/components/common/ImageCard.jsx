// src/components/common/ImageCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSaved } from '../../context/SavedContext';
import { useToast } from '../../context/ToastContext';
import { IconHeart, IconEye } from './Icons';

const ImageCard = ({ image }) => {
  const { isSaved, toggleSave } = useSaved();
  const { addToast } = useToast();

  const saved = isSaved(image.id);

  const handleSaveClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleSave(image.id);
    if (!saved) {
      addToast(`Saved "${image.title}" to your library`, 'success');
    } else {
      addToast(`Removed "${image.title}" from your library`, 'info');
    }
  };

  return (
    <div className="image-card-wrapper">
      <Link to={`/image/${image.id}`} className="image-card-link" aria-label={image.title}>
        <div className="image-card-media">
          <img 
            src={image.url} 
            alt={image.title} 
            loading="lazy" 
            className="image-card-img"
          />
          <div className="image-card-overlay">
            <div className="overlay-top">
              <span className="category-badge">{image.category || 'Visual'}</span>
              <button 
                className={`quick-save-btn ${saved ? 'saved' : ''}`}
                onClick={handleSaveClick}
                aria-label={saved ? "Unsave image" : "Save image"}
                title={saved ? "Remove from Saved" : "Save to Library"}
              >
                <IconHeart size={18} filled={saved} />
              </button>
            </div>

            <div className="overlay-bottom">
              <h3 className="card-title">{image.title}</h3>
              {image.photographer && (
                <div className="photographer-attribution">
                  <img 
                    src={image.photographer.avatar} 
                    alt={image.photographer.name} 
                    className="photographer-avatar" 
                  />
                  <span className="photographer-name">{image.photographer.name}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ImageCard;
