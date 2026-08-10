// src/components/common/SearchBar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconSearch, IconX } from './Icons';

const SearchBar = ({ initialQuery = '', placeholder = "Search photos, places, animals, architecture, space..." }) => {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleClear = () => {
    setQuery('');
  };

  return (
    <form className="hero-search-form" onSubmit={handleSubmit}>
      <div className="search-input-wrapper">
        <IconSearch size={22} className="search-icon-inside" />
        <input 
          type="text" 
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder={placeholder}
          className="search-input-field"
        />
        {query && (
          <button type="button" className="clear-search-btn" onClick={handleClear} aria-label="Clear search input">
            <IconX size={18} />
          </button>
        )}
      </div>
      <button type="submit" className="search-submit-btn">
        Explore Visuals
      </button>
    </form>
  );
};

export default SearchBar;
