import React from 'react';

const Footer = () => (
  <footer className="border-t border-white/25 bg-black py-8">
    <div className="mx-auto flex w-[92vw] max-w-6xl flex-col items-center justify-between gap-3 text-center text-sm text-white/80 md:flex-row md:text-left">
      <p>© {new Date().getFullYear()} Astral Solutions. Digital systems for measurable business growth.</p>
      <a href="#contact" className="text-white/80 transition hover:text-white">Talk to our team</a>
    </div>
  </footer>
);

export default Footer;
