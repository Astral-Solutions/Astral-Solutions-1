import React from 'react';

const stats = [
  { label: 'Businesses digitised', value: '120+' },
  { label: 'Systems implemented', value: '200+' },
  { label: 'Entrepreneurs trained', value: '1,500+' },
];

const ImpactSection = () => (
  <section className="bg-white py-24 text-black">
    <div className="mx-auto w-[92vw] max-w-6xl">
      <h2 className="text-3xl font-bold md:text-4xl">Impact Snapshot</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <article key={stat.label} className="rounded-2xl border border-black p-6 text-center transition hover:-translate-y-1 hover:shadow-xl">
            <p className="text-4xl font-bold">{stat.value}</p>
            <p className="mt-2 text-sm font-medium">{stat.label}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;
