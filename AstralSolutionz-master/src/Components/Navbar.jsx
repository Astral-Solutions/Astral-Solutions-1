import React, { useState, useEffect } from 'react';
import { 
  FaHome, 
  FaInfoCircle, 
  FaBullseye, 
  FaSeedling,
  FaTrophy, 
  FaPhone
} from 'react-icons/fa';
import { Menu, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll('section');
      let current = 'home';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: 'home', icon: <FaHome className="w-5 h-5" />, text: 'Home' },
    { to: 'about', icon: <FaInfoCircle className="w-5 h-5" />, text: 'About' },
    { to: 'visionplan', icon: <FaSeedling className="w-5 h-5" />, text: 'Vision Plan' },
    { to: 'services', icon: <FaBullseye className="w-5 h-5" />, text: 'Services' },
    { to: 'projects', icon: <FaTrophy className="w-5 h-5" />, text: 'Projects' },
    { to: 'contact', icon: <FaPhone className="w-5 h-5" />, text: 'Contact' },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden lg:flex items-center justify-between px-6 py-4 fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#cec2e1]/95 shadow-md backdrop-blur-sm' : 'bg-[#cec2e1]/80'
        }`}
      >
        <h1 className="text-2xl font-bold text-[#7a5fa6]">Astral Solutions</h1>

        <div className="flex items-center space-x-6 text-gray-700">
          {navLinks.map((link, index) => (
            <ScrollLink
              key={index}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className={`flex items-center gap-2 cursor-pointer transition-all duration-200 hover:text-[#7a5fa6] ${
                activeSection === link.to ? 'text-[#7a5fa6] font-semibold' : ''
              }`}
            >
              {link.icon}
              {link.text}
            </ScrollLink>
          ))}
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 right-4 z-50 p-2 rounded-md bg-[#cec2e1] text-[#7a5fa6] shadow-md"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}

        <nav
          className={`fixed top-0 right-0 h-full w-64 bg-[#e4e4e4] text-[#7a5fa6] z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col mt-20 space-y-6 px-6">
            {navLinks.map((link, index) => (
              <ScrollLink
                key={index}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 cursor-pointer transition-all duration-200 hover:text-[#6a4f94] ${
                  activeSection === link.to ? 'text-[#6a4f94] font-semibold' : ''
                }`}
              >
                {link.icon}
                {link.text}
              </ScrollLink>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
