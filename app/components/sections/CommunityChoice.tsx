export default function CommunityChoice() {
  const stats = [
    { num: '16K+', label: 'Facebook Family' },
    { num: '4K+', label: 'Members' },
    { num: '10', label: 'Programs' },
    { num: '5.0', label: 'Rating' },
  ];

  return (
    <section className="relative py-24 md:py-40 px-6 lg:px-16 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=80')",
        }}
      />
      {/* Blue gradient overlay — keeps brand color, dims image */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700/95 via-blue-800/90 to-blue-900/95" />
      {/* Radial glow behind text */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.1),transparent_60%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto text-center relative z-10">
        <div className="luxe-label !text-white/80 mb-6">Community Choice</div>
        <h2 className="font-display text-4xl sm:text-6xl md:text-8xl text-white leading-[0.9] mb-6 md:mb-8">
          Valencia&apos;s
          <br />
          Home Gym.
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto text-base md:text-lg mb-12 md:mb-16">
          From first-time lifters to competitive athletes — every body finds
          their place at FitLife.
        </p>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto pt-10 md:pt-12 border-t border-white/20">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-none mb-2">
                {s.num}
              </div>
              <div className="font-condensed text-[0.65rem] md:text-xs tracking-[0.3em] uppercase text-white/70 font-semibold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}