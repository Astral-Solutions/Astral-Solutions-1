import React from 'react';

const services = [
  {
    title: 'Website Development',
    points: ['Responsive business websites', 'Lead generation focused', 'Modern UI'],
  },
  {
    title: 'CRM & Business Systems',
    points: ['Lead tracking', 'Customer management', 'Sales tracking systems'],
  },
  {
    title: 'Branding & Activations',
    points: ['Marketing materials', 'Event branding', 'Business identity solutions'],
  },
];

const ServicesSection = () => (
  <section id="services" className="section section-light fade-in">
    <div className="shell">
      <h2>Services That Support Growth</h2>
      <div className="card-grid three-up">
        {services.map((service) => (
          <article key={service.title} className="card">
            <h3>{service.title}</h3>
            <ul>
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a href="#contact" className="text-link">Request implementation plan</a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
