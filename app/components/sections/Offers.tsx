const offers = [
  { title: 'Weight Training', desc: 'Sculpt and define' },
  { title: 'Strength Training', desc: 'Build raw power' },
  { title: 'Boxing', desc: 'Strike and condition' },
  { title: 'Muaythai', desc: 'Clinch and kick' },
  { title: 'Step Dance', desc: 'Cardio in rhythm' },
  { title: 'Zumba', desc: 'Dance and burn' },
  { title: 'Asian Mat Pilates', desc: 'Core and posture' },
  { title: 'HIIT Functional', desc: 'Max effort, max burn' },
];

export default function Offers() {
  return (
    <section className="py-20 md:py-32 px-6 lg:px-16 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <div className="luxe-label mb-4">We Offer</div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-white leading-[0.9]">
              World-Class
              <br />
              Programs.
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-base">
            Ten distinct programs — built to meet every goal, every schedule,
            every fitness level.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/10">
          {offers.map((offer, i) => (
            <div
              key={i}
              className="group bg-black p-5 sm:p-6 md:p-8 hover:bg-blue-600/5 transition-colors duration-500 relative"
            >
              <div className="font-condensed text-[0.65rem] md:text-xs tracking-[0.25em] md:tracking-[0.3em] text-sky-400 mb-4 md:mb-6">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-display text-lg sm:text-xl md:text-2xl text-white mb-2 group-hover:text-sky-400 transition-colors leading-tight">
                {offer.title}
              </h3>
              <p className="font-condensed text-[0.65rem] md:text-sm tracking-wider text-white/40 uppercase">
                {offer.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}