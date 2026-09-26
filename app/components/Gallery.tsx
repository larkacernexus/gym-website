'use client';

import { useState } from 'react';

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
  // ===== Weight Training =====
  {
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80',
    alt: 'Main gym floor',
    category: 'Weight Training',
  },
  {
    src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80',
    alt: 'Barbell training',
    category: 'Weight Training',
  },
  {
    src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&q=80',
    alt: 'Dumbbell rack',
    category: 'Weight Training',
  },
  {
    src: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=900&q=80',
    alt: 'Kettlebell area',
    category: 'Weight Training',
  },
  {
    src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=80',
    alt: 'Personal training',
    category: 'Weight Training',
  },

  // ===== Boxing =====
  {
    src: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=900&q=80',
    alt: 'Boxing gloves',
    category: 'Boxing',
  },
  {
    src: 'https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?w=900&q=80',
    alt: 'Heavy bag work',
    category: 'Boxing',
  },
  {
    src: 'https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?w=900&q=80',
    alt: 'Boxing ring',
    category: 'Boxing',
  },
  {
    src: 'https://images.unsplash.com/photo-1615117972428-28de67cda58e?w=900&q=80',
    alt: 'Muaythai pads',
    category: 'Boxing',
  },

  // ===== Pilates =====
  {
    src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&q=80',
    alt: 'Mat pilates studio',
    category: 'Pilates',
  },
  {
    src: 'https://images.unsplash.com/photo-1591258370814-01609b341790?w=900&q=80',
    alt: 'Pilates stretching',
    category: 'Pilates',
  },
  {
    src: 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?w=900&q=80',
    alt: 'Core work on mat',
    category: 'Pilates',
  },

  // ===== Cardio =====
  {
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80',
    alt: 'Group class',
    category: 'Cardio',
  },
  {
    src: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=900&q=80',
    alt: 'Treadmill row',
    category: 'Cardio',
  },
  {
    src: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=900&q=80',
    alt: 'HIIT circuit',
    category: 'Cardio',
  },
  {
    src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=900&q=80',
    alt: 'Functional zone',
    category: 'Cardio',
  },

  // ===== Community =====
  {
    src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=900&q=80',
    alt: 'Member spotlight',
    category: 'Community',
  },
  {
    src: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=900&q=80',
    alt: 'Group energy',
    category: 'Community',
  },
  {
    src: 'https://images.unsplash.com/photo-1571388208497-71bedc66e932?w=900&q=80',
    alt: 'High fives',
    category: 'Community',
  },
  {
    src: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=900&q=80',
    alt: 'Team training',
    category: 'Community',
  },
];

const categories: Category[] = [
  'All',
  'Weight Training',
  'Boxing',
  'Pilates',
  'Cardio',
  'Community',
];

export default function Gallery() {
  const [active, setActive] = useState<Category>('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    active === 'All' ? photos : photos.filter((p) => p.category === active);

  return (
    <>
      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
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
              className={`font-condensed text-[0.7rem] tracking-[0.2em] uppercase font-semibold px-4 py-2 border transition-all ${
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

      {/* Masonry-style grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map((photo, i) => (
          <button
            key={`${photo.src}-${i}`}
            onClick={() => setLightbox(i)}
            className={`group relative overflow-hidden bg-neutral-900 border border-white/5 hover:border-blue-600/40 transition-all ${
              // Make some tiles bigger for visual interest
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

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[85vh] aspect-[4/3] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="w-full h-full object-contain"
            />

            {/* Prev / Next */}
            <button
              onClick={() =>
                setLightbox((lightbox - 1 + filtered.length) % filtered.length)
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 border border-white/20 text-white text-xl hover:bg-blue-600 hover:border-blue-600 transition-all"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={() => setLightbox((lightbox + 1) % filtered.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 border border-white/20 text-white text-xl hover:bg-blue-600 hover:border-blue-600 transition-all"
              aria-label="Next"
            >
              →
            </button>

            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/60 border border-white/20 text-white text-lg hover:bg-blue-600 hover:border-blue-600 transition-all"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6">
              <div className="font-condensed text-[0.65rem] tracking-[0.3em] uppercase text-sky-400 font-semibold mb-1">
                {filtered[lightbox].category}
              </div>
              <div className="font-display text-2xl text-white">
                {filtered[lightbox].alt}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}