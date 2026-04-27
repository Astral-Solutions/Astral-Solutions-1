import React from 'react';

const HeroSection = () => (
  <section id="home" className="bg-black py-24 text-white">
    <div className="mx-auto grid w-[92vw] max-w-6xl gap-8 md:grid-cols-2 md:items-center">
      <div>
        <p className="text-xs uppercase tracking-[0.16em] text-white/80">Digital Transformation for SMEs & Programmes</p>
        <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">Building Digital Systems That Help Businesses Grow and Operate Smarter</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/90">
          We help SMEs and organisations implement websites, CRM systems, and digital tools supported by practical training.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#contact" className="rounded-full border border-white bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white">Book a Consultation</a>
          <a href="#services" className="rounded-full border border-white px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black">View Services</a>
        </div>
      </div>
      <div className="rounded-2xl border border-white/60 bg-black p-6">
        <h2 className="text-2xl font-semibold">What we deliver</h2>
        <ul className="mt-4 space-y-3 text-white/90">
          <li>Website and CRM implementation</li>
          <li>Operational digitisation roadmaps</li>
          <li>Training with measurable adoption outcomes</li>
        </ul>
      </div>
    </div>
  </section>
);

export default HeroSection;
