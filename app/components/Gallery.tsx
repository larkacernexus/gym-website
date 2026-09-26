'use client';

import { useState } from 'react';

const gymPhotos = [
  {
    id: 1,
    title: 'Main Floor',
    subtitle: 'Weight Training',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80',
  },
  {
    id: 2,
    title: 'Strength Area',
    subtitle: 'Barbells & Racks',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80',
  },
  {
    id: 3,
    title: 'Pilates Studio',
    subtitle: 'Asian Mat Pilates',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&q=80',
  },
  {
    id: 4,
    title: 'Cardio Zone',
    subtitle: 'Treadmills & Bikes',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&q=80',
  },
  {
    id: 5,
    title: 'Boxing Ring',
    subtitle: 'Boxing & Muaythai',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=900&q=80',
  },
  {
    id: 6,
    title: 'Community',
    subtitle: 'Our FitLife Family',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80',
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
        {gymPhotos.map((photo) => (
          <button
            key={photo.id}
            onClick={() => setSelected(photo.id)}
            className="group relative aspect-[4/5] overflow-hidden bg-neutral-900 border border-white/5 hover:border-sky-400/40 transition-all duration-500"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.image}
              alt={photo.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Dark overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95 transition-all duration-500" />

            {/* Text */}
            <div className="absolute inset-0 flex flex-col items-end justify-end text-white p-5 z-10 text-left">
              <div className="font-display text-lg md:text-xl leading-tight">
                {photo.title}
              </div>
              <div className="font-condensed text-[0.6rem] tracking-[0.3em] uppercase text-sky-400 mt-1 font-semibold">
                {photo.subtitle}
              </div>
            </div>
          </button>
        ))}
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-3xl w-full aspect-square overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={gymPhotos.find((p) => p.id === selected)?.image}
              alt={gymPhotos.find((p) => p.id === selected)?.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-white text-2xl hover:text-sky-300 z-20"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="absolute bottom-0 left-0 right-0 p-10 text-white z-10">
              <h3 className="font-display text-4xl md:text-5xl mb-2">
                {gymPhotos.find((p) => p.id === selected)?.title}
              </h3>
              <p className="font-condensed text-sky-400 tracking-[0.3em] uppercase text-xs font-semibold">
                {gymPhotos.find((p) => p.id === selected)?.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}