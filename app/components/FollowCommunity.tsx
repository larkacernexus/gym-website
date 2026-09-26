'use client';

export default function FollowCommunity() {
  // Recent-post thumbnails — replace with real FitLife FB post images
  const desktopPreviews = [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80',
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&q=80',
  ];

  return (
    <section className="bg-neutral-950 py-20 md:py-32 px-6 lg:px-16 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] -translate-y-1/2 pointer-events-none hidden lg:block" />

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start relative z-10">
        {/* LEFT — Copy */}
        <div className="fade-up lg:sticky lg:top-32">
          <div className="font-condensed text-xs tracking-[0.4em] uppercase text-sky-400 mb-4 md:mb-6 font-bold">
            @fitlifegymph
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.88] text-white mb-6 md:mb-8">
            FOLLOW THE
            <br />
            <span className="text-gradient-blue">COMMUNITY.</span>
          </h2>

          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-lg mb-8 md:mb-10">
            Training clips, coach moments, new equipment, and the energy of
            FitLife — straight from the floor.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
            <a
              href="https://www.facebook.com/fitlifegymph"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center"
            >
              Visit Our Facebook
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-center"
            >
              Follow on Instagram
            </a>
          </div>

          {/* Stat row */}
          <div className="flex flex-wrap gap-6 md:gap-8 mt-10 md:mt-12 pt-6 md:pt-8 border-t border-white/10">
            <div>
              <div className="font-display text-2xl sm:text-3xl md:text-4xl text-white">
                16K+
              </div>
              <div className="font-condensed text-[0.6rem] md:text-[0.65rem] tracking-[0.3em] uppercase text-sky-400 font-semibold mt-1">
                Followers
              </div>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <div className="font-display text-2xl sm:text-3xl md:text-4xl text-white">
                Daily
              </div>
              <div className="font-condensed text-[0.6rem] md:text-[0.65rem] tracking-[0.3em] uppercase text-sky-400 font-semibold mt-1">
                Updates
              </div>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <div className="font-display text-2xl sm:text-3xl md:text-4xl text-white">
                Real
              </div>
              <div className="font-condensed text-[0.6rem] md:text-[0.65rem] tracking-[0.3em] uppercase text-sky-400 font-semibold mt-1">
                Members
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Dark branded card (same on mobile + desktop) */}
        <div className="w-full fade-up delay-2 flex justify-center lg:justify-end">
          <div className="w-full max-w-[440px] bg-black border border-white/10 shadow-[0_25px_80px_-20px_rgba(37,99,235,0.25)]">
            {/* Header */}
            <div className="p-5 border-b border-white/10 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-blue-900 p-[3px] shrink-0">
                <div className="w-full h-full rounded-full bg-neutral-900 flex items-center justify-center">
                  <span className="font-display text-sm text-white">FL</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-display text-base text-white leading-none mb-1 truncate">
                  FitLife Fitness Gym
                </div>
                <div className="font-condensed text-[0.6rem] tracking-[0.25em] uppercase text-sky-400 font-semibold truncate">
                  facebook.com/fitlifegymph
                </div>
              </div>
            </div>

            {/* Big stat */}
            <div className="p-6 border-b border-white/10">
              <div className="font-display text-6xl text-white leading-none mb-2">
                16K+
              </div>
              <div className="font-condensed text-[0.65rem] tracking-[0.3em] uppercase text-sky-400 font-semibold">
                Facebook Family
              </div>
            </div>

            {/* Recent posts preview */}
            <div className="grid grid-cols-3 gap-px bg-white/10">
              {desktopPreviews.map((src, i) => (
                <a
                  key={i}
                  href="https://www.facebook.com/fitlifegymph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-square overflow-hidden group"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`FitLife post ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />
                </a>
              ))}
            </div>

            {/* Footer */}
            <a
              href="https://www.facebook.com/fitlifegymph"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 bg-neutral-950 border-t border-white/10 hover:bg-blue-600/10 transition-colors text-center"
            >
              <span className="font-condensed text-xs tracking-[0.25em] uppercase text-sky-400 font-bold">
                See All Posts on Facebook →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}