import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  const navLinks = [
    { text: "Home", to: "home" },
    { text: "About", to: "about" },
    { text: "Vision Plan", to: "visionplan" },
    { text: "Services", to: "services" },
    { text: "Projects", to: "projects" },
    { text: "Contact", to: "contact" },
  ];

  return (
    <footer className="bg-[#cec2e1] text-gray-700 py-8 mt-12 border-t border-[#e4e4e4]">
      <div className="container mx-auto text-center space-y-4">
        <div className="flex flex-wrap justify-center gap-4">
          {navLinks.map((link, index) => (
            <ScrollLink
              key={index}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-[#7a5fa6] transition"
            >
              {link.text}
            </ScrollLink>
          ))}
        </div>

        <p className="text-sm">
          © {new Date().getFullYear()} Astral Solutions. Designed with ♥ by{" "}
          <a
            href="https://www.astralsolution.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7a5fa6] hover:underline"
          >
            Astral Solutions
          </a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
