// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from '../components/home/Hero';
import CategoryGrid from '../components/home/CategoryGrid';
import CollectionsGrid from '../components/home/CollectionsGrid';
import MasonryGrid from '../components/common/MasonryGrid';
import { initialImages, getEnrichedImages } from '../data/images';
import { IconSparkles, IconCompass } from '../components/common/Icons';

const Home = () => {
  const [images, setImages] = useState(initialImages);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Lumora | Visual Discovery & Inspiration Platform";

    axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20')
      .then(response => {
        if (response.data && response.data.photos) {
          const enriched = getEnrichedImages(response.data.photos);
          setImages(enriched);
        }
      })
      .catch(() => {
        // Smooth graceful fallback to enriched dataset
        setImages(initialImages);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const trendingImages = images.filter(img => img.trending).slice(0, 6);
  const editorsPicks = images.filter(img => img.editorsPick).slice(0, 6);
  const recentImages = images.slice(0, 8);

  return (
    <div className="home-page-layout">
      {/* Product Hero */}
      <Hero />

      {/* Main Container */}
      <main className="main-content-container">
        {/* Trending Now */}
        <section className="section-block">
          <div className="section-header-row">
            <div>
              <span className="section-eyebrow">
                <IconSparkles size={16} /> What's Hot
              </span>
              <h2 className="section-main-title">Trending Now</h2>
            </div>
          </div>
          <MasonryGrid images={trendingImages} loading={loading} />
        </section>

        {/* Categories Directory */}
        <CategoryGrid />

        {/* Editor's Picks */}
        <section className="section-block">
          <div className="section-header-row">
            <div>
              <span className="section-eyebrow">Curated Excellence</span>
              <h2 className="section-main-title">Editor's Choice</h2>
            </div>
          </div>
          <MasonryGrid images={editorsPicks} loading={loading} />
        </section>

        {/* Popular Collections */}
        <CollectionsGrid />

        {/* New & Recent */}
        <section className="section-block">
          <div className="section-header-row">
            <div>
              <span className="section-eyebrow">Fresh Additions</span>
              <h2 className="section-main-title">New & Recent Visuals</h2>
            </div>
          </div>
          <MasonryGrid images={recentImages} loading={loading} />
        </section>
      </main>
    </div>
  );
};

export default Home;
