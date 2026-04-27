import React from 'react';
import ImagePlaceholder from '../ImagePlaceholder';

const ProgrammesSection = () => (
  <section id="programmes" className="section section-light fade-in">
    <div className="shell two-col">
      <div>
        <p className="eyebrow">Transformation Programmes</p>
        <h2>Structured Digital Transformation Programmes</h2>

        <p className="section-intro">
          We support organisations and development programmes with practical implementation, training, and measurable outcomes.
        </p>

        <ul className="feature-list">
          <li>SME Digital Migration Programmes</li>
          <li>Website + CRM implementation</li>
          <li>Training + support</li>
          <li>Monitoring & evaluation</li>
        </ul>
      </div>

      <aside className="card highlight-card">
        <ImagePlaceholder
          title="Programme Partnership Image"
          subtitle="SME support, business workshop, or enterprise development"
        />

        <h3>Target Sectors</h3>
        <ul>
          <li>Government</li>
          <li>SMEs</li>
          <li>Enterprise development programmes</li>
        </ul>

        <a href="#contact" className="btn btn-dark">
          Discuss Programme Partnership
        </a>
      </aside>
    </div>
  </section>
);

export default ProgrammesSection;
