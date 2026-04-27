import React from 'react';

const points = [
  'We build systems, not just websites',
  'We focus on practical implementation',
  'We combine tools + training',
  'We deliver measurable business impact',
];

const WhyUsSection = () => (
  <section className="bg-black py-24 text-white">
    <div className="mx-auto w-[92vw] max-w-6xl">
      <h2 className="text-3xl font-bold md:text-4xl">Why Astral Solutions</h2>
      <div className="mt-6 grid gap-3">
        {points.map((point) => (
          <p key={point} className="rounded-xl border border-white/35 bg-black px-4 py-3">• {point}</p>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
