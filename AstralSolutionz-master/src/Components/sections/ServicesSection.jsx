import React from 'react';

const services = [
  {
    icon: '🌐',
    title: 'Website Development',
    points: ['Responsive business websites', 'Lead generation focused', 'Modern UI'],
  },
  {
    icon: '📊',
    title: 'CRM & Business Systems',
    points: ['Lead tracking', 'Customer management', 'Sales tracking systems'],
  },
  {
    icon: '🎯',
    title: 'Branding & Activations',
    points: ['Marketing materials', 'Event branding', 'Business identity solutions'],
  },
];

const ServicesSection = () => (
  <section id="services" className="section section-light fade-in">
    <div className="shell">
      <div className="section-heading">
        <p className="eyebrow">Our Services</p>
        <h2>Services That Support Growth</h2>
        <p>
          Practical digital solutions designed to help businesses look professional, manage customers, and grow sustainably.
        </p>
      </div>

      <div className="card-grid three-up">
        {services.map((service) => (
          <article key={service.title} className="card service-card">
            <div className="card-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <ul>
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a href="#contact" className="text-link">Request implementation plan →</a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;