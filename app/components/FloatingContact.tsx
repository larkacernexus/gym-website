'use client';

import { useState, useEffect } from 'react';

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  // Show after scrolling a bit so it doesn't cover the hero on load
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-[90] transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      {/* Expanded options */}
      <div
        className={`flex flex-col gap-3 mb-3 transition-all duration-300 origin-bottom ${
          open
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-90 pointer-events-none'
        }`}
      >
        {/* Call */}
        <a
          href="tel:09954630320"
          className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white pl-4 pr-5 py-3 shadow-lg shadow-blue-600/30 transition-all"
          style={{
            clipPath:
              'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
          }}
        >
          <span className="text-lg">📞</span>
          <span className="font-condensed text-xs tracking-[0.2em] uppercase font-bold whitespace-nowrap">
            Call Now
          </span>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/fitlifegymph"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-neutral-900 hover:bg-neutral-800 border border-white/15 text-white pl-4 pr-5 py-3 shadow-lg transition-all"
          style={{
            clipPath:
              'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
          }}
        >
          <span className="text-lg">💬</span>
          <span className="font-condensed text-xs tracking-[0.2em] uppercase font-bold whitespace-nowrap">
            Message Us
          </span>
        </a>

        {/* Directions */}
        <a
          href="https://maps.app.goo.gl/9gwtP4b6sLFVr6sG8"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-neutral-900 hover:bg-neutral-800 border border-white/15 text-white pl-4 pr-5 py-3 shadow-lg transition-all"
          style={{
            clipPath:
              'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
          }}
        >
          <span className="text-lg">📍</span>
          <span className="font-condensed text-xs tracking-[0.2em] uppercase font-bold whitespace-nowrap">
            Directions
          </span>
        </a>
      </div>

      {/* Main toggle button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close contact menu' : 'Open contact menu'}
        className={`ml-auto flex items-center justify-center w-14 h-14 rounded-full shadow-2xl shadow-blue-600/40 transition-all duration-300 ${
          open
            ? 'bg-white text-blue-700 rotate-45'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        <span className="text-2xl font-light leading-none">
          {open ? '+' : '💬'}
        </span>
      </button>
    </div>
  );
}