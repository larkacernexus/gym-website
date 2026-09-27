import Link from 'next/link';

const facilityTags = [
  'Free Weights',
  'Boxing Ring',
  'Pilates Studio',
  'Cardio Zone',
  'Free WiFi',
  'Wide Parking',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600')",
        }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-black/70 lg:bg-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black lg:bg-gradient-to-r lg:from-black lg:via-black/60 lg:to-transparent" />

      {/* Content grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 max-w-[1400px] mx-auto w-full px-6 lg:px-16 xl:px-24">
        <div className="flex flex-col justify-center py-16 lg:py-32">
          <div className="flex items-center gap-4 mb-6 md:mb-8 fade-up">
            <span className="w-10 h-px bg-sky-400"></span>
            <span className="luxe-label">Est. 2022 · Valencia City</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.88] text-white fade-up delay-1">
            Do not stop.
            <br />
            Hanggat di ka pa <span className="text-gradient-blue">masarap.</span>
          </h1>

          <p className="max-w-lg text-white/70 text-base md:text-lg mt-6 md:mt-8 mb-8 md:mb-10 fade-up delay-2 leading-relaxed">
            A community built on strength, discipline, and motivation.
            We help you become the best version of yourself.
          </p>

          <div className="flex flex-wrap gap-4 fade-up delay-3">
            <a href="tel:09954630320" className="btn-primary">
              Join the Gym
            </a>
            <Link href="/classes" className="btn-outline">
              Explore Programs
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mt-10 md:mt-12 fade-up delay-4">
            {facilityTags.map((tag) => (
              <span key={tag} className="tag-chip">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="hidden lg:block" />
      </div>

      {/* Floating badge */}
      <div className="absolute bottom-12 right-12 text-right hidden lg:block z-10">
        <div className="font-condensed text-xs tracking-[0.35em] text-sky-400 mb-2">
          All In One Gym
        </div>
        <div className="font-display text-3xl text-white">
          FOR ALL YOUR GOALS
        </div>
      </div>

      {/* Top stat bar */}
      <div className="relative lg:absolute lg:top-24 lg:left-0 lg:right-0 z-10 border-y border-white/10 bg-black/50 backdrop-blur-sm mt-8 lg:mt-0">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-3 lg:py-4 flex flex-wrap gap-x-4 md:gap-x-10 gap-y-2 justify-center lg:justify-start">
          <span className="font-condensed text-[0.65rem] md:text-xs tracking-[0.25em] md:tracking-[0.3em] text-white/60 uppercase">
            16K+ Facebook Family
          </span>
          <span className="hidden md:inline text-sky-400">•</span>
          <span className="font-condensed text-[0.65rem] md:text-xs tracking-[0.25em] md:tracking-[0.3em] text-white/60 uppercase">
            Open Mon–Sat 6AM–10PM
          </span>
          <span className="hidden md:inline text-sky-400">•</span>
          <span className="font-condensed text-[0.65rem] md:text-xs tracking-[0.25em] md:tracking-[0.3em] text-white/60 uppercase">
            Quillo Building, Valencia City
          </span>
        </div>
      </div>
    </section>
  );
}