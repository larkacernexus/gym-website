'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Toggle frosted state after 20px
      setScrolled(currentY > 20);

      // Hide when scrolling down past 100px, show when scrolling up
      if (currentY > 100 && currentY > lastScrollY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      // Always show near the top
      if (currentY < 80) {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Also close mobile menu if the navbar hides
  useEffect(() => {
    if (hidden && isOpen) setIsOpen(false);
  }, [hidden, isOpen]);

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
        hidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md py-2 border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
          : 'bg-black/80 backdrop-blur-md py-3 border-white/5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center">
          {/* Logo + wordmark */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 shrink-0">
              <Image
                src="/logo/fitlife.jpg"
                alt="FitLife Fitness Gym"
                fill
                sizes="48px"
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg sm:text-xl md:text-2xl tracking-wide text-white group-hover:text-sky-400 transition-colors">
                FITLIFE
              </span>
              <span className="text-[0.5rem] sm:text-[0.55rem] tracking-[0.3em] sm:tracking-[0.35em] text-sky-400 font-semibold font-condensed mt-0.5 sm:mt-1">
                FITNESS GYM
              </span>
            </div>
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