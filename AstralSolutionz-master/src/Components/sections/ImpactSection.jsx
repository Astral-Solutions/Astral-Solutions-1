import React from 'react';

const stats = [
  { label: 'Businesses digitised', value: '120+' },
  { label: 'Systems implemented', value: '200+' },
  { label: 'Entrepreneurs trained', value: '1,500+' },
];

const ImpactSection = () => (
  <section className="section section-light impact-section fade-in">
    <div className="shell">
      <div className="section-heading">
        <p className="eyebrow">Impact</p>
        <h2>Impact Snapshot</h2>
        <p>
          A quick look at the kind of outcomes Astral Solutions is built to deliver.
        </p>
      </div>

      <div className="card-grid three-up">
        {stats.map((stat) => (
          <article key={stat.label} className="card stat-card">
            <p className="stat-value">{stat.value}</p>
            <p>{stat.label}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;