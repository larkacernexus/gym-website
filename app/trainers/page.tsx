import Coaches from '@/app/components/Coaches';

export default function Trainers() {
  const values = [
    { title: 'Form First', desc: 'Learn safe, effective technique from day one' },
    { title: 'Guidance', desc: 'Personalized tips tailored to your goals' },
    { title: 'Motivation', desc: 'Push past your limits with a coach beside you' },
    { title: 'No Judgement', desc: 'Every level welcome, every effort respected' },
  ];

  return (
    <div className="bg-black pt-32">
      {/* ============ HERO (centered — same as About) ============ */}
      <section className="py-24 px-6 text-center">
        <div className="luxe-label mb-6 fade-up">Everyday Coach · Available Daily</div>
        <h1 className="font-display text-6xl md:text-8xl mb-8 fade-up delay-1">
          OUR <span className="text-gradient-blue">COACHES</span>
        </h1>
        <p className="font-serif italic text-2xl text-blue-400 max-w-2xl mx-auto fade-up delay-2">
          "Train Hard, Train Smart."
        </p>
        <div className="divider-blue"></div>
      </section>

      {/* ============ COACH GRID (Light — America's Gym style) ============ */}
      <Coaches />

      {/* ============ PHILOSOPHY (Dark — same rhythm as About's Pillars) ============ */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="luxe-label mb-4">Our Approach</div>
            <h2 className="font-display text-5xl md:text-6xl mb-6">
              THE FOUR <span className="text-gradient-blue">PILLARS</span>
            </h2>
            <div className="divider-blue"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-blue-600/20">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-black p-10 hover:bg-blue-600/5 transition-colors"
              >
                <div className="font-display text-blue-500 text-5xl mb-6">
                  0{i + 1}
                </div>
                <h3 className="font-display text-2xl mb-3 tracking-wide">
                  {v.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EVERYDAY COACH (Dark — split layout) ============ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="luxe-label mb-4">Always Present</div>
            <h2 className="font-display text-5xl md:text-6xl mb-6">
              AN EVERYDAY <span className="text-gradient-blue">COACH</span>
            </h2>
            <div className="divider-blue"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="font-display text-7xl text-blue-500">ALWAYS</div>
                <div className="luxe-label mt-2">On The Floor</div>
              </div>
            </div>
            <div>
              <div className="luxe-label mb-4">Why It Matters</div>
              <h3 className="font-display text-4xl md:text-5xl mb-8">
                SOMEONE IN <span className="text-gradient-blue">YOUR CORNER</span>
              </h3>
              <div className="space-y-5 text-white/70 leading-relaxed">
                <p>
                  At FitLife, our coaches are on the floor every day of operation
                  to help you with form, programming, and motivation.
                </p>
                <p>
                  No matter your experience level — whether you are touching a
                  barbell for the first time or chasing a new PR — you will
                  always have someone beside you.
                </p>
                <p>
                  Free consultation on your first visit. No pressure, no
                  judgement. Just coaching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA (Blue — like About's bottom) ============ */}
      <section className="py-24 px-6 bg-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <div className="luxe-label !text-white/70 mb-4">Ready to Train?</div>
          <h2 className="font-display text-5xl md:text-7xl text-white mb-8">
            BOOK YOUR FREE CONSULTATION
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-10">
            Visit us at Q Square Building or call to schedule your first session
            with a FitLife coach.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:09954630320"
              className="inline-block bg-white text-blue-700 font-condensed font-bold tracking-[0.15em] uppercase text-sm px-10 py-5 hover:bg-neutral-100 transition-all"
            >
              Call 0995 463 0320
            </a>
            <a
              href="https://www.facebook.com/fitlifegymph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white font-condensed font-bold tracking-[0.15em] uppercase text-sm px-10 py-5 hover:bg-white hover:text-blue-700 transition-all"
            >
              Message on Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}