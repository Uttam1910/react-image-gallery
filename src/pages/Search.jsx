// src/pages/Search.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import SearchBar from '../components/common/SearchBar';
import MasonryGrid from '../components/common/MasonryGrid';
import { initialImages } from '../data/images';
import { IconSearch, IconSparkles } from '../components/common/Icons';

const Search = () => {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  const [results, setResults] = useState([]);
  const popularKeywords = ['nature', 'ocean', 'architecture', 'space', 'mountains', 'tokyo', 'desert', 'minimal', 'wildlife', 'sunset'];

  useEffect(() => {
    document.title = queryParam ? `Search: "${queryParam}" | Lumora` : "Search Visual Inspiration | Lumora";

    if (!queryParam.trim()) {
      setResults(initialImages);
      return;
    }

    const q = queryParam.toLowerCase().trim();
    const filtered = initialImages.filter(img => {
      const titleMatch = img.title && img.title.toLowerCase().includes(q);
      const descMatch = img.description && img.description.toLowerCase().includes(q);
      const catMatch = img.category && img.category.toLowerCase().includes(q);
      const locMatch = img.location && img.location.toLowerCase().includes(q);
      const photogMatch = img.photographer && img.photographer.name.toLowerCase().includes(q);
      const tagMatch = img.tags && img.tags.some(tag => tag.toLowerCase().includes(q));
      
      return titleMatch || descMatch || catMatch || locMatch || photogMatch || tagMatch;
    });

    setResults(filtered);
  }, [queryParam]);

  return (
    <div className="search-page-layout">
      <header className="page-hero-header search-hero">
        <div className="main-content-container">
          <h1 className="page-hero-title">Visual Search</h1>
          <p className="page-hero-desc">
            Find high-resolution photos by category, atmosphere, tags, location, or photographer.
          </p>

          <SearchBar initialQuery={queryParam} />

          {/* Quick Keyword Pills */}
          <div className="search-keywords-pills">
            <span className="pills-label">Popular Keywords:</span>
            <div className="pills-flex">
              {popularKeywords.map(kw => (
                <Link key={kw} to={`/search?q=${kw}`} className={`kw-pill ${queryParam.toLowerCase() === kw ? 'active' : ''}`}>
                  {kw}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="main-content-container search-results-section">
        {queryParam ? (
          <div className="search-meta-bar">
            <h2>Results for <span className="query-highlight">"{queryParam}"</span></h2>
            <span className="results-count">{results.length} visual items found</span>
          </div>
        ) : (
          <div className="search-meta-bar">
            <h2>Browse All Inspiration Items</h2>
            <span className="results-count">{results.length} visual items available</span>
          </div>
        )}

        {results.length > 0 ? (
          <MasonryGrid images={results} />
        ) : (
          <div className="no-search-results">
            <div className="no-results-icon">
              <IconSearch size={48} />
            </div>
            <h3>No visual content found for "{queryParam}"</h3>
            <p>Try searching for keywords like <strong>nature</strong>, <strong>mountains</strong>, <strong>tokyo</strong>, <strong>space</strong>, or <strong>architecture</strong>.</p>
            <div className="popular-suggestions-box">
              <h4>Suggested Searches:</h4>
              <div className="suggestion-buttons">
                {popularKeywords.slice(0, 6).map(kw => (
                  <Link key={kw} to={`/search?q=${kw}`} className="suggestion-btn">
                    <IconSparkles size={14} /> {kw}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Search;
