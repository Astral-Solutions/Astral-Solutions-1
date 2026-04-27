import React from 'react';

const CtaSection = () => (
  <section className="bg-black py-24 text-white">
    <div className="mx-auto w-[92vw] max-w-6xl text-center">
      <h2 className="text-3xl font-bold md:text-5xl">Ready to Digitise Your Business?</h2>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <a href="#contact" className="rounded-full border border-white bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white">Book Consultation</a>
        <a href="#contact" className="rounded-full border border-white px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black">Contact Us</a>
      </div>
    </div>
  </section>
);

export default CtaSection;
