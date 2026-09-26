export default function Classes() {
  const programs = [
    { num: '01', name: 'Weight Training', desc: 'Free weights, barbells, dumbbells — for beginners and experienced lifters.', level: 'All Levels' },
    { num: '02', name: 'Strength Training', desc: 'Focused sessions to build raw power. Squats, deadlifts, presses with coaching.', level: 'All Levels' },
    { num: '03', name: 'Boxing Training', desc: 'Learn striking techniques while getting an amazing cardio workout.', level: 'Beginner+' },
    { num: '04', name: 'Muaythai Kickboxing', desc: 'Traditional strikes, clinch work, and conditioning drills.', level: 'Intermediate' },
    { num: '05', name: 'Step Dance', desc: 'High-energy step aerobics in rhythm. Fun, energetic, effective.', level: 'All Levels' },
    { num: '06', name: 'Zumba', desc: 'Dance your way to fitness with Latin-inspired rhythms.', level: 'All Levels' },
    { num: '07', name: 'Asian Mat Pilates', desc: 'Core-strengthening movements on a mat. Posture and flexibility.', level: 'Beginner Friendly' },
    { num: '08', name: 'HIIT Functional Training', desc: 'High-intensity intervals for maximum calorie burn.', level: 'Intermediate' },
    { num: '09', name: 'Cardio & Fat Loss', desc: 'Structured programs designed to help you burn fat and build endurance.', level: 'All Levels' },
    { num: '10', name: 'Beginner-Friendly Coaching', desc: 'Personal guidance from day one. No experience needed.', level: 'Beginner' },
  ];

  return (
    <div className="bg-black pt-32">
      <section className="py-24 px-6 text-center">
        <div className="luxe-label mb-6 fade-up">All In One Gym</div>
        <h1 className="font-display text-6xl md:text-8xl mb-8 fade-up delay-1">
          OUR <span className="text-gradient-blue">PROGRAMS</span>
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto text-lg fade-up delay-2">
          From strength to sweat, from beginners to advanced — everything under
          one roof.
        </p>
        <div className="divider-blue"></div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-blue-600/20">
            {programs.map((p, i) => (
              <div
                key={i}
                className="group bg-black p-8 hover:bg-blue-600/5 transition-colors duration-500 flex gap-6"
              >
                <div className="font-display text-blue-500 text-3xl shrink-0">
                  {p.num}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl mb-3 tracking-wide group-hover:text-blue-400 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {p.desc}
                  </p>
                  <span className="text-[0.6rem] tracking-[0.3em] uppercase text-blue-400 font-semibold">
                    {p.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="luxe-label mb-4">When To Visit</div>
            <h2 className="font-display text-5xl md:text-6xl mb-6">
              GYM <span className="text-gradient-blue">HOURS</span>
            </h2>
            <div className="divider-blue"></div>
          </div>
          <div className="divide-y divide-blue-600/20">
            {[
              { day: 'Monday', hours: '6:00 AM – 10:00 PM' },
              { day: 'Tuesday', hours: '6:00 AM – 10:00 PM' },
              { day: 'Wednesday', hours: '6:00 AM – 10:00 PM' },
              { day: 'Thursday', hours: '6:00 AM – 10:00 PM' },
              { day: 'Friday', hours: '6:00 AM – 10:00 PM' },
              { day: 'Saturday', hours: '6:00 AM – 10:00 PM' },
              { day: 'Sunday', hours: 'Closed', closed: true },
            ].map((row, i) => (
              <div key={i} className="flex justify-between py-5">
                <span className="font-display text-xl tracking-wide">{row.day}</span>
                <span
                  className={
                    row.closed
                      ? 'text-red-400 font-semibold tracking-wide'
                      : 'text-white/60 tracking-wide'
                  }
                >
                  {row.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}