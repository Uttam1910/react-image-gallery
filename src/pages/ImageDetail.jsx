// src/pages/ImageDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { initialImages, getEnrichedImages } from '../data/images';
import { useSaved } from '../context/SavedContext';
import { useToast } from '../context/ToastContext';
import MasonryGrid from '../components/common/MasonryGrid';
import { 
  IconArrowLeft, 
  IconHeart, 
  IconDownload, 
  IconShare, 
  IconCopy, 
  IconMapPin, 
  IconEye, 
  IconSparkles,
  IconFolder
} from '../components/common/Icons';

const ImageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isSaved, toggleSave } = useSaved();
  const { addToast } = useToast();
  
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      window.scrollTo(0, 0);
    }
    setLoading(true);

    const numericId = Number(id);
    const localMatch = initialImages.find(img => img.id === numericId);

    if (localMatch) {
      setImage(localMatch);
      document.title = `${localMatch.title} | Lumora`;
    }

    axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
      .then(response => {
        if (response.data && response.data.photo) {
          const raw = response.data.photo;
          const fallback = localMatch || initialImages[numericId % initialImages.length];
          const enriched = {
            ...fallback,
            id: raw.id || fallback.id,
            url: raw.url || fallback.url,
            title: (raw.title && !raw.title.includes('Reflect') && !raw.title.includes('Drug')) ? raw.title : fallback.title,
            description: (raw.description && !raw.description.includes('Reflect') && !raw.description.includes('Drug')) ? raw.description : fallback.description,
          };
          setImage(enriched);
          document.title = `${enriched.title} | Lumora`;
        }
      })
      .catch(() => {
        if (localMatch) {
          setImage(localMatch);
        } else {
          // Default fallback record
          const fallback = initialImages[(numericId || 1) % initialImages.length];
          setImage(fallback);
          document.title = `${fallback.title} | Lumora`;
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading || !image) {
    return (
      <div className="main-content-container image-detail-loading">
        <div className="detail-skeleton-viewer"></div>
      </div>
    );
  }

  const saved = isSaved(image.id);

  const handleSaveToggle = () => {
    toggleSave(image.id);
    if (!saved) {
      addToast(`Saved "${image.title}" to your library`, 'success');
    } else {
      addToast(`Removed "${image.title}" from your library`, 'info');
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    addToast('Direct image page link copied to clipboard!', 'success');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    addToast(`Preparing download for "${image.title}"...`, 'info');
    fetch(image.url)
      .then(res => res.blob())
      .then(blob => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${image.title.toLowerCase().replace(/\s+/g, '-')}-lumora.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        addToast('Download completed!', 'success');
      })
      .catch(() => {
        window.open(image.url, '_blank');
        addToast('Opened high-res image in new tab', 'info');
      });
  };

  // Filter related images in same category
  const relatedImages = initialImages.filter(img => img.id !== image.id && img.category === image.category).slice(0, 6);

  return (
    <div className="image-detail-page">
      <div className="main-content-container">
        {/* Top Breadcrumb Navigation */}
        <div className="detail-nav-bar">
          <button className="back-nav-btn" onClick={() => navigate(-1)}>
            <IconArrowLeft size={18} /> Back to Discovery
          </button>
          <div className="detail-breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to={`/category/${image.category}`}>{image.category}</Link>
            <span>/</span>
            <span className="current-crumb">{image.title}</span>
          </div>
        </div>

        {/* Main Grid: Viewer + Sidebar */}
        <div className="image-detail-grid">
          {/* Main Viewer Column */}
          <div className="image-viewer-column">
            <div className="image-viewer-card">
              <img src={image.url} alt={image.title} className="main-viewer-img" />
            </div>

            {/* Description Box */}
            <div className="image-description-box">
              <h3 className="section-subtitle">Visual Story & Context</h3>
              <p className="image-description-text">{image.description}</p>
              
              {/* Tags List */}
              {image.tags && image.tags.length > 0 && (
                <div className="detail-tags-group">
                  {image.tags.map(tag => (
                    <Link key={tag} to={`/search?q=${tag}`} className="detail-tag-pill">
                      #{tag}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Metadata Sidebar Column */}
          <aside className="image-sidebar-column">
            <div className="sidebar-sticky-box">
              {/* Category Badge */}
              <div className="sidebar-top-meta">
                <Link to={`/category/${image.category}`} className="category-badge-link">
                  {image.category}
                </Link>
                <span className="views-count-tag">
                  <IconEye size={16} /> {image.views ? image.views.toLocaleString() : '12.4k'} views
                </span>
              </div>

              {/* Title */}
              <h1 className="image-detail-title">{image.title}</h1>

              {/* Photographer / Source Attribution */}
              {image.photographer && (
                <div className="photographer-card">
                  <img src={image.photographer.avatar} alt={image.photographer.name} className="photographer-lg-avatar" />
                  <div className="photographer-details">
                    <span className="photographer-lg-name">{image.photographer.name}</span>
                    <span className="photographer-handle">{image.photographer.handle}</span>
                  </div>
                </div>
              )}

              {/* Location Tag */}
              {image.location && (
                <div className="location-info-row">
                  <IconMapPin size={18} />
                  <span>{image.location}</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="detail-action-buttons">
                <button 
                  className={`action-btn save-action-btn ${saved ? 'active-saved' : ''}`}
                  onClick={handleSaveToggle}
                >
                  <IconHeart size={20} filled={saved} />
                  <span>{saved ? 'Saved to Library' : 'Save to Library'}</span>
                </button>

                <button className="action-btn download-action-btn" onClick={handleDownload}>
                  <IconDownload size={20} />
                  <span>Download High-Res</span>
                </button>

                <div className="secondary-actions-row">
                  <button className="action-btn share-btn" onClick={handleCopyLink}>
                    {copied ? <IconCopy size={18} /> : <IconShare size={18} />}
                    <span>{copied ? 'Link Copied' : 'Share & Copy'}</span>
                  </button>

                  <button className="action-btn collection-btn" onClick={() => addToast(`Added "${image.title}" to collection`, 'success')}>
                    <IconFolder size={18} />
                    <span>Add Collection</span>
                  </button>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="tech-specs-card">
                <h4 className="specs-title">Image Specifications</h4>
                <div className="specs-grid">
                  <div className="spec-item">
                    <span className="spec-label">Dimensions</span>
                    <span className="spec-value">{image.width || 3840} × {image.height || 2560} px</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Aspect Ratio</span>
                    <span className="spec-value">{image.aspectRatio || '16:9'}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Downloads</span>
                    <span className="spec-value">{image.downloads ? image.downloads.toLocaleString() : '840'}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">License</span>
                    <span className="spec-value">Free for Inspiration</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Images Section */}
        {relatedImages.length > 0 && (
          <section className="section-block related-section">
            <div className="section-header-row">
              <div>
                <span className="section-eyebrow">
                  <IconSparkles size={16} /> More Inspiration
                </span>
                <h2 className="section-main-title">Related Visuals in {image.category}</h2>
              </div>
              <Link to={`/category/${image.category}`} className="view-all-link">
                Browse All {image.category}
              </Link>
            </div>
            <MasonryGrid images={relatedImages} />
          </section>
        )}
      </div>
    </div>
  );
};

export default ImageDetail;
