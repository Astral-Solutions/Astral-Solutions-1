import React from 'react';

const ProgrammesSection = () => (
  <section id="programmes" className="bg-white py-24 text-black">
    <div className="mx-auto grid w-[92vw] max-w-6xl gap-6 md:grid-cols-2 md:items-start">
      <div>
        <h2 className="text-3xl font-bold md:text-4xl">Structured Digital Transformation Programmes</h2>
        <ul className="mt-5 list-disc space-y-2 pl-5 leading-7">
          <li>SME Digital Migration Programmes</li>
          <li>Website + CRM implementation</li>
          <li>Training + support</li>
          <li>Monitoring & evaluation</li>
        </ul>
      </div>
      <aside className="rounded-2xl border border-white bg-black p-6 text-white">
        <h3 className="text-2xl font-semibold">Target Sectors</h3>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-white/90">
          <li>Government</li>
          <li>SMEs</li>
          <li>Enterprise development programmes</li>
        </ul>
        <a href="#contact" className="mt-6 inline-block rounded-full border border-white bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white">Discuss Programme Partnership</a>
      </aside>
    </div>
  </section>
);

export default ProgrammesSection;
