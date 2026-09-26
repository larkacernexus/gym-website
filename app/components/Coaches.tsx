'use client';

import { useRef, useState } from 'react';

type Coach = {
  name: string;
  role: string;
  image: string;
};

const coaches: Coach[] = [
  {
    name: 'Marcus Steel',
    role: 'Strength & Conditioning',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&h=800&fit=crop&crop=faces',
  },
  {
    name: 'Sofia Reyes',
    role: 'Asian Mat Pilates',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&h=800&fit=crop&crop=faces',
  },
  {
    name: 'Jake Morrison',
    role: 'Boxing & Muaythai',
    image: 'https://images.unsplash.com/photo-1583468982228-19f19164aee2?w=600&h=800&fit=crop&crop=faces',
  },
  {
    name: 'Angela Lim',
    role: 'Zumba & Step Dance',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&h=800&fit=crop&crop=faces',
  },
  {
    name: 'Carlos Mendez',
    role: 'HIIT Functional Training',
    image: 'https://images.unsplash.com/photo-1583500178690-f7fd39d8a1a0?w=600&h=800&fit=crop&crop=faces',
  },
  {
    name: 'Nina Torres',
    role: 'Beginner Fundamentals',
    image: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=600&h=800&fit=crop&crop=faces',
  },
  {
    name: 'David Park',
    role: 'Cardio & Fat Loss',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=800&fit=crop&crop=faces',
  },
];

export default function Coaches() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: dir === 'right' ? amount : -amount,
      behavior: 'smooth',
    });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseUp = () => setIsDragging(false);
  const onMouseLeave = () => setIsDragging(false);

  return (
    <section className="bg-black text-white py-24 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Eyebrow */}
        <div className="luxe-label mb-8">Meet the Coaches</div>

        {/* Split heading + description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
          <h2 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.88] text-white">
            EXPERIENCE IN
            <br />
            <span className="text-gradient-blue">YOUR CORNER.</span>
          </h2>
          <div className="lg:pt-8 max-w-md">
            <p className="text-white/60 text-lg leading-relaxed">
              Personalized coaching built around your goals, your experience,
              and where you want to go.
            </p>
          </div>
        </div>

        {/* Arrows */}
        <div className="flex justify-end gap-3 mb-6">
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className="w-12 h-12 border border-white/30 text-white flex items-center justify-center text-lg hover:bg-blue-600 hover:border-blue-600 transition-all"
          >
            ←
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className="w-12 h-12 border border-white/30 text-white flex items-center justify-center text-lg hover:bg-blue-600 hover:border-blue-600 transition-all"
          >
            →
          </button>
        </div>

        {/* Scrollable + draggable coach cards */}
        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          className={`flex gap-4 overflow-x-auto pb-6 scrollbar-hide select-none scroll-auto ${
            isDragging
              ? 'cursor-grabbing'
              : 'cursor-grab snap-x snap-mandatory'
          }`}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            scrollBehavior: 'auto',
          }}
        >
          {coaches.map((coach, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-60 bg-neutral-950 group cursor-pointer border border-white/5 hover:border-blue-600/40 transition-colors"
            >
              <div className="aspect-[3/4] bg-neutral-900 relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={coach.image}
                  alt={coach.name}
                  loading="lazy"
                  draggable={false}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-500" />
              </div>

              <div className="bg-neutral-950 px-5 py-4 border-t-2 border-blue-600">
                <div className="font-display text-lg text-white leading-none mb-1.5">
                  {coach.name}
                </div>
                <div className="font-condensed text-[0.7rem] tracking-[0.15em] uppercase text-sky-400 font-semibold">
                  {coach.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator bar */}
        <div className="relative h-1 bg-white/10 mt-4 mb-12">
          <div className="absolute top-0 left-0 h-1 w-1/3 bg-blue-600" />
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="tel:09954630320"
            className="btn-primary"
          >
            Book Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}