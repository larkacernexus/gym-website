const stats = [
  { num: '16K+', label: 'Facebook Family' },
  { num: '4K+', label: 'Community Members' },
  { num: '10', label: 'Programs' },
  { num: '2022', label: 'Established' },
];

export default function Stats() {
  return (
    <section className="py-20 md:py-32 px-6 lg:px-16 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="luxe-label mb-4">By the numbers</div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-white leading-[0.9]">
            One Gym.
            <br />
            One Standard.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-16">
          {stats.map((s, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="font-display text-5xl sm:text-6xl md:text-8xl text-white leading-none">
                {s.num}
              </div>
              <div className="luxe-label mt-3 md:mt-4 text-[0.65rem] md:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}