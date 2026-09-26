'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll(); // check on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/classes', label: 'Programs' },
    { href: '/trainers', label: 'Coaches' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/pricing', label: 'Rates' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md py-3 border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
          : 'bg-black/80 backdrop-blur-md py-5 border-white/5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-2 group">
            <span className="font-display text-2xl md:text-3xl tracking-wide text-white group-hover:text-sky-400 transition-colors">
              FITLIFE
            </span>
            <span className="hidden sm:inline-block text-[0.6rem] tracking-[0.4em] text-sky-400 font-semibold font-condensed">
              FITNESS GYM
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-9">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:09954630320" className="btn-primary !py-3 !px-6 !text-xs">
              Join Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white text-2xl w-10 h-10 flex items-center justify-center border border-white/15 hover:border-sky-400 hover:text-sky-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-6 mt-4 space-y-1 border-t border-white/10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 font-condensed text-sm tracking-[0.25em] uppercase border-b border-white/5 ${
                  pathname === link.href ? 'text-sky-400' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:09954630320"
              className="block py-4 mt-2 font-condensed text-sm tracking-[0.25em] uppercase text-sky-400"
            >
              📞 0995 463 0320
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;