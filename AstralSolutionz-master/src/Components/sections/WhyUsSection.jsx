import React from 'react';

const points = [
  'We build systems, not just websites',
  'We focus on practical implementation',
  'We combine tools + training',
  'We deliver measurable business impact',
];

const WhyUsSection = () => (
  <section className="section section-dark fade-in">
    <div className="shell">
      <h2>Why Astral Solutions</h2>
      <div className="bullet-list">
        {points.map((point) => (
          <p key={point}>• {point}</p>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
