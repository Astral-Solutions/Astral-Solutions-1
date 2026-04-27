import React from 'react';
import ImagePlaceholder from '../ImagePlaceholder';

const HeroSection = () => (
  <section id="home" className="hero section section-dark fade-in">
    <div className="shell hero-grid">
      <div className="hero-content">
        <p className="eyebrow">Digital Transformation for SMEs & Programmes</p>

        <h1>
          Building Digital Systems That Help Businesses Grow and Operate Smarter
        </h1>

        <p className="lead">
          We help SMEs and organisations implement websites, CRM systems, and digital tools supported by practical training.
        </p>

        <div className="cta-row">
          <a href="#contact" className="btn btn-light">Book a Consultation</a>
          <a href="#services" className="btn btn-ghost">View Services</a>
        </div>
      </div>

      <div className="hero-visual">
        <ImagePlaceholder
          title="Hero Business Technology Image"
          subtitle="Team, dashboard, SME owner, or digital workspace"
        />

        <div className="hero-panel">
          <h2>What we deliver</h2>
          <ul>
            <li>Website and CRM implementation</li>
            <li>Operational digitisation roadmaps</li>
            <li>Training with measurable adoption outcomes</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
