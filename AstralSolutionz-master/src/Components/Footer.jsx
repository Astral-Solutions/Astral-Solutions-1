import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="shell footer-inner">
      <p>© {new Date().getFullYear()} Astral Solutions. Digital transformation systems for growth-focused organisations.</p>
      <a href="#contact" className="footer-link">Talk to our team</a>
    </div>
  </footer>
);

export default Footer;
