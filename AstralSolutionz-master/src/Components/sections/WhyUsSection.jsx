import React from 'react';

const points = [
  'We build systems, not just websites',
  'We focus on practical implementation',
  'We combine tools + training',
  'We deliver measurable business impact',
];

const WhyUsSection = () => (
  <section className="section section-dark why-section fade-in">
    <div className="shell">
      <div className="section-heading">
        <p className="eyebrow">Why Choose Us</p>
        <h2>Why Astral Solutions</h2>
      </div>

      <div className="why-grid">
        {points.map((point, index) => (
          <article key={point} className="why-card">
            <span>{`0${index + 1}`}</span>
            <p>{point}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;