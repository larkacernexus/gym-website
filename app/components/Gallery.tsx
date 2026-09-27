'use client';

import { useState, useRef, useEffect } from 'react';

type Category =
  | 'All'
  | 'Weight Training'
  | 'Boxing'
  | 'Pilates'
  | 'Cardio'
  | 'Community';

type Photo = {
  src: string;
  alt: string;
  category: Exclude<Category, 'All'>;
};

const photos: Photo[] = [
  { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80', alt: 'Main gym floor', category: 'Weight Training' },
  { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80', alt: 'Barbell training', category: 'Weight Training' },
  { src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&q=80', alt: 'Dumbbell rack', category: 'Weight Training' },
  { src: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=900&q=80', alt: 'Kettlebell area', category: 'Weight Training' },
  { src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=80', alt: 'Personal training', category: 'Weight Training' },
  { src: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=900&q=80', alt: 'Boxing gloves', category: 'Boxing' },
  { src: 'https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?w=900&q=80', alt: 'Heavy bag work', category: 'Boxing' },
  { src: 'https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?w=900&q=80', alt: 'Boxing ring', category: 'Boxing' },
  { src: 'https://images.unsplash.com/photo-1615117972428-28de67cda58e?w=900&q=80', alt: 'Muaythai pads', category: 'Boxing' },
  { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&q=80', alt: 'Mat pilates studio', category: 'Pilates' },
  { src: 'https://images.unsplash.com/photo-1591258370814-01609b341790?w=900&q=80', alt: 'Pilates stretching', category: 'Pilates' },
  { src: 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?w=900&q=80', alt: 'Core work on mat', category: 'Pilates' },
  { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80', alt: 'Group class', category: 'Cardio' },
  { src: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=900&q=80', alt: 'Treadmill row', category: 'Cardio' },
  { src: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=900&q=80', alt: 'HIIT circuit', category: 'Cardio' },
  { src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=900&q=80', alt: 'Functional zone', category: 'Cardio' },
  { src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=900&q=80', alt: 'Member spotlight', category: 'Community' },
  { src: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=900&q=80', alt: 'Group energy', category: 'Community' },
  { src: 'https://images.unsplash.com/photo-1571388208497-71bedc66e932?w=900&q=80', alt: 'High fives', category: 'Community' },
  { src: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=900&q=80', alt: 'Team training', category: 'Community' },
];

const categories: Category[] = [
  'All',
  'Weight Training',
  'Boxing',
  'Pilates',
  'Cardio',
  'Community',
];

// How many photos to show initially on mobile, and per "Load More" tap
const MOBILE_INITIAL = 6;
const MOBILE_BATCH = 6;

export default function Gallery() {
  const [active, setActive] = useState<Category>('All');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [mobileCount, setMobileCount] = useState(MOBILE_INITIAL);
  const [isMobile, setIsMobile] = useState(false);

  const filtered =
    active === 'All' ? photos : photos.filter((p) => p.category === active);

  // Detect mobile (client-only)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Reset mobile count when category changes
  useEffect(() => {
    setMobileCount(MOBILE_INITIAL);
  }, [active]);

  // Number of photos to actually render
  const visibleCount = isMobile
    ? Math.min(mobileCount, filtered.length)
    : filtered.length;
  const visible = filtered.slice(0, visibleCount);
  const hasMoreMobile = isMobile && mobileCount < filtered.length;
  const remaining = filtered.length - visibleCount;

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowLeft')
        setLightbox((lightbox - 1 + filtered.length) % filtered.length);
      if (e.key === 'ArrowRight')
        setLightbox((lightbox + 1) % filtered.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, filtered.length]);

  return (
    <>
      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-8 md:mb-10">
        {categories.map((c) => {
          const count =
            c === 'All'
              ? photos.length
              : photos.filter((p) => p.category === c).length;
          return (
            <button
              key={c}
              onClick={() => {
                setActive(c);
                setLightbox(null);
              }}
              className={`font-condensed text-[0.65rem] md:text-[0.7rem] tracking-[0.2em] uppercase font-semibold px-3 md:px-4 py-2 border transition-all ${
                active === c
                  ? 'bg-blue-600 border-blue-600 text-white'
                  : 'border-white/20 text-white/60 hover:border-blue-600 hover:text-white'
              }`}
            >
              {c} <span className="text-white/40 ml-1">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {visible.map((photo, i) => (
          <button
            key={`${photo.src}-${i}`}
            onClick={() => setLightbox(i)}
            className={`group relative overflow-hidden bg-neutral-900 border border-white/5 hover:border-blue-600/40 transition-all ${
              i % 7 === 0 ? 'md:col-span-2 md:row-span-2 aspect-square' : 'aspect-[4/3]'
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 text-left">
              <div className="font-condensed text-[0.6rem] tracking-[0.25em] uppercase text-sky-400 font-semibold mb-0.5">
                {photo.category}
              </div>
              <div className="font-display text-sm text-white leading-tight">
                {photo.alt}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Load More button — MOBILE ONLY */}
      {hasMoreMobile && (
        <div className="md:hidden flex flex-col items-center mt-8 gap-3">
          <button
            onClick={() => setMobileCount((c) => c + MOBILE_BATCH)}
            className="btn-outline w-full max-w-xs text-center"
          >
            Load More ({remaining} left)
          </button>
          <a
            href="/gallery"
            className="font-condensed text-[0.65rem] tracking-[0.25em] uppercase text-white/40 hover:text-sky-400 transition-colors font-semibold"
          >
            Or see full gallery →
          </a>
        </div>
      )}

      {/* All shown — MOBILE ONLY */}
      {isMobile && !hasMoreMobile && filtered.length > MOBILE_INITIAL && (
        <div className="md:hidden text-center mt-8">
          <p className="font-condensed text-[0.6rem] tracking-[0.3em] uppercase text-white/40 font-semibold mb-3">
            That&apos;s all {filtered.length} photos
          </p>
          <a
            href="/gallery"
            className="font-condensed text-[0.65rem] tracking-[0.25em] uppercase text-sky-400 hover:text-white transition-colors font-semibold"
          >
            See full gallery →
          </a>
        </div>
      )}

      {/* Lightbox */}
      {lightbox !== null && (
        <Lightbox
          photos={filtered}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onChange={setLightbox}
        />
      )}
    </>
  );
}

/* ============================================================
   LIGHTBOX (unchanged)
   ============================================================ */
function Lightbox({
  photos,
  index,
  onClose,
  onChange,
}: {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onChange: (i: number) => void;
}) {
  const photo = photos[index];
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const indexRef = useRef(index);
  const lengthRef = useRef(photos.length);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    lengthRef.current = photos.length;
  }, [photos.length]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    setDragX(0);
    setIsDragging(false);
  }, [index]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    startXRef.current = e.touches[0].clientX;
    startYRef.current = e.touches[0].clientY;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - startXRef.current;
    const dy = e.touches[0].clientY - startYRef.current;
    if (Math.abs(dx) > Math.abs(dy)) setDragX(dx);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 50;
    const idx = indexRef.current;
    const len = lengthRef.current;

    if (dragX < -threshold) {
      onChange((idx + 1) % len);
    } else if (dragX > threshold) {
      onChange((idx - 1 + len) % len);
    }
    setDragX(0);
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-0 md:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full h-full md:max-w-5xl md:max-h-[85vh] md:aspect-[4/3] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        style={{ touchAction: 'pan-y' }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: `translateX(${dragX}px)`,
            transition: isDragging ? 'none' : 'transform 0.3s ease-out',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.src}
            alt={photo.alt}
            draggable={false}
            className="max-w-full max-h-full object-contain select-none pointer-events-none"
          />
        </div>

        <button
          onClick={() => onChange((index - 1 + photos.length) % photos.length)}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 border border-white/20 text-white text-xl hover:bg-blue-600 hover:border-blue-600 transition-all items-center justify-center z-10"
          aria-label="Previous"
        >
          ←
        </button>
        <button
          onClick={() => onChange((index + 1) % photos.length)}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 border border-white/20 text-white text-xl hover:bg-blue-600 hover:border-blue-600 transition-all items-center justify-center z-10"
          aria-label="Next"
        >
          →
        </button>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-black/60 border border-white/20 text-white text-lg hover:bg-blue-600 hover:border-blue-600 transition-all flex items-center justify-center z-10"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="md:hidden absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 pointer-events-none max-w-[60vw] overflow-hidden">
          {photos.length <= 12 ? (
            photos.map((_, i) => (
              <span
                key={i}
                className={`rounded-full transition-all duration-300 ${
                  i === index
                    ? 'w-6 h-1.5 bg-blue-500'
                    : 'w-1.5 h-1.5 bg-white/30'
                }`}
              />
            ))
          ) : (
            <span className="font-condensed text-[0.6rem] tracking-[0.2em] uppercase text-white/70 font-semibold">
              {index + 1} / {photos.length}
            </span>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 md:p-6 pointer-events-none">
          <div className="font-condensed text-[0.6rem] md:text-[0.65rem] tracking-[0.3em] uppercase text-sky-400 font-semibold mb-1">
            {photo.category}
          </div>
          <div className="font-display text-lg md:text-2xl text-white">
            {photo.alt}
          </div>

          <div className="md:hidden mt-3 flex items-center justify-center gap-2 font-condensed text-[0.55rem] tracking-[0.25em] uppercase text-white/50 font-semibold">
            <span>←</span>
            <span>Swipe to browse</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </div>
  );
}