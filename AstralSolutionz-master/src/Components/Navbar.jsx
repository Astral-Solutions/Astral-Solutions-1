import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#training', label: 'Training' },
  { href: '#programmes', label: 'Programmes' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b border-white/25 bg-black/95 backdrop-blur ${isScrolled ? 'shadow-[0_10px_24px_rgba(0,0,0,0.45)]' : ''}`}>
      <div className="mx-auto flex min-h-[72px] w-[92vw] max-w-6xl items-center justify-between">
        <a href="#home" className="text-lg font-bold tracking-wide text-white">Astral Solutions</a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main Navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-white/80 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-md border border-white/60 p-2 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen && (
        <nav className="grid gap-3 border-t border-white/25 bg-black px-4 py-4 md:hidden" aria-label="Mobile Navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-white/85" onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
