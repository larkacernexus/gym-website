import Gallery from '@/app/components/Gallery';

export default function About() {
  const values = [
    { title: 'For Everybody', desc: 'An opportunity for every body type and fitness level' },
    { title: 'Consistency', desc: 'Show up daily — that is where real change happens' },
    { title: 'Health First', desc: 'Be healthy for life, not just for a season' },
    { title: 'No Excuses', desc: 'Be stronger than your excuses, every single day' },
  ];

  const stats = [
    { value: '500+', label: 'Active Members' },
    { value: '10', label: 'Programs Offered' },
    { value: '6AM–10PM', label: 'Open Daily' },
    { value: '2022', label: 'Established' },
  ];

  const facilities = [
    { label: 'Weight Training Area', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80' },
    { label: 'Boxing / Muaythai Zone', image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80' },
    { label: 'Pilates Studio', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80' },
    { label: 'Cardio Zone', image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80' },
    { label: 'Free WiFi Lounge', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80' },
    { label: 'Wide Parking', image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&q=80' },
  ];

  const timeline = [
    { year: '2022', title: 'FitLife Opens', desc: 'Founded at Quillo Building with one mission — an opportunity for everybody.' },
    { year: '2023', title: 'Programs Expand', desc: 'Added Boxing, Muaythai, Zumba, Step Dance, and Asian Mat Pilates.' },
    { year: '2024', title: 'Community Grows', desc: 'Hundreds of Valencia locals now call FitLife their second home.' },
    { year: 'Today', title: 'Everyday Coach', desc: 'A coach is on the floor every day of operation. No judgment, just coaching.' },
  ];

  return (
    <div className="bg-black pt-24 md:pt-32">
      {/* ============ HERO ============ */}
      <section className="py-12 md:py-24 px-5 sm:px-6 text-center">
        <div className="luxe-label mb-4 md:mb-6 fade-up">Est. 2022 · Valencia City</div>
        <h1 className="font-display text-4xl sm:text-6xl md:text-8xl mb-4 md:mb-8 fade-up delay-1">
          ABOUT <span className="text-gradient-blue">FITLIFE</span>
        </h1>
        <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-blue-400 max-w-2xl mx-auto fade-up delay-2">
          &ldquo;Be Consistent, Be Healthy.&rdquo;
        </p>
        <div className="divider-blue"></div>
      </section>

      {/* ============ STATS BAR ============ */}
      <section className="py-8 md:py-12 px-5 sm:px-6 border-y border-blue-600/20 bg-neutral-950">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="font-display text-3xl sm:text-4xl md:text-5xl text-gradient-blue mb-1 md:mb-2">
                {s.value}
              </div>
              <div className="font-condensed text-[0.6rem] md:text-[0.7rem] tracking-[0.3em] uppercase text-white/50 font-semibold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ STORY ============ */}
      <section className="py-16 md:py-24 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8">
              <div className="font-display text-5xl md:text-7xl text-blue-500">2022</div>
              <div className="luxe-label mt-2">Established</div>
            </div>
          </div>
          <div>
            <div className="luxe-label mb-3 md:mb-4">Our Story</div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-8">
              A GYM BUILT ON <span className="text-gradient-blue">DISCIPLINE</span>
            </h2>
            <div className="space-y-4 md:space-y-5 text-white/70 leading-relaxed text-sm md:text-base">
              <p>
                FitLife Fitness Gym was founded in 2022 with one mission — to give{' '}
                <span className="text-blue-400 font-semibold">
                  everybody an opportunity
                </span>{' '}
                to get fit. Located at Quillo Building in Valencia City, we&apos;ve
                grown into a home for hundreds of locals.
              </p>
              <p>
                From weight training to boxing, muaythai, step dance, zumba, and
                Asian Mat Pilates — our all-in-one gym is built to meet you where
                you are.
              </p>
              <p>
                With complimentary WiFi and a coach available every day of
                operation, FitLife is more than a gym. It&apos;s a community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MISSION PULL-QUOTE ============ */}
      <section className="py-16 md:py-24 px-5 sm:px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="luxe-label mb-4 md:mb-6">Our Mission</div>
          <p className="font-display text-2xl sm:text-3xl md:text-5xl leading-tight text-white">
            &ldquo;AN OPPORTUNITY FOR{' '}
            <span className="text-gradient-blue">EVERYBODY</span> TO GET FIT.&rdquo;
          </p>
          <div className="divider-blue"></div>
        </div>
      </section>

      {/* ============ PILLARS ============ */}
      <section className="py-16 md:py-24 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <div className="luxe-label mb-3 md:mb-4">Our Philosophy</div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl mb-4 md:mb-6">
              THE FOUR <span className="text-gradient-blue">PILLARS</span>
            </h2>
            <div className="divider-blue"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-blue-600/20">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-black p-6 sm:p-8 md:p-10 hover:bg-blue-600/5 transition-colors"
              >
                <div className="font-display text-blue-500 text-4xl md:text-5xl mb-4 md:mb-6">
                  0{i + 1}
                </div>
                <h3 className="font-display text-xl md:text-2xl mb-2 md:mb-3 tracking-wide">
                  {v.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TIMELINE ============ */}
      <section className="py-16 md:py-24 px-5 sm:px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <div className="luxe-label mb-3 md:mb-4">The Journey</div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl mb-4 md:mb-6">
              HOW WE <span className="text-gradient-blue">GREW</span>
            </h2>
            <div className="divider-blue"></div>
          </div>

          <div className="relative border-l-2 border-blue-600/30 pl-6 md:pl-8 space-y-8 md:space-y-12">
            {timeline.map((t, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[33px] md:-left-[41px] top-1 w-4 h-4 md:w-5 md:h-5 bg-blue-600 border-4 border-black" />
                <div className="font-display text-2xl md:text-3xl text-blue-500 mb-1">
                  {t.year}
                </div>
                <h3 className="font-display text-lg md:text-xl tracking-wide text-white mb-2">
                  {t.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FACILITY ============ */}
      <section className="py-16 md:py-24 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <div className="luxe-label mb-3 md:mb-4">The Space</div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl mb-4 md:mb-6">
              WHAT&apos;S <span className="text-gradient-blue">INSIDE</span>
            </h2>
            <div className="divider-blue"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-12 md:mb-20">
            {facilities.map((f, i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] overflow-hidden border border-blue-600/20 hover:border-blue-500 transition-all"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={f.image}
                  alt={f.label}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                  <span className="font-condensed text-[0.6rem] md:text-[0.7rem] tracking-[0.2em] md:tracking-[0.25em] uppercase font-semibold text-white">
                    {f.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <Gallery />
        </div>
      </section>

      {/* ============ BOTTOM CTA ============ */}
      <section className="py-16 md:py-24 px-5 sm:px-6 bg-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <div className="luxe-label !text-white/70 mb-3 md:mb-4">
            Come See It Yourself
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-7xl text-white mb-6 md:mb-8">
            VISIT FITLIFE TODAY
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 md:mb-10 text-sm md:text-base">
            Walk in for a tour, meet a coach, try a session. No commitment, no
            pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-stretch sm:items-center">
            <a
              href="tel:09954630320"
              className="inline-block bg-white text-blue-700 font-condensed font-bold tracking-[0.15em] uppercase text-sm px-8 md:px-10 py-4 md:py-5 hover:bg-neutral-100 transition-all text-center"
            >
              Call 0995 463 0320
            </a>
            <a
              href="https://www.facebook.com/fitlifegymph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white font-condensed font-bold tracking-[0.15em] uppercase text-sm px-8 md:px-10 py-4 md:py-5 hover:bg-white hover:text-blue-700 transition-all text-center"
            >
              Message on Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}