'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

type Coach = {
  name: string;
  slug: string;
  role: string;
  image: string;
};

const coaches: Coach[] = [
  {
    name: 'Marcus Steel',
    slug: 'marcus-steel',
    role: 'Strength & Conditioning',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&h=800&fit=crop&crop=faces',
  },
  {
    name: 'Sofia Reyes',
    slug: 'sofia-reyes',
    role: 'Asian Mat Pilates',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&h=800&fit=crop&crop=faces',
  },
  {
    name: 'Jake Morrison',
    slug: 'jake-morrison',
    role: 'Boxing & Muaythai',
    image: 'https://images.unsplash.com/photo-1583468982228-19f19164aee2?w=600&h=800&fit=crop&crop=faces',
  },
  {
    name: 'Angela Lim',
    slug: 'angela-lim',
    role: 'Zumba & Step Dance',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&h=800&fit=crop&crop=faces',
  },
  {
    name: 'Carlos Mendez',
    slug: 'carlos-mendez',
    role: 'HIIT Functional Training',
    image: 'https://images.unsplash.com/photo-1583500178690-f7fd39d8a1a0?w=600&h=800&fit=crop&crop=faces',
  },
  {
    name: 'Nina Torres',
    slug: 'nina-torres',
    role: 'Beginner Fundamentals',
    image: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=600&h=800&fit=crop&crop=faces',
  },
  {
    name: 'David Park',
    slug: 'david-park',
    role: 'Cardio & Fat Loss',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=800&fit=crop&crop=faces',
  },
];

export default function Coaches() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  const [progress, setProgress] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(30);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
    setThumbWidth(max > 0 ? (el.clientWidth / el.scrollWidth) * 100 : 100);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;

    // Mark as dragged if mouse moved more than 5px
    if (Math.abs(x - startX) > 5) setHasDragged(true);

    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseUp = () => {
    setIsDragging(false);
    // Reset after a tick so the click event can be cancelled
    setTimeout(() => setHasDragged(false), 50);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
    setHasDragged(false);
  };

  // Block click if user dragged instead of clicked
  const handleClick = (e: React.MouseEvent) => {
    if (hasDragged) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

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

        {/* Scrollable + draggable coach cards */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
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
          {coaches.map((coach) => (
            <Link
              key={coach.slug}
              href={`/trainers/${coach.slug}`}
              onClick={handleClick}
              draggable={false}
              className="snap-start shrink-0 w-72 md:w-80 bg-neutral-950 group border border-white/5 hover:border-blue-600/40 transition-colors block"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-all duration-500" />

                {/* Hover hint */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <span className="font-condensed text-[0.65rem] tracking-[0.3em] uppercase text-white font-semibold">
                    View Profile
                  </span>
                  <span className="text-white text-lg">→</span>
                </div>
              </div>

              <div className="bg-neutral-950 px-6 py-5 border-t-2 border-blue-600">
                <div className="font-display text-xl text-white leading-none mb-2">
                  {coach.name}
                </div>
                <div className="font-condensed text-[0.7rem] tracking-[0.15em] uppercase text-sky-400 font-semibold">
                  {coach.role}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Live scroll indicator */}
        <div className="relative h-1 bg-white/10 mt-4 mb-12">
          <div
            className={`absolute top-0 left-0 h-1 bg-blue-600 ${
              isDragging ? '' : 'transition-all duration-150'
            }`}
            style={{
              width: `${thumbWidth}%`,
              transform: `translateX(${
                progress * (100 / thumbWidth - 1) * 100
              }%)`,
            }}
          />
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a href="tel:09954630320" className="btn-primary">
            Book Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}