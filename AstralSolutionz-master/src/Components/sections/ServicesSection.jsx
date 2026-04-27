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
  <section id="services" className="bg-white py-24 text-black">
    <div className="mx-auto w-[92vw] max-w-6xl">
      <h2 className="text-3xl font-bold md:text-4xl">Services That Support Growth</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-black bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6">
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a href="#contact" className="mt-4 inline-block text-sm font-semibold underline underline-offset-4">Request implementation plan</a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
