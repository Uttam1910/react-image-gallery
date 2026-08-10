// src/pages/About.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconSparkles, IconCompass, IconHeart, IconFolder } from '../components/common/Icons';

const About = () => {
  useEffect(() => {
    document.title = "About Lumora | Visual Discovery Platform";
  }, []);

  return (
    <div className="about-page-layout">
      <header className="page-hero-header about-hero">
        <div className="main-content-container">
          <div className="hero-eyebrow">
            <IconSparkles size={18} /> Our Vision & Platform Story
          </div>
          <h1 className="page-hero-title">About Lumora</h1>
          <p className="page-hero-desc">
            Empowering creators, designers, and visual thinkers with world-class photography and inspiration.
          </p>
        </div>
      </header>

      <main className="main-content-container about-body-section">
        <div className="about-story-grid">
          <div className="story-card">
            <div className="story-icon">
              <IconCompass size={28} />
            </div>
            <h3>Intelligent Visual Discovery</h3>
            <p>
              Lumora brings together high-resolution photography, architectural masterworks, cosmic views, and abstract designs into a unified, high-performance visual feed.
            </p>
          </div>

          <div className="story-card">
            <div className="story-icon">
              <IconFolder size={28} />
            </div>
            <h3>Curated Thematic Anthologies</h3>
            <p>
              Explore hand-picked collections curated by industry professionals, capturing atmospheric moods from deep oceans to futuristic neon cityscapes.
            </p>
          </div>

          <div className="story-card">
            <div className="story-icon">
              <IconHeart size={28} />
            </div>
            <h3>Personal Creative Sanctuaries</h3>
            <p>
              Save and organize your favorite imagery effortlessly with client-side persistence, ensuring your visual inspiration library is always accessible.
            </p>
          </div>
        </div>

        {/* Platform Philosophy Section */}
        <section className="philosophy-banner-card">
          <div className="philosophy-content">
            <h2>Built for Speed, Elegance & Inspiration</h2>
            <p>
              Lumora is designed to deliver an instantaneous, editorial-grade visual experience. Powered by modern React, Vite, esbuild, and client-side architecture, the platform ensures lighting-fast transitions, dense responsive layouts, and zero-latency interactions.
            </p>
            <div className="about-cta-row">
              <Link to="/explore" className="cta-btn primary-cta">
                <IconCompass size={18} /> Explore Feed
              </Link>
              <Link to="/collections" className="cta-btn secondary-cta">
                Curated Collections
              </Link>
            </div>
          </div>
        </section>

        {/* Tech Stack Info */}
        <section className="tech-stack-section">
          <h3>Technology & Performance Architecture</h3>
          <div className="tech-badge-list">
            <span className="tech-badge">React 18</span>
            <span className="tech-badge">Vite 5</span>
            <span className="tech-badge">esbuild</span>
            <span className="tech-badge">React Router v6</span>
            <span className="tech-badge">Axios API Client</span>
            <span className="tech-badge">localStorage State</span>
            <span className="tech-badge">Vanilla CSS Tokens</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
